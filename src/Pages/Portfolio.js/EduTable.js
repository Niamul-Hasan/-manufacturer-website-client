import React from 'react';

const EduTable = () => {
    return (
        <div>
            <h1 className='text-teal-500 text-2xl ml-8'>Educational Qualification</h1>
            <div class="overflow-x-auto">
                <table class="table table-zebra w-4/5 mx-auto">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th>Degree</th>
                            <th>Institution</th>
                            <th>Board</th>
                            <th>Major</th>
                            <th>Passing Year</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <!-- row 1 --> */}
                        <tr>

                            <th>
                                ECE
                            </th>
                            <td>Hajee Mohammad Danesh Science And Technology University,Dinajpur</td>
                            <td>N/A</td>
                            <td>Networking</td>
                            <td>2017</td>
                        </tr>
                        {/* <!-- row 2 --> */}
                        <tr>
                            <th>HSC</th>
                            <td>Agriculture University College,Mymensingh</td>
                            <td>Dhaka</td>
                            <td>Science</td>
                            <td>2012</td>
                        </tr>
                        {/* <!-- row 3 --> */}
                        <tr>
                            <th>SSC</th>
                            <td>Ganai Shahid Mutaleb High School,Sherpur</td>
                            <td>Dhaka</td>
                            <td>Science</td>
                            <td>2010</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default EduTable;