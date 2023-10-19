import { Card, CardBody, CardFooter, Heading, Button, Image, Text, Grid, useColorMode,
    useColorModeValue, Flex } from '@chakra-ui/react'
import { Menu,
    MenuButton,
    MenuList,
    MenuItem
} from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons';


export default function ProfileCards() {
    const { colorMode, toggleColorMode } = useColorMode()
    return (
        <Flex bg={useColorModeValue('white', 'grey.100')} gap={6} justifyContent='center' flexDirection={{sm: 'column', lg:'row' }} py='6'>
        <Card maxW={{sm:'100%', md:'md', lg:'sm'}} mx={{sm:'4', lg:'0'}} border='2px' borderColor='#E11818' bg={useColorModeValue('white', 'grey.100')}>
            <CardBody>
                <Flex justifyContent='space-between'>
                <Heading size='sm' mt='1'>12 liked movies</Heading>
                    <Menu>
                        <MenuButton as={Button} rightIcon={<ChevronDownIcon />} size='sm' px='8px'
                                    borderRadius='10px'>
                            Sort by
                        </MenuButton>
                        <MenuList>
                            <MenuItem>Download</MenuItem>
                            <MenuItem>Create a Copy</MenuItem>
                            <MenuItem>Mark as Draft</MenuItem>
                            <MenuItem>Delete</MenuItem>
                            <MenuItem>Attend a Workshop</MenuItem>
                        </MenuList>
                    </Menu>
                </Flex>
                <Grid templateColumns='repeat(4, 1fr)' gap={3} mt='6'>
                    <Image src='gibbresh.png' fallbackSrc='https://via.placeholder.com/150' />
                    <Image src='gibbresh.png' fallbackSrc='https://via.placeholder.com/150' />
                    <Image src='gibbresh.png' fallbackSrc='https://via.placeholder.com/150' />
                    <Image src='gibbresh.png' fallbackSrc='https://via.placeholder.com/150' />
                    <Image src='gibbresh.png' fallbackSrc='https://via.placeholder.com/150' />
                    <Image src='gibbresh.png' fallbackSrc='https://via.placeholder.com/150' />
                    <Image src='gibbresh.png' fallbackSrc='https://via.placeholder.com/150' />
                    <Image src='gibbresh.png' fallbackSrc='https://via.placeholder.com/150' />
                    <Image src='gibbresh.png' fallbackSrc='https://via.placeholder.com/150' />
                    <Image src='gibbresh.png' fallbackSrc='https://via.placeholder.com/150' />
                </Grid>
            </CardBody>

            <CardFooter  justifyContent='center'>
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
                            color='#ffffff'
                            _hover={{ bg: '#E42F2F' }}>
                        View all
                    </Button>
            </CardFooter>
        </Card>
            <Card maxW={{sm:'100%', md:'md', lg:'sm'}} mx={{sm:'4', lg:'0'}} border='2px' borderColor='#E11818' bg={useColorModeValue('white', 'grey.100')}>
                <CardBody>
                    <Flex justifyContent='space-between'>
                        <Heading size='sm' mt='1'>12 liked series</Heading>
                        <Menu>
                            <MenuButton as={Button} rightIcon={<ChevronDownIcon />} size='sm' px='8px'
                                        borderRadius='10px'>
                                Sort by
                            </MenuButton>
                            <MenuList>
                                <MenuItem>Download</MenuItem>
                                <MenuItem>Create a Copy</MenuItem>
                                <MenuItem>Mark as Draft</MenuItem>
                                <MenuItem>Delete</MenuItem>
                                <MenuItem>Attend a Workshop</MenuItem>
                            </MenuList>
                        </Menu>
                    </Flex>
                    <Grid templateColumns='repeat(4, 1fr)' gap={3} mt='6'>
                        <Image src='gibbresh.png' fallbackSrc='https://via.placeholder.com/150' />
                        <Image src='gibbresh.png' fallbackSrc='https://via.placeholder.com/150' />
                        <Image src='gibbresh.png' fallbackSrc='https://via.placeholder.com/150' />
                        <Image src='gibbresh.png' fallbackSrc='https://via.placeholder.com/150' />
                        <Image src='gibbresh.png' fallbackSrc='https://via.placeholder.com/150' />
                        <Image src='gibbresh.png' fallbackSrc='https://via.placeholder.com/150' />
                        <Image src='gibbresh.png' fallbackSrc='https://via.placeholder.com/150' />
                        <Image src='gibbresh.png' fallbackSrc='https://via.placeholder.com/150' />
                        <Image src='gibbresh.png' fallbackSrc='https://via.placeholder.com/150' />
                        <Image src='gibbresh.png' fallbackSrc='https://via.placeholder.com/150' />
                    </Grid>

                </CardBody>

                <CardFooter  justifyContent='center'>
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
                            color='#ffffff'
                            _hover={{ bg: '#E42F2F' }}>
                        View all
                    </Button>
                </CardFooter>
            </Card>
        </Flex>
    )
}