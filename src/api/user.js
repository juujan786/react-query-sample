import axios from "axios";

export function getUser({ access_token }) {
    console.log("at: ",access_token);
    return axios.get("https://api.escuelajs.co/api/v1/auth/profile",
      {
        "Authorization": `Bearer ${access_token}`
      })
      .then(res =>{
        console.log("res: ",res);
        return  res.data
      }).catch(err=>{
        console.log("error: ",err);
      })
  }