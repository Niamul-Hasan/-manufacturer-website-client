import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../SharedPages/Loading';

const Tools = () => {
    const { data: tools, isLoading } = useQuery("tools", fetch('http://localhost:4000/tools').then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            {
                tools.map(tool => console.log(tool))
            }
        </div>
    );
};

export default Tools;