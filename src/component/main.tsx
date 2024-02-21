import {
    Input
} from '@chakra-ui/react'

import {Images} from "./props/images.tsx";
import images from "../resource/images.json"

export const Main = () => {

    const imageList = images.map((image, idx) => (<Images name={image.name} url={image.imgUrl} id={image.id} desc={image.desc} date={image.createdAt} tags={image.tags}/>))
    return (
        <div>
            <div>
                LOGO
            </div>
            <Input placeholder='put in here'/>
            {imageList}
        </div>
    )
}