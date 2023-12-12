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
            bg=""
            className="BodyBold"
            cursor="default"
            borderColor="#A61212"
            _hover={{ bg: "" }}
            _active={{ bg: "" }}
            _focus={{ boxShadow: 'none' }}
        >
            {tagText}
        </Button>
    );
}

export default Tag;






