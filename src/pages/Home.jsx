import { useInfiniteQuery, useQuery } from '@tanstack/react-query'
import { getProducts } from '../api/products'
import Card from '../components/products/Card';
import { useState } from 'react';

const Home = () => {
//    const {data, isFetching, isError, isFetched} = useQuery({
//         queryKey:["products"],
//         queryFn: getProducts,
//     });

    const [page, setPage] = useState(1);
    
    

  const {data, isFetching, isFetched} = useQuery({
    queryKey: ["posts", { page }],
    keepPreviousData: true,
    queryFn: () => getProducts(page),
  })
  
 if (isFetching) {
    return "fetching..."
 }

 if (isFetched) {
    console.log("data: ",data);
 }
        

  return (
      <>
          <div className='flex flex-wrap gap-4'>
           {data?.products?.map(product => (
          <Card key={product?.id} product={product}/>
        ))}
         </div>
            <p className='flex gap-3 my-4'>
            {data.previousPage && (
                 <button className='py-1 px-3 rounded-md bg-black text-white' onClick={() => setPage(page-1)}>Previous</button>
            )}
            {data.nextPage && (
                <button className='py-1 px-3 rounded-md bg-black text-white' onClick={() => setPage(page+1)}>Next</button>
            )}
            </p>
      </>
       
  )
}

export default Home;