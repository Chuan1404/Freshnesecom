import React, { forwardRef, useImperativeHandle, useRef } from 'react'
import { Buttons } from '../../components';
import { useForm } from '../../hooks/useForm';
import {AdditionalInfomation , BillingInfo , BillingMethod ,Confirmation,PaymentMethod, Other} from './component/';
import './style.scss';
export default function Checkoutpage() {
    let billingInfoRef = useRef();
    let billMethodRef = useRef();
    let payMethodRef = useRef();
    let addInfoRef = useRef();
    let confirmRef = useRef();


    const BillInfo = forwardRef((props , ref) => {
        let { register, form, error , handleSubmit } = useForm({
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            address: '',
            city: '',
            country:'',
            zip:''
        });
        useImperativeHandle(
            ref,
            () => {
                return {
                    handleSubmit,
                    form
                }
            },
            [form]
        )
        return (<BillingInfo register={register} error={error}/>);
    })
    const BillMethod = forwardRef((props , ref) => {
        let {register , error , form , handleSubmit} = useForm({
            billMethod: ''
        });
        useImperativeHandle(
            ref,
            () => {
                return {
                    handleSubmit,
                    form
                }
            },
            [form]
        )
        return <BillingMethod register={register} error={error}/>
    })
    const PayMethod = forwardRef((props , ref) => {
        let {register , error , form , handleSubmit} = useForm({
            payMethod: '',
            cardNumber: '',
            cardHolder:'',
            cardDate:'',
            CVC:''
        });
        useImperativeHandle(
            ref,
            () => {
                return {
                    handleSubmit,
                    form
                }
            },
            [form]
        )
        return <PaymentMethod register={register} error={error}/>
    })
    const AddInfo = forwardRef((props , ref) => {
        let {register , error , form , handleSubmit} = useForm({text : ''});
        useImperativeHandle(
            ref,
            () => {
                return {
                    handleSubmit: () => handleSubmit(['text']),
                    form
                }
            },
            [form]
        )
        return <AdditionalInfomation register={register}/>
    })
    const Confirm = forwardRef((props , ref) => {
        let {register , error , form , handleSubmit} = useForm({
            agreement1: '',
            agreement2: ''
        });
        useImperativeHandle(
            ref,
            () => {
                return {
                    handleSubmit,
                    form
                }
            },
            [form]
        )
        return <Confirmation register={register} error={error}/>
    })
    function submit(e) {
        e.preventDefault();
        billingInfoRef.current?.handleSubmit();
        billMethodRef.current?.handleSubmit();
        payMethodRef.current?.handleSubmit();
        addInfoRef.current?.handleSubmit();
        confirmRef.current?.handleSubmit();
        let formOj = {
            ...billingInfoRef.current?.form,
            ...billMethodRef.current?.form,
            ...payMethodRef.current?.form,
            ...addInfoRef.current?.form,
            ...confirmRef.current?.form
        }
        console.log(formOj);
    }

    return (
        <div className='checkout'>
            <div className='container'>
                <form className='form'>
                    <BillInfo ref={billingInfoRef}/>
                    <BillMethod ref={billMethodRef} />
                    <PayMethod ref={payMethodRef} />
                    <AddInfo ref={addInfoRef} />
                    <Confirm ref={confirmRef} />
                    <div className='form_submit'>
                        <div className="form_submit-btn">
                            <Buttons bg='main' size='large' color='bright' radius border='bold' handleSubmit={submit}>
                                Complete order
                            </Buttons>
                        </div>
                        <div className="form_submit-info">
                            <div className="img"><img src="imgs/layer.png" alt="" /></div>
                            <span className='textStyle'>All your data are safe</span>
                            <span className='textStyle content'>We are using the most advanced security to provide you the best experience ever.</span>
                        </div>
                    </div>
                </form>
                
                <Other />
            </div>
        </div>
    )
}
