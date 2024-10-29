import { useMutation, useQuery } from '@tanstack/react-query';
import React from 'react'
import { useParams } from 'react-router-dom'
import { getProduct } from '../api/products';

const ProductDetails = () => {
    const {productId} = useParams();

    const { data, isFetched, isFetching } = useQuery({
      queryKey:["products",productId],
      queryFn:()=>getProduct(productId)
    });

    if (isFetching) {
      return "Fetching..."
    }
    if (isFetched) {
      console.log("product: ",data);
    }
  return (
    <div className='flex gap-3'>
      <div className='flex-2'>
        <img src={data.images[0]} alt="" />
      </div>
      <div>
        <h1 className='text-3xl font-bold'>{data.title}</h1>
        <p className=''>{data.description}</p>
        <span className='text3xl font-bold'>${data.price}</span>
      </div>
    </div>
  )
}

export default ProductDetails