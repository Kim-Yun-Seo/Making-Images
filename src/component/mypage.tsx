import {
    Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box,
    Image, SimpleGrid,
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    Tabs
} from "@chakra-ui/react";
import {useLocation} from "react-router-dom";
import userInfo from "../resource/userInfo.json";
import {CreatedImageList} from "./props/createdImageList.tsx";

export const Mypage = () => {
    const location = useLocation();
    const getUserId = { ...location.state };
    const nowUserId = getUserId.id
    const createImageList = userInfo[nowUserId]["createdImageList"].map((image, idx) => (<CreatedImageList name={image.name} url={image.url} desc={image.desc}/>))
    console.log(nowUserId, typeof(nowUserId) ,"mypage", userInfo[nowUserId])
    return (
        <div>
            <Tabs variant='enclosed'>
                <TabList>
                    <Tab>내가 생성한 이미지</Tab>
                    <Tab>내가 추가한 모델</Tab>
                    <Tab>관심 이미지</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <Accordion allowMultiple>
                            <AccordionItem>
                                <h2>
                                    <AccordionButton>
                                        <Box as="span" flex='1' textAlign='left'>
                                            2024-03-08
                                            <Image
                                                src="https://m.pinkponk.co.kr/web/product/big/202303/4907286fb87ff5a20465a9ef0d894dd2.jpg"
                                                alt='Green double couch with wooden legs'
                                                borderRadius='lg'
                                                style={{width: "80px", height: "80px"}}
                                            />
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>
                                    <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(300px, 1fr))'>
                                        {createImageList}
                                    </SimpleGrid>
                                </AccordionPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <h2>
                                    <AccordionButton>
                                        <Box as="span" flex='1' textAlign='left'>
                                            2024-02-12
                                            <Image
                                                src="https://i.namu.wiki/i/YGO-rG8BkU3oADCTBGEdlem0VQc6RWzRbcQ612sSJMSEnmalz3oERpdtKDW6cifuiGvR4VVjrAq7Vitbcmq7Yg.webp"
                                                alt='Green double couch with wooden legs'
                                                borderRadius='lg'
                                                style={{width: "80px", height: "80px", objectFit: "cover"}}
                                            />
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>
                                    <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(300px, 1fr))'>
                                        {createImageList}
                                    </SimpleGrid>
                                </AccordionPanel>
                            </AccordionItem>
                        </Accordion>
                    </TabPanel>
                    <TabPanel>
                        X
                    </TabPanel>
                    <TabPanel>
                        <p>one!</p>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </div>
    )
}