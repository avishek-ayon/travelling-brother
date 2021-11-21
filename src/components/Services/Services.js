import React from 'react';
import { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'
import { Rotate, Zoom } from "react-awesome-reveal";

const Services = () => {

    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://morning-falls-09378.herokuapp.com/services')
            .then(res => res.json())
            .then(data => {
                setServices(data)
                console.log(data)
            })
    }, [])

    return (
        <div id='services'>
            <Zoom bottom cascade>
                <h1 className=" text-center fw-bold my-4 service-heading">Our Travelling Services</h1>
            </Zoom>

            <div className="services-container">
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}></Service>)
                }

            </div>
        </div>
    );
};

export default Services;