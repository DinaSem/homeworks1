import React from 'react'
import {NavLink} from 'react-router-dom'
import {PATH} from "./Routes";
import s from './Header.module.css'

function Header() {
    return (

        <div className={s.panel}>
            <div>
                <div className={s.content}>
                    <div>
                        <NavLink className={s.main} to={PATH.PRE_JUNIOR}>Pre-Junior</NavLink>
                    </div>
                    <div>
                        <NavLink className={s.main} to={PATH.JUNIOR}>Junior</NavLink>
                    </div>
                    <div>
                        <NavLink className={s.main} to={PATH.JUNIORPLUS}>JuniorPlus</NavLink>
                    </div>

                </div>
            </div>

        </div>

    )
}

// <div className="panel">
//     <div className="head">
//         <p>Заголовок блока</p>
//     </div>
//     <div className="content">
//         Содержимое панели
//     </div>
// </div>

export default Header
