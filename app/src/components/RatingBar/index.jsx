import React from 'react'
import { Star } from '../icons';

export default function RatingBar({number = 0, color='#FDBC15'}) {
    let arr = [];
    for(let i = 1; i <= 5; i++)
        i <= number? arr.push(<Star background={color} />) : arr.push(<Star />)
  return (
    <div>
        {arr.map(item => (item))}
    </div>
  )
}
