import React, { useEffect, useRef } from 'react';
import Input from '../components/Input';
import { useMutation } from '@tanstack/react-query';
import { login } from '../api/auth';
import { useDispatch } from 'react-redux';
import { setToken, setUser } from '../redux/user/userSlice';
import { useNavigate } from 'react-router';

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const dispatch = useDispatch()
  const navigate = useNavigate();

 const { mutate } =  useMutation({
    mutationFn: login,
    onSuccess: data => {
      console.log("data: ",data);
      dispatch(setToken(data));
      // navigate('/');
    },
    onError:err=>{
      console.log("error: ",err);
    }
  })

  // useEffect(()=>{
  //   dispatch(setToken({access_token: null, refresh_token:null}));
  //   dispatch(setUser({user: null}));
  // },[]);

  const handleSubmit = (e) => {
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    
    e.preventDefault();
    mutate({
      email,
      password
    })
  };

  return (
    <div className='w-screen flex justify-center items-center mt-4'>
     <form onSubmit={handleSubmit}>
      <Input label="Email" type="email" ref={emailRef} />
      <Input label="Password" type="password" ref={passwordRef} />
      <button type={"submit"} className='bg-black text-white px-6 py-2 mt-4 rounded'>
        Login
      </button>
     </form>
    </div>
  );
};

export default Login;
