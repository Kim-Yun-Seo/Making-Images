import {Card, CardBody, Divider, Text} from "@chakra-ui/react";

export const DetailInfo = (props) => {
    return (
        <>
            <Card maxW='sm' style={{margin: "10px"}}>
                <CardBody>
                    <Text style={{fontWeight: "bold"}}>{props.info}</Text>
                    <Divider/>
                    <Text style={{marginTop: "5px"}}>{props.detail}</Text>
                </CardBody>
            </Card>
        </>
    );
};
