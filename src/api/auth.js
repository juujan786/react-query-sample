import axios from "axios";

export function login({ email, password }) {
    return axios
      .post("https://api.escuelajs.co/api/v1/auth/login", {
        email,
        password
      })
      .then(res => res.data).catch(err=>{
        console.log("err1: ",err)
      })
  }