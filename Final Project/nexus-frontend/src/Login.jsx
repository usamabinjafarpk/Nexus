import axios from 'axios'
import React, { useEffect, useRef } from 'react'

export default function Login() {
    const userRef=useRef()
    const passRef=useRef()
    
function Log(){
    axios
    .get("http://localhost:5099/api/Users/GetAllUsers")
    .then((res)=>{

        let isValid=false
        for(let i=0;i<res.data.length;i++)
        {
            if(res.data[i].userName==userRef.current.value && res.data[i].password==passRef.current.value){
                isValid=true
                break;
            }
            else{
                isValid=false
            }
        }
        if(isValid){
                console.log("Success");
                // router.push("/home")
        }
        else{
            console.log("Failed");
        }

        
})
}
    

  return (
    <div>
        {/* <form> */}
            <table>
                <tr>
                    <td>Username:</td>
                    <td>
                        <input type='text' ref={userRef} placeholder='Username'/>
                    </td>
                </tr>
                <tr>
                    <td>Password:</td>
                    <td>
                        <input type='password' ref={passRef} placeholder='Password'/>
                    </td>
                </tr>
                <tr>
                    <td rowSpan={2}>
                        <button onClick={Log}>Login</button>
                    </td>
                </tr>
            </table>
        {/* </form> */}
    </div>
  )
}
