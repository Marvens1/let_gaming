
import genres from "../data/genres";



export interface Genre{
id: Number;
name: string;
image_background: string;
}


const useGenres= () =>({data:genres, isLoading:false, error:null})


export default useGenres;