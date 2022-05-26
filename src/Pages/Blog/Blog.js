
import React from 'react';
import NavBar from '../SharedPages/NavBar';
import Footer from '../SharedPages/Footer';

const Blog = () => {
    return (
        <div>
            <NavBar></NavBar>
            <h2 className='uppercase text-purple-500 text-3xl font-bold mt-2 w-4/5 mx-auto'>FAQ blog </h2>
            <div class="card w-4/5 mx-auto my-3 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title text-teal-500">(Q.1) How will you improve the performance of a React Application?</h2>
                    <p>Improvement of a react application is the first priority of a web developer. To improve a react project React itself has many hooks,functions and custom facilities. To improve my react project mainly i keep focusing on some dependencies. They are
                        <ul style={{ listStyle: 'inside' }}>
                            <li>Use more and more React hooks</li>
                            <li>Use context api</li>
                            <li>Implement react Query where needs</li>
                            <li>Use optimized svg or png image </li>
                            <li>use react firebase hooks insted of google firebase auth for authentication prosess </li>
                        </ul>
                    </p>

                </div>
            </div>

            <div class="card w-4/5 mx-auto my-3 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title text-teal-500">(Q.2)  What are the different ways to manage a state in a React application?</h2>
                    <p>There are several ways to manage a state ina react application.The main four ways are as follows.
                        <ul style={{ listStyle: 'inside' }}>
                            <li>Local State</li>
                            <li>Gobal State</li>
                            <li>Server State</li>
                            <li>Url State</li>
                        </ul>
                    </p>
                </div>
            </div>

            <div class="card w-4/5 mx-auto my-3 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title text-teal-500">(Q.3)How does prototypical inheritance work?</h2>
                    <p>JavaScript is a prototype-based, Object Oriented programming language. After the ES6 updates, JavaScript allowed for “prototypal inheritance”, meaning that objects and methods can be shared, extended, and copied.</p>
                    <p> The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object.</p>

                </div>
            </div>

            <div class="card w-4/5 mx-auto my-3 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title text-teal-500">(Q.4)Why you do not set the state directly in React?</h2>
                    <p>React useState hook can to be set directly because useState hooks works like a function which return the state value and every function starts with a initail or defaul value.The direct set process of a state like stateName=[...] may return falsy value if it was not rendered. To have a reRender facility react prodives useState hook.</p>

                </div>
            </div>

            <div class="card w-4/5 mx-auto my-3 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title text-teal-500">(Q.5)What is a unit test? Why should write unit tests</h2>
                    <p> A unit test is a method that instantiates a small portion of our application and verifies its behavior independently from other parts. A typical unit test contains 3 phases: First, it initializes a small piece of an application it wants to tet, then it applies some stimulus to the system under test and finally, it observes the resulting behavior. If the observed behavior is consistent with the expectations, the unit test passes, otherwise, it fails.</p>
                    <p>
                        The purpose of a unit test in software engineering is to verify the behavior of a relatively small piece of software, independently from other parts. Unit tests are narrow in scope, and allow us to cover all cases, ensuring that every single part works correctly.
                    </p>

                </div>
            </div>
            <Footer></Footer>

        </div>
    );
};

export default Blog;