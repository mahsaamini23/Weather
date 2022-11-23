import React,{useState , useEffect} from "react";
import SearchCity from "../../components/Search/Search";
import CardCity from "../../components/CardCity/CardCity";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import cities from "../../data/dataCities";
import Grid from "@mui/material/Grid";
import {handleGetOneDayWeather} from "../../api/api";


const Home=()=>{

    const [search , setSearch] = useState('تهران')
    const [city, setCity] = useState('')
    const [cityWeather, setCityWeather] = useState({})
    const [loading, setLoading] = useState(true)

    let nameCity = search
    const getCityId=(nameCity)=>{
            for(let i=0 ; i<cities.length ; i++){
                if(nameCity === cities[i].name){
                    return(cities[i].id)
                }
            }
    }

    const handleGetData = async () => {
        const cityId = getCityId(nameCity)
        const data = await handleGetOneDayWeather(cityId)
        setCityWeather(data)
        setLoading(false)
        console.log(data)
    }
    
    useEffect(() => {
        handleGetData()
    }, [search])
    
    if (loading){
        <div>.....Loading</div>
    }

    return(
        <Grid container sx={{display:'flex',flexDirection:'column', gap:'30px'}}>
            {/* <FavoriteBorderIcon sx={{color:'#fff', fontSize:35}}/> */}
            <SearchCity setSearch={setSearch} search={search} setCity={setCity}/>
            <Grid container item sx={{margin:'20px 0', display:'flex',justifyContent:'center'}}>
                {cities.filter(city => search === '' ? '' : city.name.includes(search))
                .map(city => (
                    <CardCity key={city.id} cityWeather={cityWeather} cityID={city.id}/>
                ))}
            </Grid>
        </Grid>
    )
}

export default Home;