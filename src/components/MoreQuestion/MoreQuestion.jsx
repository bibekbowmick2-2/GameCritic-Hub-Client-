import React from 'react';

const MoreQuestion = () => {
    return (
        <div>
            <div
                className="hero max-h-[700px] lg:max-h-90"
                style={{
                    backgroundImage: "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
                }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-neutral-content text-start">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Have Any Questions?</h1>
                        <p className="mb-5">
                            Youplay comes with documentation. See it here - https://nkdev.info/docs/youplay-html/
                            Also we provide support for our users through ticket system - https://nk.ticksy.com/
                        </p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MoreQuestion;