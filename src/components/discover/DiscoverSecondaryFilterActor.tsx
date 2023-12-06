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
    const [selectedActor, setSelectedActor] = useState(0);

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

    return (
        <SimpleGrid columns={[3, null, 6]} gap={{ base: "4", md: "5", lg: "auto" }} textTransform="capitalize" fontWeight='500' fontSize={{ base: "14px", md: "15px", lg: "16px" }}>
            {actorsList.map((actor, index) => (
                <GridItem key={index} w='100%' display="grid" gridGap="2">
                    <Box
                        bg={selectedActor === actor.id ? '#A61212' : '#21201d'}
                        cursor='pointer'
                        p='10px'
                        border='2px'
                        borderColor='#A61212'
                        _hover={{ bg: selectedActor === actor.id ? '#c01515' : '#262521' }}
                        transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
                        borderRadius='10px'
                        color='#F0F0EE'
                        h={{ base: "10vh", md: "16vh", lg: "40vh" }}
                        display='flex'
                        flexDirection="column"
                        textAlign='center'
                        alignItems='center'
                        justifyContent='center'
                        onClick={() => handleSelectionChange(actor.id)}
                    >
                        <Box>
                            <Image
                                src={actor.profile_path}
                                alt="actor_image"
                                boxSize="full"
                                width='100%'
                                height='100%'
                                objectFit='cover'
                                backgroundPosition="center"
                                backgroundRepeat="no-repeat"
                                backgroundSize="cover"
                                borderRadius='10px'
                                border='2px'
                                borderColor='#A61212'
                                mb={{base: "5px", md: "8px", lg: "12px"}}
                            />
                        </Box>
                        <Text
                            pt={{base: "5px", md: "8px", lg: "12px"}}>
                            {actor.name}
                        </Text>
                    </Box>
                </GridItem>
            ))}
        </SimpleGrid>
    );
}
