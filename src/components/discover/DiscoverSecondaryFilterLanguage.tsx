import React, { useState, useEffect } from 'react';
import { Box, GridItem, SimpleGrid, Text } from '@chakra-ui/react';
import httpService from "../../services/httpService";

interface languageFilterProps {
    languageNames: string[],
    onChange: (selectedFilters: string[]) => void;
}

interface Language {
    name: string
    subname?: Array<Language>
}

export default function LanguageFilter ({languageNames, onChange}: languageFilterProps) {
    const [selectedItem, setSelectedItem] = useState("")

    const languages : Array<Language> = [
        {name:'English',
            subname: [{name:'en'}]
        },
        {name:'Dansk',
            subname: [{name:'dk'}]
        },

    ]

    const handleSelectionChange = (option: string) => {
        if(option) {
            setSelectedItem(option)
            console.log("Selected Genre ID: ", selectedItem)
        }
    }


    return (
        <SimpleGrid columns={[3, null, 6]} gap={{ base: "4", md: "5", lg: "auto" }} textTransform="capitalize" fontWeight='500' fontSize={{ base: "14px", md: "15px", lg: "16px" }}>
            {languages.map((language, index) => (
                <GridItem key={index} w='100%' display="grid" gridGap="2">
                    {language.subname && language.subname.map((subLanguages, index) =>
                    <Box
                        bg={selectedItem === subLanguages.name ? '#A61212' : '#21201d'}
                        cursor='pointer'
                        p='10px'
                        border='2px'
                        borderColor='#A61212'
                        _hover={{ bg: selectedItem === subLanguages.name ? '#c01515' : '#262521' }}
                        transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
                        borderRadius='10px'
                        color='#F0F0EE'
                        h={{ base: "10vh", md: "16vh", lg: "12vh" }}
                        display='flex'
                        textAlign='center'
                        alignItems='center'
                        justifyContent='center'

                        onClick={() => handleSelectionChange(subLanguages.name)}>
                        <Text>
                            {language.name}
                        </Text>
                    </Box>
                        )}
                </GridItem>
            ))}
        </SimpleGrid>
    );
}