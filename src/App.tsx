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
import GameHeading from "./components/GameHeading";


export interface GameQuery {
  genre : Genre | null;
  platform : Platform | null; 
  selectedsortorder : string ;
  SearchText : string
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
        <NavBar onSearchText={(SearchText) => onSetGameQuery({...gameQuery , SearchText})} />
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
        <GameHeading gamequery={gameQuery}/>
        <Flex padding={4} >
          <PlatformList selectedPlatform={gameQuery.platform} onSelectPlatform={(platform) => onSetGameQuery({...gameQuery , platform})} />
          <SortSelector appliedSorter={gameQuery.selectedsortorder} onSelectedSortOrder={(selectedsortorder) => onSetGameQuery({...gameQuery , selectedsortorder})} />
        </Flex>
        <GameGrid GameQuery={gameQuery} />
      </GridItem> 
    </Grid>
  );
}

export default App;
