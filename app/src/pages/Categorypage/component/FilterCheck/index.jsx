import React from 'react'
import { Check } from '../../../../components/icons';
import './style.scss';

export default function FilterCheck({select=false}) {
    return (
        <div className='filterCheck inputStyle'>
            <div className='checkboxInput'>
                <input type="checkbox" />
                <Check />
            </div>
            <span>Filter</span>
            <div className='filterCheck_tag'>
                <span>Nbm</span>
            </div>
            {select && <select className='filterCheck_select'>
                <option>Select</option>
                <option>Select 2</option>
            </select>}
        </div>
    )
}
