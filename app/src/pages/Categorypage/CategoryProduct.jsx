import React from 'react'
import { ProductItem } from '../../components'
import { FilterSide } from './component'

export default function CategoryProduct() {
  return (
    <section className='categoryProduct'>
        <div className='container category'>
            <div>
              <FilterSide />
            </div >
            <div className='category_grid'>
              <div><ProductItem /></div>
              <div><ProductItem stars='4'/></div>
              <div><ProductItem /></div>
              <div><ProductItem /></div>
              <div><ProductItem stars='4'/></div>
              <div><ProductItem /></div>
              <div><ProductItem stars='4'/></div>
              <div><ProductItem /></div>
              <div><ProductItem stars='4'/></div>
            </div>
        </div>
    </section>
  )
}
