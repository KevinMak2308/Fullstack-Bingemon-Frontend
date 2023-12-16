import React, {useState, useEffect } from 'react';
import '../../App.css';
import {
    Image,
    HStack,
    Text,
    Box,
    Center,
    Flex,
    useColorModeValue
} from '@chakra-ui/react';
import { User, Movie, Series, Avatar } from "../../pages/ProfilePage";
import httpService from '../../services/httpService';
import BackButton from '../buttons/BackButton';
import SecondaryButton from '../buttons/SecondaryButton'

interface ProfileProps {
    user: User;
    movies: Movie[];
    series: Series[];
    avatars: Avatar[];
}

export default function ProfileInfo({ user, movies, series, avatars }: ProfileProps) {
    const [name, setName] = useState<string>(user.name);
    const [bio, setBio] = useState<string>(user.bio);
    const [,] = useState<string>(user.profile_picture_filename);

    const imageUrl = "http://127.0.0.1:8080/avatars/" + user.profile_picture_filename;
    const defaultImgUrl = "http://127.0.0.1:8080/default/user_unavailable.jpg";


    const [isEditing, setIsEditing] = useState(false);
    useEffect(() => {
        localStorage.setItem('userName', name);
    }, [name]);
    const [originalName, setOriginalName] = useState(name);
    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (isEditing) {
            const plainText = e.target.value;
            setName(plainText);
        }
    };

    const [isEditingBio, setIsEditingBio] = useState(false);
    useEffect(() => {
        localStorage.setItem('userBio', bio);
    }, [bio]);
    const [originalBio, setOriginalBio] = useState(bio);
    const handleBioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (isEditingBio) {
            const plainText = e.target.value;
            setBio(plainText);
        }
    };

    const storedImage = localStorage.getItem('profileImage');
    const [selectedImage, setSelectedImage] = useState<string | null>(
        storedImage ? storedImage : defaultImgUrl
    );
    useEffect(() => {
        localStorage.setItem('profileImage', selectedImage || '');
    }, [selectedImage]);

    const [] = useState(false);


    return (
        <Box bg={useColorModeValue('#dbdbdb', '#1A1917')} color={useColorModeValue('#21201D', '#F0F0EE')} >
            {/* Back button */}
            <BackButton />
            <Flex
                py={{
                    base: '75px',
                    sm: '80px',
                    md: '85px',
                    lg: '90px',
                    xl: '95px',
                    '2xl': '100px',
                }}
                alignContent={"center"} justifyContent={"center"}
            >
                <Center>
                    <Box
                        display="flex"
                        gap={{
                            base: '40px',
                            sm: '40px',
                            md: '40px',
                            lg: '50px',
                            xl: '60px',
                            '2xl': '70px',
                        }}
                        w={{
                            base: '80vw',
                            sm: '80vw',
                            md: '80vw',
                            lg: '80vw',
                            xl: '60vw',
                            '2xl': '40vw',
                        }}
                        alignContent='center'
                        flexDirection={{base:'column', sm:'column', md:'column', lg:'row', xl:'row', "2xl":'row'}}
                    >
                        {/* User pic */}
                        <Box display="grid" gap="4">
                            <Center>
                                <label htmlFor="profileImage" style={{ cursor: 'pointer', display: 'inline-block', borderRadius: '50%' }}>
                                    <Image
                                        src={imageUrl}
                                        fallbackSrc={defaultImgUrl}
                                        objectFit='cover'
                                        borderRadius='50%'
                                        width={{ base: '100%', sm: '175px', md: '200px', lg: '225px', xl: '250px', "2xl": '275px' }}
                                        border='solid 3px #A61212'
                                        alt='Profile'
                                        style={{
                                            boxShadow: '0 0 50px 3px rgba(192, 21, 21, 0.75)',
                                            display: 'block',
                                            borderRadius: '50%',
                                        }}
                                    />
                                    <input
                                        type="file"
                                        id="profileImage"
                                        accept="image/*"
                                        style={{ display: 'none' }}
                                        onChange={(e) => {
                                            if (e.target.files && e.target.files.length > 0) {
                                                setSelectedImage(URL.createObjectURL(e.target.files[0]));
                                            }
                                        }}
                                    />
                                </label>
                            </Center>
                            <Center>
                                <SecondaryButton
                                    buttonText="Change Profile Picture"
                                    onClick={() => {
                                        const inputElement = document.getElementById('profileImage');
                                        if (inputElement) {
                                            inputElement.click();
                                        }
                                    }}
                                />
                            </Center>
                        </Box>
                        {/* User details (name, description etc.) */}
                        <Center >
                            <Box display="grid" gap={{ base: "15px", sm:"16px", md: "17px", lg: "18px", xl:"19px", "2xl":"20px" }}>
                                <Flex justifyContent={'space-between'} alignItems={'center'}>
                                    {/* Screen name */}
                                    <Text as="h1">
                                        {user.name}
                                    </Text>
                                    {/* Edit button and settings button (not functional) */}

                                </Flex>
                                {/* Username */}
                                <Text className='SubheaderLgReg'>
                                    @{user.username}
                                </Text>
                                <Box display="grid" gap={{ base: "15px", sm:"16px", md: "17px", lg: "18px", xl:"19px", "2xl":"20px" }}>
                                    <Flex gridGap={{ base: "2", md: "6", lg: "8" }} justifyContent={"space-between"} flexWrap='wrap'>
                                        <HStack>
                                            <Center gap='2' marginBottom="4px">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95a15.65 15.65 0 0 0-1.38-3.56A8.03 8.03 0 0 1 18.92 8zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2s.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56A7.987 7.987 0 0 1 5.08 16zm2.95-8H5.08a7.987 7.987 0 0 1 4.33-3.56A15.65 15.65 0 0 0 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2s.07-1.35.16-2h4.68c.09.65.16 1.32.16 2s-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95a8.03 8.03 0 0 1-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2s-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z"/></svg>
                                                <Text className='SubheaderSmBold'>Denmark</Text>
                                            </Center>
                                        </HStack>
                                        <HStack>
                                            <Center gap='2' marginBottom="4px">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 256 256"><path fill="currentColor" d="M125.18 156.94a64 64 0 1 0-82.36 0a100.23 100.23 0 0 0-39.49 32a12 12 0 0 0 19.35 14.2a76 76 0 0 1 122.64 0a12 12 0 0 0 19.36-14.2a100.33 100.33 0 0 0-39.5-32ZM44 108a40 40 0 1 1 40 40a40 40 0 0 1-40-40Zm206.1 97.67a12 12 0 0 1-16.78-2.57A76.31 76.31 0 0 0 172 172a12 12 0 0 1 0-24a40 40 0 1 0-14.85-77.16a12 12 0 1 1-8.92-22.28a64 64 0 0 1 65 108.38a100.23 100.23 0 0 1 39.49 32a12 12 0 0 1-2.62 16.73Z"/></svg>
                                                <Text className='SubheaderSmBold'>123 Friends</Text>
                                            </Center>
                                        </HStack>
                                        <HStack
                                            cursor="pointer"
                                            position="relative"
                                            w='fit-content'
                                            _before={{
                                                content: '""',
                                                position: 'absolute',
                                                bottom: 0,
                                                left: 0,
                                                width: 0,
                                                height: '1.5px',
                                                backgroundColor: '#A61212',
                                                transition: 'width 0.5s cubic-bezier(.08,.52,.52,1)',
                                            }}
                                            _hover={{
                                                _before: {
                                                    width: '100%',
                                                },
                                            }}
                                        >
                                            <Center gap='2' marginBottom="4px">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 24 24"><path fill="currentColor" d="m4 4l2 4h3L7 4h2l2 4h3l-2-4h2l2 4h3l-2-4h3q.825 0 1.413.588T22 6v12q0 .825-.588 1.413T20 20H4q-.825 0-1.413-.588T2 18V6q0-.825.588-1.413T4 4Zm0 6v8h16v-8H4Zm0 0v8v-8Z"/></svg>
                                                <Text className='SubheaderSmBold'>{movies.length} Movies Liked</Text>
                                            </Center>
                                        </HStack>
                                        <HStack
                                            cursor="pointer"
                                            position="relative"
                                            w='fit-content'
                                            _before={{
                                                content: '""',
                                                position: 'absolute',
                                                bottom: 0,
                                                left: 0,
                                                width: 0,
                                                height: '1.5px',
                                                backgroundColor: '#A61212',
                                                transition: 'width 0.5s cubic-bezier(.08,.52,.52,1)',
                                            }}
                                            _hover={{
                                                _before: {
                                                    width: '100%',
                                                },
                                            }}
                                        >
                                            <Center gap='2' marginBottom="4px">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 24 24">
                                                    <path fill="currentColor" d="M18 4v1h-2V4c0-.55-.45-1-1-1H9c-.55 0-1 .45-1 1v1H6V4c0-.55-.45-1-1-1s-1 .45-1 1v16c0 .55.45 1 1 1s1-.45 1-1v-1h2v1c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-1h2v1c0 .55.45 1 1 1s1-.45 1-1V4c0-.55-.45-1-1-1s-1 .45-1 1zM8 17H6v-2h2v2zm0-4H6v-2h2v2zm0-4H6V7h2v2zm10 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V7h2v2z"/>
                                                </svg>
                                                <Text className='SubheaderSmBold'>{series.length} Series Liked</Text>
                                            </Center>
                                        </HStack>
                                    </Flex>
                                    <Flex justifyContent='space-between' className='SubheaderMdReg' alignItems="center" align="center" w='100%' h='100%' alignContent='center'>
                                        {/* Edit description/bio */}
                                        <Flex display="grid" gap='4'  style={{ maxWidth: '475px' }}>
                                            <Text
                                                className='SubheaderMdReg'
                                                contentEditable={isEditingBio}
                                                onInput={handleBioChange}
                                                onBlur={() => setIsEditingBio(false)}
                                                dir="ltr"
                                                css={{
                                                    display: '-webkit-box',
                                                    WebkitBoxOrient: 'vertical',
                                                    overflow: 'hidden',
                                                    WebkitLineClamp: isEditingBio ? 'initial' : 3,
                                                    textOverflow: 'ellipsis',
                                                    maxHeight: isEditingBio ? 'initial' : 'calc(1.7 * 3)',
                                                    '&:focus': {
                                                        borderColor: '#21201D',
                                                        boxShadow: `0 0 0 1px #21201D`,
                                                    },
                                                }}

                                            >
                                                {user.bio}
                                            </Text>
                                        </Flex>
                                    </Flex>
                                </Box>
                            </Box>
                        </Center>
                    </Box>
                </Center>
            </Flex>
        </Box>
    );
}