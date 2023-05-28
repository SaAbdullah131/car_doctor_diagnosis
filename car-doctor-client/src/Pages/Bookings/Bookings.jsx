import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import BookingRow from './BookingRow';
import Swal from 'sweetalert2';

const Bookings = () => {
    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);

    const url = `http://localhost:5000/bookings?email=${user?.email}`;

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setBookings(data);
            })
    }, [])

    // delete bookings service element works
    const handleDelete = id=> {
        const proceed =  Swal.fire({
             title: 'Are you sure?',
             text: "You won't be able to revert this!",
             icon: 'warning',
             showCancelButton: true,
             confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
            //  confirmButtonText: 'Yes, delete it!'
           })
 
           if(proceed) {
             fetch(`http://localhost:5000/bookings/${id}`,{
             method:'DELETE'
         })
             .then(res=>res.json())
             .then(data=> {
                 console.log(data);
                if(data.deletedCount > 0){
                     Swal.fire(
                     'Deleted!',
                     'Your file has been deleted.',
                     'success'
                    )
                    const remaining = bookings.filter(booking=> booking._id !== id);
                    setBookings(remaining);
              }
             })
         }
     }
// booking confirm button works 
     const handleBookingConfirm = (id) => {
        const proceed =  Swal.fire({
            title: 'Are you sure?',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
             cancelButtonColor: '#d33',
           //  confirmButtonText: 'Yes, delete it!'
          })
        fetch(`http://localhost:5000/bookings/${id}`,{
            method:'PATCH',
            headers:{
                'content-type':'application/json'
            },

        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.modifiedCount > 0) {
                Swal.fire('Update Successfully done');
            }
        })
    }

    return (
        <div>
            <h2 className='text-5xl text-center'>Your Bookings : {bookings.length}</h2><div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Image</th>
                            <th>Service</th>
                            <th>Date</th>
                            <th>Price</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings.map(booking=><BookingRow
                                key={booking._id}
                                booking={booking}
                                handleDelete = {handleDelete}
                                handleBookingConfirm = {handleBookingConfirm}
                            >

                            </BookingRow>)
                        }
                    </tbody>
        
                </table>
            </div>

        </div>
    );
};

export default Bookings;