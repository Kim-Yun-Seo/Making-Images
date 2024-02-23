import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton, useDisclosure,
    Button, Input, Image, Divider, Heading, Text, Stack
} from '@chakra-ui/react'

import {useRef, useState} from 'react'
import { useLocation } from 'react-router-dom';
import images from "../resource/images.json";
import {Tags} from "../component/props/tags.tsx";

export const Detail = () => {
    const location = useLocation();
    const idInfo = { ...location.state };
    const {isOpen, onOpen, onClose} = useDisclosure()
    const btnRef = useRef()

    console.log(idInfo.id, "---")

    let nowImageObj = useState({})
    // const tagList = nowImageObj.tags.map(name => (<Tags name={name}/>))

    console.log(idInfo.id, "---")
    console.log( idInfo.hasOwnProperty('id') )

    images.forEach((image: object, idx: number) => {
        image["id"] === idInfo.id ? nowImageObj = image : console.log("no")
    })
    return (
        <>
            <Image
                // style={{width: '500px', height: '500px'}}
                src={nowImageObj.imgUrl}
                alt='Green double couch with wooden legs'
                borderRadius='lg'
            />
            <Divider/>
            <Stack mt='6' spacing='3'>
                <Heading size='md'>
                    {nowImageObj.name}
                </Heading>
                <Text>
                    {nowImageObj.date}
                    <br/>
                    {nowImageObj.desc}
                    <br/>
                </Text>
            </Stack>

            <Button ref={btnRef} colorScheme='teal' onClick={onOpen}>
                Open
            </Button>
            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay/>
                <DrawerContent>
                    <DrawerCloseButton/>
                    <DrawerHeader>Create your account</DrawerHeader>

                    <DrawerBody>
                        <Input placeholder='Type here...'/>
                    </DrawerBody>

                    <DrawerFooter>
                        <Button variant='outline' mr={3} onClick={onClose}>
                            Cancel
                        </Button>
                        <Button colorScheme='blue'>Save</Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    );
}