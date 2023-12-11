import React, { useState, useEffect } from 'react';
import {
    Box,
    Center,
    Flex,
    Text,
    useColorModeValue
} from '@chakra-ui/react';
import Signup from './authentication/SignupModal';

function FrontPageFirstSection() {
    const [show, setShow] = useState(false);

    const [loggedIn, setLoggedIn] = useState(!!document.cookie.split(';').find((row) => row.startsWith('user=')));

    const openModal = () => {
        setShow(true);
    };

    const closeModal = () => {
        setShow(false);
    };

    useEffect(() => {
        // Check the 'user' cookie when the component mounts
        const userCookie = document.cookie.split(';').find((row) => row.trim().startsWith('user='));
        setLoggedIn(!!userCookie);
    }, []); // Empty dependency array to run the effect only once when the component mounts

    return (

        <Box color='#dcdbd8'>
            <Flex
                py={{
                    base: '75px',
                    sm: '80px',
                    md: '85px',
                    lg: '90px',
                    xl: '95px',
                    '2xl': '100px',
                }}
                h={{ base: "84vh", sm:"84vh", md: "84vh", lg: "82vh", xl:"82vh", "2xl":"82vh" }}
                alignContent={"center"} justifyContent={"center"}
            >
                <Center>
                    <Box
                        display="grid"
                        gap={{
                            base: '12px',
                            sm: '14px',
                            md: '16px',
                            lg: '18px',
                            xl: '20px',
                            '2xl': '22px',
                        }}
                        w="90vw"
                        alignContent='center'
                    >
                        <Box p={{ base: "15px", sm:"20px", md: "25px", lg: "30px", xl:"35px", "2xl":"40px" }}
                            w={{
                                base: '90vw',
                                sm: '90vw',
                                md: '65vw',
                                lg: '55vw',
                                xl: '45vw',
                                '2xl': '30vw',
                            }}
                            display='grid'
                            gap={{
                                base: '12px',
                                sm: '14px',
                                md: '16px',
                                lg: '18px',
                                xl: '20px',
                                '2xl': '22px',
                            }}
                            style={{
                                backgroundColor: 'rgba(26, 25, 23, 0.6)',
                                borderRadius: '10px',
                                backdropFilter: 'blur(5px)',
                                boxShadow: `0 0 40px 20px rgba(26, 25, 23, 0.5)`,
                            }}
                        >
                            <Text as='h1'>Start Swiping Today!</Text>
                            <Text className='SubheaderLgReg'>
                                Fed up with the endless scrolling and disagreements when trying to pick a movie to watch with friends
                                or family? Look no further – welcome to the ultimate platform for matching your movie interests. Join
                                us today and let the cinematic matchmaking begin!
                            </Text>
                            <Box
                                mt={{
                                    base: '15px',
                                    sm: '15px',
                                    md: '15px',
                                    lg: '15px',
                                    xl: '20px',
                                    '2xl': '25px',
                                }}
                            >
                                <Signup isOpen={show} onClose={closeModal} onOpen={openModal} />
                            </Box>
                        </Box>
                    </Box>
                </Center>
            </Flex>
        </Box>
    );
}

export default FrontPageFirstSection;
