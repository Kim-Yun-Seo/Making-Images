import {useNavigate} from 'react-router-dom';

import {Card, CardBody, Heading, Image, Stack, Text} from "@chakra-ui/react";
import {Tags} from "./tags.tsx";

export const Images = (props: any) => {
    const navigate = useNavigate()
    const tagList = props.tags.map(name => (<Tags name={name}/>))
    return (
        <>
            <Card maxW='sm' padding="10px" style={{cursor: "pointer"}} onClick={
                () => {
                    navigate( `/detail/${props.id}`, { state: { id: props.id} } )
                }
            }>
                <CardBody >
                    <Image
                        src={props.url}
                        alt='Green double couch with wooden legs'
                        borderRadius='lg'
                    />
                    <Stack mt='6' spacing='3'>
                        <Heading size='md'>
                            {props.name}
                        </Heading>
                        <Text>
                            {props.date}
                            <br/>
                            {props.desc}
                            <br/>
                            {tagList}
                        </Text>
                    </Stack>
                </CardBody>
            </Card>
        </>

    );
};
