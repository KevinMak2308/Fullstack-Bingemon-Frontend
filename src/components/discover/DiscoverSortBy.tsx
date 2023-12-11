import { useState, useEffect } from 'react';
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button,
    GridItem,
    SimpleGrid,
    Tag, TagCloseButton,
    Flex, Wrap,
    WrapItem
} from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import SortButton from '../buttons/SortButton';

const genreMap: Record<string, string> = {
    '28': 'Action',
    '12': 'Adventure',
    '16': 'Animation',
    '35': 'Comedy',
    '80': 'Crime',
    '99': 'Documentary',
    '18': 'Drama',
    '10751': 'Family',
    '14': 'Fantasy',
    '36': 'History',
    '27': 'Horror',
    '10402': 'Music',
    '9648': 'Mystery',
    '10749': 'Romance',
    '878': 'Science Fiction',
    '10770': 'TV Movie',
    '53': 'Thriller',
    '10752': 'War',
    '37': 'Western',
};

const decadeMap: Record<string, string> = {
    '1950,1951,1952,1953,1954,1955,1956,1957,1958,1959': '1950s',
    '1960,1961,1962,1963,1964,1965,1966,1967,1968,1969': '1960s',
    '1970,1971,1972,1973,1974,1975,1976,1977,1978,1979': '1970s',
    '1980,1981,1982,1983,1984,1985,1986,1987,1988,1989': '1980s',
    '1990,1991,1992,1993,1994,1995,1996,1997,1998,1999': '1990s',
    '2000,2001,2002,2003,2004,2005,2006,2007,2008,2009': '2000s',
    '2010,2011,2012,2013,2014,2015,2016,2017,2018,2019': '2010s',
    '2020,2021,2022,2023': '2020s (up to 2023)'
};

const languageMap: Record<string, string> = {
    'en': 'English',
    'da': 'Dansk'
};

function DiscoverSortBy({ selectedGenre, selectedDecade, selectedLanguage }: any) {
    const [tags, setTags] = useState<any[]>([]);

    useEffect(() => {
        const updatedTags = [];

        if (selectedGenre && genreMap[selectedGenre]) {
            updatedTags.push(`Genre: ${genreMap[selectedGenre]}`);
        }
        if (selectedDecade && decadeMap[selectedDecade]) {
            updatedTags.push(`Decade: ${decadeMap[selectedDecade]}`);
        }
        if (selectedLanguage && languageMap[selectedLanguage]) {
            updatedTags.push(`Language: ${languageMap[selectedLanguage]}`);
        }

        setTags(updatedTags);
    }, [selectedGenre, selectedDecade, selectedLanguage]);

    const removeTag = (tagToRemove: string) => {
        const updatedTags = tags.filter((tag) => tag !== tagToRemove);
        setTags(updatedTags);
    };

    // SORT BUTTON
    const handleSortChange = (sortOption: string) => {
        console.log('Sorting option selected:', sortOption);
    };
    const sortingOptions = [
        'Popularity ascending',
        'Popularity descending',
        'Release Date ascending',
        'Release Date descending',
        'Title (A-Z)',
        'Title (Z-A)',
    ];

    return (
        <SimpleGrid columns={[2, null, 2]} w='80vw'>
            <Flex justify={"start"}>
                <Wrap spacing={{ base: "8px", sm:"8px", md: "8px", lg: "10px", xl:"10px", "2xl":"10px" }}>
                    {tags.map((tag, index) => (
                        <WrapItem key={index}>
                            <Tag
                                fontFamily='Roboto'
                                fontSize={{
                                    base: '10px',
                                    sm: '11px',
                                    md: '12px',
                                    lg: '13px',
                                    xl: '14px',
                                    '2xl': '15px',
                                }}
                                py={{ base: "7px", sm:"9", md: "9px", lg: "10px", xl:"11px", "2xl":"12px" }}
                                px={{ base: "17px", sm: "19px", md: "19px", lg: "20px", xl:"21px", "2xl":"22px" }}
                                transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
                                borderRadius='100px'
                                border=''
                                cursor='default'
                                bg='#343434'
                                borderColor=''
                                _hover={{ bg: '#3b3b3b' }}
                            >
                                {tag}
                                <TagCloseButton onClick={() => removeTag(tag)} />
                            </Tag>
                        </WrapItem>
                    ))}
                </Wrap>
            </Flex>
            <Flex justify={"end"} alignItems={'center'}>
                <SortButton onSortChange={handleSortChange} sortingOptions={sortingOptions} />
            </Flex>
        </SimpleGrid>
    );
}

export default DiscoverSortBy;