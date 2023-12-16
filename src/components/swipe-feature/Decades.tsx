import React, {useState} from "react";
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button,
} from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'

interface DecadesProps {
    onChange: (selectedDecades: string) => void;
}

export default function Decades({onChange}: DecadesProps ) {
    const [, setSelectedDecades] = useState<string | null>(null);

    const decades: Array<{ decades: string; years?: Array<{ decades: string }> }> =
        [
            {
                decades: '1950',
                years: [
                    {decades: '1950,1951,1952,1953,1954,1955,1956,1957,1958,1959'}
                ]
            },
            {
                decades: '1960',
                years: [
                    {decades: '1960,1961,1962,1963,1964,1965,1966,1967,1968,1969'}
                ]
            },
            {
                decades: '1970',
                years: [
                    {decades: '1970,1971,1972,1973,1974,1975,1976,1977,1978,1979'}
                ]
            },
            {
                decades: '1980',
                years: [
                    {decades: '1980,1981,1982,1983,1984,1985,1986,1987,1988,1989'}
                ]
            },
            {
                decades: '1990',
                years: [
                    {decades: '1990,1991,1992,1993,1994,1995,1996,1997,1998,1999'}
                ]
            },
            {
                decades: '2000',
                years: [
                    {decades: '2000,2001,2002,2003,2004,2005,2006,2007,2008,2009'}
                ]
            },
            {
                decades: '2010',
                years: [
                    {decades: '2010,2011,2012,2013,2014,2015,2016,2017,2018,2019'}
                ]
            },
            {
                decades: '2020',
                years: [
                    {decades: '2020,2021,2022,2023'}
                ]
            }
        ];

    const handleSelectionChange = (option: string) => {
        if (option) {
            setSelectedDecades(option);
            onChange(option);
            console.log("Selected Decade: ", option);
        }
    };

    return (
        <div>
            <Menu>
                <MenuButton
                    as={Button} rightIcon={<ChevronDownIcon />}
                    py={{base: "19px", sm: "20px", md: "21px", lg: "22px", xl: "23px", "2xl": "24px"}}
                    px={{base: "27px", sm: "28px", md: "29px", lg: "30px", xl: "31px", "2xl": "32px"}}
                    w="fit-content"
                    lineHeight='1.2'
                    transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
                    border=''
                    borderRadius='10px'
                    fontSize={{ base: "12px", sm:"13px", md: "13px", lg: "14px", xl: "15px", "2xl": "16px" }}
                    fontFamily='Roboto'
                    fontWeight='semibold'
                    letterSpacing='0.75px'
                    bg='#A61212'
                    color='#F0F0EE'
                    _hover={{ filter: 'brightness(1.2)' }}
                    _active={{ bg: '#A61212', filter: 'brightness(1.2)' }}
                    _focus={{ boxShadow: 'none' }}
                >
                    Decade
                </MenuButton>

                <MenuList
                    bg='#21201d'
                    color='#F0F0EE'
                    border='2px'
                    borderColor='#21201d'
                    borderRadius='10px'>
                    {decades.map((decade, index) => (
                        <div>
                            {decade.years && decade.years.map((year, yearIndex) => (
                        <MenuItem
                            onClick={() => handleSelectionChange(year.decades)}>
                            {decade.decades}</MenuItem>
                            ))}
                        </div>
                    ))}
                </MenuList>

            </Menu>
        </div>
    )
}