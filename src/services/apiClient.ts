import axios  from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key : '006c6e506d444ec6b7c43deedcd5fcff'
    }
})