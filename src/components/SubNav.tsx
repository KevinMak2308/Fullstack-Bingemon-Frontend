import React, { useEffect, useState } from 'react'

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
    const [hasUser, setHasUser] = useState(false);

    useEffect(  () => {
        const user = localStorage.getItem("user")
        if(user) {
            console.log("user is logged in")
            setHasUser(true);
        }
        console.log("userState", hasUser)
    }, []);

    interface NavItem {
        label: string
        subLabel?: string
        children?: Array<NavItem>
        href?: string
    }

    const subNavItems : Array<NavItem> = hasUser ?
        [
            { label:"Discover Movies",
            children: [
                { label:"Browse Movies",
                    subLabel:"Start swipping now",
                    href:"/profilepage"}
            ]}
        ]:
        [
            { label:"Discover Movies",
                href:"/profilepage"}
        ];

    return (
        <Box>
            {hasUser ? (
                    subNavItems.map((item) =>
                        <Popover>
                        <Link href={item.href}>
                            <Text>
                                {item.label}
                                {item.subLabel}
                            </Text>
                        </Link>
                        </Popover>

                    )

            ):(
                    subNavItems.map((item, index) =>
                        <Popover key={index}>
                        <Link href={item.href}>
                            <Text>
                                {item.label}
                            </Text>
                        </Link>
                        </Popover>
                    )

            )}

        </Box>

        )}

        /*<Box>
            {hasUser ? ()}
            <Flex
                /!*bg={useColorModeValue('white', 'grey.100')}
                color={useColorModeValue('gray.600', 'white')}*!/
                minH={'60px'}
                py={{ base: 2 }}
                px={{ base: 4 }}
                align={'center'}>
                <Flex
                    flex={{ base: 1, md: 'auto' }}
                    ml={{ base: -2 }}
                    display={{ base: 'flex', md: 'none' }}>
                    <IconButton
                        onClick={onToggle}
                        icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />}
                        variant={'ghost'}
                        aria-label={'Toggle Navigation'}
                    />
                </Flex>
                <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>


                    <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
                        <Stack direction={'row'} spacing={4}>
                            {NAV_ITEMS.map((navItem) => (
                                <Box key={navItem.label}>
                                    <Popover trigger={'hover'} placement={'bottom-start'}>
                                        <PopoverTrigger>
                                            <Box
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
                                                {navItem.label}
                                            </Box>
                                        </PopoverTrigger>

                                                    <PopoverContent
                                                        border={0}
                                                        boxShadow={'xl'}
                                                        bg={popoverContentBgColor}
                                                        p={4}
                                                        rounded={'xl'}
                                                        minW={'sm'}>
                                                        <Stack>
                                                                <Box
                                                                    as="a"
                                                                    href="/linkisnotworking"
                                                                    role={'group'}
                                                                    display={'block'}
                                                                    rounded={'md'}
                                                                    >
                                                                    <Stack direction={'row'} align={'center'}>
                                                                        <Box>
                                                                            <Text
                                                                                transition={'all .3s ease'}
                                                                                _groupHover={{ color: 'red.100' }}
                                                                                fontWeight={500}>
                                                                                Browse movies
                                                                            </Text>
                                                                            <Text fontSize={'sm'}>Start swipping now</Text>
                                                                        </Box>
                                                                        <Flex
                                                                            transition={'all .3s ease'}
                                                                            transform={'translateX(-10px)'}
                                                                            opacity={0}
                                                                            _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
                                                                            justify={'flex-end'}
                                                                            align={'center'}
                                                                            flex={1}>
                                                                            <Icon color={'red.100'} w={5} h={5} as={ChevronRightIcon} />
                                                                        </Flex>
                                                                    </Stack>
                                                                </Box>
                                                        </Stack>
                                                    </PopoverContent>

                                    </Popover>
                                </Box>
                            ))}
                        </Stack>
                    </Flex>
                </Flex>
            </Flex>
        </Box>
    )
}


interface NavItem {
    label: string
    subLabel?: string
    children?: Array<NavItem>
    href?: string
}

const NAV_ITEMS: Array<NavItem> = [
    {
        label: 'Discover movies',
        href: '#',
    },
    {
        label: 'Discover series',
        href: '#',
    },
]*/