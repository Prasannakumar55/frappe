import React from 'react';
import './Navbar.css';
import Zoho from './Zoho';

const Menus = () => {
function formvisible (){
    var a = document.getElementById('zoho-form');
    a.style.display='flex';
    var b = document.getElementById('open');
    b.style.display='none'; 
    var c = document.getElementById('close');
      c.style.display='flex'; 
      c.style.position = "absolute";
      c.style.left = "450px";  
      c.style.top = "600px";
      c.style.paddingBottom = '35px';
}
function formvisibles(){
  var a = document.getElementById('zoho-form');
    a.style.display='none';
  var b = document.getElementById('close');
      b.style.display='none';    
  var c = document.getElementById('open');
      c.style.display='flex'; 
      c.style.position = "absolute";
      c.style.left = "0px";  
      c.style.paddingBottom = '35px';
}
  return (
      <>
      <div className='menus'>
 
      <a className='anchor' href='https://forms.zohopublic.in/swasthmedicalassociates1/form/Copay/formperma/9GjkL3ePVBW3zyd1i8pCEw8A0JKkXJivCpr-p6txZiE' style={{textDecoration: 'none' }}>Copay</a>
      <a className='anchor' href= 'http://127.0.0.1:5500/instalogin/insta/src/Components/form.html' style={{textDecoration: 'none'}}>Copay</a>
      <button id='open' onClick={formvisible}>open</button>

    </div> 

    <div id='zoho-form' style={{display:"none"}}>
    <Zoho/>
    <button id='close' style={{display:'none'}} onClick={formvisibles}>close</button>

    </div>

   
    </>
  )
}

export default Menus