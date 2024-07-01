import React, { useState } from 'react'
import { ref as dbRef, set } from "firebase/database";
import { db } from './Firebase';



function App() {
  const [im, setIm]=useState('');
  const [tel, setTel]=useState('');
  const [rb, setRb]=useState(false);
  const [it, setIt]=useState(false);
  const [kt, setKt]=useState(false);
  const [tt, setTt]=useState(false);
  const [lod, setLod]=useState(false);

  function hendl(){

    console.log('b');
    if (im=='') {
      console.log('ism');
      return;
    }
    if (tel=='') {
      console.log('tel');
      return;
    }
    setLod(true);
    write(im, tel, rb, it, kt, tt)
  }

  function write(im, tel, rb, it, kt, tt){
    const userRef = dbRef(db, `con/`+Date.now());
    set(userRef, {im, tel, rb, it, kt, tt})
      .then(() => {
        console.log('Data saved successfully!');
        setLod('2tr');
      })
      .catch((error) => {
        console.error('Error saving data:', error);
        alert("Ro'yhattan o'tish muvaffaqiyatsiz yakunlandi!");
      });
  };


  if (!(lod)) {
    return (
      <div className='bg-gradient-to-br from-black to-blue-500 w-full min-h-[100vh] pt-20'>
  
        <div className='bg-white lg:w-[728px] md:w-[420px] w-[350px] pt-20 pb-10 mx-auto text-center px-[45px]'>
          <h2 className='text-[24px]'>Robotlar sizni emas, Siz robotlarni boshqaring!</h2>
          <p>Kurslarga hoziroq ro'yxatdan o'ting</p>
  
          <form action="" onSubmit={(a)=>{console.log(a); a.preventDefault()}} className='flex flex-col text-start gap-2'>
              <label htmlFor="ism">Ismingiz</label>
              <input type="text" id='ism' value={im} onChange={(a)=>setIm(a.target.value)} placeholder='Ismingizni kiriting' className='outline-none border-b border-black ' />
              <label htmlFor="nomer">Telefon raqamingiz</label>
              <input type="text" id='ism' placeholder='+998 33 803 33 53' value={tel} onChange={(a)=>{setTel(a.target.value)}} className='outline-none border-b border-black ' />
              <p>Qaysi kursda o'qimoqchisiz?</p>
              <div className='flex gap-2 border px-3 py-1 ml-1'>
                <input type="checkbox" id='robot' checked={rb}/> 
                <label htmlFor="robot" className='flex-1' onClick={()=>setRb(!(rb))}>Robototexnika</label>
              </div>
              <div className='flex gap-2 border px-3 py-1 ml-1'>
                <input type="checkbox" id='it' checked={it} /> 
                <label htmlFor="it" className='flex-1' onClick={()=>setIt(!(it))}>Foundation (IT)</label>
              </div>
              <div className='flex gap-2 border px-3 py-1 ml-1'>
                <input type="checkbox" id='Kt' checked={kt}  /> 
                <label htmlFor="Kt" className='flex-1' onClick={()=>setKt(!(kt))}>Koreys tili</label>
              </div>
              <div className='flex gap-2 border px-3 py-1 ml-1' >
                <input type="checkbox" id='Tt' checked={tt} /> 
                <label htmlFor="Tt" className='flex-1' onClick={()=>{tt ? setTt(false): setTt(true)}}>Turk tili</label>
              </div>
              <button onClick={e=>{e.preventDefault(); hendl();}} className='bg-blue-500 text-[#f3f2f2] py-2 mx-auto px-5 rounded-md'>Ro'yxatdan o'tish</button>
          </form>
  
        </div>
  
      </div>
    )
  }else{
    if (lod && !(lod==='2tr')) {
      return (
        <div className='bg-gradient-to-br from-black to-blue-500 w-full min-h-[100vh] pt-20'>
    
          <div className='bg-white lg:w-[728px] md:w-[420px] w-[350px] pt-20 pb-10 mx-auto text-center px-[45px]'>
            <h2 className='text-[24px]'>Robotlar sizni emas, Siz robotlarni boshqaring!</h2>
            <p>Kurslarga hoziroq ro'yxatdan o'ting</p>
    
            <form action="" onSubmit={(a)=>{console.log(a); a.preventDefault()}} className='flex flex-col text-start gap-2'>
                <label htmlFor="ism">Ismingiz</label>
                <input type="text" id='ism' value={im} onChange={(a)=>setIm(a.target.value)} placeholder='Ismingizni kiriting' className='outline-none border-b border-black ' />
                <label htmlFor="nomer">Telefon raqamingiz</label>
                <input type="text" id='ism' placeholder='+998 33 803 33 53' value={tel} onChange={(a)=>{setTel(a.target.value)}} className='outline-none border-b border-black ' />
                <p>Qaysi kursda o'qimoqchisiz?</p>
                <div className='flex gap-2 border px-3 py-1 ml-1'>
                  <input type="checkbox" id='robot' checked={rb}/> 
                  <label htmlFor="robot" className='flex-1' onClick={()=>setRb(!(rb))}>Robototexnika</label>
                </div>
                <div className='flex gap-2 border px-3 py-1 ml-1'>
                  <input type="checkbox" id='it' checked={it} /> 
                  <label htmlFor="it" className='flex-1' onClick={()=>setIt(!(it))}>Foundation (IT)</label>
                </div>
                <div className='flex gap-2 border px-3 py-1 ml-1'>
                  <input type="checkbox" id='Kt' checked={kt}  /> 
                  <label htmlFor="Kt" className='flex-1' onClick={()=>setKt(!(kt))}>Koreys tili</label>
                </div>
                <div className='flex gap-2 border px-3 py-1 ml-1' >
                  <input type="checkbox" id='Tt' checked={tt} /> 
                  <label htmlFor="Tt" className='flex-1' onClick={()=>{tt ? setTt(false): setTt(true)}}>Turk tili</label>
                </div>
                <button className='bg-blue-300 text-[#f3f2f2] py-2 mx-auto px-5 rounded-md'>Loading...</button>
            </form>
    
          </div>
    
        </div>
      )
    }else{
      return (
        <div className='bg-gradient-to-br from-black to-blue-500 w-full min-h-[100vh] pt-20'>
    
          <div className='bg-white lg:w-[728px] md:w-[420px] w-[350px] pt-20 pb-10 mx-auto text-center px-[45px]'>
            <h2 className='text-[24px]'>Robotlar sizni emas, Siz robotlarni boshqaring!</h2>
            <p>Tabriklaymiz kursga muvaffaqiyatli ro'yxattan o'tdizgiz. Tez orada operatorlarimiz siz bilan bog'lanadi. </p>
      
          </div>
    
        </div>
      )
    }
  }

}

export default App
