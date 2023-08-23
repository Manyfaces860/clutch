import useData from "../hooks/useData";
import useGenres, { Genre } from "../hooks/useGenres";
import { Center, HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import getCroppedImages from "../services/get-cropped-images";

const Genres = () => {
  const { data , error ,isLoading} = useGenres();

    if (error) return null ;
    if (isLoading) return <Spinner marginX={'1%'} marginY={'4%'} /> ;

  return (
    <>
      <List>
        {data.map((genre) => (
          <ListItem paddingY={2} >
            <HStack>
              <Image boxSize={8} borderRadius={8} src={getCroppedImages(genre.image_background)} />
              <Text fontSize={"lg"} >{genre.name}</Text>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default Genres;
