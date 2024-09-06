import React from 'react'
import { create } from 'zustand'
import { persist} from 'zustand/middleware'

const mainStore = (set) => ({
    //Section 1 ....

    //Section 2
    dataArr: [
      
    ],
    addArr: (newValue) => set((state) => ({
        dataArr: [...state.dataArr , { id: state.dataArr.length+1, data: newValue }]
    })),
    delArr: (id) => set((state) => ({
        dataArr: state.dataArr.filter((el) =>  el.id !== id)
    }))
})

//refer
// addArr2:(newValue)=>Set( (state)=> ({
//     arr2:[...state.arr2, {id: Date.now(), title: newValue}]
// })),
// delArr2: (id)=> Set((state)=>({
//     arr2: state.arr2.filter((el, index)=> el.id !== id)
// })),

const usePersist = {
    name: 'main-store',
    getStorage: ()=>localStorage,
    partialize: (state)=> ({
        dataArr: state.dataArr
    })
}

const useStore = create(persist(mainStore,usePersist))
export default useStore