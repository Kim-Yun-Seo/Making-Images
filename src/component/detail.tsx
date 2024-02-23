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
    Divider,
    Heading,
    Text,
    Stack, Editable, EditablePreview, EditableInput,
} from '@chakra-ui/react'

import {useRef, useState} from 'react'
import { useLocation } from 'react-router-dom';
import images from "../resource/images.json";
import {Tags} from "../component/props/tags.tsx";
import {DetailInfo} from "../component/props/detailInfo.tsx";
import {EditableBox} from "../component/props/editableBox.tsx";

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
            <div style={{display: "flex"}}>
                <div style={{margin: "30px", textAlign: "center"}}>
                    <div style={{marginRight: "auto", marginLeft: "auto"}}>
                        <Image
                            style={{width: '500px', height: '500px', objectFit: 'contain'}}
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
                            Open
                        </Button>
                    </div>

                </div>
                <div style={{marginLeft: "auto"}}>
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

                    <DrawerBody style={{margin: "10px"}}>

                        {Object.keys(nowImageObj).map(info => (<EditableBox info={info} detail={nowImageObj[`${info}`]}/>))}
                    </DrawerBody>
                    <DrawerFooter>
                        <Button variant='outline' mr={3} onClick={onClose}>
                            Cancel
                        </Button>
                        <Button colorScheme='blue' ref={btnRef} onClick={onOpen}>Save</Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    );
}