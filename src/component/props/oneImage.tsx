import {useNavigate} from 'react-router-dom';

import {Card, CardBody, Heading, Image, Stack, Text} from "@chakra-ui/react";
import {Tags} from "./tags.tsx";

export const OneImage = (props: any) => {
    const navigate = useNavigate()
    const tagList = props.tags.map((name, index: number)  => (<Tags key={index} name={name}/>))

    return (
        <>
            <Card maxW='sm' padding="10px" style={{cursor: "pointer"}} onClick={
                () => {
                    navigate( `/detail/${props.id}`, { state: { id: props.id} } )
                }
            }>
                <CardBody >
                    <Image
                        src={props.imgUrl}
                        borderRadius='lg'
                    />
                    <Stack mt='6' spacing='3'>
                        <Heading size='md'>
                            {props.name}
                        </Heading>
                        <Text>
                            {props.createdAt}
                            <br/>
                            {props.desc}
                            <br/>
                            <div style={{marginLeft: "-5px", marginTop: "5px"}}>
                                {tagList}
                            </div>
                        </Text>
                    </Stack>
                </CardBody>
            </Card>
        </>

    );
};
