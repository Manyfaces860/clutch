import { Flex, Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import Genres from "./components/Genres";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformIconlist from "./components/PlatformIconlist";
import PlatformList from "./components/PlatformList";
import { Game, Platform } from "./hooks/useGames";
import SortSelector from "./components/SortSelector";


export interface GameQuery {
  genre : Genre | null;
  platform : Platform | null; 
}

function App() {

  const [gameQuery , onSetGameQuery] = useState<GameQuery>({} as GameQuery);


  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}

      templateColumns={{
        base : "1fr",
        lg : "200px 1fr"
      }}
    >
      <GridItem area={"nav"}>
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem bg={"black"} area={"aside"} paddingX={2}>
          <Genres selectedGenre={gameQuery.genre} onSelectgenre={(genre) => {
            onSetGameQuery({...gameQuery , genre});
            console.log(genre);
            }}/>
        </GridItem>
      </Show>
      <GridItem bg={"black"} area={"main"}>
        <Flex>
          <PlatformList selectedPlatform={gameQuery.platform} onSelectPlatform={(platform) => onSetGameQuery({...gameQuery , platform})} />
          <SortSelector />
        </Flex>
        <GameGrid GameQuery={gameQuery} />
      </GridItem> 
    </Grid>
  );
}

export default App;
