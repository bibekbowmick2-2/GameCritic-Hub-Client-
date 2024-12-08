import React from 'react';
import caro1 from '../../assets/carosal-1 (1).png'
import caro2 from '../../assets/carosal-1 (2).png'
import caro3 from '../../assets/caro-2 (2).png'
import caro4 from '../../assets/caro-2 (3).jpg'
const Banner = () => {
    return (
        <div className=" mx-auto w-full h-[300px] lg:h-[600px] lg:max-w-11/12">
            <div className="carousel w-full h-full">
                <div className="carousel-item w-full relative ">
                    <img
                        src={caro1}
                        className="w-full"
                        alt="Tailwind CSS Carousel component" />
                    <div className="max-w-md absolute lg:top-[300px] lg:left-[300px] text-white">
                        <h1 className="text-2xl lg:text-5xl font-bold">Chill Gamer: A Game Review Application</h1>
                        <p className="py-6 text-xl">
                            "Are you ready to level up your gaming experience? Let's chill and play together with our Game Chiller app!
                        </p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
                <div className="carousel-item w-full relative">
                    <img
                        src={caro2}
                        className="w-full"
                        alt="Tailwind CSS Carousel component" />
                    <div className="max-w-md absolute lg:top-[300px] lg:left-[300px] text-white">
                        <h1 className="text-2xl lg:text-5xl font-bold">Chill Gamer: A Game Review Application</h1>
                        <p className="py-6 text-xl">
                            "Are you ready to level up your gaming experience? Let's chill and play together with our Game Chiller app!
                        </p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
                <div className="carousel-item w-full relative">
                    <img
                        src={caro3}
                        className="w-full"
                        alt="Tailwind CSS Carousel component" />
                    <div className="max-w-md absolute lg:top-[300px] lg:left-[300px] text-white">
                        <h1 className="text-2xl lg:text-5xl font-bold">Chill Gamer: A Game Review Application</h1>
                        <p className="py-6 text-xl">
                            "Are you ready to level up your gaming experience? Let's chill and play together with our Game Chiller app!
                        </p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
                <div className="carousel-item w-full relative ">
                    <img
                        src={caro4}
                        className="w-full"
                        alt="Tailwind CSS Carousel component" />
                    <div className="max-w-md absolute lg:top-[300px] lg:left-[300px] text-white">
                        <h1 className="text-2xl lg:text-5xl font-bold">Chill Gamer: A Game Review Application</h1>
                        <p className="py-6 text-xl">
                            "Are you ready to level up your gaming experience? Let's chill and play together with our Game Chiller app!
                        </p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
           
        </div>
    );
};

export default Banner;