import {
    Button, Stack
} from '@chakra-ui/react'

import {OneImage} from "./props/oneImage.tsx";
import images from "../resource/images.json"
import StackGrid from "react-stack-grid";
import {useCallback, useState} from "react";
import {ScrollRestoration, useLocation} from "react-router-dom";

export const Main = () => {
    const imageList = []
    let [tempImgList, setTempImgList] = useState(images) // = images
    let [tempImgListLength, setTempImgListLength] = useState(images.length) // = images.length
    const categoryL = []
    images.forEach((image: any, idx: number) => {
        if (!categoryL.includes(image.category)) {
            categoryL.push(image.category)
        }
    })

    const location = useLocation();
    const newImage = { ...location.state };
    console.log(newImage, "------newImage")

    const categoryBtn = categoryL.map((category, index) => <Button key={index} colorScheme='teal' onClick={() => {
        tempImgList = images.filter((image: any) => image.category === category)
        setImageCard(tempImgList.map((image: any, index: number) => (<div key={index}><OneImage name={image.name} imgUrl={image.imgUrl} id={image.id} desc={image.desc} createdAt={image.createdAt} tags={image.tags}/></div>)))
        setTempImgListLength(tempImgList.length)
    }}>{category}</Button>)

    let [imageCard, setImageCard] = useState(
        tempImgList.map((image: any, index: number) => (<div key={index}><OneImage name={image.name} imgUrl={image.imgUrl} id={image.id} desc={image.desc} createdAt={image.createdAt} tags={image.tags}/></div>))
    )
    // let getKey = useCallback(
    //     (location: Location, matches: ReturnType<typeof useMatches>) => {
    //         let match = matches.find((m) => (m.handle as any)?.scrollMode);
    //         if ((match?.handle as any)?.scrollMode === "pathname") {
    //             return location.pathname;
    //         }
    //
    //         return location.key;
    //     },
    //     []
    // );

    return (
        <div>
            <div style={{marginLeft: "30px", marginTop:"-10px", color: "gray"}}>
                총 {tempImgListLength}개의 결과
            </div>
            <Stack spacing={4} direction='row' align='center' style={{margin: "10px 10px 30px 100px"}}>
                <Button colorScheme='teal' onClick={
                    () => {
                        setTempImgListLength(tempImgList.length)
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
            {/*<ScrollRestoration getKey={getKey} />*/}
        </div>
    )
}