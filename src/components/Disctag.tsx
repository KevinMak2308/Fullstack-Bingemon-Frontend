import { Box } from '@chakra-ui/react';
import { Tag, TagLabel, TagCloseButton } from '@chakra-ui/react';
import { useState } from 'react';

function Disctag() {
    const [tags, setTags] = useState<string[]>(['lg']);

    const removeTag = (tag: string) => {
        const updatedTags = tags.filter((t) => t !== tag);
        setTags(updatedTags);
    };

    return (
        <Box>
            {tags.map((size) => (
                <Tag size={size} key={size}>
                    <TagLabel>Input</TagLabel>
                    <TagCloseButton onClick={() => removeTag(size)} />
                </Tag>
            ))}
        </Box>
    );
}

export default Disctag;
