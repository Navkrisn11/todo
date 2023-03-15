import React, { useState } from 'react'
import Todolist from "./TodoList.css"
import axios from 'axios';

export default function TodoList() {
const [list,setList] = useState()
    const [item,setItem] =useState()

    const addData=()=>{
       let arr =[...list]
    arr.push(item)
    setList(arr)

       
    }
    const show=()=>{
      const data = ["kanha","navkrishn","patidar"]
      setList(data)
    
     

    }
    const update=()=>{

    }
       const rem=(val)=>{
        let arr =[...list]
         const finalArr =arr.filter((element)=>element !== val)
         setList(finalArr)
       }
        
    
  return (
   
    <>
   
    <div>
    <table border={5} >
            <thead>
                        <tr> 
                             <td colSpan={2}> <input onChange={(el)=>setItem(el.target.value)}></input></td>
                              <td><button  onClick={addData}>ADD</button></td>
                              <td><button onClick={show}>Show</button></td>
                        </tr>
            </thead>

            <tbody>
               {
                list?.map((el)=>{
                     return(
                      <tr>
                               <td>{el}</td>

                               <td><button id='delete' onClick={()=>rem(el)}>Delete</button></td>
                      </tr>
                     )

                })
               }
            </tbody>
    </table>
    
    
    
    </div>
      
    </>
  )
}
