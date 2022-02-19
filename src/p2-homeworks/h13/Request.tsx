import React, {useState} from "react";
import requestAPI from "./RequestApi"


const Request = () => {

    const [checkboxStatus, setCheckboxStatus] = useState(false)
    const [requestRes, setRequestRes] = useState('Делай запрос!!')

    function sendRequestRes(checkboxStatus: boolean) {
        requestAPI.post(checkboxStatus)
            .then(data => {
                setRequestRes(data)
            }
        )
    }

    return (
        <div>
            <input type="checkbox" onClick={() => setCheckboxStatus(!checkboxStatus)}/> Меняй статус!!<br/>
            <button onClick={() => sendRequestRes(checkboxStatus)}>Запрос</button>

            <div>{requestRes}</div>
        </div>
    )
}

export default Request;