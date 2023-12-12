import React, {useState, useEffect, ChangeEvent  } from 'react';
import '../../App.css';
import {
    Image,
    HStack,
    Text,
    Box,
    Center,
    Flex,
    useColorMode,
    useColorModeValue,
    Input,
    InputGroup,
    Button,
    Textarea,
} from '@chakra-ui/react';
import { User, Movie, Series, Avatar } from "../../pages/ProfilePage";
import Error from '../alerts/Error';
import Success from '../alerts/Success';
import Loading from '../alerts/Loading';
import AvatarModal from './ProfileAvatarModal';
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
    const [profilePicture, setProfilePicture] = useState<string>(user.profile_picture_filename);

    const imageUrl = "http://127.0.0.1:8080/avatars/" + user.profile_picture_filename;
    const defaultImgUrl = "http://127.0.0.1:8080/default/user_unavailable.jpg";

    const updateUser = async () => {
        try {
            await httpService.put("/user/" + user.id, {
                name: user.name,
                bio: user.bio,
                profile_picture_filename: user.profile_picture_filename,
            });
            setIsEditing(false);
        } catch (error) {
            console.error('Error updating profile:', error);
        }
    };

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
    const handleToggleEdit = (e: React.MouseEvent<SVGElement, MouseEvent>) => {
        e.stopPropagation();
        setIsEditing(!isEditing);
        if (!isEditing) {
            setOriginalName(name);
        } else {
            if (!e.currentTarget.classList.contains('save-name-button')) {
                setName(originalName);
            }
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
    const handleToggleBioEdit = (e: React.MouseEvent<SVGElement, MouseEvent>) => {
        e.stopPropagation();
        setIsEditingBio(!isEditingBio);
        if (!isEditingBio) {
            setOriginalBio(bio);
        } else {
            if (!e.currentTarget.classList.contains('save-bio-button')) {
                setBio(originalBio);
            }
        }
    };

    const storedImage = localStorage.getItem('profileImage');
    const [selectedImage, setSelectedImage] = useState<string | null>(
        storedImage ? storedImage : defaultImgUrl
    );
    useEffect(() => {
        localStorage.setItem('profileImage', selectedImage || '');
    }, [selectedImage]);

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

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
                                    <Center cursor='pointer' gap='2'>
                                        <Box bg='#A61212' borderRadius='full' p='1.5' _hover={{ bg:'#C01515' }} transition='all 0.2s cubic-bezier(.08,.52,.52,1)'>
                                            <svg onClick={handleToggleEdit} xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="-2 -2 24 24"><path fill="#F0F0EE" d="m5.72 14.456l1.761-.508l10.603-10.73a.456.456 0 0 0-.003-.64l-.635-.642a.443.443 0 0 0-.632-.003L6.239 12.635l-.52 1.82zM18.703.664l.635.643c.876.887.884 2.318.016 3.196L8.428 15.561l-3.764 1.084a.901.901 0 0 1-1.11-.623a.915.915 0 0 1-.002-.506l1.095-3.84L15.544.647a2.215 2.215 0 0 1 3.159.016zM7.184 1.817c.496 0 .898.407.898.909a.903.903 0 0 1-.898.909H3.592c-.992 0-1.796.814-1.796 1.817v10.906c0 1.004.804 1.818 1.796 1.818h10.776c.992 0 1.797-.814 1.797-1.818v-3.635c0-.502.402-.909.898-.909s.898.407.898.91v3.634c0 2.008-1.609 3.636-3.593 3.636H3.592C1.608 19.994 0 18.366 0 16.358V5.452c0-2.007 1.608-3.635 3.592-3.635h3.592z"/></svg>
                                        </Box>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"><path fill="currentColor" d="M10.125 22q-.375 0-.65-.25t-.325-.625l-.3-2.325q-.325-.125-.613-.3t-.562-.375l-2.175.9q-.35.15-.7.038t-.55-.438L2.4 15.4q-.2-.325-.125-.7t.375-.6l1.875-1.425Q4.5 12.5 4.5 12.337v-.674q0-.163.025-.338L2.65 9.9q-.3-.225-.375-.6t.125-.7l1.85-3.225q.2-.325.55-.438t.7.038l2.175.9q.275-.2.575-.375t.6-.3l.3-2.325q.05-.375.325-.625t.65-.25h3.75q.375 0 .65.25t.325.625l.3 2.325q.325.125.613.3t.562.375l2.175-.9q.35-.15.7-.038t.55.438L21.6 8.6q.2.325.125.7t-.375.6l-1.875 1.425q.025.175.025.338v.674q0 .163-.05.338l1.875 1.425q.3.225.375.6t-.125.7l-1.85 3.2q-.2.325-.563.45t-.712-.025l-2.125-.9q-.275.2-.575.375t-.6.3l-.3 2.325q-.05.375-.325.625t-.65.25h-3.75Zm1.925-6.5q1.45 0 2.475-1.025T15.55 12q0-1.45-1.025-2.475T12.05 8.5q-1.475 0-2.488 1.025T8.55 12q0 1.45 1.012 2.475T12.05 15.5Z"/></svg>
                                    </Center>
                                </Flex>
                                {/* Username */}
                                <Text className='SubheaderLgReg'>
                                    @{user.username}
                                </Text>
                                <Box display="grid" gap={{ base: "15px", sm:"16px", md: "17px", lg: "18px", xl:"19px", "2xl":"20px" }}>
                                    <Flex gridGap={{ base: "2", md: "6", lg: "8" }} justifyContent={"space-between"} fontSize={{ base: "13px", md: "14px", lg: "15px" }} flexWrap='wrap'>
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
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95a15.65 15.65 0 0 0-1.38-3.56A8.03 8.03 0 0 1 18.92 8zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2s.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56A7.987 7.987 0 0 1 5.08 16zm2.95-8H5.08a7.987 7.987 0 0 1 4.33-3.56A15.65 15.65 0 0 0 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2s.07-1.35.16-2h4.68c.09.65.16 1.32.16 2s-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95a8.03 8.03 0 0 1-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2s-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z"/></svg>
                                                <Text className='SubheaderSmBold'>Denmark</Text>
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
                                        {isEditingBio ? (
                                            <>
                                                <Flex gap="2">
                                                    <Box style={{ maxWidth: '475px' }}>
                                                        <Textarea
                                                            placeholder='Enter your bio'
                                                            value={user.bio}
                                                            onChange={(e) => setBio(e.target.value)}
                                                            css={{
                                                                border: `1px solid ${isEditing ? '#21201D' : '#F0F0EE'}`,
                                                                borderRadius: '5px',
                                                                padding: '10px',
                                                                minHeight: '75px',
                                                                width: '475px',
                                                                display: 'block',
                                                                WebkitBoxOrient: 'vertical',

                                                                WebkitLineClamp: isEditingBio ? 'initial' : 3,
                                                                textOverflow: 'ellipsis',
                                                                maxHeight: isEditingBio ? 'initial' : 'calc(1.7 * 3)',
                                                                '&:focus': {
                                                                    borderColor: '#C01515',
                                                                    boxShadow: `0 0 0 1px #A61212`,
                                                                },
                                                            }}
                                                        />
                                                    </Box>
                                                    <Center>
                                                        <Flex align="center" gap="0.75" h='100%' alignContent='center' justify="center" alignItems="center">
                                                            {/* Checkmark button */}
                                                            <svg
                                                                onClick={(e) => {
                                                                    e.stopPropagation();
                                                                    handleToggleBioEdit(e);
                                                                }}
                                                                className="save-bio-button"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                cursor="pointer"
                                                                width="25"
                                                                height="25"
                                                                viewBox="0 0 24 24"
                                                            >
                                                                <path
                                                                    fill="currentColor"
                                                                    d="M10.6 13.8l-2.15-2.15q-.275-.275-.7-.275t-.7.275q-.275.275-.275.7t.275.7L9.9 15.9q.3.3.7.3t.7-.3l5.65-5.65q.275-.275.275-.7t-.275-.7q-.275-.275-.7-.275t-.7.275L10.6 13.8ZM12 22q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Zm0-2q3.35 0 5.675-2.325T20 12q0-3.35-2.325-5.675T12 4Q8.65 4 6.325 6.325T4 12q0 3.35 2.325 5.675T12 20Zm0-8Z"
                                                                />
                                                            </svg>
                                                            {/* X button */}
                                                            <svg
                                                                onClick={(e) => {
                                                                    e.stopPropagation();
                                                                    handleToggleEdit(e);
                                                                }}

                                                                xmlns="http://www.w3.org/2000/svg"
                                                                cursor="pointer"
                                                                width="25"
                                                                height="25"
                                                                viewBox="0 0 24 24"
                                                            >
                                                                <path
                                                                    fill="currentColor"
                                                                    d="M12 13.4l2.9 2.9q.275.275.7.275t.7-.275q.275-.275.275-.7t-.275-.7L13.4 12l2.9-2.9q.275-.275.275-.7t-.275-.7q-.275-.275-.7-.275t-.7.275L12 10.6L9.1 7.7q-.275-.275-.7-.275t-.7.275q-.275.275-.275.7t.275.7l2.9 2.9l-2.9 2.9q-.275.275-.275.7t.275.7q.275.275.7.275t.7-.275l2.9-2.9Zm0 8.6q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Zm0-2q3.35 0 5.675-2.325T20 12q0-3.35-2.325-5.675T12 4Q8.65 4 6.325 6.325T4 12q0 3.35 2.325 5.675T12 20Zm0-8Z"
                                                                />
                                                            </svg>
                                                        </Flex>
                                                    </Center>
                                                </Flex>
                                            </>
                                        ) : (
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
                                        )}
                                        {/* Edit button */}
                                        <Center cursor='pointer' gap='4'>
                                            <Box bg='#A61212' borderRadius='full' p='1.5' _hover={{ bg:'#C01515' }} transition='all 0.2s cubic-bezier(.08,.52,.52,1)'>
                                                <svg onClick={handleToggleBioEdit} xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="-2 -2 24 24"><path fill="#F0F0EE" d="m5.72 14.456l1.761-.508l10.603-10.73a.456.456 0 0 0-.003-.64l-.635-.642a.443.443 0 0 0-.632-.003L6.239 12.635l-.52 1.82zM18.703.664l.635.643c.876.887.884 2.318.016 3.196L8.428 15.561l-3.764 1.084a.901.901 0 0 1-1.11-.623a.915.915 0 0 1-.002-.506l1.095-3.84L15.544.647a2.215 2.215 0 0 1 3.159.016zM7.184 1.817c.496 0 .898.407.898.909a.903.903 0 0 1-.898.909H3.592c-.992 0-1.796.814-1.796 1.817v10.906c0 1.004.804 1.818 1.796 1.818h10.776c.992 0 1.797-.814 1.797-1.818v-3.635c0-.502.402-.909.898-.909s.898.407.898.91v3.634c0 2.008-1.609 3.636-3.593 3.636H3.592C1.608 19.994 0 18.366 0 16.358V5.452c0-2.007 1.608-3.635 3.592-3.635h3.592z"/></svg>
                                            </Box>
                                        </Center>
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