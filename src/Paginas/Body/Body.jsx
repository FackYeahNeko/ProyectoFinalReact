import { Routes, Route, Navigate } from 'react-router-dom'
import { Home } from '../Home/Home.jsx'
import { Busqueda } from '../Busqueda/Busqueda'
import { MejorValoradas } from '../MejorValoradas/MejorValoradas.jsx'
import { Recientes } from '../Recientes/Recientes.jsx'


export const Body = () => {

    return (
        <>
            <Routes>
                <Route path="*" element={<Navigate to={"/"}/>}/>
                <Route path="/" element={<Home />}/>
                <Route path="/Busqueda" element= {<Busqueda/> }/>
                <Route path="/MejorValoradas" element= {<MejorValoradas/> }/>
                <Route path="/Recientes" element= {<Recientes/> }/>
            </Routes>
        </>
    )
}