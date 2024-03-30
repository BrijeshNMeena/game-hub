import useData from "./useData";
import { Genre } from "./useGenres";

export interface Platform {
    id: number;
    name: string;
    slug: string;
}
  
export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: {platform: Platform} []
    metacritic: number;
}


const useGames = (selecedGenre: Genre | null, selectedPlatform: Platform | null) => 
useData<Game>('/games', {params: {genres: selecedGenre?.id, platforms : selectedPlatform?.id}}, 
[selecedGenre?.id, selectedPlatform?.id]);
     


export default useGames;