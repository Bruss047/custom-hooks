import { useState } from "react";



export const useForm = (initialState = {}) => {

    const [values, setValues] = useState(initialState);

    const reset=()=>{

        setValues(initialState);
    }

    const handleInputChange = ({target})=>{
        
        setValues({
            ...values,
            [target.name]:target.value //[target.name]= computed property= Permire a una expresión/variable ser computada como la propiedad de un objeto. - desestructuración dinamica.
        });

    }
    
    return [values, handleInputChange, reset];
}
