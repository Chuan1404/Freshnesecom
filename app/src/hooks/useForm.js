import { useState } from "react"

const regex = {
    email: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    phone: /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/,
    zip: /^\d{5}(?:[-\s]\d{4})?$/
}
export const useForm = (initValue) => {
    let [form , setForm] = useState(initValue);
    let [error , setError] = useState({});

    const onChange = (name, option) => (e) => {
        if(option.mustNumber && (e.nativeEvent.data < '0' || e.nativeEvent.data > '9')) return;

        var value;
        if(option.isCheckbox) value = e.currentTarget.checked?'true':''
        else value = e.currentTarget.value

        setForm({
            ...form,
            [name]: value 
        })
    }
    const validate = (noRequiredList = []) => {
        let ob = {};
        Object.keys(form).map(name => {
            if(!noRequiredList.includes(name)) {
                if(!form[name].trim()) ob[name] = 'không được để trống'
                else if (regex[name] && !regex[name].test(form[name])) ob[name] = 'Sai định dạng' 
            }
        })
        setError(ob);
        return ob;
    }
    const handleSubmit = (noRequiredList = []) => {
        let ob = validate(noRequiredList);
        console.log(ob)
        if (Object.keys(ob).length == 0) {
            alert('ok')
        } 

    }
    const register = (name , option = {mustNumber : false,isCheckbox: false, required: true}) => {
        return {
            name,
            value: form[name],
            onChange: onChange(name , option)
        }
    }
    return {
        form,
        error,
        onChange,
        handleSubmit,
        register,
        validate
    }
}