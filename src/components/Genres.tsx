import useGenres from "../hooks/useGenres"
import { Text } from "@chakra-ui/react"


const Genres = () => {
  const {genres , error , isLoading} =  useGenres();
  
    return (
    <>
        <div>
            {genres.map(genre => (<Text>{genre.name}</Text>))}
        </div>
    </>
  )
}

export default Genres