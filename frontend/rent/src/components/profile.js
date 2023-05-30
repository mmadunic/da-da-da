import React, { useState, useEffect } from 'react'
import axios from "axios";
import { Tabs } from 'antd';
import Loader from './loader.js';
import Swal from 'sweetalert2'
import { Tag } from 'antd';

const { TabPane } = Tabs

function Profile() {
    const user = JSON.parse(localStorage.getItem('currentUser'))
    useEffect(() => {
        if (!user) {
            window.location.href = '/login'
        }
    }, [])
    return (
        <div className='mt-3 ms-3' >
            <Tabs defaultActiveKey="1">
                <TabPane tab="Profile" key="1">
                    <div className='ls'>
                        <h2>My profile</h2>
                        <hr />
                        <h2><b>Name:</b> {user.data.firstName}</h2>
                        <h2><b>Surname:</b> {user.data.lastName}</h2>
                        <h2><b>Date of birth:</b> {user.data.birthdate}</h2>
                        <h2><b>Email:</b> {user.data.email}</h2>
                        
                    </div>

                </TabPane>
                <TabPane tab="Rentings" key="2">
                    {/* <MyRent /> */}
                </TabPane>
            </Tabs>
        </div>
    )
}

export default Profile;


// export function MyRent() {
//     const user = JSON.parse(localStorage.getItem('currentUser'))
//     const [renting, setRenting] = useState([])
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState();

//     const fetchRent = async () => {
//         setLoading(true)
//         const cars = await axios.post('http://localhost:3001/api/rentings/getuserrenting', { userid: user.data._id })
//         console.log(cars)
//         setRenting(cars.data)
//         setLoading(false)
//     }

//     async function cancelRent(rentingid, carid) {
//         try {
//             setLoading(true)
//             const result = await axios.post('http://localhost:3001/api/rentings/cancelrenting', { rentingid, carid })
//             console.log(result)
//             setLoading(false)
//             Swal.fire('Well done', 'You cancel car', 'success')
//                 .then(result => {
//                     window.location.reload()
//                 })
//         } catch (err) {
//             setLoading(false)
//             console.error(err);
//             Swal.fire('UPS! :(', 'Something went wrong', 'error')
//         }
//     }

//     useEffect(() => {
//         try {
//             fetchRent()
//             console.log(fetchRent())
//         } catch (err) {
//             console.error(err);
//             setLoading(false)
//             setError(true)
//         }
//     }, [])

//     return (
//         <div>
//             <div className='row'>
//                 <div className='col-md-6'>
//                     {loading && (<Loader />)}
//                     {renting && (renting.map(renting => {
//                         return (
//                             <div className='ls'>
//                                 <p><b>{renting.car}</b></p>
//                                 <p><b>rentingID: {renting._id}</b></p>
//                                 <p><b>Checkin: {renting.fromDate} </b></p>
//                                 <p><b>Checkout: {renting.toDate} </b></p>
//                                 <p><b>Amount: {renting.totalAmount} €</b></p>
//                                 <p><b>Status: </b>
//                                 {""}
//                                     {renting.status == 'cancelled' ? (<Tag color="red">CANCELLED</Tag>) : (<Tag color="green">CONFIRMED</Tag>)}
//                                 </p>
//                                 {renting.status !== 'cancelled' && (
//                                     <p>
//                                         <button style={{ float: 'right' }} onClick={() => { cancelRent(renting._id, renting.roomid) }}>Cancel Rent</button>
//                                     </p>
//                                 )}
//                             </div>
//                         )
//                     }))}
//                 </div>
//             </div>
//         </div>
//     )
// }


