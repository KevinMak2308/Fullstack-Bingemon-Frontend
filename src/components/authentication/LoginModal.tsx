import React, {useEffect, useState} from "react";
import Signup from "./SignupModal";
import httpService from "../../services/httpService";

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
    Stack
} from '@chakra-ui/react'

interface Credentials {
    username: string,
    password: string
}
export default function Login() {

    const authUrl = "auth/login";
    const [formData, setFormData] = useState({ username: '', password: ''});
    const [token, setToken] = useState();
    const [show, setShow] = useState(false);


    const login = async(credentials: Credentials) => {
        const {data} = await httpService.post(authUrl, credentials);
        document.cookie = `user=${data.token}`;
        document.cookie = `user_id=${data.user_id}`;
    }


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            await login(formData);
            console.log("What does the cookie look like?: ", document.cookie)
        } catch (error) {
            console.error("Login Failed", error);
        }
    }

    /*const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        await fetch('http://localhost:8080/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify(formData)
        }).then((response) => {
            if(!response.ok) {
                throw Error(response.statusText)
            }
            return response.json()
        }).then(data => {
            setToken(data.token)
            console.log("What is in data? ", data)
            document.cookie = `user=${token}`

        })
    };*/

    const { isOpen, onOpen, onClose } = useDisclosure()

    const closeModal = () => {
        setShow(false)
    }

    return (
        <>
            <Button onClick={onOpen}
                    as={'a'}
                    display={{ sm: 'inline-flex', md: 'inline-flex' }}
                    fontSize={{ base: "14px", md: "15px", lg: "16px" }}
                    fontWeight='semibold'
                    bg='#A61212'
                    color='#F0F0EE'
                    href={'#'}
                    borderRadius='10px'
                    px={'8'}
                    _hover={{ bg: '#c01515' }}>
                Login
            </Button>



            <Modal isOpen={isOpen} onClose={onClose} >
                <ModalOverlay />
                <ModalContent bg={'grey.100'}>
                    <ModalHeader fontSize={'2xl'}>Login</ModalHeader>
                    <ModalCloseButton />
                    <form onSubmit={handleSubmit}>
                        <ModalBody>
                            <FormControl mb={'4'} id="username" isRequired>
                                <FormLabel>Username</FormLabel>
                                <Input type="username" id="username" name="username" value={formData.username} onChange={handleChange} borderRadius={'sm'} placeholder="Username" />
                            </FormControl>
                            <FormControl id="password" isRequired>
                                <FormLabel>Password</FormLabel>
                                <Input type="password" id="password" name="password" value={formData.password} onChange={handleChange} borderRadius={'sm'} placeholder="Password" />
                            </FormControl>
                            <Stack mt={4} fontSize={'sm'}>
                                <p>Are you new on Bingemon? <button onClick={() => setShow(true)}>{show ? <Signup isOpen={show} onClose={closeModal} onOpen={onOpen}/> : "Sign up now"}</button></p>
                            </Stack>
                        </ModalBody>
                        <ModalFooter>
                            <Button type="submit" fontSize={{ base: "14px", md: "15px", lg: "16px" }}
                                    fontWeight='semibold'
                                    bg='#A61212'
                                    color='#F0F0EE'
                                    borderRadius='10px'
                                    px={'8'}
                                    _hover={{ bg: '#c01515' }}>
                                Login
                            </Button>
                        </ModalFooter>
                    </form>
                </ModalContent>
            </Modal>
        </>
    )


}