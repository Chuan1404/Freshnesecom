import React from 'react'
import { CustomerQuotes , BestSelling , CategoryMenu , BlogPosts} from './components';
import {useSelector} from 'react-redux'
import { Navigate } from 'react-router-dom';
import { TOKEN } from '../../constant';
import { ProductList } from '../../components';
import useQuery from '../../hooks/useQuery';
import productService from '../../services/productService';

export default function HomePage() {
    const token = JSON.parse(localStorage.getItem(TOKEN));

    if(!token) return <Navigate to='/login' />

    const list1 = [
        {
            content: 'Bakery',
            link: ''
        },
        {
            content: 'Fruit and vegetables',
            link: ''
        },
        {
            content: 'Meat and fish',
            link: ''
        },
        {
            content: 'Drinks',
            link: ''
        },
        {
            content: 'Kitchen',
            link: ''
        }
    ]
    const list2 = [
        {
            content: 'Kitchen',
            link: ''
        },
        {
            content: 'Meat and fist',
            link: ''
        },
        {
            content: 'Special nutrition',
            link: ''
        },
        {
            content: 'Pharmacy',
            link: ''
        },
        {
            content: 'Baby',
            link: ''
        }
    ]
    const list3 = [
        {
            content: 'Carrots',
            link: ''
        },
        {
            content: 'Tomatoes',
            link: ''
        },
        {
            content: 'Potatoes',
            link: ''
        },
        {
            content: 'Chicken',
            link: ''
        },
        {
            content: 'Pork',
            link: ''
        }
    ]

    return (
        <div className='home'>
            <CategoryMenu list={list1}/>
            <BestSelling list={list2} />
            <BestSelling list={list3} title = 'Best from Framers' />
            <CustomerQuotes />
            <ProductList />
            <BlogPosts />
            
        </div>
    )
}
