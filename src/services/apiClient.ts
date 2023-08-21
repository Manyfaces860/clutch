import axios  from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key : '4b42e5ef6c4044eeb7ee25a5bd1c3a20'
    }
})