import React, { useState } from 'react';
import FuncCompo from './FuncCompo';
import ClassCompo from './ClassCompo';

function PropsCompo() {
    const [data, setData] = useState(0)
    const [statevar, stateVar] = useState("This is a state variable")
    return (
        <div>

            <FuncCompo data="EA24" age={23} data2={{ name: "Ramsuraj" }} data3={{ data, setData }} />
            <ClassCompo datas="EA24 is sent from function to class component using props" datas2={{ statevar, stateVar }} />
        </div>
    )
}

export default PropsCompo


