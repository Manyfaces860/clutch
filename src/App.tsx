import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import Genres from "./components/Genres";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformIconlist from "./components/PlatformIconlist";
import PlatformList from "./components/PlatformList";

function App() {

  const [selectedGenre , onSelectGenre] = useState<Genre | null>(null);



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
          <Genres selectedGenre={selectedGenre} onSelectgenre={(genre) => {
            onSelectGenre(genre);
            console.log(genre);
            }}/>
        </GridItem>
      </Show>
      <GridItem bg={"black"} area={"main"}>
        <PlatformList/>
        <GameGrid selectedGenre={selectedGenre} />
      </GridItem>
    </Grid>
  );
}

export default App;
