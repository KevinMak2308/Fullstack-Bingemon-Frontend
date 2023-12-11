import React, { useState, useEffect } from 'react';
import { Alert, AlertIcon, AlertTitle, AlertDescription, Box, Button, useDisclosure, Flex, Center } from '@chakra-ui/react';
import { motion } from 'framer-motion';

function Error() {
    const { isOpen: isVisible, onClose, onOpen } = useDisclosure({ defaultIsOpen: true });

    const errorDescription = "Username exceeds the maximum length. Please enter a username with a maximum of 25 characters.";

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
                    status='error'
                    py='6'
                    w={{ base: '100%', md: '600px' }}
                    bg='rgba(166, 18, 18, 0.8)'
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
                        <Flex gap='6' >
                            <AlertIcon alignSelf="center" m='0' p='0' color='#F0F0EE' />
                            <Box>
                                <AlertTitle>Error!</AlertTitle>
                                <AlertDescription>{errorDescription}</AlertDescription>
                            </Box>
                            <Box
                                color='#F0F0EE'
                                alignSelf='flex-start'
                                position='absolute'
                                p='0.5'
                                right={4}
                                top={4}
                                onClick={() => setOpacity(0)}
                                cursor="pointer"
                                borderRadius='full'
                                transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
                                _hover={{
                                    borderRadius: 'full',
                                    backgroundColor: '#b51414',
                                }}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 24 24">
                                    <path
                                        fill="currentColor"
                                        d="m12 13.4l-4.9 4.9q-.275.275-.7.275t-.7-.275q-.275-.275-.275-.7t.275-.7l4.9-4.9l-4.9-4.9q-.275-.275-.275-.7t.275-.7q.275-.275.7-.275t.7.275l4.9 4.9l4.9-4.9q.275-.275.7-.275t.7.275q.275.275.275.7t-.275.7L13.4 12l4.9 4.9q.275.275.275.7t-.275.7q-.275.275-.7.275t-.7-.275L12 13.4Z"
                                    />
                                </svg>
                            </Box>
                        </Flex>
                    </Box>
                </Alert>
            )}
        </motion.div>
    );
}

export default Error;






