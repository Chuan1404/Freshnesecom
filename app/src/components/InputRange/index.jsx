import React, { useRef } from 'react'
import { useState } from 'react';
import { useCallback } from 'react';
import { useEffect } from 'react';
import { Buttons, Inputs } from '..';
import './style.scss'

export default function InputRange({min = 0 , max = 100}) {
  const minInputRef = useRef();
  const maxInputRef = useRef();
  const range = useRef();

  const [maxVal, setMaxVal] = useState(max);
  const [minVal, setMinVal] = useState(min);

  const getPercent = useCallback((value) => {
    const number = Math.round(((value - min) / (max-min)) * 100)
    return number
  } ,[min, max]);

  useEffect(() => {
    if(maxInputRef.current){
      const minPercent = getPercent(minVal);
      const maxPercent = getPercent(maxInputRef.current.value);

      if(range.current){
        range.current.style.left = `${minPercent}%`;
        range.current.style.width = `${maxPercent - minPercent}%`;
      }
    }
  }, [minVal , getPercent])
  useEffect(() => {
    if(minInputRef.current){
      const minPercent = getPercent(minInputRef.current.value);
      const maxPercent = getPercent(maxVal);

      if(range.current){
        range.current.style.width = `${maxPercent - minPercent}%`;
      }
    }
  }, [maxVal, getPercent])

  return (
    <div className='inputRange'>
        <input type='range'
        min = {min}
        max = {max}
        className='thumb thumb--zindex-3'
        value = {minVal}
        ref={minInputRef}
        onChange={(e) => {
          const value = Math.min(e.target.value, maxVal - 1);
          setMinVal(value);
        }} />
        <input type='range'
        min = {min}
        max = {max}
        className='thumb thumb--zindex-4'
        value = {maxVal}
        ref={maxInputRef}
        onChange={(e) => {
          const value = Math.max(e.target.value, minVal + 1);
          setMaxVal(value);
        }} />
        <div className='slider'>
              <div className='slider_track'></div>
              <div ref={range} className='slider_range'></div>
        </div>  
        <div className='cost'>
          <div className='cost_box'><Inputs type='text' 
          placehoder='0' 
          label='Min' 
          value={minVal}
          onChange={(e) => {
            let value = e.target.value || min;
            if(value >= maxVal) value = maxVal - 1;
            setMinVal(value)
          }}/></div>
          <div className='cost_box'><Inputs type='text'
          placehoder='000' 
          label='Max' 
          value={maxVal}
          onChange={(e) => {
            let value = e.target.value || minVal + 1;
            if(value <= minVal) value = minVal + 1;
            if(value > max) value = max;
            setMaxVal(value)
          }}
          /></div>
        </div>
        <div className='inputRange_btns'>
          <Buttons bg='main' color='bright' radius border='bold' size='small'>Apply</Buttons>
          <Buttons color='bold' radius size='small'>Reset</Buttons>
        </div>
    </div>
  )
}
