import React from 'react';

const PCBuild = () => {
    return (
        <>
            <h2 className='text-center uppercase text-3xl text-teal-500 mt-5'>Build Your Dream PC</h2>
            <div className='flex justify-center gap-4'>
                <div class="stats stats-vertical lg:stats-horizontal shadow">

                    <div class="stat">
                        <div class="stat-figure text-secondary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        </div>
                        <div class="stat-title font-bold">Build Complete</div>
                        <div class="stat-value">1300+</div>
                        <div class="stat-desc">Jan 1st - May 1st</div>
                    </div>

                    <div class="stat">
                        <div class="stat-figure text-secondary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
                        </div>
                        <div class="stat-title font-bold">New Orders</div>
                        <div class="stat-value">1100</div>
                        <div class="stat-desc">↗︎ 1300 (82%)</div>
                    </div>

                    <div class="stat">
                        <div class="stat-figure text-secondary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>
                        </div>
                        <div class="stat-title font-bold">New Registrations</div>
                        <div class="stat-value">1200</div>
                        <div class="stat-desc">↘︎ 90 (14%)</div>
                    </div>

                    <div class="h-96 carousel carousel-vertical rounded-box">
                        <div class="carousel-item h-full">
                            <img src="https://api.lorem.space/image/game?w=256&h=400&hash=8B7BCDC2" alt="" />
                        </div>
                        <div class="carousel-item h-full">
                            <img src="https://api.lorem.space/image/game?w=256&h=400&hash=500B67FB" alt="" />
                        </div>
                        <div class="carousel-item h-full">
                            <img src="https://api.lorem.space/image/game?w=256&h=400&hash=A89D0DE6" alt="" />
                        </div>
                        <div class="carousel-item h-full">
                            <img src="https://api.lorem.space/image/game?w=256&h=400&hash=225E6693" alt="" />
                        </div>
                        <div class="carousel-item h-full">
                            <img src="https://api.lorem.space/image/game?w=256&h=400&hash=9D9539E7" alt="" />
                        </div>
                        <div class="carousel-item h-full">
                            <img src="https://api.lorem.space/image/game?w=256&h=400&hash=BDC01094" alt="" />
                        </div>
                        <div class="carousel-item h-full">
                            <img src="https://api.lorem.space/image/game?w=256&h=400&hash=7F5AE56A" alt="" />
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default PCBuild;