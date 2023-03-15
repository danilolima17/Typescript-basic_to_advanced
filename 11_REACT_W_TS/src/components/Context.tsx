import React, {useContext} from 'react'
import { AppContext } from '../App'

const Context = () => {
    
    const details = useContext(AppContext)

    return (
        <>
         <h2>Language: {details?.language}</h2>
         <h4>Framework: {details?.framework}</h4>
         <p>Quantidade: {details?.projects}</p>
        </>
       
    )
}

export default Context
