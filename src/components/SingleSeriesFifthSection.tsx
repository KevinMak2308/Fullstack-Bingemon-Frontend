import React from 'react';
import '../App.css';
import {
    Box,
    Button,
    Center,
    Flex,
    GridItem,
    Heading,
    Image,
    SimpleGrid,
    Text
} from '@chakra-ui/react';

function SingleSeriesFifthSection() {
    return (
        <Box bg='#21201d' color='#dcdbd8'>
            <Flex py={{ base: '75px', md: '', lg: '90px' }} alignContent={"center"} justifyContent={"center"}>
                <Center>
                    <Box display="grid" gridGap={{ base: "4", md: "6", lg: "8" }} w="80vw">
                        <Heading as='h2' fontSize={{ base: "25px", md: "30px", lg: "35px" }}>
                            Liked by these friends
                        </Heading>
                        <SimpleGrid columns={[3, null, 6]} gap={6} fontWeight='400' fontSize={{ base: "13px", md: "14px", lg: "15px" }}>
                            <GridItem w='100%' display="grid" gridGap="2">
                                <Image src='gibbresh.png' fallbackSrc='https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder.png' />
                                <Text textAlign="center" > Name Lorem Ipsum</Text>
                            </GridItem>
                            <GridItem w='100%' display="grid" gridGap="2">
                                <Image src='gibbresh.png' fallbackSrc='https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder.png' />
                                <Text textAlign="center" > Name Lorem Ipsum</Text>
                            </GridItem>
                            <GridItem w='100%' display="grid" gridGap="2">
                                <Image src='gibbresh.png' fallbackSrc='https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder.png' />
                                <Text textAlign="center" > Name Lorem Ipsum</Text>
                            </GridItem>
                            <GridItem w='100%' display="grid" gridGap="2">
                                <Image src='gibbresh.png' fallbackSrc='https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder.png' />
                                <Text textAlign="center" > Name Lorem Ipsum</Text>
                            </GridItem>
                            <GridItem w='100%' display="grid" gridGap="2">
                                <Image src='gibbresh.png' fallbackSrc='https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder.png' />
                                <Text textAlign="center" > Name Lorem Ipsum</Text>
                            </GridItem>
                            <GridItem w='100%' display="grid" gridGap="2">
                                <Image src='gibbresh.png' fallbackSrc='https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder.png' />
                                <Text textAlign="center" > Name Lorem Ipsum</Text>
                            </GridItem>
                            <GridItem w='100%' display="grid" gridGap="2">
                                <Image src='gibbresh.png' fallbackSrc='https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder.png' />
                                <Text textAlign="center" > Name Lorem Ipsum</Text>
                            </GridItem>
                            <GridItem w='100%' display="grid" gridGap="2">
                                <Image src='gibbresh.png' fallbackSrc='https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder.png' />
                                <Text textAlign="center" > Name Lorem Ipsum</Text>
                            </GridItem>
                            <GridItem w='100%' display="grid" gridGap="2">
                                <Image src='gibbresh.png' fallbackSrc='https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder.png' />
                                <Text textAlign="center" > Name Lorem Ipsum</Text>
                            </GridItem>
                            <GridItem w='100%' display="grid" gridGap="2">
                                <Image src='gibbresh.png' fallbackSrc='https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder.png' />
                                <Text textAlign="center" > Name Lorem Ipsum</Text>
                            </GridItem>
                            <GridItem w='100%' display="grid" gridGap="2">
                                <Image src='gibbresh.png' fallbackSrc='https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder.png' />
                                <Text textAlign="center" > Name Lorem Ipsum</Text>
                            </GridItem>
                            <GridItem w='100%' display="grid" gridGap="2">
                                <Image src='gibbresh.png' fallbackSrc='https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder.png' />
                                <Text textAlign="center" > Name Lorem Ipsum</Text>
                            </GridItem>
                        </SimpleGrid>
                        <Flex alignContent={"center"} justifyContent={"center"}>
                            <Button
                                py={{base: "24px", md: "26px", lg: "25px"}}
                                px={{base: "28px", md: "29px", lg: "30px"}}
                                mt='20px'
                                lineHeight='1.2'
                                transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
                                border=''
                                borderRadius='10px'
                                fontSize={{ base: "14px", md: "15px", lg: "16px" }}
                                fontWeight='semibold'
                                bg='#A61212'
                                color='#F0F0EE'
                                _hover={{ bg: '#c01515' }}>
                                View all
                            </Button>
                        </Flex>
                    </Box>
                </Center>
            </Flex>
        </Box>
    );
}

export default SingleSeriesFifthSection;