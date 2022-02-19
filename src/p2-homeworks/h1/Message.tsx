 import React from 'react'
import s from './Message.module.css'


type  MessagePropsType = {
    avatar: string
    name: string
    message: string
    time: string
}
/*const messageData = {
    avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
    name: 'Артем',
    message: 'npm start нажал?',
    time: '22:00',
}*/



function Message(props: MessagePropsType) {
    return (
        <div className={s.main}>
            <div className={s.avatar}>
                <img src={props.avatar} alt=""/>
            </div>
            <div className={s.message}>
                <div className={s.text}>
                    <div>{props.name}</div>
                    <div>{props.message}</div>
                    <div>{props.time}</div>
                </div>
            </div>
        </div>
    )
}

export default Message;
