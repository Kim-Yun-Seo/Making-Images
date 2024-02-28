import {
    SimpleGrid, Tab, TabList, TabPanel, TabPanels, Tabs
} from '@chakra-ui/react'

import {Images} from "./props/images.tsx";
import images from "../resource/images.json"
import {HeadBar} from "./headBar.tsx";

export const Main = () => {
    const category:string[] = ["all", "character", "background"]
    const categoryList = category.map((name) => <Tab>{name}</Tab>);
    const all = images.map((image: any) => (<Images name={image.name} url={image.imgUrl} id={image.id} desc={image.desc} date={image.createdAt} tags={image.tags}/>))
    const character = images.filter((image: any) => image.category === "character").map((image, idx) => (<Images name={image.name} url={image.imgUrl} id={image.id} desc={image.desc} date={image.createdAt} tags={image.tags}/>))
    const background = images.filter((image: any) => image.category === "background").map((image, idx) => (<Images name={image.name} url={image.imgUrl} id={image.id} desc={image.desc} date={image.createdAt} tags={image.tags}/>))

    return (
        <div>
            <HeadBar/>
            <Tabs variant='soft-rounded' colorScheme='green'>
                <TabList>
                    {categoryList}
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(300px, 1fr))'>
                            {all}
                        </SimpleGrid>
                    </TabPanel>
                    <TabPanel>
                        <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(300px, 1fr))'>
                            {character}
                        </SimpleGrid>
                    </TabPanel>
                    <TabPanel>
                        <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(300px, 1fr))'>
                            {background}
                        </SimpleGrid>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </div>
    )
}