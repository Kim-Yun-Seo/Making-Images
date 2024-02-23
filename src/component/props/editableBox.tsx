import {
    Card,
    CardBody,
    Divider,
    Editable,
    EditablePreview,
    EditableTextarea,
    Text
} from "@chakra-ui/react";

export const EditableBox = (props) => {
    const detail = props.detail
    return (
        <>
            <Card maxW='sm' style={{margin: "10px"}}>
                <CardBody style={{overflow: "hidden"}}>
                    <Text style={{fontWeight: "bold"}}>{props.info}</Text>
                    <Divider/>
                    <Editable defaultValue={detail}>
                        <EditablePreview />
                        <EditableTextarea />
                    </Editable>
                </CardBody>
            </Card>
        </>
    );
};
