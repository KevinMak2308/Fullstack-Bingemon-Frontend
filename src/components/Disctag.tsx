import { Box, Flex, Center } from '@chakra-ui/react';
import { Tag, TagLabel, TagCloseButton } from '@chakra-ui/react';
import { useState } from 'react';

function Disctag() {
    const [tags, setTags] = useState<string[]>(['lg']);

    const removeTag = (tag: string) => {
        const updatedTags = tags.filter((t) => t !== tag);
        setTags(updatedTags);
    };

    return (
        <Box bg='#21201d' color='#dcdbd8' ml="10px" >
            <Flex alignContent={"center"} justifyContent={"center"}>
                <Center>
                    <Box display="grid" gridGap={{ base: "4", md: "6", lg: "8" }}>
                        {tags.map((size) => (
                            <Tag size={size} key={size}>
                                <TagLabel>Input</TagLabel>
                                <TagCloseButton onClick={() => removeTag(size)} />
                            </Tag>
                        ))}
                    </Box>
                </Center>
            </Flex>
        </Box>
    );
}

export default Disctag;
