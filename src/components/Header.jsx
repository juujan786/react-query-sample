import { useMutation } from '@tanstack/react-query';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getUser } from '../api/user';
import { setUser } from '../redux/user/userSlice';

const Header = () => {
  const dispatch = useDispatch();
  const {user, access_token} = useSelector((state)=>state.user);

  const {mutate}=useMutation({
    mutationKey:["user"],
    mutationFn: ()=>getUser({access_token}),
    onSuccess: user=>{
      console.log("user: ",user);
    }
  });

  useEffect(()=>{
    if (access_token) {
      console.log("access token: ",access_token);
      mutate()
    }
  },[access_token])



  return (
    <div className='flex justify-between py-6 px-4 text-center'>
        <span className='text-3xl font-bold'>
            <Link to={"/"}>
            Fake Store
            </Link>
        </span>
        <ul className='flex gap-3'>
            <li><Link to={"/products"}>Products</Link></li>
            {
              user ? <div>
                <img src={user.avatar} alt={'user image'} />
              </div>:<li><Link to={"/login"}>Login</Link></li>
            }
        </ul>

    </div>
  )
}

export default Header