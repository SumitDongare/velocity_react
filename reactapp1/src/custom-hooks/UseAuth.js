import  { useEffect, useState } from 'react'

export default function useAuth() {
    const [isAuthenticated, setAuth] = useState(false); 

    useEffect(()=>{
       const token = localStorage.getItem('token');
       if(token){
        setAuth(true)
       }else{
        setAuth(false)
       }
    }, [])

  return isAuthenticated;
}
