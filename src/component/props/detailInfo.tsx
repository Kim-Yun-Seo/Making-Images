import {
    Card,
    CardBody,
    Divider,
    NumberDecrementStepper,
    NumberIncrementStepper,
    NumberInput,
    NumberInputField,
    NumberInputStepper, Select,
    Text
} from "@chakra-ui/react";

import {Tags} from "../props/tags.tsx";

export const DetailInfo = (props) => {

    const notShowList = ["imgUrl", "id", "name", "madeBy"]
    if (!notShowList.includes(props.info)) {
        if (props.info == "tags") {
            return (
                <Card maxW='lg' style={{margin: "10px"}}>
                    <CardBody>
                        <Text style={{fontWeight: "bold"}}>{props.info}</Text>
                        <Divider/>
                        {props.detail.map((name: string[], index: number) => (<Tags key={index} name={name} style={{marginLeft: "10px"}}/>))}
                    </CardBody>
                </Card>
            )
        }
        if (props.info == "controlNetModel") {
            return(
                <Card maxW='sm' style={{margin: "10px"}}>
                    <CardBody style={{overflow: "hidden"}}>
                        <Text style={{fontWeight: "bold"}}>{props.info}</Text>
                        <Divider/>
                        <Select placeholder={props.detail} />
                    </CardBody>
                </Card>

            )
        }
        if (props.info == "checkpointModel") {
            return(
                <Card maxW='sm' style={{margin: "10px"}}>
                    <CardBody style={{overflow: "hidden"}}>
                        <Text style={{fontWeight: "bold"}}>{props.info}</Text>
                        <Divider/>
                        <Select placeholder={props.detail} />
                    </CardBody>
                </Card>
            )
        }
        if (props.info == "LoRA") {
            return(
                <Card maxW='sm' style={{margin: "10px"}}>
                    <CardBody style={{overflow: "hidden"}}>
                        <Text style={{fontWeight: "bold"}}>{props.info}</Text>
                        <Divider/>
                        <Select placeholder={props.detail} />
                    </CardBody>
                </Card>

            )
        }
        if (props.info == "step") {
            return (
                <Card maxW='lg' style={{margin: "10px"}}>
                    <CardBody>
                        <Text style={{fontWeight: "bold"}}>{props.info}</Text>
                        <Divider/>
                            <NumberInput defaultValue={props.detail} min={props.detail} max={props.detail}>
                                <NumberInputField />
                                <NumberInputStepper>
                                    <NumberIncrementStepper />
                                    <NumberDecrementStepper />
                                </NumberInputStepper>
                            </NumberInput>
                    </CardBody>
                </Card>
            )
        }
        return (
            <>
                <Card maxW='lg' style={{margin: "10px"}}>
                    <CardBody>
                        <Text style={{fontWeight: "bold"}}>{props.info}</Text>
                        <Divider/>
                        <Text style={{marginTop: "5px"}}>{props.detail}</Text>
                    </CardBody>
                </Card>
            </>
        );
    }
};
