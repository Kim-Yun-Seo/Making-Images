import {
    Card,
    CardBody,
    Divider, Editable, EditablePreview, EditableTextarea,
    NumberDecrementStepper,
    NumberIncrementStepper,
    NumberInput,
    NumberInputField,
    NumberInputStepper, Select,
    Text
} from "@chakra-ui/react";

import {Tags} from "./props/tags.tsx";
import loraList from "../resource/lora"
import ckptList from "../resource/ckpt"
import cnmList from "../resource/controlNet"

export const ModifyDetail = (props) => {
    const notShowList = ["imgUrl", "id", "name", "madeBy", "createdAt"]
    if (!notShowList.includes(props.info)) {
        if (props.info == "tags") {
            return (
                <Card maxW='sm' style={{margin: "10px"}}>
                    <CardBody style={{overflow: "hidden"}}>
                        <Text style={{fontWeight: "bold"}}>{props.info}</Text>
                        <Divider/>
                        <Editable>
                            <EditablePreview />
                            {props.detail.map((name: string[], index: number) => (<Tags key={index} name={name} style={{marginLeft: "10px"}}/>))}
                        </Editable>
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
                        <Select placeholder={props.detail}>
                            {cnmList.map((cnm: string) => (<option value={cnm}>{cnm}</option>))}
                        </Select>
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
                        <Select placeholder={props.detail}>
                            {loraList.map((lora: string) => (<option value={lora}>{lora}</option>))}
                        </Select>
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
                        <Select placeholder={props.detail}>
                            {ckptList.map((ckpt: string) => (<option value={ckpt}>{ckpt}</option>))}
                        </Select>
                    </CardBody>
                </Card>
            )
        }
        if (props.info == "step") {
            return (
                <Card maxW='sm' style={{margin: "10px"}}>
                    <CardBody style={{overflow: "hidden"}}>
                        <Text style={{fontWeight: "bold"}}>{props.info}</Text>
                        <Divider/>
                        <NumberInput defaultValue={props.detail}>
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
                <Card maxW='sm' style={{margin: "10px"}}>
                    <CardBody style={{overflow: "hidden"}}>
                        <Text style={{fontWeight: "bold"}}>{props.info}</Text>
                        <Divider/>
                        <Editable defaultValue={props.detail}>
                            <EditablePreview />
                            <EditableTextarea onChange={(e) => {
                                // newCreateImageObj = {...nowImageObj}
                                // newCreateImageObj[`${info}`] = e.target.value
                            }}/>
                        </Editable>
                    </CardBody>
                </Card>
            </>
        );
    }
};
