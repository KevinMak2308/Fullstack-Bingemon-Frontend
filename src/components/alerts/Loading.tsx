import React, { useState, useEffect } from 'react';
import { Alert, AlertIcon, AlertTitle, AlertDescription, Box, Button, useDisclosure, Flex, Center } from '@chakra-ui/react';
import { motion } from 'framer-motion';

function Loading() {
    const { isOpen: isVisible, onClose, onOpen } = useDisclosure({ defaultIsOpen: true });

    const loadingDescription = "Please wait.";

    const [opacity, setOpacity] = useState(0);

    const closeAlert = () => {
        setTimeout(() => {
            setOpacity(0);
        }, 8000); // 5000 milliseconds = 5 seconds
    };

    useEffect(() => {
        if (isVisible) {
            setOpacity(1);
            closeAlert();
        }
    }, [isVisible]);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: opacity }}
            transition={{ duration: 0.5 }}
        >
            {isVisible && (
                <Alert
                    status='loading'
                    py='6'
                    w={{ base: '100%', md: '600px' }}
                    bg='rgb(0, 89, 218, 0.6)'
                    color='#F0F0EE'
                    borderRadius={{md:'10px 0px 0px 0px'}}
                    zIndex='2000'
                    position='fixed'
                    right='0'
                    bottom='0'
                    alignSelf='flex-start'
                    style={{
                        backdropFilter: 'blur(8px)',
                    }}
                >
                    <Box w='500px' px='8'>
                        <Flex gap='6'>
                            <AlertIcon alignSelf="center" m='0' p='0' color='#F0F0EE' />
                            <Box>
                                <AlertTitle>Loading</AlertTitle>
                                <AlertDescription>{loadingDescription}</AlertDescription>
                            </Box>
                        </Flex>
                    </Box>
                </Alert>
            )}
        </motion.div>
    );
}

export default Loading;






