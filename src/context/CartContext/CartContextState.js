import React, { useState } from "react";
import IceCartcontaxt from "./CartContext";

const ContextCart = ({ children }) => {
    const [headerCartNumber, setHeaderCartNumber] = useState(0);
    const [disabled, setDisabled] = useState(false)


    const manageClick = (e) => {
        e.preventDefault()
        // alert('this is ice cream alert');
        setDisabled(true)
        setHeaderCartNumber(headerCartNumber + 1)
    }

    const Allstates = {
        headerCartNumber: headerCartNumber,
        setHeaderCartNumber: setHeaderCartNumber,
        manageClick: manageClick,
    }

    return (
        <IceCartcontaxt.Provider value={Allstates}>
            {children}
        </IceCartcontaxt.Provider>
    )
}

export default ContextCart