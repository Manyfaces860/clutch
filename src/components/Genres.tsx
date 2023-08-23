import useData from "../hooks/useData";
import useGenres, { Genre } from "../hooks/useGenres"
import { Text } from "@chakra-ui/react"


const Genres = () => {

    const { data } =  useGenres();
  
    return (
    <>
        <div>
            {data.map(genre => (<Text>{genre.name}</Text>))}
        </div>
    </>
  )
}

export default Genres