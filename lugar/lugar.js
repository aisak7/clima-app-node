const axios = require ('axios');

const getLugarLatLng = async (dir) => {

    const encodeURL = encodeURI( dir);
    
    
    const instance = axios.create({
    
        baseURL: `https://api.openweathermap.org/data/2.5/weather?q=${encodeURL}&appid=7689de7cffe6c1e5ea3ed951db70d4b7`
    
    });
    
    const resp = await instance.get();

    if (resp.data.length === 0){

        throw new Error(`No hay resultados para ${dir}`);

    }

    const data      = resp.data;
    const data1      = resp.data.coord;
    const direccion = data.name;
    const lat       = data1.lat;
    const lon       = data1.lon;

    return {

        direccion,
        lat,
        lon

    }
    
}


module.exports = {

    getLugarLatLng

}