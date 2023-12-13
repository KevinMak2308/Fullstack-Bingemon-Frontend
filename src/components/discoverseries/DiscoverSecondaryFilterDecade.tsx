import React, { useState } from 'react';
import { Box, GridItem, SimpleGrid, Text } from '@chakra-ui/react';

interface DiscoverSecondaryFilterDecadeProps {
    onChange: (selectedDecade: string) => void;
}

export default function DecadeFilter({onChange}: DiscoverSecondaryFilterDecadeProps ) {
    const [selectedDecade, setSelectedDecade] = useState<string | null>(null);

    const decades: Array<{ decades: string; years?: Array<{ decades: string }> }> =
        [
            {
                decades: '1950',
                years: [
                    { decades: '1950,1951,1952,1953,1954,1955,1956,1957,1958,1959' }
                ]
            },
            {
                decades: '1960',
                years: [
                    { decades: '1960,1961,1962,1963,1964,1965,1966,1967,1968,1969' }
                ]
            },
            {
                decades: '1970',
                years: [
                    { decades: '1970,1971,1972,1973,1974,1975,1976,1977,1978,1979' }
                ]
            },
            {
                decades: '1980',
                years: [
                    { decades: '1980,1981,1982,1983,1984,1985,1986,1987,1988,1989' }
                ]
            },
            {
                decades: '1990',
                years: [
                    { decades: '1990,1991,1992,1993,1994,1995,1996,1997,1998,1999' }
                ]
            },
            {
                decades: '2000',
                years: [
                    { decades: '2000,2001,2002,2003,2004,2005,2006,2007,2008,2009' }
                ]
            },
            {
                decades: '2010',
                years: [
                    { decades: '2010,2011,2012,2013,2014,2015,2016,2017,2018,2019' }
                ]
            },
            {
                decades: '2020',
                years: [
                    { decades: '2020,2021,2022,2023' }
                ]
            }
    ];

    const handleSelectionChange = (option: string) => {
        if (option) {
            setSelectedDecade(option);
            onChange(option);
            console.log("Selected Decade: ", option);
        }
    };

    return (
        <SimpleGrid columns={[3, null, 6]} gap={{ base: "4", md: "5", lg: "auto" }} textTransform="capitalize" fontWeight='500' fontSize={{ base: "14px", md: "15px", lg: "16px" }}>
            {decades.map((decade, decadeIndex) => (
                <GridItem key={decadeIndex} w='100%' display="grid" gridGap="2">
                    {decade.years && decade.years.map((year, yearIndex) => (
                        <Box
                            bg={selectedDecade === year.decades ? '#A61212' : '#21201d'}
                            cursor='pointer'
                            p='10px'
                            border='2px'
                            borderColor='#A61212'
                            _hover={{ bg: selectedDecade === year.decades ? '#c01515' : '#262521' }}
                            transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
                            borderRadius='10px'
                            color='#F0F0EE'
                            h={{ base: "10vh", md: "16vh", lg: "12vh" }}
                            display='flex'
                            textAlign='center'
                            alignItems='center'
                            justifyContent='center'
                            key={yearIndex}
                            onClick={() => handleSelectionChange(year.decades)}
                        >
                            <Text>
                                {decade.decades}
                            </Text>
                        </Box>
                    ))}
                </GridItem>
            ))}
        </SimpleGrid>
    );
}