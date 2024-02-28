import {
    Button,
    Card,
    CardBody, FormControl, FormLabel,
    Heading,
    Image, Input,
    Modal, ModalBody, ModalCloseButton,
    ModalContent, ModalFooter,
    ModalHeader,
    ModalOverlay,
    Stack,
    Text, useDisclosure
} from "@chakra-ui/react";
import {useRef} from "react";

export const CreatedImageList = (props) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const initialRef = useRef(null)
    const finalRef = useRef(null)

    return (
        <>
            <Card maxW='sm' style={{margin: "10px", cursor: "pointer"}} onClick={onOpen}>
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
            <Modal
                initialFocusRef={initialRef}
                finalFocusRef={finalRef}
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Create your account</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <Image
                            src={props.url}
                        />
                        <FormControl>
                            <FormLabel>이름</FormLabel>
                            <Input ref={initialRef} placeholder='First name' />
                        </FormControl>

                        <FormControl mt={4}>
                            <FormLabel>태그</FormLabel>
                            <Input placeholder='Last name' />
                        </FormControl>
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme='blue' mr={3}>
                            배포
                        </Button>
                        <Button onClick={onClose}>Cancel</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};
