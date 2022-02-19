import React from "react";
import s from "./HW12.module.css";
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";
import {AppStoreType} from "../h10/bll/store";
import {useDispatch, useSelector} from "react-redux";
import {darkAc, redAc, someAc} from "./bll/themeReducer";

const themes: Array<string> = ['some', 'red', 'dark'];

function HW12() {
    const getedtheme = useSelector((state: AppStoreType) => state.theme.themes)
    const dispatch = useDispatch()
const onChangeOption = (options:string) => {
  if (options==='some'){
      dispatch(someAc())
  }
  if  (options==='red'){
        dispatch(redAc())
  }
  if (options==='dark'){
        dispatch(darkAc())
    }
}

    return (
        <div className={s[getedtheme]}>
            <hr/>
            <span className={s[getedtheme + '-text']}>
                homeworks 12

                <div className={s.wrapperHW12}>
                    <SuperSelect
                        options={themes}
                        onChangeOption={onChangeOption}
                    />
                </div>

            </span>
        </div>
    );
}

export default HW12;
