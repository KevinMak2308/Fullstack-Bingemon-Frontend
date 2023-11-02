import { Card, CardBody, CardFooter, Heading, Button, Image, Text, Grid, useColorMode,
    useColorModeValue, Flex } from '@chakra-ui/react'
import { Menu,
    MenuButton,
    MenuList,
    MenuItem
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons';


export default function ProfileCards() {
    const { colorMode, toggleColorMode } = useColorMode()
    return (
        <Flex bg={useColorModeValue('white', 'grey.100')} gap={6} justifyContent='center' alignItems='center' flexDirection='column'>
            <Card maxW={{sm:'100%', md:'md', lg:'790px'}} mx={{sm:'4', lg:'0'}} border='2px' borderColor='#E11818' bg={useColorModeValue('white', 'grey.100')}>
                <CardBody>
                    <Heading size='sm' mt='1'>Liked genres:</Heading>
                    <Flex flexDirection={{sm:'column', lg:'row'}} justifyContent='center' alignItems='center'>
                        <Grid templateColumns={{sm:'repeat(4, 1fr)', lg:'repeat(8, 1fr)'}} gap={3} mt='6'>
                            <Image src='gibbresh.png' fallbackSrc='https://via.placeholder.com/150' />
                            <Image src='gibbresh.png' fallbackSrc='https://via.placeholder.com/150' />
                            <Image src='gibbresh.png' fallbackSrc='https://via.placeholder.com/150' />
                            <Image src='gibbresh.png' fallbackSrc='https://via.placeholder.com/150' />
                            <Image src='gibbresh.png' fallbackSrc='https://via.placeholder.com/150' />

                        </Grid>
                        <Button
                            lineHeight='1.2'
                            fontSize='sm'
                            fontWeight='semibold'
                            bg='none'
                            mr='4'
                            color='#ffffff'
                            _hover={{ bg: 'none' }}>
                            Edit liked genres <ChevronRightIcon/>
                        </Button>
                    </Flex>
                </CardBody>
            </Card>
            <Card maxW={{sm:'100%', md:'md', lg:'790px'}} mx={{sm:'4', lg:'0'}} border='2px' borderColor='#E11818' bg={useColorModeValue('white', 'grey.100')}>
                <CardBody>
                        <Heading size='sm' mt='1'>Liked actors:</Heading>
                    <Flex flexDirection={{sm:'column', lg:'row'}} justifyContent='center' alignItems='center'>
                    <Grid templateColumns={{sm:'repeat(4, 1fr)', lg:'repeat(8, 1fr)'}} gap={3} mt='6'>
                        <Image src='gibbresh.png' fallbackSrc='https://via.placeholder.com/150' />
                        <Image src='gibbresh.png' fallbackSrc='https://via.placeholder.com/150' />
                        <Image src='gibbresh.png' fallbackSrc='https://via.placeholder.com/150' />
                        <Image src='gibbresh.png' fallbackSrc='https://via.placeholder.com/150' />
                        <Image src='gibbresh.png' fallbackSrc='https://via.placeholder.com/150' />

                    </Grid>
                        <Button
                                lineHeight='1.2'
                                fontSize='sm'
                                fontWeight='semibold'
                                bg='none'
                                mr='4'
                                color='#ffffff'
                                _hover={{ bg: 'none' }}>
                            Edit liked actors <ChevronRightIcon/>
                        </Button>
                    </Flex>
                </CardBody>
            </Card>
        </Flex>
    )
}