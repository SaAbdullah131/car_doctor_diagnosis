import React from 'react';
import img1 from '../../../assets/images/banner/1.jpg';
import img2 from '../../../assets/images/banner/2.jpg';
import img3 from '../../../assets/images/banner/3.jpg';
import img4 from '../../../assets/images/banner/4.jpg';
import img5 from '../../../assets/images/banner/5.jpg';
import img6 from '../../../assets/images/banner/6.jpg';

const Banner = () => {
    return (
        <div className="carousel w-full h-[600px]">
            <div id="banner1" className="carousel-item relative w-full">
                <img src={img5} className="w-full rounded-lg" />
                <div className="absolute rounded-lg flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#banner4" className="btn btn-circle mr-4">❮</a>
                    <a href="#banner2" className="btn btn-circle">❯</a>
                </div>
                <div className="absolute flex items-center  h-full  left-0 top-0  bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
                    <div className='text-white space-y-7 pl-12'>
                        <h2 className='text-6xl'>Affordable price for <br /> Car servicing</h2>
                        <p>There are many variations of car service available here in our car doctor service point. <br />Majority  client Satisfied with our Service</p>
                        <div>
                            <button className='btn btn-primary mr-3'>Discovery</button>
                            <button className='btn btn-outline border border-white text-white'>Latest Project</button>
                        </div>
                    </div>
                </div>
            </div>
            <div id="banner2" className="carousel-item relative w-full">
                <img src={img2} className="w-full" />
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#banner1" className="btn btn-circle mr-4">❮</a>
                    <a href="#banner3" className="btn btn-circle">❯</a>
                </div>
                <div className="absolute flex items-center  h-full  left-0 top-0  bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
                    <div className='text-white space-y-7 pl-12'>
                        <h2 className='text-6xl'>Affordable price for <br /> Car servicing</h2>
                        <p>There are many variations of car service available here in our car doctor service point. <br />Majority  client Satisfied with our Service</p>
                        <div>
                            <button className='btn btn-primary mr-3'>Discovery</button>
                            <button className='btn btn-outline border border-white text-white'>Latest Project</button>
                        </div>
                    </div>
                </div>
            </div>
            <div id="banner3" className="carousel-item relative w-full">
                <img src={img3} className="w-full" />
                <div className="absolute flex justify-end  transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#banner2" className="btn btn-circle mr-4">❮</a>
                    <a href="#banner4" className="btn btn-circle">❯</a>
                </div>
                <div className="absolute flex items-center  h-full  left-0 top-0  bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
                    <div className='text-white space-y-7 pl-12'>
                        <h2 className='text-6xl'>Affordable price for <br /> Car servicing</h2>
                        <p>There are many variations of car service available here in our car doctor service point. <br />Majority of Our client Satisfied with our Service</p>
                        <div>
                            <button className='btn btn-primary mr-3'>Discovery</button>
                            <button className='btn btn-outline border border-white text-white'>Latest Project</button>
                        </div>
                    </div>
                </div>
            </div>
            <div id="banner4" className="carousel-item relative w-full">
                <img src={img4} className="w-full" />
                <div className="absolute rounded-lg flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#banner3" className="btn btn-circle mr-4">❮</a>
                    <a href="#banner1" className="btn btn-circle">❯</a>
                </div>
                <div className="absolute flex items-center  h-full  left-0 top-0  bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
                    <div className='text-white space-y-7 pl-12'>
                        <h2 className='text-6xl'>Affordable price for <br /> Car servicing</h2>
                        <p>There are many variations of car service available here in our car doctor service point. <br/>Majority of Our client Satisfied with our Service</p>
                        <div>
                            <button className='btn btn-primary mr-3'>Discovery</button>
                            <button className='btn btn-outline border border-white text-white'>Latest Project</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;