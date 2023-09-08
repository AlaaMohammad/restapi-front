import axios from "axios";

const instance = axios.create({
    baseURL: 'https://3.81.99.252/api',
    headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('authToken')}`,
    }
})

const AuthAPI = {
    login: async (email, password) => {
        try {
          const reasponse =  await instance.post('/login', { email, password });
        return reasponse.data
        } catch (error) {
            console.error(error)
            throw error
        }
    },
    register: async (name,email, password) => {
        try {
            const reasponse = await instance.post('/register', { name,email, password });
            return reasponse.data

        } catch (error) {
            console.error(error)
            throw error
        }
        

    },
    logout: async () => {
        try {
            await axios.post('https://3.81.99.252/api/logout', null, {headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('authToken')}`,
            }});
            
        } catch (error) {
            console.log(localStorage.getItem('authToken'))
            console.error(error)
            throw error
        }


    }
}

export default AuthAPI


