import React from 'react'
import './style.scss';

export default function FilterRadio({...register}) {
    return (
        <ul className='filterRadio inputStyle'>
          <li>
            <input type='radio' {...register} value='value1'/>
            <span>Filter text</span>
          </li>  
          <li>
            <input type='radio' {...register} value='value1'/>
            <span>Filter text</span>
          </li>  
        </ul>
    )
}
