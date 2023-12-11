import React from 'react';
import { Button } from '@chakra-ui/react';

interface TagProps {
    tagText: string;
    onClick?: () => void;
}

function Tag({ tagText }: TagProps) {
    return (
        <Button
            py={{ base: "15px", md: "16px", lg: "17px" }}
            px={{ base: "23px", md: "24px", lg: "25px" }}
            lineHeight="1.2"
            transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
            borderRadius="100px"
            border="2px"
            fontSize={{ base: "13px", md: "14px", lg: "15px" }}
            fontFamily='Roboto'
            fontWeight="normal"
            cursor="default"
            bg=""
            borderColor="#A61212"
            color="#F0F0EE"
            _hover={{ bg: "" }}
        >
            {tagText}
        </Button>
    );
}

export default Tag;






