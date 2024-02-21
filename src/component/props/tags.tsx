import {HStack, Tag} from "@chakra-ui/react";

export const Tags = (props) => {
    return (
        <>
            <HStack spacing={4}>
                <Tag size="md" key="md" variant='solid' colorScheme='teal'>
                    {props.name}
                </Tag>
            </HStack>
        </>

    );
};
