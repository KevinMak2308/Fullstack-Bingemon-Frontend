'use client'

import {
    Box,
    Flex,
    Button,
    useDisclosure,
    useColorModeValue,
    Stack,
    useColorMode,
    AvatarGroup,
    Avatar,
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton,
    PopoverAnchor,
    Link,
} from '@chakra-ui/react'


import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import React from "react";

interface Props {
    children: React.ReactNode
}



export default function Nav() {
    const { colorMode, toggleColorMode } = useColorMode()
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            <Box bg={useColorModeValue('white', 'grey.100')} px={4}>
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                    <Box>Logo</Box>

                    <Flex alignItems={'center'} justifyContent={'space-between'} >
                        <Stack
                            flex={{ md: 0 }}
                            justify={'flex-end'}
                            direction={'row'}
                            spacing={6}>


                            <Popover>
                                <PopoverTrigger>
                                    <Button borderRadius={'none'} bg={'none'} _hover={{
                                        bg: 'none',
                                    }}  ><Avatar bg={'red.100'} height={'2em'} width={'2em'} /></Button>
                                </PopoverTrigger>
                                <PopoverContent textAlign={'left'}>
                                    <PopoverArrow />
                                    <PopoverBody>
                                        <Link>My profile</Link>
                                    </PopoverBody>
                                    <PopoverBody>
                                        <Link>My movies & series</Link>
                                    </PopoverBody>
                                    <PopoverBody>
                                        <Link>Log out</Link>
                                    </PopoverBody>
                                </PopoverContent>
                            </Popover>

                        </Stack>
                        <Stack direction={'row'} spacing={7}>
                            <Button onClick={toggleColorMode} borderRadius={'none'} bg={'none'} _hover={{
                                bg: 'none',
                            }}>
                                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                            </Button>
                        </Stack>
                    </Flex>
                </Flex>
            </Box>

        </>


    )


}