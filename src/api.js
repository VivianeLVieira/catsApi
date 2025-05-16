import axios from "axios";

const catsApi = axios.create({
    baseURL: "https://api.thecatapi.com/v1/images",
    headers:{ //TODO: remover antes de comitar
        'x-api-key':'live_FrJJVGXcKM3B0Cn3c0NLGyJOIHkvCMYH2nR77H24bBjtAUhw0TD0pk6mipB1gPOB'
    }
})

const fetchCats = (breed) => {
    return catsApi.get("/search", {
        params: {
            breed_ids: breed,
            limit: 3
        }, 
    })
        .then((response)=> {
            console.log(response.data)
            return response.data
        })
}

export {fetchCats}