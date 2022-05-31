
import { useEffect, useRef, useState } from "react"
export const useFetch = (url) => {

    const isMountedRef=useRef(true);
    useEffect(() => {
      return () => {
        isMountedRef.current=false;
      }
    }, [])
    const [state, setState] = useState({
        data:null,
        loading:true,
        error:false
    })
    useEffect(() => {
        setState({
            data:null,
            loading:true,
            error:null
        })
        fetch(url)
        .then(res=>res.json())
        .then(data=>{
            if(isMountedRef.current){
                setState({
                    data:data,
                    loading:false,
                    error:null
                })
            }
            /*
            setTimeout(()=>{
                if(isMountedRef.current){
                    setState({
                        data:data,
                        loading:false,
                        error:null
                    })
                }
            }, 4000)*/
           
        })
    }, [url])
    return state;
}
