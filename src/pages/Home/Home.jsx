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
    const [selectCity, setSelectCity] = useState(search)


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
        const data = await handleGetOneDayWeather(cityId).then(data => data.data)
        setCityWeather(data)
        setLoading(false)
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
            <SearchCity setSearch={setSearch} search={search} selectCity={selectCity} setSelectCity={setSelectCity}/>
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