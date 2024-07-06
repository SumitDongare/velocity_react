import React, { useContext, useState } from 'react'

const MyContext = React.createContext();

export default function ContextExample() {
    const [theme, setTheme] = useState('light')
    const [data, setData] = useState({
       user:{
        firstName : 'Rohit',
       } ,
        theme:'light'
    })

  return (
    <div>
        Parent Component : {theme}

     <MyContext.Provider value={data}>
        <ChildComponent ></ChildComponent>
     </MyContext.Provider>

     <button onClick={()=>{
        setTheme(theme==='light' ? 'dark' : 'light')
     }}>Change Theme</button>
      
    </div>
  )
}

function ChildComponent(){

    return (
        <div>
            Child
            <GrandChildComponent ></GrandChildComponent>
        </div>
    )

}

function GrandChildComponent(){
  const data = useContext(MyContext)

    return (
        <div>
            Grand : {data.user.firstName}
            {data.theme}
        </div>
    )

}
