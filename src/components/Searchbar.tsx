import { Box } from '@chakra-ui/react'
import { Input } from '@chakra-ui/react'

function Searchbar() {
    return(
        <Box>
            <Input placeholder='insert text here' size='md' ml={[1, 2, 3, 4, 5]} mr={[1, 2, 3, 4, 5]}/>
        </Box>
    )
}

export default Searchbar;