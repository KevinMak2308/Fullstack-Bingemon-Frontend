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
import React, {useState, useEffect} from "react";

interface signupProps {
    isOpen: boolean,
    onClose: () => void;
    onOpen: () => void;

}

export default function Signup({isOpen, onClose, onOpen}: signupProps) {
   /* const { isOpen, onOpen, onClose } = useDisclosure()*/

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



    return (
        <>
                            <Button
                                onClick={onOpen}
                                as={'a'}
                                display={{ sm: 'inline-flex', md: 'inline-flex' }}
                                py={{base: "24px", md: "26px", lg: "25px"}}
                                px={{base: "28px", md: "29px", lg: "30px"}}
                                lineHeight='1.2'
                                transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
                                borderRadius='10px'
                                fontSize={{ base: "14px", md: "15px", lg: "16px" }}
                                fontWeight='semibold'
                                bg='#A61212'
                                color='#F0F0EE'
                                _hover={{ bg: '#c01515' }}>
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
                                        <Button type="submit" fontSize={{ base: "14px", md: "15px", lg: "16px" }}
                                                fontWeight='semibold'
                                                bg='#A61212'
                                                color='#F0F0EE'
                                                borderRadius='10px'
                                                px={'8'}
                                                _hover={{ bg: '#c01515' }}>
                                            Sign up
                                        </Button>
                                    </ModalFooter>
                                </form>
                                </ModalContent>
                            </Modal>

        </>
    )
}