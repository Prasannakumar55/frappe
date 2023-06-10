import React, { useState } from 'react'
import './Zohoform.css'


const Zohoform = () => {
    const [store, setStore] = useState({
        name: '',
        firstname: '',
        lastname: '',
        location: '',
        totalcopay: '',
        recipt1: '',
        reciptdate1: '',
        recipt2: '',
        reciptdate2: '',
        recipt3: '',
        reciptdate3: '',
        recipt4: '',
        reciptdate4: '',
        remark: '',
        refund: '',
        refunddate: '',
    });

    const [out, setOut] = useState([]);
    const Change1 = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        console.log(name, value);
        setStore({ ...store, [name]: [value] });
    }
    const addvalues =(recipt1, recipt2, recipt3,recipt4,totalcopay)=>{
      var  a =  ( recipt1+recipt2+recipt3+recipt4);
      var  b =  (totalcopay);
      var  result = (b-a);
      console.log(result)
    }
    addvalues()
    
    const submitted = (e) => {
        e.preventDefault();
        setOut([...out, { ...store, id: out.length }])
    }
    return (
        <div>
       
            <h1>Copay</h1><br />
            <form className='forms' onSubmit={submitted}>

                <label>MR #<span class="required">*</span></label><br />
                <input required type='text' name='name' value={store.name} onChange={Change1} /><br />

                <label>Patient Name<span class="required">*</span></label><br />
                <span class="required" >*
                    <input placeholder='First name' required type='text' name='firstname' value={store.firstname} onChange={Change1} />
                    <input placeholder='Last name' required type='text' name='lastname' value={store.lastname} onChange={Change1} />
                </span><br />

                <div className='locations'>
                    <label>Location<span>*</span></label><br />

                    <input type="radio" id="Lal-Bangalow" name="location" value="Lalbangalow" checked={store === 'Option 1'} onChange={Change1} />
                    <label for="Lal Bangalow">Lal Bangalow</label><br />
                    <input type="radio" id="DK-Road" name="location" value="dkroad" checked={store === 'Option 2'} onChange={Change1} />
                    <label for="DK Road">DK Road</label><br />
                    <input type="radio" id="Hasthinapuram" name="location" value="Hasthinapuram" checked={store === 'Option 3'} onChange={Change1} />
                    <label for="Hasthinapuram">Hasthinapuram</label> <br /> <br />
                </div>


                <label>TotalCopay Amt <span class="required">*</span></label><br />
                <input required type='number' name='totalcopay' value={store.totalcopay} onChange={Change1} /><br /><br />

                <div>

                    <div className='recipt'>
                        <label>Recipt 1 </label> &#8377;
                        <input required type='number' name='recipt1' value={store.recipt1} onChange={Change1} /><br />
                        <label>Recipt 1 Date</label>
                        <input required type='date' name='reciptdate1' value={store.reciptdate1} onChange={Change1} /><br />
                    </div><br />

                    <div className='recipt'>
                        <label>Recipt 2 </label> &#8377;
                        <input required type='number' name='recipt2' value={store.recipt2} onChange={Change1} /><br />
                        <label>Recipt 2 Date</label>
                        <input required type='date' name='reciptdate2' value={store.reciptdate2} onChange={Change1} /><br />
                    </div><br />

                    <div className='recipt'>
                        <label>Recipt 3 </label> &#8377;
                        <input required type='number' name='recipt3' value={store.recipt3} onChange={Change1} /><br />
                        <label>Recipt 3 Date</label>
                        <input required type='date' name='reciptdate3' value={store.reciptdate3} onChange={Change1} /><br />
                    </div><br />

                    <div className='recipt'>
                        <label>Recipt 4 </label> &#8377;
                        <input required type='number' name='recipt4' value={store.recipt4} onChange={Change1} /><br />
                        <label>Recipt 4 Date</label>
                        <input required type='date' name='reciptdate4' value={store.reciptdate4} onChange={Change1} /><br />
                    </div><br />
                </div>

                <label>Remarks</label><br />
                <textarea type='text' name='remark' value={store.remark} onCanPlay={Change1} />

                <div className='Refund'>
                    <label>Refund</label> &#8377;
                    <input type='number' name='refund' value={store.refund} onChange={Change1} />
                    <label>Recipt Date</label>
                    <input type='date' name='refunddate' value={store.refunddate} onChange={Change1} /><br />
                </div><br />

                <button>Review</button>
                <button>Submit</button>
            </form>



            <div className='data'>
                {out.map(ele => (<h6>Name : {ele.name}  <br />
                    Patient Name : {ele.firstname}{ele.lastname} <br />
                    Location : {ele.location} <br />
                    Totalcopay : {ele.totalcopay} <br />
                    Recipt1 : {ele.recipt1} <br />
                    Reciptdate1 : {ele.reciptdate1} <br />
                    Recipt2 : {ele.reciptdate2} <br />
                    Reciptdate2 : {ele.reciptdate2} <br />
                    Recipt3 : {ele.recipt3} <br />
                    Reciptdate3 : {ele.reciptdate3} <br />
                    Recipt4 : {ele.recipt4} <br />
                    Reciptdate4 : {ele.reciptdate4} <br />
                    Remark : {ele.remark} <br />
                    Refund : {ele.refund} <br />
                    refunddate : {ele.refunddate}<br />
                </h6>))}
                

                {/* {out.map(ele => (<h6> Refund :({(ele.totalcopay)})-({(ele.recipt1 + 100) + (ele.recipt2) + (ele.recipt1) + (ele.recipt1)})<br/> </h6>))} */}
            </div>

        </div>
    )
}

export default Zohoform