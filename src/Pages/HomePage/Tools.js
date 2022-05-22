import React from 'react';
import { useQuery } from 'react-query';

const Tools = () => {
    const { data: tools, isLoading } = useQuery("item", fetch('http://localhost:3000/').then(res => res.json()));
    return (
        <div>
            {
                tools.map(tool => console.log(tool))
            }
        </div>
    );
};

export default Tools;