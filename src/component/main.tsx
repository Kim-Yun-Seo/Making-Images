import {
    Button, Stack
} from '@chakra-ui/react'

import {OneImage} from "./props/oneImage.tsx";
import images from "../resource/images.json"
import StackGrid from "react-stack-grid";
import {useState} from "react";
import {useLocation} from "react-router-dom";

export const Main = () => {
    const imageList = []
    let [tempImgList, setTempImgList] = useState(images) // = images
    const categoryL = []
    images.forEach((image: any, idx: number) => {
        if (!categoryL.includes(image.category)) {
            categoryL.push(image.category)
        }
    })
    console.log(categoryL, "------categoryL")

    const location = useLocation();
    const newImage = { ...location.state };
    console.log(newImage, "------newImage")



    const categoryBtn = categoryL.map((category, index) => <Button key={index} colorScheme='teal' onClick={() => {
        tempImgList = images.filter((image: any) => image.category === category)
        setImageCard(tempImgList.map((image: any, index: number) => (<div key={index}><OneImage name={image.name} imgUrl={image.imgUrl} id={image.id} desc={image.desc} createdAt={image.createdAt} tags={image.tags}/></div>)))
        console.log(tempImgList, "------tempImgList")
    }}>{category}</Button>)

    let [imageCard, setImageCard] = useState(
        tempImgList.map((image: any, index: number) => (<div key={index}><OneImage name={image.name} imgUrl={image.imgUrl} id={image.id} desc={image.desc} createdAt={image.createdAt} tags={image.tags}/></div>))
    )

    return (
        <div>
            <Stack spacing={4} direction='row' align='center' style={{margin: "10px 10px 30px 100px"}}>
                <Button colorScheme='teal' onClick={
                    () => {
                        setImageCard(images.map((image: any, index: number) => (<div key={index}><OneImage name={image.name} imgUrl={image.imgUrl} id={image.id} desc={image.desc} createdAt={image.createdAt} tags={image.tags}/></div>)))
                    }
                }>
                    All
                </Button>
                {categoryBtn}
            </Stack>
            <StackGrid columnWidth={300} style={{zIndex: "0"}}>
                {imageCard}
            </StackGrid>
        </div>
    )
}