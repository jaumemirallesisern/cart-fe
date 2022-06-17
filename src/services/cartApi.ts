import axios from 'axios';

const CARTAPI_URL = `http://localhost:3001/api/v1`;

export interface Product {
  id: number;
  name: string;
  customerPrice: number;
  cost : number;
}

export function fetchProductsList() {
  
    console.log(`fetching`);
    // `axios` function returns promise, you can use any ajax lib, which can
    // return promise, or wrap in promise ajax call
    //return axios.get('http://localhost:3001/api/v1/products');
    return axios.get(
        `${CARTAPI_URL}/products`,
        {
          headers:{
            "Access-Control-Allow-Origin" : "*"
          }
        }
      ).then( response => {
        console.log(response.data);
        let r : Array<Product> = response.data;
        return r;
      })
};