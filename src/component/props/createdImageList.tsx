import {Card, CardBody, Heading, Image, Stack, Text} from "@chakra-ui/react";

export const CreatedImageList = (props) => {

    return (
        <>
            <Card maxW='sm' style={{margin: "10px", cursor: "pointer"}}>
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
                            {props.desc}
                        </Text>
                    </Stack>
                </CardBody>
            </Card>
        </>
    );
};
