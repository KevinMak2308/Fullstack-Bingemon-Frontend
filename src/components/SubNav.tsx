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
        <Box>
            {isLoggedIn ? (
                    subNavItems.map((navItem) =>
                        <Flex flexDirection="row">
                        <Popover trigger={'hover'} placement={'bottom-start'}>
                        <PopoverTrigger>
                            <Text>
                                {navItem.label}
                            </Text>
                        </PopoverTrigger>
                        <PopoverContent>
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

        </Box>

        )}