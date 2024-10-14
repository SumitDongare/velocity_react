import React from "react";

 export class ClassLifecycle extends React.Component{

     constructor(props){
        super(props)
        this.state ={}
        console.log('Constructor')
        
     }

     static getDerivedStateFromProps(props, state){
        console.log('getDerivedStateFromProps')
        // if(props.someValue !== state.someValue){
        //     return {someValue : props.someValue}
        // }

        return null;
     }

    render(){
        console.log('Render')
        return <div>Class Life Cycle Component
             {this.state.someValue}
            <button onClick={()=>{
                this.setState({
                    someValue : 5
                })
            }}>Update State</button>
        </div>


    }
    

     componentDidMount(){
        console.log('Component did Mount')
     }

     shouldComponentUpdate(nextProps, nextState){
        console.log('shouldComponentUpdate')
        return true;
     }

     getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('getSnapshotBeforeUpdate')
         return null; //some value
     }

     componentDidUpdate(prevProps, prevState, snapshot){
        console.log('componentDidUpdate')
     }

     componentWillUnmount(){
        console.log('component is destroying')
     }

     componentDidCatch(){
         console.log('Caught Error')
     }

     static getDerivedStateFromError(error){
         console.log('dd')
     }

 }


/** 
 * Phses
 * 1. Mounting
 *    constructor
 *    getDerivedStateFromProps
 *    render
 *    componentDidMount
 * 
 * 2. Updating
 *    getDerivedStateFromProps
 *    shouldComponentUpdate
 *    render
 *    getSnapshotBeforeUpdate(prevProps, prevState)
 *    componentDidUpdate(prevProps, prevState, snapshot)
 *  
 * 3. Unmounting
 *    componentWillUnmount
 * 
 * 
 * 4. Error
 *    componentDidCatch
 *    getDerivedStateFromError
 *    
 */