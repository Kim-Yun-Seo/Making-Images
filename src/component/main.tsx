import {
    Button, Card,
    CardBody, CardFooter, Divider, Heading, Image,
    Input, SimpleGrid, Stack, Tab, TabList, TabPanel, TabPanels, Tabs, Text
} from '@chakra-ui/react'

import {Images} from "./props/images.tsx";
import {Tags} from "./props/tags.tsx";
import {Category} from "./props/category.tsx";
import images from "../resource/images.json"

export const Main = () => {
    const category:string[] = ["all", "character", "background"]

    const imageList = images.map((image, idx) => (<Images name={image.name} url={image.imgUrl} id={image.id} desc={image.desc} date={image.createdAt} tags={image.tags}/>))
    const categoryList = category.map((name, idx) => (<Category name={name}/>))
    return (
        <div>
            <div>
                LOGO
            </div>
            <Input placeholder='put in here'/>

            <div style={{cursor: "pointer"}}>
                {categoryList}
            </div>
            <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(300px, 1fr))'>
                {imageList}
            </SimpleGrid>
        </div>
    )
}