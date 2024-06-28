function Greeting(props){

    const age =20;
    return <div>
        <p> Greeting Component</p>
         <p>{`${props.greeting} ${props.name}`}</p>
            <p>My age is: {age}</p>
    </div>
}

export default Greeting