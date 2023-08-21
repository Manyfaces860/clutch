import { HStack, Image, Text } from '@chakra-ui/react'
import logo from "../assets/Dragonchain-DRGN.svg"

const NavBar = () => {
  return (
        <HStack>
            <Image src={logo} boxSize={70} ></Image>
            <Text>Clutch</Text>
        </HStack>
    )
}

export default NavBar