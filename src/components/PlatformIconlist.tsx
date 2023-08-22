import { Platform } from "../hooks/useGames";
import { HStack, Icon, Text } from "@chakra-ui/react";
import { FaWindows , FaPlaystation , FaXbox , FaApple , FaLinux , FaAndroid } from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { IconType } from "react-icons";

interface platform {
    platform : Platform[];
    // platform : Platform;
}

const PlatformIconlist = ({ platform } : platform) => {
    const iconMap : { [key : string ] : IconType } = {
        pc : FaWindows,
        playstation : FaPlaystation,
        xbox : FaXbox,
        ios : MdPhoneIphone,
        mac : FaApple,
        android : FaAndroid,
        nintendo : SiNintendo,
        web : BsGlobe
    }


    return (
      <HStack marginY={1}>
        {platform.map((p) => (<Icon as={iconMap[p.slug]} color={"gray.500"} />))}
      </HStack>
    )

}


export default PlatformIconlist