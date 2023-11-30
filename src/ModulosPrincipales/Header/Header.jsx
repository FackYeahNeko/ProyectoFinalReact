import "./Header.css"

import { ButtonNav } from "../ButtonNav/ButtonNav"

export const Header = () => {
    return (
        <div className="HeaderDesign">
            <ButtonNav 
                destination={"/"}
                name={"Home"}
            />
            <ButtonNav 
                destination={"/MejorValoradas"}
                name={"MejorValoradas"}
            />
            <ButtonNav 
                destination={"/Recientes"}
                name={"Recientes"}
            />
            <ButtonNav 
                destination={"/Busqueda"}
                name={"Busqueda"}
            />
            
            
        </div>

    )
}