import React, {useState} from 'react';
import {Box, GridItem, SimpleGrid, Text} from '@chakra-ui/react';

interface DiscoverSecondaryFilterLanguageProps {
    onChange: (selectedLanguage: string) => void;
}

interface Language {
    name: string
    subname?: Array<{ name: string }>
}

export default function LanguageFilter({onChange}: DiscoverSecondaryFilterLanguageProps) {
    const [selectedLanguage, setSelectedLanguage] = useState("");

    const languages: Array<Language> = [
        {name: 'English', subname: [{name: 'en'}]},
        {name: 'Dansk', subname: [{name: 'da'}]},
    ];

    const handleSelectionChange = (option: string) => {
        if (option) {
            setSelectedLanguage(option);
            onChange(option);
            console.log("Selected Language: ", option);
        }
    };

    return (
        <SimpleGrid columns={[3, null, 6]} gap={{base: "4", md: "5", lg: "auto"}} textTransform="capitalize"
                    fontWeight='500' fontSize={{base: "14px", md: "15px", lg: "16px"}}>
            {languages.map((language, index) => (
                <GridItem key={index} w='100%' display="grid" gridGap="2">
                    {language.subname && language.subname.map((subLanguages) => (
                        <Box
                            bg={selectedLanguage === subLanguages.name ? '#A61212' : '#21201d'}
                            cursor='pointer'
                            p='10px'
                            border='2px'
                            borderColor='#A61212'
                            _hover={{bg: selectedLanguage === subLanguages.name ? '#c01515' : '#262521'}}
                            transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
                            borderRadius='10px'
                            color='#F0F0EE'
                            h={{base: "10vh", md: "16vh", lg: "12vh"}}
                            display='flex'
                            textAlign='center'
                            alignItems='center'
                            justifyContent='center'
                            onClick={() => handleSelectionChange(subLanguages.name)}
                        >
                            <Text>
                                {language.name}
                            </Text>
                        </Box>
                    ))}
                </GridItem>
            ))}
        </SimpleGrid>
    );
};