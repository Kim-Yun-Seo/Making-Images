import { useNavigate } from 'react-router-dom';

import {Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Heading, Image, Stack, Text} from "@chakra-ui/react";
import {Tags} from "./tags.tsx";

export const Images = (props) => {
    const navigate = useNavigate()
    // const shopPage = (id: number) => {navigate(`/detail/${id}`)}
    const tagList = props.tags.map(name => (<Tags name={name}/>))
    return (
        <>
            <Card maxW='sm' padding="10px">
                <CardBody>
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
                <Divider/>
                <CardFooter>
                    <Button variant='solid' colorScheme='blue' onClick={
                        () => {
                            navigate( `/detail/${props.id}`, { state: { id: props.id} } )
                        }
                    }>
                        detail
                    </Button>
                </CardFooter>
            </Card>
        </>

    );
};
