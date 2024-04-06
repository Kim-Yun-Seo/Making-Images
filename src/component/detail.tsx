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
    Text,
    CardBody, Divider, Editable, EditablePreview, EditableTextarea, Card, SimpleGrid
} from '@chakra-ui/react'

import {useRef, useState} from 'react'
import {useLocation, useNavigate} from 'react-router-dom';
import images from "../resource/images.json";
import {Tags} from "../component/props/tags.tsx";
import {DetailInfo} from "../component/props/detailInfo.tsx";
import style from "../assets/detail.module.css"
import {ModifyDetail} from "./modifyDetail.tsx";

export const Detail = () => {
    const navigate = useNavigate()
    const location = useLocation();
    const idInfo = { ...location.state };
    const {isOpen, onOpen, onClose} = useDisclosure()
    const btnRef = useRef()
    // let [nowImageObj, setNowImageObj] = useState({})
    let nowImageObj = {}
    let newCreateImageObj = {...nowImageObj}

    images.forEach((image: object, idx: number) => {
        image["id"] === idInfo.id ? nowImageObj = image : console.log("no")
    })
    let [aa, setAa] = useState("")

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
                    <DrawerBody onChange={(e) => {
                        newCreateImageObj = {...nowImageObj}
                        console.log(e.target.value)
                        aa = e.target.value
                        }}>
                        <SimpleGrid spacing={2} templateColumns='repeat(2, minmax(100px, 1fr))'>
                            {Object.keys(nowImageObj).map((info, index) => (<ModifyDetail key={index} info={info} detail={nowImageObj[`${info}`]}/>))}
                            {/*<ModifyDetail info={nowImageObj} />*/}
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