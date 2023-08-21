import { ColorModeContext, HStack, Image, Text } from '@chakra-ui/react'
import logo from "../assets/Dragonchain-DRGN.svg"
import ColorModeSwitch from './ColorModeSwitch'

const NavBar = () => {
  return (
        <HStack justify={'space-between'} padding={1} >
            <Image src={logo} boxSize={70} ></Image>
            <ColorModeSwitch />
        </HStack>
    )
}

export default NavBar