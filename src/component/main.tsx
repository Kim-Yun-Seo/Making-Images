import {
    Button, Stack
} from '@chakra-ui/react'

import {OneImage} from "./props/oneImage.tsx";
import images from "../resource/images.json"
import StackGrid from "react-stack-grid";
import {useState} from "react";

export const Main = () => {
    const imageList = []
    const categoryL = []
    images.forEach((image: any, idx: number) => {
        if (!categoryL.includes(image.category)) {
            categoryL.push(image.category)
        }
    })
    const makeImageList = () => {
        for (let i = 0; i < 20; i++) {
            imageList.push(
                {
                    "id": 1234,
                    "name": "loppy",
                    "desc": "loopy pic",
                    "category": categoryL[getRandomIntInclusive(0, categoryL.length-1)],
                    "tags": ["loopy","japan"],
                    "madeBy": "kim",
                    "createdAt": "2024-12-12",
                    "imgUrl": `https://source.unsplash.com/random/?${i}`,
                    "prompt": "loopy, red hat, arm",
                    "negativePrompt": "bad quality",
                    "inputImage": "",
                    "controlNetModel": "1.5controlnet",
                    "controlNetType": "lineart",
                    "LoRA": "loopy LoRA",
                    "checkpointModel": "sdxl"
                }
            )
        }
    }
    makeImageList()

    function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min; //최댓값도 포함, 최솟값도 포함
    }

    let [tempImgList, setTempImgList] = useState(imageList) // = images

    //tempImgList를 필터를 씌워서 만들어주고
    //그걸 가지고 보여주기만 한다.

    const categoryBtn = categoryL.map((category) => <Button colorScheme='teal' onClick={() => {
        tempImgList = imageList.filter((image: any) => image.category === category)
    }}>{category}</Button>)

    let [imageCard, setImageCard] = useState(
        tempImgList.map((image: any) => (<div><OneImage name={image.name} url={image.imgUrl} id={image.id} desc={image.desc} date={image.createdAt} tags={image.tags}/></div>))
    )

    return (
        <div>
            <Stack spacing={4} direction='row' align='center' style={{margin: "10px 10px 30px 100px"}}>
                <Button colorScheme='teal' onClick={
                    () => {
                        setImageCard(imageList.map((image: any) => (<div><OneImage name={image.name} url={image.imgUrl} id={image.id} desc={image.desc} date={image.createdAt} tags={image.tags}/></div>)))
                    }
                }>
                    All
                </Button>
                {categoryBtn}
            </Stack>
            <StackGrid columnWidth={300}>
                {imageCard}
            </StackGrid>
        </div>
    )
}