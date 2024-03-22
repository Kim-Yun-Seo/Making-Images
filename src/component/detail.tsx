import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Button,
    Image,
    Heading,
    Text,
    Stack, CardBody, Divider, Editable, EditablePreview, EditableTextarea, Card, SimpleGrid
} from '@chakra-ui/react'

import {useRef, useState} from 'react'
import {useLocation, useNavigate} from 'react-router-dom';
import images from "../resource/images.json";
import {Tags} from "../component/props/tags.tsx";
import {DetailInfo} from "../component/props/detailInfo.tsx";
import style from "../assets/detail.module.css"

export const Detail = () => {
    const navigate = useNavigate()
    const location = useLocation();
    const idInfo = { ...location.state };
    const {isOpen, onOpen, onClose} = useDisclosure()
    const btnRef = useRef()
    // let [nowImageObj, setNowImageObj] = useState({})
    let nowImageObj = {}
    let newCreateImageObj = {...nowImageObj}
    const imageInfoKeyList = Object.keys(nowImageObj).map((info, index) => (<DetailInfo key={index} info={info}/>))

    images.forEach((image: object, idx: number) => {
        image["id"] === idInfo.id ? nowImageObj = image : console.log("no")
    })

    return (
        <>
            <div className={style.body}>
                <div className={style.imageBox}>
                    <div>
                        <Image
                            className={style.image}
                            src={nowImageObj.imgUrl}
                            alt='Green double couch with wooden legs'
                            borderRadius='lg'
                        />
                        <Stack mt='6' spacing='3'>
                            <Heading size='md'>
                                {nowImageObj.name}
                            </Heading>
                            <Text>
                                {nowImageObj.createdAt}
                                <br/>
                                {nowImageObj.desc}
                                <br/>
                                {nowImageObj["tags"].map((name: string[], index: number) => (<Tags key={index} name={name} style={{marginLeft: "10px"}}/>))}
                                <br/>
                            </Text>
                        </Stack>

                        <Button ref={btnRef} colorScheme='teal' onClick={onOpen} style={{marginLeft: "20px"}}>
                            생성하기
                        </Button>
                        <Button ref={btnRef} colorScheme='teal' onClick={onOpen} style={{marginLeft: "10px"}}>
                            Download
                        </Button>
                    </div>
                </div>

                <div className={style.detailBox}>
                    <SimpleGrid spacing={2} templateColumns='repeat(2, minmax(100px, 1fr))'>
                        {Object.keys(nowImageObj).map((info, index) => (<DetailInfo key={index} info={info} detail={nowImageObj[`${info}`]}/>))}
                    </SimpleGrid>
                </div>
            </div>
            <Drawer
                isOpen={isOpen}
                placement='left'
                onClose={onClose}
                finalFocusRef={btnRef}
                size={"lg"}
            >
                <DrawerOverlay/>
                <DrawerContent>
                    <DrawerCloseButton/>
                    <DrawerHeader>Parameters</DrawerHeader>
                    <DrawerBody>
                        <SimpleGrid spacing={2} templateColumns='repeat(2, minmax(100px, 1fr))'>
                            {Object.keys(nowImageObj).filter((info: any) => info !== "imgUrl").map((info, index) => (
                                <Card key={index} maxW='sm' style={{margin: "10px"}}>
                                    <CardBody style={{overflow: "hidden"}}>
                                        <Text style={{fontWeight: "bold"}}>{info}</Text>
                                        <Divider/>
                                        <Editable defaultValue={nowImageObj[`${info}`]}>
                                            <EditablePreview />
                                            <EditableTextarea onChange={(e) => {
                                                newCreateImageObj = {...nowImageObj}
                                                newCreateImageObj[`${info}`] = e.target.value
                                            }}/>

                                        </Editable>
                                    </CardBody>
                                </Card>
                            ))}
                        </SimpleGrid>
                    </DrawerBody>
                    <DrawerFooter>
                        <Button variant='outline' mr={3} onClick={onClose}>
                            취소
                        </Button>
                        <Button colorScheme='blue' ref={btnRef} onClick={ () => {
                            navigate( `/`, { state: { bool: true, newImage: newCreateImageObj} } )
                            }

                        }>생성</Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>

        </>
    );
}