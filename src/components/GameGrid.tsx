import { SimpleGrid, Skeleton, Text } from "@chakra-ui/react";
import useGames, { Platform } from "../hooks/useGames";
import GameCards from "./GameCards";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { Genre } from "../hooks/useGenres";
import { GameQuery } from "../App";


interface Props {
  GameQuery : GameQuery;
}

const GameGrid = ({ GameQuery } : Props) => {
  const { data, error, isLoading } = useGames(GameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

  if (error) return (<Text>{error}</Text>);

  return (
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        padding={5}
        spacing={4}
      >
        {isLoading &&
          skeletons.map((skel) => (
            <GameCardContainer  key={skel}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        {data.map((game) => (
          <GameCardContainer key={game.id} >
            <GameCards game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
  );
};

export default GameGrid;
