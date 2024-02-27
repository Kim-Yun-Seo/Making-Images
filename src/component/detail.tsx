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
    Stack
} from '@chakra-ui/react'

import {useRef, useState} from 'react'
import { useLocation } from 'react-router-dom';
import images from "../resource/images.json";
import {Tags} from "../component/props/tags.tsx";
import {DetailInfo} from "../component/props/detailInfo.tsx";
import {EditableBox} from "../component/props/editableBox.tsx";
import {HeadBar} from "./headBar.tsx";
import style from "../assets/detail.module.css"

export const Detail = () => {
    const location = useLocation();
    const idInfo = { ...location.state };

    const {isOpen, onOpen, onClose} = useDisclosure()
    const btnRef = useRef()

    const saveInfo = (info: string, detail: string) => {
        console.log(info, detail)
    }
    console.log(idInfo.id, "---")

    let [nowImageObj, setNowImageObj] = useState({})
    // const tagList = nowImageObj["tags"].map(name => (<Tags name={name}/>))
    console.log("-------", Object.keys(nowImageObj))
    const imageInfoKeyList = Object.keys(nowImageObj).map(info => (<DetailInfo info={info}/>))

    console.log(idInfo.id, "---")
    console.log( idInfo.hasOwnProperty('id') )

    images.forEach((image: object, idx: number) => {
        image["id"] === idInfo.id ? nowImageObj = image : console.log("no")
    })

    return (
        <>
            <HeadBar/>
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
                            {imageInfoKeyList}
                            <Heading size='md'>
                                {nowImageObj.name}
                            </Heading>
                            <Text>
                                {nowImageObj.createdAt}
                                <br/>
                                {nowImageObj.desc}
                                <br/>
                                {nowImageObj["tags"].map(name => (<Tags name={name}/>))}
                                <br/>
                            </Text>
                        </Stack>

                        <Button ref={btnRef} colorScheme='teal' onClick={onOpen}>
                            생성하기
                        </Button>
                        <Button ref={btnRef} colorScheme='teal' onClick={onOpen}>
                            Download
                        </Button>
                    </div>
                </div>

                <div className={style.detailBox}>
                    {Object.keys(nowImageObj).map(info => (<DetailInfo info={info} detail={nowImageObj[`${info}`]}/>))}
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
                        {Object.keys(nowImageObj).map(info => (<EditableBox info={info} detail={nowImageObj[`${info}`]}/>))}
                    </DrawerBody>
                    <DrawerFooter>
                        <Button variant='outline' mr={3} onClick={onClose}>
                            취소
                        </Button>
                        <Button colorScheme='blue' ref={btnRef} onClick={onOpen}>생성</Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    );
}