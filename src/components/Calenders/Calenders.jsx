import React from 'react';
import { Calendar, theme } from 'antd';
import { Helmet } from 'react-helmet-async';
import Animation from './Animation.json';
import Lottie from 'lottie-react';

const onPanelChange = (value, mode) => {
  console.log(value.format('YYYY-MM-DD'), mode);
};

const Calendars = () => {
  const { token } = theme.useToken();
  
  const wrapperStyle = {
    // width: 500,
    border: `1px solid ${token.colorBorderSecondary}`,
    borderRadius: token.borderRadiusLG,
  };


  const style={
    width:'100%',
   
    position: "absolute", // Makes the animation span the entire viewport
    top: 0,
    left: 0,
   

  }

 

  return (
    
    <div className="relative w-full min-h-[100vh] overflow-hidden">
    <Lottie style={style} animationData={Animation} loop={true} />
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 justify-center items-center mt-10 lg:mt-0 '>

        
      
<Helmet>
    <title>Calendar</title>
  </Helmet>
<div>
   
</div>
  <div style={wrapperStyle} className='mt-5 mx-auto lg:mt-0 max-w-sm md:max-w-md lg:max-w-lg   p-4'>
    <Calendar fullscreen={false} onPanelChange={onPanelChange} />
  </div>
</div>
    </div>
    
  );
};

export default Calendars;
