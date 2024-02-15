import {Tab, TabList, TabPanel, TabPanels, Tabs} from "@chakra-ui/react";

export const Mypage = () => {
    return (
        <div>
            <Tabs variant='enclosed'>
                <TabList>
                    <Tab>One</Tab>
                    <Tab>Two</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <p>one!</p>
                    </TabPanel>
                    <TabPanel>
                        <p>two!</p>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </div>
    )
}