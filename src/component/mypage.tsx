import {
    Button,
    Card,
    CardBody, FormControl, FormLabel,
    Heading,
    Image, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, SimpleGrid,
    Stack,
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    Tabs, Text, useDisclosure
} from "@chakra-ui/react";
import {useLocation} from "react-router-dom";
import userInfo from "../resource/userInfo.json";
import {HeadBar} from "./headBar.tsx";
import {Images} from "./props/images";
import {CreatedImageList} from "./props/createdImageList.tsx";
import {ImageModal} from "./props/modal.tsx";
import {useRef} from "react";


export const Mypage = () => {
    console.log("mypage",)
    const location = useLocation();
    const getUserId = { ...location.state };
    const nowUserId = getUserId.id
    const createImageList = userInfo[nowUserId]["createdImageList"].map((image, idx) => (<CreatedImageList name={image.name} url={image.url} desc={image.desc}/>))
    const { isOpen, onOpen, onClose } = useDisclosure()
    const initialRef = useRef(null)
    const finalRef = useRef(null)
    console.log(nowUserId, typeof(nowUserId) ,"mypage", userInfo[nowUserId])
    return (
        <div>
            <HeadBar/>
            <Tabs variant='enclosed'>
                <TabList>
                    <Tab>내가 생성한 이미지</Tab>
                    <Tab>내가 추가한 모델</Tab>
                    <Tab>관심 이미지</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(300px, 1fr))'>
                            {createImageList}
                        </SimpleGrid>
                        <Button onClick={onOpen}>Open Modal</Button>

                        <Modal
                            initialFocusRef={initialRef}
                            finalFocusRef={finalRef}
                            isOpen={isOpen}
                            onClose={onClose}
                        >
                            <ModalOverlay />
                            <ModalContent>
                                <ModalHeader>Create your account</ModalHeader>
                                <ModalCloseButton />
                                <ModalBody pb={6}>
                                    <FormControl>
                                        <FormLabel>First name</FormLabel>
                                        <Input ref={initialRef} placeholder='First name' />
                                    </FormControl>

                                    <FormControl mt={4}>
                                        <FormLabel>Last name</FormLabel>
                                        <Input placeholder='Last name' />
                                    </FormControl>
                                </ModalBody>

                                <ModalFooter>
                                    <Button colorScheme='blue' mr={3}>
                                        Save
                                    </Button>
                                    <Button onClick={onClose}>Cancel</Button>
                                </ModalFooter>
                            </ModalContent>
                        </Modal>
                    </TabPanel>
                    <TabPanel>
                        <p>two!</p>
                        <ImageModal/>
                    </TabPanel>
                    <TabPanel>
                        <p>one!</p>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </div>
    )
}