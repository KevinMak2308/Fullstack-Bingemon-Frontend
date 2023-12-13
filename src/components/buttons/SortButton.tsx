import React from 'react';
import {Box, Menu, MenuButton, MenuItem, MenuList} from '@chakra-ui/react';

interface SortButtonProps {
    onSortChange: (sortOption: string) => void;
    sortingOptions: string[];
}

function SortButton({onSortChange, sortingOptions}: SortButtonProps) {
    return (
        <Menu placement="bottom-end">
            <MenuButton
                bg="#343434"
                color="#F0F0EE"
                w="fit-content"
                borderRadius="10px"
                fontWeight="semibold"
                fontFamily='Roboto'
                fontSize={{
                    base: '10px',
                    sm: '11px',
                    md: '12px',
                    lg: '13px',
                    xl: '14px',
                    '2xl': '15px',
                }}
                _hover={{filter: 'brightness(1.4)'}}
                _active={{bg: '#484848', color: '#F0F0EE'}}
                transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
                style={{padding: 0, margin: 0}}
            >
                <Box
                    paddingY={{
                        base: '6px',
                        sm: '7px',
                        md: '8px',
                        lg: '9px',
                        xl: '10px',
                        '2xl': '11px',
                    }}
                    paddingX={{
                        base: '12px',
                        sm: '13px',
                        md: '14px',
                        lg: '15px',
                        xl: '16px',
                        '2xl': '17px',
                    }}
                    display="flex"
                    alignItems="center"
                    gap="2"
                >
                    Sort by
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                        <path fill="currentColor"
                              d="M12 14.975q-.2 0-.375-.062T11.3 14.7l-4.6-4.6q-.275-.275-.275-.7t.275-.7q.275-.275.7-.275t.7.275l3.9 3.9l3.9-3.9q.275-.275.7-.275t.7.275q.275.275.275.7t-.275.7l-4.6 4.6q-.15.15-.325.213t-.375.062Z"/>
                    </svg>
                </Box>
            </MenuButton>
            <MenuList bg="#343434" border="#343434" color="#F0F0EE" zIndex="2000">
                {sortingOptions.map((option, index) => (
                    <MenuItem
                        key={index}
                        onClick={() => onSortChange(option)}
                        fontSize={{base: "10px", sm: "11px", md: "12px", lg: "13px", xl: "14px", "2xl": "15px"}}
                        fontFamily='Roboto'
                        bg="#343434"
                        _hover={{filter: 'brightness(1.4)'}}
                        transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
                    >
                        {option}
                    </MenuItem>
                ))}
            </MenuList>
        </Menu>
    );
}

export default SortButton;
