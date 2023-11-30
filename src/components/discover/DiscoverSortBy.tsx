import { useState, useEffect } from 'react';
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    Button,
    GridItem,
    SimpleGrid,
    Text,
    Tag, TagLabel, TagCloseButton,
    Box, Flex, Center,     Wrap,
    WrapItem
} from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'

function DiscoverSortBy({ selectedGenre, selectedDecade, selectedLanguage }: any) {
    const [tags, setTags] = useState<any[]>([]);

    useEffect(() => {
        const updatedTags = [];

        if (selectedGenre) {
            updatedTags.push(`Genre: ${selectedGenre}`);
        }
        if (selectedDecade) {
            updatedTags.push(`Decade: ${selectedDecade}`);
        }
        if (selectedLanguage) {
            updatedTags.push(`Language: ${selectedLanguage}`);
        }

        setTags(updatedTags);
    }, [selectedGenre, selectedDecade, selectedLanguage]);

    const removeTag = (tagToRemove: string) => {
        const updatedTags = tags.filter((tag) => tag !== tagToRemove);
        setTags(updatedTags);
    };
    return (
        <SimpleGrid columns={[2, null, 2]} w='80vw'>
            <Flex justify={"start"}>
                <Wrap spacing='7px'>
                    {tags.map((tag, index) => (
                        <WrapItem key={index}>
                            <Tag
                                size="md"
                                py={{ base: "8px", md: "9px", lg: "10px" }}
                                px={{ base: "18px", md: "19px", lg: "20px" }}
                                lineHeight='1.2'
                                transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
                                borderRadius='100px'
                                border=''
                                fontSize={{ base: "13px", md: "14px", lg: "15px" }}
                                fontWeight='normal'
                                cursor='default'
                                bg='#343434'
                                borderColor=''
                                color='#F0F0EE'
                                _hover={{ bg: '#3b3b3b' }}
                            >
                                {tag}
                                <TagCloseButton onClick={() => removeTag(tag)} />
                            </Tag>
                        </WrapItem>
                    ))}
                </Wrap>
            </Flex>

            <Flex justify={"end"}>
                <GridItem>
                    <Menu placement="bottom-end">
                        <MenuButton as={Button} bg='#343434' _hover={{bg:'#3b3b3b'}} rightIcon={<ChevronDownIcon />}>
                            Sort by
                        </MenuButton>
                        <MenuList >
                            <MenuItem>Popularity ascending</MenuItem>
                            <MenuItem>Popularity descending</MenuItem>
                            <MenuItem>Release Date ascending</MenuItem>
                            <MenuItem>Release Date descending</MenuItem>
                            <MenuItem>Title (A-Z)</MenuItem>
                            <MenuItem>Title (Z-A)</MenuItem>
                        </MenuList>
                    </Menu>
                </GridItem>
            </Flex>
        </SimpleGrid>
    );
}

export default DiscoverSortBy;