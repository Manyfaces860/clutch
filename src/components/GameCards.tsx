import { Card, CardBody, HStack, Heading, Image, Text } from "@chakra-ui/react"
import { Game } from "../hooks/useGames";
import PlatformIconlist from "./PlatformIconlist";
import CriticsScore from "./CriticsScore";
import getCroppedImages from "../services/get-cropped-images";

interface Props {
    game : Game;
}

const GameCards = ({ game } : Props) => {
  return (
    <Card  overflow={"hidden"} borderRadius={20}>
        <Image src={ getCroppedImages(game.background_image) }/>
        <CardBody>
            <Heading fontSize={"1xl"} >{game.name}</Heading>
            <HStack justifyContent={"space-between"} >
                <PlatformIconlist platform={ game.parent_platforms.map(p => p.platform) }/>
                <CriticsScore score={game.metacritic} />
            </HStack>
        </CardBody>
    </Card>
    )
}

export default GameCards