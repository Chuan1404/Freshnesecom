import React from 'react'
import {Check, Star} from '../../../../components/icons'
import RatingBar from '../../../../components/RatingBar';
import {InputRange} from '../../../../components'
import './style.scss';

export default function SideBox({title = 'title', list=[], style='text'}) {

  return (
    <div className='sideBox'>
        <h2>{title}</h2>
        <ul className='sideBox_list'>
            {style == 'text' && list.map(item => (
                <li className='sideBox_list-text'>
                    <span>{item.title}</span>
                    <div className='saleBox'>{item.result}</div>
                </li>
            ))}
            {style == 'checkbox' && list.map(item => (
                <li className='sideBox_list-check'>
                    <div className='checkboxInput'>
                        <input type="checkbox" value={item.value}/>
                        <Check />
                    </div>
                    <span>{item.title}</span>
                </li>
            ))}
            {style == 'rate' && [5,4,3,2,1].map(num => 
            <li className='sideBox_list-rate'>
                <div className='checkboxInput'>
                    <input type="checkbox" value={num}/>
                    <Check />
                </div>
                <RatingBar number={num} />
                </li>
            )}
        </ul>
        {style == 'range' && <div>
            <InputRange />
        </div>
        }
    </div>
  )
}
