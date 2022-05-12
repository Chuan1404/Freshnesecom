import React from 'react'
import SideBox from '../SideBox'

export default function FilterSide() {
    const list1 = [
        {title: 'Category name', result: 330},
        {title: 'Category name', result: 330},
        {title: 'Category name', result: 330},
        {title: 'Category name', result: 330},
        {title: 'Category name', result: 330}
    ]
    const list2 = [
        {title: 'Filtre by brand item', value: 'value1'},
        {title: 'Filtre by brand item', value: 'value1'},
        {title: 'Filtre by brand item', value: 'value1'},
        {title: 'Filtre by brand item', value: 'value1'},
        {title: 'Filtre by brand item', value: 'value1'}
    ]
  return (
      <>
        <SideBox list = {list1} title='Categories'/>
        <SideBox list = {list2} style='checkbox' title='Brands'/>
        <SideBox style='rate' title='Rating'/>
        <SideBox style='range' />
      </>
  )
}
