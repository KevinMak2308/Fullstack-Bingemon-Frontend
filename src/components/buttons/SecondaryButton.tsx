import React from 'react';
import { Button } from '@chakra-ui/react';

interface PrimaryButtonProps {
    buttonText: string;
    onClick?: () => void;
}

function PrimaryButton({ buttonText }: PrimaryButtonProps) {
    return (
        <Button
            py={{base: "21px", sm: "22px", md: "23px", lg: "24px", xl: "25px", "2xl": "26px"}}
            px={{base: "27px", sm: "28px", md: "29px", lg: "30px", xl: "31px", "2xl": "32px"}}
            w="fit-content"
            lineHeight='1.2'
            transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
            border=''
            borderRadius='10px'
            fontSize={{ base: "12px", sm:"13px", md: "14px", lg: "15px", xl: "16px", "2xl": "17px" }}
            fontFamily='Roboto'
            fontWeight='semibold'
            bg='#343434'
            color="#F0F0EE"
            _hover={{ filter: 'brightness(1.2)' }}
        >
            {buttonText}
        </Button>
    );
}

export default PrimaryButton;






