import useData from "../hooks/useData";
import useGenres, { Genre } from "../hooks/useGenres";
import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import getCroppedImages from "../services/get-cropped-images";

const Genres = () => {
  const { data } = useGenres();

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
