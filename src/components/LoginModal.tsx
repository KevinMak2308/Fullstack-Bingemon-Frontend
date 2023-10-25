import React, {useState} from "react";
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
    Link,
    Stack
} from '@chakra-ui/react'

export default function Login() {

    const [formData, setFormData] = useState({
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

        const response = await fetch('http://localhost:8080/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        });

        if (response.ok) {
            localStorage.setItem("user", formData.username)
            console.log(formData, 'Login successful');
        } else {
            console.log(formData, 'Login unsuccessful')
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
                                <p>Are you new on Bingemon? <Link fontWeight={600}>Sign up now</Link></p>
                            </Stack>
                        </ModalBody>
                        <ModalFooter>
                            <Button type="submit" bg={'red.100'} borderRadius={'sm'} _hover={{bg: 'red.hover'}} px={'8'}>
                                Login
                            </Button>
                        </ModalFooter>
                    </form>
                </ModalContent>
            </Modal>
        </>
    )


}