import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
const APIURL = `${"http://192.168.4.32:8000"}/api`;

export default async function getgdata(){
    axios
    .get(`${APIURL}/gyms`)
    .then((response) => {
      console.log(response.data);
    });
    let r = await AsyncStorage.getItem("response");
    return await JSON.parse(r);
}

