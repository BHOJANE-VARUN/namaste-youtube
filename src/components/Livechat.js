import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addchat } from '../util/chatSlice';
import Chatmessage from './Chatmessage';

function Livechat() {
    const messages = useSelector(store => store.chat.message);
    const dispatch = useDispatch();
    let cnt =0;
    useEffect(()=>{
        const i = setInterval(() => {
            cnt = cnt+1;
            dispatch(addchat({id:"varun",mess:"hi from varun" + cnt}));
        }, 2000);
        return ()=>{
            clearInterval(i);
        }
    },[])
    const textfield = useRef(null);
  return (
    <div className='w-3/12 m-5 ml-14 border-2 border-black bg-gray-50 flex-col flex justify-end'>
        <div className='h-[550px] w-full overflow-y-scroll flex flex-col-reverse'>
           {messages.map((m)=> <Chatmessage id={m.id} mess={m.mess}/>)}
        </div>
        <form className='w-full h-fit flex' onSubmit={(e)=>{
            dispatch(addchat({
                id:"bhojane",
                mess:textfield.current.value,
            }))
            textfield.current.value  = "";
            e.preventDefault();
        }}>
            <input type='text' ref={textfield} className='w-full h-10 border-b-2 bg-gray-200 mr-1 pl-3'/>
            <button type='submit' className='border-2 bg-blue-100'>Submit</button>
        </form>
    </div>
  )
}

export default Livechat