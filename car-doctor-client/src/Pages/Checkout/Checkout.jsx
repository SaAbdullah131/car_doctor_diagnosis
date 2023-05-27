import React, { useContext } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import {AuthContext} from'../../providers/AuthProvider';
import Swal from 'sweetalert2'


const Checkout = () => {
    const service = useLoaderData();
    const { title, _id ,price,img } = service;
    const {user} = useContext(AuthContext)
    const navigate = useNavigate();

    const handleBookService = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = user?.email;
        const amount = form.amount.value;
        const booking = {
            customerName : name,
            email,
            img ,
            date,
            service:title,
            service_id:_id,
            price: amount
        }

        console.log(booking);
        fetch('http://localhost:5000/bookings',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(booking)
        })
        .then(res=>res.json())
        .then(data=> {
            console.log(data);
            if(data.insertedId) {
                Swal.fire('Booking Successfully done');
            }
        })
      navigate('/');
      form.reset();
    }
    return (
        <div>
            <h2 className='text-center text-3xl'>Book Service : {title}</h2>
            <form onSubmit={handleBookService} className='py-5'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="Name" defaultValue={user?.displayName} name='name' className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label"> 
                            <span className="label-text">Date</span>
                        </label>
                        <input type="date"  name='date' className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="Email" name="email" defaultValue={user?.email} className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Due Amount</span>
                        </label>
                        <input type="number" name='amount' defaultValue={price} className="input input-bordered" />
                    </div>
                </div>
                <div className="form-control mt-6">
                    <input className='btn btn-block btn-primary' type="submit" value="Confirm Order"/>
                </div>
            </form>
        </div>


    );
};

export default Checkout;