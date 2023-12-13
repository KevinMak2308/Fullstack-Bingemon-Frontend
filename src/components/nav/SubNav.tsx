import React from 'react'
import {Flex, Menu, MenuButton, MenuItem, MenuList, Text, useColorModeValue,} from '@chakra-ui/react'
import {Link as ReactRouterLink} from 'react-router-dom'

export default function SubNav() {
    interface NavItem {
        label: string
        subLabel?: string
        children?: Array<NavItem>
        href?: string
    }

    const subNavItems: Array<NavItem> =
        [
            {
                label: "Discover Movies",
                children: [
                    {
                        label: "Browse Movies",
                        subLabel: "Start Swiping Now",
                    }
                ]
            },
            {
                label: "Discover Series",
                children: [
                    {
                        label: "Browse Series",
                        subLabel: "Start Swiping Now"
                    }
                ]
            }
        ]

    return (
        <Flex
            color={useColorModeValue('#21201D', '#F0F0EE')}
            h={{base: "6vh", sm: "6vh", md: "6vh", lg: "8vh", xl: "8vh", "2xl": "8vh"}}
            gap={{base: "40px", sm: "45px", md: "50px", lg: "55px", xl: "60px", "2xl": "65px"}}
            borderStyle={'none'}
            borderColor={useColorModeValue('gray.200', 'gray.900')}
            borderRadius='10px'
            align={'center'}
            justify={'start'} // Center the content horizontally
            w={'90vw'} // Set the width to 90vw
            mx={'auto'} // Center the content horizontally
        >
            {subNavItems.map((navItem) => (
                <Menu key={navItem.label}>
                    <MenuButton
                        as={Flex}
                        className="SubheaderSmBold"
                        cursor='pointer'
                        py={{base: 2}}
                        _hover={{filter: 'brightness(1.2)'}}
                    >
                        <Text as={ReactRouterLink} to={navItem.href ?? '#'}>
                            {navItem.label}
                        </Text>
                    </MenuButton>
                    {navItem.children &&
                        navItem.children.map((child, index) => (
                            <MenuList
                                key={index}
                                boxShadow="xl"
                                py='4'
                                bg="#343434"
                                border="#343434"
                                color="#F0F0EE"
                                zIndex="2000"
                                rounded="10px"
                                minW="xs"
                            >
                                <MenuItem
                                    as={ReactRouterLink}
                                    to="/discover"
                                    bg="#343434"
                                    py='3'
                                    px='6'
                                    className='BodyReg'
                                    _hover={{filter: 'brightness(1.4)'}}
                                    transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
                                >
                                    {child.label}
                                </MenuItem>
                                <MenuItem
                                    as={ReactRouterLink}
                                    to="/"
                                    bg="#343434"
                                    py='3'
                                    px='6'
                                    className='BodyReg'
                                    _hover={{filter: 'brightness(1.4)'}}
                                    transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
                                >
                                    {child.subLabel}
                                </MenuItem>
                            </MenuList>
                        ))}
                </Menu>
            ))}
        </Flex>
    );
}