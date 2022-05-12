import React from 'react'
import { useState } from 'react';
import CategoryProduct from './CategoryProduct';
import Filters from './Filters';
import './style.scss';

export default function CategoryPage() {
  const [active, setActive] = useState(true)
    return (
        <>
          <Filters isActive={active} changeActive={() => setActive(!active)}/>
          <CategoryProduct /> 
        </>
    )
}
