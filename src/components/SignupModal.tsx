'use client'

import {
    Button,
    useDisclosure,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    FormControl,
    FormLabel,
    Input,
} from '@chakra-ui/react'


export default function Signup() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
                            <Button onClick={onOpen}
                                    as={'a'}
                                    display={{ sm: 'inline-flex', md: 'inline-flex' }}
                                    fontSize={'md'}
                                    fontWeight={600}
                                    color={'white'}
                                    bg={'red.100'}
                                    href={'#'}
                                    borderRadius={'sm'}
                                    px={'8'}
                                    mr={'2'}
                                    _hover={{
                                        bg: 'red.hover',
                                    }}>
                                Sign up
                            </Button>

                            <Modal isOpen={isOpen} onClose={onClose} >
                                <ModalOverlay />
                                <ModalContent bg={'grey.100'}>
                                    <ModalHeader fontSize={'2xl'}>Sign up</ModalHeader>
                                    <ModalCloseButton />
                                    <ModalBody>
                                        <FormControl mb={'4'} id="email" isRequired >
                                            <FormLabel>E-mail</FormLabel>
                                            <Input borderRadius={'sm'} placeholder="E-mail" />
                                        </FormControl>
                                        <FormControl mb={'4'} id="username" isRequired>
                                            <FormLabel>Username</FormLabel>
                                            <Input borderRadius={'sm'} placeholder="Username" />
                                        </FormControl>
                                        <FormControl id="password" isRequired>
                                            <FormLabel>Password</FormLabel>
                                            <Input borderRadius={'sm'} placeholder="Password" />
                                        </FormControl>
                                    </ModalBody>

                                    <ModalFooter>
                                        <Button bg={'red.100'} borderRadius={'sm'} _hover={{bg: 'red.hover'}} px={'8'}>
                                            Sign up
                                        </Button>
                                    </ModalFooter>
                                </ModalContent>
                            </Modal>

        </>
    )
}