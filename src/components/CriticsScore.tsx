import { Badge } from "@chakra-ui/react"

interface Props {
    score : number;
}

const CriticsScore = ({ score }: Props) => {
    const color = score > 75 ? "green" : score > 60 ? "orange" : "white"

  return (
        <Badge paddingX={'7px'} colorScheme={color}>{score}</Badge>
    )
}

export default CriticsScore