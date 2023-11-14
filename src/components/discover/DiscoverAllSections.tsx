import React, { useState } from 'react';
import {
    Box,
    Center,
    Flex,
    Heading,
} from '@chakra-ui/react';
import './../../App.css';
import DiscoverPrimaryFilter from './DiscoverPrimaryFilter';
import DiscoverSecondaryFilterDecade from './DiscoverSecondaryFilterDecade';
import DiscoverSecondaryFilterGenre from './DiscoverSecondaryFilterGenre';
import DiscoverSecondaryFilterLanguage from './DiscoverSecondaryFilterLanguage';
import DiscoverSortBy from './DiscoverSortBy';
import DiscoverMovies from './DiscoverMovies';

function DiscoverAllSections() {
    const [selectedPrimaryFilter, setSelectedPrimaryFilter] = useState<string | null>(null);
    const [selectedSecondaryFilters, setSelectedSecondaryFilters] = useState<string[]>([]);

    const handlePrimaryFilterChange = (selectedOption: string) => {
        setSelectedPrimaryFilter(selectedOption);
        // Clear secondary filters when changing the primary filter
        setSelectedSecondaryFilters([]);
    };

    const handleSecondaryFilterChange = (selectedFilters: string[]) => {
        // Update the selected secondary filters
        setSelectedSecondaryFilters(selectedFilters);
    };

    return (
        <Box bg='#1A1917' color='#dcdbd8'>
            <Flex
                py={{ base: '75px', md: '', lg: '90px' }}
                alignContent={'center'}
                justifyContent={'center'}
            >
                <Center>
                    <Box
                        display='grid'
                        gridGap={{ base: '16', md: '18', lg: '20' }}
                        w='80vw'
                    >
                        <Flex alignContent={'center'} justifyContent={'center'}>
                            <Heading
                                as='h1'
                                fontSize={{ base: '35px', md: '40px', lg: '45px' }}
                                textTransform='capitalize'
                            >
                                Discover Movies
                            </Heading>
                        </Flex>

                        <Box
                            display='grid'
                            gridGap={{ base: '4', md: '6', lg: '6' }}
                        >
                            <Heading
                                as='h2'
                                fontSize={{ base: '25px', md: '30px', lg: '35px' }}
                            >
                                Discover by
                            </Heading>
                            <DiscoverPrimaryFilter
                                onChange={handlePrimaryFilterChange}
                            />

                            {selectedPrimaryFilter === 'Decade' && (
                                <>
                                    <Heading
                                        as='h3'
                                        pt='15px'
                                        fontSize={{ base: '20px', md: '22px', lg: '25px' }}
                                    >
                                        All decades
                                    </Heading>
                                    <DiscoverSecondaryFilterDecade
                                        selectedFilters={selectedSecondaryFilters}
                                        onChange={handleSecondaryFilterChange}
                                    />
                                </>
                            )}

                            {selectedPrimaryFilter === 'Language' && (
                                <>
                                    <Heading
                                        as='h3'
                                        pt='15px'
                                        fontSize={{ base: '20px', md: '22px', lg: '25px' }}
                                    >
                                        Popular languages
                                    </Heading>
                                    {/* Use DiscoverSecondaryFilterLanguage here */}
                                    <DiscoverSecondaryFilterLanguage
                                        selectedFilters={selectedSecondaryFilters}
                                        onChange={handleSecondaryFilterChange}
                                    />
                                </>
                            )}

                            {selectedPrimaryFilter === 'Genre' && (
                                <>
                                    <Heading
                                        as='h3'
                                        pt='15px'
                                        fontSize={{ base: '20px', md: '22px', lg: '25px' }}
                                    >
                                        All genres
                                    </Heading>
                                    {/* Use DiscoverSecondaryFilterGenre here */}
                                    <DiscoverSecondaryFilterGenre
                                        selectedFilters={selectedSecondaryFilters}
                                        onChange={handleSecondaryFilterChange}
                                    />
                                </>
                            )}

                            <DiscoverSortBy />

                        </Box>

                        <DiscoverMovies />

                    </Box>
                </Center>
            </Flex>
        </Box>
    );
}

export default DiscoverAllSections;
