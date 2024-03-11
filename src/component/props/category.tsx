import {Tag} from "@chakra-ui/react";

export const Category = (props) => {
    return (
        <>
            <Tag size="md" key="md" variant='solid' colorScheme='teal' style={{margin: "2px"}}>
                {props.name}
            </Tag>
        </>
    );
};
