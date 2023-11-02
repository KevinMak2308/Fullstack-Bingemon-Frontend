import React, {useEffect, useRef, useState} from 'react'

import {
    Box,
    Flex,
    Text,
    IconButton,
    Stack,
    Collapse,
    Icon,
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,
    useBreakpointValue,
    useDisclosure,
    Link,
} from '@chakra-ui/react'
import {
    HamburgerIcon,
    CloseIcon,
    ChevronDownIcon,
    ChevronRightIcon,
} from '@chakra-ui/icons'

export default function SubNav() {
    const linkColor = useColorModeValue('gray.600', 'gray.200')
    const linkHoverColor = useColorModeValue('gray.800', 'white')
    const popoverContentBgColor = useColorModeValue('white', 'gray.800')
    const { isOpen, onToggle } = useDisclosure()
    const [isLoggedIn, setIsLoggedIn] = useState(false);


    useEffect(() => {
        if(!localStorage.getItem('user')) {
            console.log("State of the user", isLoggedIn)
            setIsLoggedIn(true)
        }
    }, []);

    interface NavItem {
        label: string
        subLabel?: string
        children?: Array<NavItem>
        href?: string
    }

    const subNavItems : Array<NavItem> = isLoggedIn ?
        [
            { label:"Discover Movies",
            children: [
                {
                    label: "Browse Movies",
                    subLabel: "Start Swiping Now",
                }
            ]},
            {
                label: "Discover Series",
                    children: [
                        {
                            label: "Browse Series",
                            subLabel: "Start Swiping Now"
                        }
                    ]
            }
        ]:
        [
            {
                label:"Discover Movies",
            },
            {
                label: "Discover Series"
            }
        ];

    return (
        <Flex py={{ base: 2 }}
              px={{ base: 4 }}
              borderBottom={1}
              borderStyle={'solid'}
              borderColor={useColorModeValue('gray.200', 'gray.900')}
              align={'center'}>
            {isLoggedIn ? (
                    subNavItems.map((navItem) =>
                        <Flex
                            as="a"
                            p={2}
                            href={navItem.href ?? '#'}
                            fontSize={'sm'}
                            fontWeight={500}
                            color={linkColor}
                            _hover={{
                                textDecoration: 'none',
                                color: linkHoverColor,
                            }}>
                        <Popover trigger={'hover'} placement={'bottom-start'}>
                        <PopoverTrigger>
                            <Text>
                                {navItem.label}
                            </Text>
                        </PopoverTrigger>
                        <PopoverContent
                            border={0}
                            boxShadow={'xl'}
                            bg={popoverContentBgColor}
                            p={4}
                            rounded={'xl'}
                            minW={'sm'}>
                            {navItem.children && navItem.children.map((child) => (
                                <Stack>
                                    <Link>
                                        {child.label}
                                    </Link>
                                    <Link>
                                        {child.subLabel}
                                    </Link>
                                </Stack>
                            ))}
                        </PopoverContent>
                        </Popover>
                        </Flex>

                    )

            ):(
                    subNavItems.map((item) =>
                        <Text>
                            {item.label}
                        </Text>
                    )
            )}

        </Flex>

        )}