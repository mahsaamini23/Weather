import axios from "axios"

export const api = axios.create({
    baseURL: 'https://api.openweathermap.org'
});


export const handleGetOneDayWeather = (cityID)=> {
    return api(`/data/2.5/weather?id=${cityID}&lang=fa&appid=f6878e2f0ae47648aa1c87140736927d&units=metric`).then(data => data.data)
} 

export const handleGetFiveDayWeather = (cityID)=> {
    return api(`/data/2.5/forecast?id=${cityID}&lang=fa&appid=f6878e2f0ae47648aa1c87140736927d&units=metric`).then(data => data.data.list)
}

