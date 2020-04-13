
import * as config from './../constant/Config';
const axios = require('axios').default;
export default function callAPI(endpoint, method="GET",body){
  return  axios({
        method: method,
        url: `${config.API_URL}/${endpoint}`,
        data: body
      }).catch(err=>{
        console.log(err)
      });
}
