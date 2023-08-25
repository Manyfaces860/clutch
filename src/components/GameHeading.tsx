import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App"

interface Props {
    gamequery : GameQuery;
}


const GameHeading = ({ gamequery } : Props) => {

    const heading = `${gamequery?.platform?.name || ''} ${gamequery?.genre?.name || ''} ${'Games'}`

    return (
        <Heading as='h1' marginX={4} marginY={3}>{heading}</Heading>
    )
}

export default GameHeading