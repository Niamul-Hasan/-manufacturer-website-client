import React, { useEffect, useState } from 'react';

const Components = () => {
    const [components, setComponents] = useState([]);
    useEffect(() => {
        fetch('')
            .then(res => res.json()).then(data => {
                setComponents(data);
                console.log(components);
            })
    }, [])
    return (
        <div>

        </div>
    );
};

export default Components;