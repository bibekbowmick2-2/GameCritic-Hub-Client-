import React from 'react';
import dragonbg from '../../assets/Homebg.jpg'
const MoreFeatures = () => {
    return (
        <div style={{
            backgroundImage: `url(${dragonbg})`, backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: '0.9',

        }} className="w-full h-[750px] lg:h-[450px]">
            <div className="bg-[#0000008a] h-full w-full pt-10">
                <h1 className='text-3xl text-center text-white'>A Bit More Features</h1>
                <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10 gap-5'>
                    <div className="card bg-[#aea7d060] text-neutral-content w-[300px] lg:w-[300px] lg:skew-x-[-12deg] mx-auto rounded-none">
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Clan Wars</h2>
                            <p>Manage battles in the games. Add teams and fights.</p>
                        </div>
                    </div>
                    <div className="card bg-[#aea7d060] text-neutral-content w-[300px] lg:w-[300px] lg:skew-x-[-12deg] mx-auto rounded-none">
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Coming Soon</h2>
                            <p>Use coming soon page with countdown before release feature or service.</p>
                        </div>
                    </div>
                    <div className="card bg-[#aea7d060] text-neutral-content w-[300px] lg:w-[300px] lg:skew-x-[-12deg] mx-auto rounded-none">
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">AJAX Contact Form</h2>
                            <p>Everyone can contact you through user friendly ajax form.</p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>

    );
};

export default MoreFeatures;