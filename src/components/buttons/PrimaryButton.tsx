import React from 'react';
import { Button } from '@chakra-ui/react';

interface PrimaryButtonProps {
    buttonText: string;
    onClick?: () => void;
}

function PrimaryButton({ buttonText }: PrimaryButtonProps) {
    return (
        <Button
            py={{base: "19px", sm: "20px", md: "21px", lg: "22px", xl: "23px", "2xl": "24px"}}
            px={{base: "27px", sm: "28px", md: "29px", lg: "30px", xl: "31px", "2xl": "32px"}}
            w="fit-content"
            lineHeight='1.2'
            transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
            border=''
            borderRadius='10px'
            fontSize={{ base: "12px", sm:"13px", md: "13px", lg: "14px", xl: "15px", "2xl": "16px" }}
            fontFamily='Roboto'
            fontWeight='semibold'
            letterSpacing='0.75px'
            bg='#A61212'
            color='#F0F0EE'
            _hover={{ filter: 'brightness(1.2)' }}
            _active={{ bg: '#A61212', filter: 'brightness(1.2)' }}
            _focus={{ boxShadow: 'none' }}
        >
            {buttonText}
        </Button>
    );
}

export default PrimaryButton;






