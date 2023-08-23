import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import Genres from "./components/Genres";

function App() {
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
          <Genres />
        </GridItem>
      </Show>
      <GridItem bg={"black"} area={"main"}>
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
