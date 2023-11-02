import {Text, Center, VStack} from '@chakra-ui/react';

function ContentboxSort() {

    return (
        <VStack>

            <Center
                w="230px"
                h="145px"
                borderRadius="lg"
                mb={{sm:"9px", md:"10px", lg:"11px"}}
                _hover={{transform: "scale(1.1)", filter: "auto", blur:"2px"}}
                transition=".2s"
                bgColor="#B3B3B3"
                >
                <Text
                    color="#ffffff"
                    fontSize={{sm:'18px', md:'22px', lg:'24px'}}
                    fontWeight="bold">Actor</Text>
            </Center>
        </VStack>
    );
}

export default ContentboxSort;
