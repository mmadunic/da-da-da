import React, { useState, useEffect } from 'react'
import axios from "axios";
import { useParams } from 'react-router-dom';
import Loader from './loader.js';
import Error from './error.js';
import moment from "moment";
import Swal from 'sweetalert2';
// import StripeCheckout from 'react-stripe-checkout';

function Rent() {
  const user = JSON.parse(localStorage.getItem('currentUser'))

  const { carid , fromDate, toDate} = useParams();

  const [car, setCar] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);


  const postData = async () => {
    setLoading(true)
    const res = await axios.post('http://localhost:3001/api/cars/getcarbyid', { carid: carid })
    setCar(res.data);
    setTotalAmount(res.data.price * totalDays)
    setLoading(false);
  }

  useEffect(() => {
    try {
      postData();
    } catch (error) {
      setError(true)
      console.log(error)
      setLoading(false)
    }

  }, [])

  const firstDate = moment(fromDate, 'DD-MM-YYYY')
  const lastDate = moment(toDate, 'DD-MM-YYYY')
  const totalDays = moment.duration(lastDate.diff(firstDate)).asDays() + 1
  const [totalAmount, setTotalAmount] = useState();

  async function onToken(token) {
    console.log(token)
    const rentDetails = {
      car,
      userid: JSON.parse(localStorage.getItem('currentUser')).data._id,
      fromDate,
      toDate,
      totalAmount,
      totalDays,
      token
    }
    try {
      setLoading(true)
      const result = axios.post('http://localhost:3001/api/renting/rentcar', rentDetails)
      setLoading(false)
      Swal.fire('Congratulations', 'You rented a car', 'success')
        .then(result => {
          window.location.href = '/home'
        })
      console.log(result)
    } catch (error) {
      setLoading(false)
      Swal.fire('O no!', 'Something went wrong!', 'error')
    }
  }



  // return (
  //   <div className='m-5'>
  //     {loading ? (<Loader />) : car ? (
  //       <div>
  //         <div className='row justify-content-center mt-5 ls'>
  //           <div className='col-md-5' id="1">
  //             <h1>{car.name}</h1>
  //             <img src={car.image[0]} className='' />
  //           </div>
  //           <div className='col-md-5 mt-3' id="2">
  //             <div style={{ textAlign: 'right' }}>
  //               <i><h1>Rent Details</h1></i>
  //               <hr />
  //               <b>
  //                 <p>Name:  {user.data.name}</p>
  //                 <p>From Date: {fromDate}</p>
  //                 <p>To Date: {toDate}</p>
  //                 {/* <p>Max Count:{car.count}</p> */}
  //               </b>
  //             </div>

  //             <div style={{ textAlign: 'right' }}>
  //               <i><h1>Amount</h1></i>
  //               <hr />
  //               <p>Total days:  {totalDays}</p>
  //               <p>Rent per day:  {car.price}</p>
  //               <b>Total Amount: {totalAmount}</b>
  //             </div>

  //             <div style={{ float: 'right' }}>
  //               <StripeCheckout
  //                 token={onToken}
  //                 // stripeKey="pk_test_51N3vFzBFWkHUqSlGJ0IroYTABBpaEKgwolqfc5iM7QvVRHeoQgIiXpelyWBcg8cPctQf2mtwJNBvjxr7GB0Do07Y00lSZYZIpE"
  //               >
  //                 <button className='btn btn-primary' >Pay Now </button>
  //               </StripeCheckout>
  //             </div>
  //           </div>
  //         </div>

  //       </div>
  //     ) : (<Error />)}
  //   </div>
  // )

}

export default Rent;