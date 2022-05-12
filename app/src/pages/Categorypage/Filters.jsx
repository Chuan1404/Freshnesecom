import React from 'react'
import { Close, List_horizontal, List_vertical } from '../../components/icons'
import { useForm } from '../../hooks/useForm'
import { FilterCheck, FilterRadio } from './component'

export default function Filters({ isActive, changeActive }) {
    const { form, register } = useForm({
        radio: ''
    })
    return (
        <section className='filters'>
            <div className="container filter">
                <div className="filter_header">
                    <h2 className='title'>Fruit and vegetables</h2>
                    <div className="controls">
                        <div className="controls_item active">
                            <List_vertical color={isActive ? '#6A983C' : '#A9A9A9'} onClick={() => !isActive && changeActive()} />
                            <span>Text</span>
                        </div>
                        <div className="controls_item">
                            <List_horizontal color={!isActive ? '#6A983C' : '#A9A9A9'} onClick={() => isActive && changeActive()} />
                            <span>Text</span>
                        </div>
                    </div>
                    <div className='result'>
                        <div className='saleBox'>12</div>
                        <span>Product</span>
                    </div>
                </div>
                <div className="filter_form">
                    <div><FilterRadio {...register('radio')} /></div>
                    <div><FilterCheck /></div>
                    <div><FilterCheck /></div>
                    <div><FilterCheck select='true' /></div>
                </div>
                <div className="filter_tags">
                    <span>Applied filtres:</span>
                    <div className='saleBox'>
                        <span>Selected Filtre</span>
                        <Close color='#C8DEB3' />
                    </div>
                    <div className='saleBox'>
                        <span>Selected Filtre</span>
                        <Close color='#C8DEB3' />
                    </div>

                </div>
            </div>
        </section>
    )
}
