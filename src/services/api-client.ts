import axios from "axios";

export default axios.create(
    {
        baseURL: 'https://api.rawg.io/api',
        params:{
            key: 'c46f824ae9884d6fb83a7dc651317fcf'
        }
    }
)