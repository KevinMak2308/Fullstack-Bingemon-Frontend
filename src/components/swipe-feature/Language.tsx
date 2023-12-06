import React, {Fragment, useEffect, useState} from "react";
import httpService from "../../services/httpService";
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button,
    Box,
} from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'

interface LanguageProps {
    onChange: (selectedLanguage: string) => void;
}
interface Language {
    name: string
    subname?: Array<{ name: string }>
}

export default function Language ({onChange}: LanguageProps) {
    const [selectedLanguage, setSelectedLanguage] = useState(""); // Add this line

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
        <div>
            <Menu>
                <MenuButton
                    as={Button} rightIcon={<ChevronDownIcon />}
                    bg='#A61212'
                    _hover={{bg: '#A61212'}}
                    cursor='pointer'
                    borderRadius='10px'
                    color='#F0F0EE'
                    width='200px'
                >
                    Language
                </MenuButton>

                <MenuList
                    bg='#21201d'
                    color='#F0F0EE'
                    border='2px'
                    borderColor='#21201d'
                    borderRadius='10px'>
                    {languages.map((language, index) => (
                    <div>
                        {language.subname && language.subname.map((subLanguages, index) => (
                        <MenuItem
                            onClick={() => handleSelectionChange(subLanguages.name)}>{language.name}</MenuItem>
                        ))}
                    </div>
                    ))}
                </MenuList>
            </Menu>
        </div>
    )
}