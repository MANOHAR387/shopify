/* import { data } from "react-router-dom";

async function fetchproducts(api_url)
{
  try{
    const response=await fetch(api_url);
 if(!response.ok)
 {
  throw new Error('not found');
 }
 const data=await response.json();
 console.log(data);
 return {product:data.products,loading:false,error:null}

  }
catch(Error)
{
  console.log(Error);
}

} */


import React,{useEffect,useState} from "react";
function fetchproducts(apiUrl)
{
  const [product,setProduct]=useState([]);
  const [error,setError]=useState(null);
  const [loading,setLoading]=useState(true);
  
    useEffect(()=>{
      const fetchdata=async ()=>{
        try{
          const response=await fetch(apiUrl)
          if(!response.ok){
            throw new Error("jii")
        }
        const data=await response.json();
        setProduct(data.products)
      }
      catch(err)
      {
        setError(err.message);
        setLoading(false);
      }
    }
    fetchdata();
    },[apiUrl])
  return ({product,error,loading})
}


export default fetchproducts;




































/* import React,{ useEffect,useState } from "react";
function fetchproducts(apiUrl)
{
    const [product,setProduct]=useState([]);
    const [err,setErr]=useState(null);
    const [loading, setLoading] = useState(true);
    
        useEffect(()=>{
          const fetchprodut=async ()=>{
            try{
                const respnse=await fetch(apiUrl);
                if (!respnse.ok) {
                    throw new Error(`HTTP error! status: ${respnse.status}`);
                  }
                const data=await respnse.json();
                console.log(data.products);
                setProduct(data.products);
            }
            catch(error)
            {
                console.log(error.message);
                setErr(Error);
            }
            finally{
               setLoading(false);
            }
          };
          fetchprodut();
        },[apiUrl]);
    return {product,loading,err};
}
export default fetchproducts; */