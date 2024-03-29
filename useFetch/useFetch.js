import { useEffect, useRef, useState } from "react";


export const useFetch = (url) => {

    const isMounted = useRef(true); //para mantener la referencia de cuando un componente sigue montado. Referencia al valor.
    const [state, setstate] = useState({data:null, loading: true, error:null});
    
    useEffect(() => {
        
        return () => {
            isMounted.current=false;
        }
    }, []);

    useEffect(()=>{

        setstate({data:null, loading:true, error:null})
        fetch(url)
        .then(resp=>resp.json())
        .then(data=>{

                if(isMounted.current){
                      setstate({
                        loading: false,
                        error: null,
                        data
                        })
                }
             
                
        }).catch(() => {
            setstate({
               data: null,
               loading: false,
               error: 'No se pudo cargar la información.'
            })
         })

    },[url])
    
    return state;
}
