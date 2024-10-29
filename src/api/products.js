import axios from "axios"

export function getProducts(page) {
  const limit = 10;
  const offset = (page - 1) * limit;
  return axios
    .get(`https://api.escuelajs.co/api/v1/products?offset=${offset}&limit=${limit}`)
    .then(res => {
      // const hasNext = page * 2 <= parseInt(res.headers["x-total-count"])
      return {
        nextPage: res.data.length == 10 ? true: false,
        previousPage: offset == 0 ? false: true,
        products: res.data,
      }})
    }

export function getProduct(id) {
      return axios
        .get(`https://api.escuelajs.co/api/v1/products/${id}`)
        .then(res => res.data)
        }