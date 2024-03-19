import useData from "./useData";

interface platform{
    id: number;
    name : string;
    slug: string;

}

const usePlateforms = () => useData<platform>('/platforms/lists/parents')


export default usePlateforms