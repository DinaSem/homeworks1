import React, {MouseEventHandler} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {Provider, useDispatch, useSelector} from "react-redux";
import {loadingAC} from "./bll/loadingReducer";
import store, {AppStoreType} from "./bll/store";
import s from './bll/HW10.module.css';


function HW10() {

    const isLoading = useSelector<AppStoreType,boolean>(state => state.loading.isLoading)
    const dispatch = useDispatch()

    const setLoading = () => {
        dispatch(loadingAC(true))

        setTimeout(()=>{
            dispatch(loadingAC(false))
        },3000)
    };
    console.log('loading...')
    return (

        <div>
            <hr/>
            homeworks 10
            {/*should work (должно работать)*/}
            {isLoading
                ? (
                    <div className={s.preloader}>
                        <img src="https://i.gifer.com/origin/6a/6a2dfb96f278692f0900cc08975efe0e.gif" alt="preloader"/>
                    </div>
                ) : (
                    <div>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )}
            <hr/>
        </div>

    )
}

export default HW10
