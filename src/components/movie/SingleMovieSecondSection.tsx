import React, {useRef, useState} from 'react';
import '../../App.css';
import {
    AspectRatio,
    Box,
    Button,
    Center,
    Flex,
    GridItem,
    Image,
    SimpleGrid,
    Text,
    useColorModeValue
} from '@chakra-ui/react';
import {Cast} from "../../pages/SingleMoviePage";

function SingleMovieSecondSection({actors}: Cast) {
    const [showFullCast, setShowFullCast] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);

    const handleShowLessClick = () => {
        setShowFullCast((prev) => !prev);

        if (sectionRef.current) {
            sectionRef.current.scrollIntoView({behavior: 'smooth'});
        }
    };

    const defaultImgUrl = "http://127.0.0.1:8080/default/user_unavailable.jpg";

    const shouldShowButton = actors.length > 6;

    return (
        <Box ref={sectionRef} bg={useColorModeValue('#e5e5e5', '#21201D')}
             color={useColorModeValue('#21201D', '#F0F0EE')}>
            <Flex py={{
                base: '75px',
                sm: '80px',
                md: '85px',
                lg: '90px',
                xl: '95px',
                '2xl': '100px',
            }}
                  alignContent={"center"}
                  justifyContent={"center"}>
                <Center>
                    <Box display="grid"
                         gap={{base: "15px", sm: "16px", md: "17px", lg: "18px", xl: "19px", "2xl": "20px"}} w="80vw">
                        <Text as='h2'>
                            Stars
                        </Text>
                        <SimpleGrid columns={[3, 3, 4, 5, 6, 6]}
                                    gap={{base: "12px", sm: "14px", md: "16px", lg: "18px", xl: "22px", "2xl": "26px"}}
                                    className='MovieTitle'>
                            {showFullCast ? (
                                actors.slice(0, 24).map((actor) => (
                                    <GridItem w='100%' display="grid" gap={{
                                        base: "4px",
                                        sm: "5px",
                                        md: "6px",
                                        lg: "7px",
                                        xl: "8px",
                                        "2xl": "9px"
                                    }} key={actor.id}>
                                        <AspectRatio ratio={2 / 3}>
                                            <Image
                                                backgroundPosition='center'
                                                backgroundRepeat='no-repeat'
                                                backgroundSize='cover'
                                                objectFit='cover'
                                                border='solid 1.5px transparent'
                                                borderRadius='5px'
                                                transition='all 0.5s cubic-bezier(.08,.52,.52,1)'
                                                width='100%'
                                                src={actor.profile_path}
                                                fallbackSrc={defaultImgUrl}
                                                alt={"Picture of: " + actor.name}
                                            />
                                        </AspectRatio>
                                        <Text textAlign="center">{actor.name}</Text>
                                    </GridItem>
                                ))
                            ) : (
                                actors.slice(0, 6).map((actor) => (
                                    <GridItem w='100%' display="grid" gap={{
                                        base: "4px",
                                        sm: "5px",
                                        md: "6px",
                                        lg: "7px",
                                        xl: "8px",
                                        "2xl": "9px"
                                    }} key={actor.id}>
                                        <AspectRatio ratio={2 / 3}>
                                            <Image
                                                backgroundPosition='center'
                                                backgroundRepeat='no-repeat'
                                                backgroundSize='cover'
                                                objectFit='cover'
                                                border='solid 1.5px transparent'
                                                borderRadius='5px'
                                                transition='all 0.5s cubic-bezier(.08,.52,.52,1)'
                                                width='100%'
                                                src={actor.profile_path}
                                                fallbackSrc={defaultImgUrl}
                                                alt={"Picture of: " + actor.name}
                                            />
                                        </AspectRatio>
                                        <Text textAlign="center">{actor.name}</Text>
                                    </GridItem>
                                ))
                            )}
                        </SimpleGrid>
                        {shouldShowButton && (
                            <Flex alignContent={"center"} justifyContent={"center"}
                                  mt={{ base: '15px', sm: '15px', md: '15px', lg: '15px', xl: '20px', "2xl": '25px' }}>
                                <Button
                                    onClick={handleShowLessClick}
                                    py={{ base: "19px", sm: "20px", md: "21px", lg: "22px", xl: "23px", "2xl": "24px" }}
                                    px={{ base: "27px", sm: "28px", md: "29px", lg: "30px", xl: "31px", "2xl": "32px" }}
                                    w="fit-content"
                                    lineHeight='1.2'
                                    transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
                                    border=''
                                    borderRadius='10px'
                                    fontSize={{ base: "12px", sm: "13px", md: "13px", lg: "14px", xl: "15px", "2xl": "16px" }}
                                    fontFamily='Roboto'
                                    fontWeight='semibold'
                                    letterSpacing='0.75px'
                                    bg='#A61212'
                                    color='#F0F0EE'
                                    _hover={{ filter: 'brightness(1.2)' }}
                                    _active={{ bg: '#A61212', filter: 'brightness(1.2)' }}
                                    _focus={{ boxShadow: 'none' }}
                                >
                                    {showFullCast ? 'Show less' : 'Show more'}
                                </Button>
                            </Flex>
                        )}
                    </Box>
                </Center>
            </Flex>
        </Box>
    );
}

export default SingleMovieSecondSection;