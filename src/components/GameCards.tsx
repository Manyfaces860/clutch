import { Card, CardBody, Heading, Image, Text } from "@chakra-ui/react"
import { Game } from "../hooks/useGames";

interface Props {
    game : Game;
}

const GameCards = ({ game } : Props) => {
  return (
    <Card overflow={"hidden"} borderRadius={20}>
        <Image src={game.background_image}/>
        <CardBody>
            <Heading fontSize={"1xl"} >{game.name}</Heading>
        </CardBody>
    </Card>
    )
}

export default GameCards