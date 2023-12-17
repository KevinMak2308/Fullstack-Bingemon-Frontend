import React, {useState} from "react";
import Signup from "./SignupModal";
import httpService from "../../services/httpService";
import {
    Box,
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
    Stack,
    Text,
    useColorModeValue,
    useDisclosure
} from '@chakra-ui/react'

interface Credentials {
    username: string,
    password: string
}

export default function Login() {

    const authUrl = "/auth/login";
    const [formData, setFormData] = useState({username: '', password: ''});
    const [show, setShow] = useState(false);

    const login = async (credentials: Credentials) => {
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
            await login(formData)
            window.location.reload()
            console.log("What does the cookie look like?: ", document.cookie)
        } catch (error) {
            console.error("Login Failed", error);
        }
    }

    const {isOpen, onOpen, onClose} = useDisclosure()

    const closeModal = () => {
        setShow(false)
    }

    const searchBarBgColor = useColorModeValue("#e5e5e5", "#21201D");

    return (
        <>
            {/* Login button */}
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
                Log in
            </Button>
            {/* Login modal */}
            <Center>
                <Modal isOpen={isOpen} onClose={onClose} size="lg" isCentered>
                    <ModalOverlay/>
                    <ModalContent p='4' bg={searchBarBgColor}>
                        <ModalHeader className='SubheaderLgReg'>Log in</ModalHeader>
                        <ModalCloseButton/>
                        <form onSubmit={handleSubmit}>
                            <ModalBody display='grid' gap='6'>
                                <FormControl id="username" isRequired>
                                    <FormLabel className='BodyBold' fontWeight='600'>Username</FormLabel>
                                    <Input
                                        className='BodyReg'
                                        borderRadius="10px"
                                        type="username"
                                        id="username"
                                        name="username"
                                        value={formData.username}
                                        onChange={handleChange}
                                        placeholder="Username"
                                    />
                                </FormControl>
                                <FormControl id="password" isRequired>
                                    <FormLabel className='BodyBold' fontWeight='600'>Password</FormLabel>
                                    <Input
                                        className='BodyReg'
                                        type="password"
                                        id="password"
                                        name="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        borderRadius="10px"
                                        placeholder="Username"
                                    />
                                </FormControl>
                                <Stack className='SubheaderXsReg'>

                                    <Text className='SubheaderXsReg' display='flex' gap='2'>
                                        Are you new on Bingemon?
                                        <Box
                                            onClick={() => setShow(true)}
                                            className='SubheaderXsBold'
                                            fontWeight='600'
                                            as="span"
                                            position="relative"
                                            cursor="pointer"
                                            w='fit-content'
                                            _before={{
                                                content: '""',
                                                position: 'absolute',
                                                bottom: 0,
                                                left: 0,
                                                width: '0%',
                                                height: '1.5px',
                                                backgroundColor: '#A61212',
                                                transition: 'width 0.5s cubic-bezier(.08,.52,.52,1)',
                                            }}
                                            _hover={{
                                                _before: {
                                                    width: '100%',
                                                },
                                            }}
                                        >
                                            {show ? <Signup isOpen={show} onClose={closeModal}
                                                            onOpen={onOpen}/> : "Sign up now"}
                                        </Box>
                                    </Text>
                                </Stack>
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
                                    Log in
                                </Button>
                            </ModalFooter>
                        </form>
                    </ModalContent>
                </Modal>
            </Center>
        </>
    )
}