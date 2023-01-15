import React, { useEffect, useState } from 'react';
import Component from './Component';

const Components = () => {
    const [components, setComponents] = useState([]);

    useEffect(() => {

        fetch('https://manufacturer-website-server-vercel01.vercel.app/tools')
            .then(res => res.json()).then(data => {
                setComponents(data);
            })
    }, []);
    return (
        <>
            <h2 className='text-3xl text-center text-secondary font-bold mt-3 uppercase'>Meet Your Needs</h2>

            <div className='grid lg:grid-cols-2 gap-2 sm:grid-cols-1 w-4/5 mx-auto'>

                {
                    components.map(component => <Component
                        key={component._id}
                        component={component}
                    ></Component>)
                }
            </div>
        </>
    );
};

export default Components;