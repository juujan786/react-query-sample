import { useQuery } from '@tanstack/react-query'
import { getProducts } from '../api/products'
import Card from '../components/products/Card';

const Home = () => {
   const {data, isFetching, isError, isFetched} = useQuery({
        queryKey:["products"],
        queryFn: getProducts,
    });

    if (isFetching) {
        return "Fetching..."
    }

    if (isError) {
        return "Error..."
    }

    if (isFetched) {
        console.log("data: ", data);
        
    }

    const data1 = JSON.stringify(data);


  return (
        <div className='flex flex-wrap gap-4'>
            {
                data?.map((product)=>(
                    <Card  product={product}/>
                )
                )
            }
            <Card product={data[50]}/>
        </div>
  )
}

export default Home;