import useGenres, { Genre } from "../hooks/useGenres";
import { Button, HStack, Image, List, ListItem, Spinner } from "@chakra-ui/react";
import getCroppedImages from "../services/get-cropped-images";

interface Props {
  onSelectgenre : (genre : Genre) => void;
  selectedGenre : Genre | null;
}


const Genres = ({ selectedGenre ,onSelectgenre }: Props) => {
  const { data , error ,isLoading} = useGenres();

    if (error) return null ;
    if (isLoading) return <Spinner marginX={'1%'} marginY={'4%'} /> ;

  return (
    <>
      <List>
        {data.map((genre) => (
          <ListItem paddingY={2} key={genre.name} >
            <HStack>
              <Image boxSize={8} borderRadius={8} src={getCroppedImages(genre.image_background)} />
              <Button fontWeight={(genre.id === selectedGenre?.id ? 'bold' : 'normal')} onClick={() => onSelectgenre(genre)} fontSize={"lg"} variant={"link"} >{genre.name}</Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default Genres;
