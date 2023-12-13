'use client'
import React, {useState} from "react";
import {
    Button,
    Center,
    FormControl,
    FormLabel,
    Input,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    useColorModeValue
} from '@chakra-ui/react'

interface signupProps {
    isOpen: boolean,
    onClose: () => void;
    onOpen: () => void;
}

export default function Signup({isOpen, onClose, onOpen}: signupProps) {

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

    const searchBarBgColor = useColorModeValue("#e5e5e5", "#21201D");

    return (
        <>
            {/* Sign up button */}
            <Button onClick={onOpen}
                    as={'a'}
                    cursor='pointer'
                    py={{base: "19px", sm: "20px", md: "21px", lg: "22px", xl: "23px", "2xl": "24px"}}
                    px={{base: "27px", sm: "28px", md: "29px", lg: "30px", xl: "31px", "2xl": "32px"}}
                    w="fit-content"
                    lineHeight='1.2'
                    transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
                    border=''
                    borderRadius='10px'
                    fontSize={{base: "12px", sm: "13px", md: "13px", lg: "14px", xl: "15px", "2xl": "16px"}}
                    fontFamily='Roboto'
                    fontWeight='semibold'
                    letterSpacing='0.75px'
                    bg='#A61212'
                    color='#F0F0EE'
                    _hover={{filter: 'brightness(1.2)'}}
                    _active={{bg: '#A61212', filter: 'brightness(1.2)'}}
                    _focus={{boxShadow: 'none'}}
            >
                Sign up
            </Button>
            {/* Sign up modal */}
            <Center>
                <Modal isOpen={isOpen} onClose={onClose} size="lg" isCentered>
                    <ModalOverlay/>
                    <ModalContent p='4' bg={searchBarBgColor}>
                        <ModalHeader className='SubheaderLgReg'>Sign up</ModalHeader>
                        <ModalCloseButton/>
                        <form onSubmit={handleSubmit}>
                            <ModalBody display='grid' gap='6'>
                                <FormControl id="email" isRequired>
                                    <FormLabel className='BodyBold' fontWeight='600'>E-mail</FormLabel>
                                    <Input className='BodyReg' borderRadius="10px" type="email" id="email" name="email"
                                           value={formData.email} onChange={handleChange} placeholder="E-mail"/>
                                </FormControl>
                                <FormControl id="username" isRequired>
                                    <FormLabel className='BodyBold' fontWeight='600'>Username</FormLabel>
                                    <Input className='BodyReg' borderRadius="10px" type="username" id="username"
                                           name="username" value={formData.username} onChange={handleChange}
                                           placeholder="Username"/>
                                </FormControl>
                                <FormControl id="password" isRequired>
                                    <FormLabel className='BodyBold' fontWeight='600'>Password</FormLabel>
                                    <Input className='BodyReg' borderRadius="10px" type="password" id="password"
                                           name="password" value={formData.password} onChange={handleChange}
                                           placeholder="Password"/>
                                </FormControl>
                            </ModalBody>
                            <ModalFooter>
                                <Button type="submit"
                                        cursor='pointer'
                                        py={{
                                            base: "19px",
                                            sm: "20px",
                                            md: "21px",
                                            lg: "22px",
                                            xl: "23px",
                                            "2xl": "24px"
                                        }}
                                        px={{
                                            base: "27px",
                                            sm: "28px",
                                            md: "29px",
                                            lg: "30px",
                                            xl: "31px",
                                            "2xl": "32px"
                                        }}
                                        w="fit-content"
                                        lineHeight='1.2'
                                        transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
                                        border=''
                                        borderRadius='10px'
                                        fontSize={{
                                            base: "12px",
                                            sm: "13px",
                                            md: "13px",
                                            lg: "14px",
                                            xl: "15px",
                                            "2xl": "16px"
                                        }}
                                        fontFamily='Roboto'
                                        fontWeight='semibold'
                                        letterSpacing='0.75px'
                                        bg='#A61212'
                                        color='#F0F0EE'
                                        _hover={{filter: 'brightness(1.2)'}}
                                        _active={{bg: '#A61212', filter: 'brightness(1.2)'}}
                                        _focus={{boxShadow: 'none'}}
                                >
                                    Sign up
                                </Button>
                            </ModalFooter>
                        </form>
                    </ModalContent>
                </Modal>
            </Center>
        </>
    )
}