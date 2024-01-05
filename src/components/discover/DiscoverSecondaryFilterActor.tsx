import React, { useEffect, useState } from 'react';
import { Box, GridItem, SimpleGrid, Text, Image } from '@chakra-ui/react';
import httpService from "../../services/httpService";

interface DiscoverSecondaryFilterActorProps {
    onChange: (selectedActor: number) => void;
}

interface Actor {
    id: number;
    name: string;
    profile_path: string;
}

export default function DiscoverSecondaryFilterCast({ onChange }: DiscoverSecondaryFilterActorProps) {
    const actorsUrl = "/person/actors";
    const [actorsList, setActorsList] = useState<Actor[]>([]);
    const [, setSelectedActor] = useState(0);

    const fetchPopularActors = async () => {
        try {
            const { data } = await httpService.get(actorsUrl);
            setActorsList(data);
            console.log("Here is the data", data)
        } catch (error) {
            console.error("Something went wrong fetching: ", error);
        }
    }

    useEffect(() => {
        fetchPopularActors();
    }, []);

    const handleSelectionChange = (actorId: number) => {
        setSelectedActor(actorId);
        onChange(actorId);
        console.log("Selected Actor ID: ", actorId);
    }

    // Default img if movie doesn't have any movie poster
    const defaultImgUrl = "http://127.0.0.1:8080/default/poster_unavailable.jpg";

    return (
        <SimpleGrid columns={[2, 3, 3, 3, 4, 6]} gap={{base: "3", sm:"4", md: "5", lg: "auto"}}>
            {actorsList.map((actor, index) => (
                <GridItem key={index} w='100%' display="grid" gridGap="2">
                    <Box
                        bg= '#21201d'
                        _hover={{ bg: '#262521' }}
                        cursor='pointer'
                        className='SubheaderSmReg'
                        gap={{ lg: '15px', xl:'20px', "2xl":'20px' }}
                        p='10px'
                        border='2px'
                        borderColor='#A61212'
                        transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
                        borderRadius='10px'
                        color='#F0F0EE'
                        h={{ base: "10vh", md: "16vh", lg: "12vh" }}
                        display='flex'
                        textAlign='center'
                        alignItems='center'
                        justifyContent='center'
                        onClick={() => handleSelectionChange(actor.id)}
                    >
                        <Image
                            objectFit="cover"
                            src={actor.profile_path}
                            fallbackSrc={defaultImgUrl}
                            display={{ base: 'none', sm: 'none', md: 'none', lg: 'block', xl: 'block', "2xl": 'block' }}
                            borderRadius='50%'
                            h={{ lg: '55px', xl:'60px', "2xl":'75px' }}
                            w={{ lg: '55px', xl:'60px', "2xl":'75px' }}
                            border='solid 1.5px #A61212'
                            alt='Profile'
                        />
                        <Text
                            style={{
                                WebkitBoxOrient: 'vertical',
                                WebkitLineClamp: 2,
                                maxWidth: '100%',
                            }}
                        >
                            {actor.name}
                        </Text>
                    </Box>
                </GridItem>
            ))}
        </SimpleGrid>
    );
}
