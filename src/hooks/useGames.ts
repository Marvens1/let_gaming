import useData from './useData';
import { Genre } from './useGenres';



export interface platform{
id:number;
name: string;
slug:string
}

export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: {platform:platform }[]
    metacritic: number
  }
  
  

const useGames=(selectedGenre: Genre | null, selectePlatform: platform | null) =>
useData<Game>('/games', {params:{genres: selectedGenre?.id, plattforms: selectePlatform?. id}}, 
[selectedGenre?.id, selectePlatform?.id])

    
export default useGames