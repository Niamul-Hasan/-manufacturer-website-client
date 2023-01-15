import React, { useEffect, useState } from 'react';
import ProductRow from './ProductRow';

const ManageProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://manufacturer-website-server-vercel01.vercel.app/tools')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
            })
    }, [])
    return (
        <div>
            <span className='text-4xl'>Manage All Products</span>
            <div className='grid sm:grid-cols-1 lg:grid-cols-3 gap-2 mt-5'>
                {
                    products.map(product => <ProductRow
                        key={product._id}
                        product={product}
                    ></ProductRow>)
                }
            </div>
        </div>
    );
};

export default ManageProducts;