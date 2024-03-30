import { Grid, GridItem, Show, Image } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";


export interface GameQuery{
  genre : Genre | null;
  platform: Platform | null;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        sm: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: '1fr',
        sm: '200px 1fr' 
      }}
    >
      <GridItem area="nav">
        <NavBar></NavBar>
      </GridItem>
      {/* <Show above="lg"> */}
        <GridItem area="aside" paddingX={5}>
          <GenreList selectedGenre={gameQuery.genre} onSelectGenre={(genre) => setGameQuery({...gameQuery, genre})} />
        </GridItem>
      {/* </Show> */}
      <GridItem area="main">
        <PlatformSelector selectedPlatform={gameQuery.platform} onSelectPlatform={(platform) => setGameQuery({...gameQuery, platform})}/>
        <GameGrid gameQuery={gameQuery}></GameGrid>
      </GridItem>
    </Grid>
  );
}

export default App;
