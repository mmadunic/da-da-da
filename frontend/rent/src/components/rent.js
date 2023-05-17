import React, {useState,useEffect} from 'react'
import axios from "axios";
import { useParams } from 'react-router-dom';
import Loader from './loader.js';
import Error from './error.js';

function Rent(){
const user = JSON.parse(localStorage.getItem('currentUser'))
const { carid }= useParams();
  console.log(clearImmediate)
    
    const [car,setCar]=useState();
    const [loading,setLoading]=useState(true);
    const [error,setError]=useState(false);

    const postData=async ()=>{
        setLoading(true)
        const res=await axios.post('http://localhost:3001/api/cars/getcarbyid',{carid:carid})
        setCar(res.data);
        console.log(res.data)
        setLoading(false);
      }
  
      useEffect(()=>{ 
        try {
          postData();
        } catch (error) {
          setError(true)
          console.log(error)
          setLoading(false)
        }
        
      },[])

    return(
        <div className='m-5'>
             {loading?(<Loader/>):car?(
                 <div>
                     <div className='row justify-content-center mt-5 ls'>
                          <div className='col-md-5' id="1">
                                 <h1>{car.name}</h1>
                                 <img src={car.image} className=''/>
                          </div>

                          <div className='col-md-5 mt-3' id="2">
                                 <div style={{textAlign:'right'}}>
                                 <i><h1>Rent Details</h1></i>
                                    <hr/>
                                 
                                    <b>
                                      <p>Name:  {user.data.name}</p>
                                      <p>From:</p>
                                      <p>To:</p>
                                      <p>Max Count:{car.count}</p>
                                    </b>
                                  </div>
                                  
                                <div style={{textAlign:'right'}}>
                                  <i><h1>Amount</h1></i>
                                  <hr/>
                                  <p>Total days:</p>
                                  <p>Rent per day:  {car.price}</p>
                                  <b>Total Amount:</b>
                                </div>

                                <div style={{float:'right'}}>
                                  <button className='btn btn-primary'>Pay Now </button>
                                </div>
                          </div>
                     </div>
                 </div>
             ):(<Error/>)}
 
        </div>
)}

export default Rent;