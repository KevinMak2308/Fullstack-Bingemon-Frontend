import React from 'react'

import {
    Flex,
    Text,
    Stack,
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,
    useDisclosure,
    Link as ChakraLink,
} from '@chakra-ui/react'
import { Link as ReactRouterLink } from 'react-router-dom'

export default function SubNav() {
    const linkColor = useColorModeValue('gray.600', 'gray.200')
    const linkHoverColor = useColorModeValue('gray.800', 'white')
    const popoverContentBgColor = useColorModeValue('white', 'gray.800')
    const { isOpen, onToggle } = useDisclosure()


    interface NavItem {
        label: string
        subLabel?: string
        children?: Array<NavItem>
        href?: string
    }

    const subNavItems : Array<NavItem> =
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
        ]

    return (
        <Flex py={{ base: 2 }}
              px={{ base: 4 }}
              borderBottom={1}
              borderStyle={'none'}
              borderColor={useColorModeValue('gray.200', 'gray.900')}
              align={'center'}
       >

            {subNavItems.map((navItem) =>
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
                    }} key={navItem.label}>
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
                            {navItem.children && navItem.children.map((child, index) => (
                                <Stack key={index}>
                                    <ChakraLink as={ReactRouterLink} to="/discover">
                                        {child.label}
                                    </ChakraLink>
                                    <ChakraLink as={ReactRouterLink} to="/">
                                        {child.subLabel}
                                    </ChakraLink>
                                </Stack>
                            ))}
                        </PopoverContent>
                    </Popover>
                </Flex>
            )}

        </Flex>
        )}