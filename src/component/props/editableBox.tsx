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
    // const setDetail = props.setDetail
    // console.log("----slslslslls",setDetail)
    let changeDetail = ""
    return (
        <>
            <Card maxW='sm' style={{margin: "10px"}}>
                <CardBody style={{overflow: "hidden"}}>
                    <Text style={{fontWeight: "bold"}}>{props.info}</Text>
                    <Divider/>
                    <Editable defaultValue={detail}>
                        <EditablePreview />
                        <EditableTextarea onChange={(e) => {
                            changeDetail = e.target.value
                            console.log(changeDetail)
                        }}/>
                    </Editable>
                </CardBody>
            </Card>
        </>
    );
};
