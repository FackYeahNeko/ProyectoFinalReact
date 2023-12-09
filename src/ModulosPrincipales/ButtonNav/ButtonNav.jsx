import "./ButtonNav.css"

import { useNavigate } from 'react-router-dom'

export const ButtonNav = ({ destination, name }) => {

    const navigate = useNavigate()

    return (
        <div className="buttonNavDesign" onClick={() => navigate(destination)}>
            {name}
        </div>
    )
}