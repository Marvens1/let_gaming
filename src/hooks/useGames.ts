import { GameQuerry } from '../App';
import useData from './useData';





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
  
  

const useGames=(
  gameQuery:GameQuerry
 ) =>
useData<Game>('/games', 
{
  params:{
     genres: gameQuery.genre?.id,
   platforms: gameQuery.platform?. id,
  ordering: gameQuery.sortOrder
  },
  }, 
[gameQuery]
);

    
export default useGames