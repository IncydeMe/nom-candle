"use client"
import React, { useEffect, useState } from "react";

interface PerformanceTestProps {
    children: React.ReactNode;
}

const PerformanceTest: React.FC<PerformanceTestProps> = ( {children} ) => {
    const [startTime, setStartTime] = useState<number>(0);
    const [endTime, setEndTime] = useState<number>(0);

    useEffect(() => {
      setStartTime(performance.now());
    }, []);
  
    useEffect(() => {
      setEndTime(performance.now());
    }, [children]);
  
    const renderTime = endTime - startTime;

    let performanceIndicator;
    if (renderTime < 200) {
        performanceIndicator = "Fast";
    } 
    else if (renderTime < 500) {
        performanceIndicator = "Average";
    } 
    else {
        performanceIndicator = "Slow";
    }
  
    return (
      <div>
        <p>Render time: {renderTime} milliseconds</p>
        <p>Performance: {performanceIndicator}</p>
        {children}
      </div>
    );
  };
  
  export default PerformanceTest;