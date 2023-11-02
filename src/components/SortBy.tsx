import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    Button,
    Box
} from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'

function SortBy() {

    return (
        <Box>
            <Menu>
                <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                    Sort by
                </MenuButton>
                <MenuList>
                    <MenuItem>Popularity ascending</MenuItem>
                    <MenuItem>Popularity descending</MenuItem>
                    <MenuItem>Release Date ascending</MenuItem>
                    <MenuItem>Release Date descending</MenuItem>
                    <MenuItem>Title (A-Z)</MenuItem>
                    <MenuItem>Title (Z-A)</MenuItem>
                </MenuList>
            </Menu>
        </Box>
    );
}

export default SortBy;
