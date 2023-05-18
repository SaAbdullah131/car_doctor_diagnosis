import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';


const Services = () => {
    const [services,setServices] = useState([]);
    
    useEffect(()=> {
        fetch('services.json')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[]);
    return (
        <div className='mt-4 mb-4'>
            <div className='text-center'>
                <h3 className='text-3xl font-bold text-orange-600'>Our Services</h3>
                <h2 className='tex-5xl'>Our Service Area</h2>
                <p>The Majority have suffered alteration in some form,but injected humor or randomised <br /> words which don't look even slightly believable.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    services.map(service=><ServiceCard
                        key={service._id}
                        service={service}
                    >
                    </ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;