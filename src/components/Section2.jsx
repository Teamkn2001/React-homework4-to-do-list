import React from 'react'
import {useState} from 'react'
import useStore from '../store/main-store'
// fffff import here always!!!!!
import bin from '../assets/bin.svg';
import { toast } from 'react-toastify';

const Section2 = () => {

    const [input , setInput] = useState('')
    const {dataArr,addArr,delArr} = useStore()

    const hdlInput = e => {
        // console.log(e.target.value)
        setInput(e.target.value)
    }
    console.log(input)

    const hdlAdd = () => {
        toast.success('List added')
        addArr(input)
    } 

    const hdlClickDel = (id) => {
        // alert(id) work 
        delArr(id)
    }

    
    console.log(dataArr)

    return (
        <div className='flex flex-col items-center bg-red-200/30 h-screen'>
            <h1 className='font-bold text-3xl mt-4'>To Do List</h1>

            <div className='flex gap-4 p-7 w-full justify-center'>
                <input 
                type="text" className=' border-red-200 rounded w-3/4 pl-8'
                onChange={hdlInput} />
                <button 
                onClick={hdlAdd}
                className="btn btn-error w-1/6 text-white font-bold text-xl">ADD</button>
            </div>

            {dataArr.map( el =>{
                return (
                   <div className='flex w-3/4 m-1 gap-2 mb-2'>
                     <h2 className='w-4/5 bg-red-600/50 rounded-2xl p-4'>{`${el.id}. ${el.data}`}</h2>
                     <button 
                     className='bg-pink-500/50 rounded-xl'
                     onClick={()=>{hdlClickDel(el.id)}}
                     > 
                        <img src={bin} alt="" className='w-[50px] p-3'/>
                     </button>
                   </div>
                )
            })}

        </div>
    )
}

export default Section2