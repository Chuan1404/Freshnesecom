import React from 'react'
import classnames from 'classnames';
import './style.scss';
export default function Inputs({label = '', type='text', placehoder, icon, url = 'imgs/arrow.svg', size = 'middle',opts, ...rest}) {
    return (
        <div className="inputs ">
            <label className='textStyle'>{label}</label>
            <div className={classnames("inputs_input","inputStyle",`icon-${icon}`,`type-${type}`,`size-${size}`)}>
                {
                    type == 'textarea' && <textarea {...rest} placeholder={placehoder} /> ||
                    type == 'checkbox' && <><input {...rest} type={type} /><span>{placehoder}</span></> ||
                    type == 'select' && <select {...rest} type={type}>
                                        <option value="" disabled selected>{placehoder}</option>
                                        {opts.map((item,index) => <option value={index}>{item}</option>)}
                                    </select> ||
                    type && <input {...rest} placeholder={placehoder} type={type} />
                }
                
                {icon && <div className='inputs_input-icon'><img src={url} /></div>}
            </div>
            <p className='form_error'>{rest.error}</p>
        </div>
    )
}