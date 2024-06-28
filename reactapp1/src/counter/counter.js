
export function Counter(props){

    let count =0
    const increment = ()=>{
        console.log("Current Count: ", count);
        count++
        console.log("Updated Count", count)
    }


   
    return (
        <div id = "counter-component">
            <p>Counter component: {props.counterName}</p>
            Count : {count}
            <br></br> <br></br>
            <button onClick={increment}>Increment</button>

        </div>
    )
}