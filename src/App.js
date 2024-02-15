import './App.css';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'

function App() {
    console.log("test");
    return (
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
    );
}

export default App;
