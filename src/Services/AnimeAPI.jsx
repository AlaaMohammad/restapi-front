import axios from "axios";

const instance = axios.create({
    baseURL: 'https://kitsu.io/api/edge/',
    headers: {
        'Content-Type': 'application/json',
        //Authorization: `Bearer ${localStorage.getItem('authToken')}`,
    }
})

const AnimeAPI = {
    //Get Anime Collection
    getAllAnime: async () => {
        try {
            const reponse = await instance.get('/anime')
            return reponse.data
        } catch (error) {
            console.error(error)
            throw error
        }

    },
    getAnimeById: async (animeId) => {
        try {
            const reponse = await instance.get(`/anime/${animeId}`)
            return reponse.data
        } catch (error) {
            console.error(error)
            throw error
        }

    },
}
export default AnimeAPI
