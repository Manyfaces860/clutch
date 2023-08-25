import { ColorModeContext, HStack, Image, Text } from '@chakra-ui/react'
import logo from "../assets/Dragonchain-DRGN.svg"
import ColorModeSwitch from './ColorModeSwitch'
import SearchInput from './SearchInput'

interface Props {
    onSearchText : (Searchtext: string) => void;
}

const NavBar = ({ onSearchText } : Props) => {
  return (
        <HStack paddingX={3} >
            <Image src={logo} boxSize={70} ></Image>
            <SearchInput onSearchText={onSearchText} />
            <ColorModeSwitch  />
        </HStack>
    )
}

export default NavBar