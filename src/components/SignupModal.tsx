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
import React, {useState} from "react";


export default function Signup() {

        const [formData, setFormData] = useState({
            email: '',
            username: '',
            password: ''
        });

        const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            const {name, value} = e.target;
            setFormData({
                ...formData,
                [name]: value
            });
        };

        const handleSubmit = async (e: React.FormEvent) => {
            e.preventDefault();

            const response = await fetch('http://localhost:8080/auth/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                console.log(formData, 'Signup successful');
            } else {
                console.log(formData, 'Signup unsuccessful')
            }
        };

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
                                    <form onSubmit={handleSubmit}>
                                    <ModalBody>
                                        <FormControl mb={'4'} id="email" isRequired >
                                            <FormLabel>E-mail</FormLabel>
                                            <Input type="email" id="email" name="email" value={formData.email} onChange={handleChange} borderRadius={'sm'} placeholder="E-mail" />
                                        </FormControl>
                                        <FormControl mb={'4'} id="username" isRequired>
                                            <FormLabel>Username</FormLabel>
                                            <Input type="username" id="username" name="username" value={formData.username} onChange={handleChange} borderRadius={'sm'} placeholder="Username" />
                                        </FormControl>
                                        <FormControl id="password" isRequired>
                                            <FormLabel>Password</FormLabel>
                                            <Input type="password" id="password" name="password" value={formData.password} onChange={handleChange} borderRadius={'sm'} placeholder="Password" />
                                        </FormControl>
                                    </ModalBody>
                                    <ModalFooter>
                                        <Button type="submit" bg={'red.100'} borderRadius={'sm'} _hover={{bg: 'red.hover'}} px={'8'}>
                                            Sign up
                                        </Button>
                                    </ModalFooter>
                                </form>
                                </ModalContent>
                            </Modal>

        </>
    )
}