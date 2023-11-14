import React, { useState } from "react";
import { Box, Flex, HStack, Image, Text } from "@chakra-ui/react";

export interface ApiImage {
    aspect_ratio: number;
    height: number;
    iso_639_1: string;
    file_path: string;
    vote_average: number;
    vote_count: number;
    width: number;
}

interface Slides {
    images: ApiImage[];
}

export default function ImageCarousel({ images }: Slides) {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slidesCount = images.length;

    const arrowStyles = {
        cursor: "pointer",
        pos: "absolute",
        top: "50%",
        w: "auto",
        mt: "-22px",
        p: "16px",
        color: "#F0F0EE",
        fontWeight: "bold",
        fontSize: "18px",
        transition: "0.6s ease",
        borderRadius: "0 3px 3px 0",
        userSelect: "none",
        _hover: {
            color: "#F0F0EE",
            bg: "",
        },
    } as const;

    const prevSlide = () => {
        setCurrentSlide((s) => (s === 0 ? slidesCount - 1 : s - 1));
    };
    const nextSlide = () => {
        setCurrentSlide((s) => (s === slidesCount - 1 ? 0 : s + 1));
    };
    const setSlide = (slide: number) => {
        setCurrentSlide(slide);
    };
    const carouselStyle = {
        transition: "all .5s",
        ml: `-${currentSlide * 100}%`,
    };

    return (
        <Flex>
            <Flex overflow="hidden" pos="relative">
                <Flex w='100%'  h={{ base: '45vh', md: '90vh', lg: '92.5vh' }} {...carouselStyle}>
                    {images.map((slide, sid) => (
                        <Box key={`slide-${sid}`} boxSize="full" shadow="md" flex="none">
                            <Text
                                color="white"
                                fontSize="xs"
                                p="8px 12px"
                                pos="absolute"
                                top="0"
                            >
                                {sid + 1} / {slidesCount}
                            </Text>
                            <Image
                                src={slide.file_path}
                                alt="carousel image"
                                boxSize="full"
                                width='100%'
                                height='100%'
                                objectFit='cover'
                                backgroundPosition="center"
                                backgroundRepeat="no-repeat"
                                backgroundSize="cover"
                            />
                        </Box>
                    ))}
                </Flex>
                <Text {...arrowStyles} left="0" onClick={prevSlide}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"><path fill="#F0F0EE" d="m3.55 12l7.35 7.35q.375.375.363.875t-.388.875q-.375.375-.875.375t-.875-.375l-7.7-7.675q-.3-.3-.45-.675T.825 12q0-.375.15-.75t.45-.675l7.7-7.7q.375-.375.888-.363t.887.388q.375.375.375.875t-.375.875L3.55 12Z"/></svg>
                </Text>
                <Text {...arrowStyles} right="0" onClick={nextSlide}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"><path fill="#F0F0EE" d="m14.475 12l-7.35-7.35q-.375-.375-.363-.888t.388-.887q.375-.375.888-.375t.887.375l7.675 7.7q.3.3.45.675t.15.75q0 .375-.15.75t-.45.675l-7.7 7.7q-.375.375-.875.363T7.15 21.1q-.375-.375-.375-.888t.375-.887L14.475 12Z"/></svg>
                </Text>
                <HStack justify="center" pos="absolute" bottom="20px" w="full">
                    {Array.from({ length: slidesCount }).map((_, slide) => (
                        <Box
                            key={`dots-${slide}`}
                            cursor="pointer"
                            boxSize={["7px", null, "8px"]}
                            m="0 1px"
                            bg={currentSlide === slide ? "#F0F0EE" : "#F0F0EE70"}
                            rounded="50%"
                            display="inline-block"
                            transition="background-color 0.6s ease"
                            _hover={{ bg: "#F0F0EE" }}
                            onClick={() => setSlide(slide)}
                        ></Box>
                    ))}
                </HStack>
            </Flex>
        </Flex>
    );
};