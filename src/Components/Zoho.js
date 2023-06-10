import React, { useState } from 'react';
import './Zoho.css';

const Zoho = () => {
    const [store, setStore] = useState({
        name:'',
        department:'',
        rating:''
    });
    const [out,setOut] = useState([]);
    const Change1 = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        console.log(name,value);
        setStore({...store,[name]:[value]});
       }
       const submitted = (e) => {
        e.preventDefault();
        setOut([...out,{...store,id:out.length}])
       }
       
  return (
    <div>
    <div>
        <h1>EMPLOYEE FEEDBACK FORM</h1> <br/>
        <form className='Forms' onSubmit={submitted}>

            <label className='lable1'> Name:
                <input required className='input1' type="text" name="name" value={store.name} onChange={Change1}/>
            </label> <br/> <br/> 

            <label className='lable1'> Department:
                <input required className='input1' type="text" name="department" value={store.department} onChange={Change1}/>
            </label> <br/> <br/> 

            <label className='lable1'> Rating:
                <input required className='input1' type="number" name="rating" value={store.rating} onChange={Change1}/>
            </label> <br/> <br/> 

            <button className='submit'>Submit</button> <br/> <br/> <br/> 


        </form> <br/> <br/>
    </div>
    

        <div className='information'>
         {out.map(ele => (<h4 className='information1'>Name:{ele.name} || Department:{ele.department} || Rating:{ele.rating} </h4>))}
        </div>
</div>
  )
}

export default Zoho