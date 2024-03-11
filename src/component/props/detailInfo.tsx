import {
    Card, CardBody, Divider, Text
} from "@chakra-ui/react";

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
            {/*<Accordion defaultIndex={[0]} allowMultiple style={{width: "500px"}}>*/}
            {/*    <AccordionItem>*/}
            {/*        <h2>*/}
            {/*            <AccordionButton>*/}
            {/*                <Box as="span" flex='1' textAlign='left'>*/}
            {/*                    {props.info}*/}
            {/*                </Box>*/}
            {/*                <AccordionIcon />*/}
            {/*            </AccordionButton>*/}
            {/*        </h2>*/}
            {/*        <AccordionPanel pb={4}>*/}
            {/*            {props.detail}*/}
            {/*        </AccordionPanel>*/}
            {/*    </AccordionItem>*/}
            {/*</Accordion>*/}

        </>
    );
};
