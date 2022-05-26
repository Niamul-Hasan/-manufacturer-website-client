import React from 'react';
import NavBar from '../SharedPages/NavBar';
import EduTable from './EduTable';

const Portfolio = () => {
    return (
        <div>
            <NavBar></NavBar>
            <div class="card w-4/5 mx-auto my-5 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title">Niamul Hasan Zead</h2>
                    <p className='text-lg'>Sherpur Town, Sherpur District</p>
                    <p>Email: zead.ece2014@gmail.com</p>
                    <p>Phone: 01946760326</p>
                </div>
                <EduTable></EduTable>
                <div class="card-body mt-2">
                    <h2 class="card-title text-teal-500 text-2xl">Skills For Web Development</h2>
                    <p className='text-lg'>For Font End Development</p>
                    <ul style={{ listStyle: 'inside' }}>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>React.js</li>
                        <li>React Firebase Hooks</li>
                        <li>Express.js</li>
                        <li>Node.js</li>
                        <li>mongodb</li>
                        <li>Heroku</li>
                        <li>Stripe Payment gatway</li>
                        <li>DaisyUI</li>
                        <li>Tailwind CSS</li>
                        <li>React BootStrap</li>
                        <li>BootStrap</li>
                        <li>Netlify</li>
                        <li>Google Forebase</li>
                        <li>Google Searching</li>
                    </ul>
                </div>

                <div class="card-body mt-2">
                    <h2 class="card-title text-success text-2xl">Some Of my Best Works</h2>
                    <ol style={{ listStyle: 'number' }}>

                        <li><span className='text-xl text-green-700'>Project Name: Hiking house</span> <br />
                            <span className='text-xl text-purple-700'> Live Link (https://hiking-house.web.app/)</span> <br />
                            <a href='https://hiking-house.web.app/' target="_blank" rel="noopener noreferrer"><span className='text-lg text-blue-600'>click here to visit</span></a></li>

                        <li><span className='text-xl text-green-700'>Project Name: Your Private Dentist</span> <br />
                            <span className='text-xl text-purple-700'> Live Link (https://your-private-dentist.web.app/)</span> <br />
                            <a href='https://your-private-dentist.web.app/' target="_blank" rel="noopener noreferrer"><span className='text-lg text-blue-600'>click here to visit</span></a></li>

                        <li><span className='text-xl text-green-700'>Project Name: Review Picker</span> <br />
                            <span className='text-xl text-purple-700'> Live Link (https://stalwart-sopapillas-ab6c0c.netlify.app/)</span> <br />
                            <a href='https://stalwart-sopapillas-ab6c0c.netlify.app/' target="_blank" rel="noopener noreferrer"><span className='text-lg text-blue-600'>click here to visit</span></a></li>
                    </ol>

                </div>

            </div>
        </div>
    );
};

export default Portfolio;