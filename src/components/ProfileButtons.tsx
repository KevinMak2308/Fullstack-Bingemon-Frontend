import { Button, Stack } from '@chakra-ui/react'
import { useColorModeValue, useColorMode } from '@chakra-ui/react';

function ProfileButtons() {
    const { colorMode, toggleColorMode } = useColorMode()
    return (
        <Stack bg={useColorModeValue('white', 'grey.100')} direction='row' spacing={{base: "2", md: "4", lg: "12"}} align='center' justifyContent='center' py='10'>
            <Button height={{ base: "44px", md: "47px", lg: "50px" }}
                    width={{ base: "160px", md: "180px", lg: "200px" }}
                    lineHeight='1.2'
                    transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
                    border=''
                    px='8px'
                    borderRadius='10px'
                    fontSize={{ base: "16px", md: "16px", lg: "18px" }}
                    fontWeight='semibold'
                    bg='#E11818'
                    borderColor=''
                    color='#ffffff'
                    _hover={{ bg: '#E42F2F' }}>
                Your movies
            </Button>
            <Button height={{ base: "44px", md: "47px", lg: "50px" }}
                    width={{ base: "160px", md: "180px", lg: "200px" }}
                    lineHeight='1.2'
                    transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
                    border=''
                    px='8px'
                    borderRadius='10px'
                    fontSize={{ base: "16px", md: "16px", lg: "18px" }}
                    fontWeight='semibold'
                    bg='#E11818'
                    borderColor=''
                    color='#ffffff'
                    _hover={{ bg: '#E42F2F' }}>
                Your series
            </Button>
            <Button height={{ base: "44px", md: "47px", lg: "50px" }}
                    width={{ base: "160px", md: "180px", lg: "200px" }}
                    lineHeight='1.2'
                    transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
                    border=''
                    px='8px'
                    borderRadius='10px'
                    fontSize={{ base: "16px", md: "16px", lg: "18px" }}
                    fontWeight='semibold'
                    bg='#E11818'
                    borderColor=''
                    color='#ffffff'
                    _hover={{ bg: '#E42F2F' }}>
                Your genres
            </Button>
            <Button height={{ base: "44px", md: "47px", lg: "50px" }}
                    width={{ base: "160px", md: "180px", lg: "200px" }}
                    lineHeight='1.2'
                    transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
                    border=''
                    px='8px'
                    borderRadius='10px'
                    fontSize={{ base: "16px", md: "16px", lg: "18px" }}
                    fontWeight='semibold'
                    bg='#E11818'
                    borderColor=''
                    color='#ffffff'
                    _hover={{ bg: '#E42F2F' }}>
                Your actors
            </Button>
        </Stack>
    )
}

export default ProfileButtons;