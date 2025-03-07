import React, { useEffect, useRef } from 'react';
import Spline from '@splinetool/react-spline';
import { gsap } from 'gsap';

export default function Home() {
  const splineRef = useRef(null);

  // useEffect(() => {
  //   const zoomAnimation = gsap.timeline({ repeat: -1, yoyo: true });
    
  //   zoomAnimation.to(splineRef.current, { scale: 1.2, duration: 2 })
  //                .to(splineRef.current, { scale: 1, duration: 2 });
  // }, []);

  return (
    <main className='w-full h-full'>
      <div ref={splineRef} style={{ transformOrigin: 'center' }} className='w-full h-full'>
        <Spline
          scene="https://prod.spline.design/ol3Iy7BxdIYCO9ER/scene.splinecode" 
          className='w-full h-full'
        />
      </div>
    </main>
  );
}