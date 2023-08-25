import { ColorModeContext, HStack, Image, Text } from '@chakra-ui/react'
import logo from "../assets/Dragonchain-DRGN.svg"
import ColorModeSwitch from './ColorModeSwitch'
import SearchInput from './SearchInput'

const NavBar = () => {
  return (
        <HStack paddingX={3} >
            <Image src={logo} boxSize={70} ></Image>
            <SearchInput />
            <ColorModeSwitch  />
        </HStack>
    )
}

export default NavBar