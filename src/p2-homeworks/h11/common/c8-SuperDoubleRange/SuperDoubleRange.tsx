import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes} from 'react'
import s from "../c7-SuperRange/SuperRange.module.css";

import Slider from "./Slider";
type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
type SuperDoubleRangePropsType =DefaultInputPropsType & {
    onChangeRange?: (value: number) => void
    value?: [number, number]
    // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
//     {
//         onChangeRange, value,
//         // min, max, step, disable, ...
//     }
// ) => {
//     // сделать самому, можно подключать библиотеки
//
//     return (
//         <>
//             DoubleRange
//         </>
//     )
// }
{
    type, // достаём и игнорируем чтоб нельзя было задать другой тип инпута
    onChange, onChangeRange,
    className,

    ...restProps// все остальные пропсы попадут в объект restProps
}
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(e) // сохраняем старую функциональность

        onChangeRange && onChangeRange(+e.currentTarget.value)
    }

    const finalRangeClassName = `${s.range} ${className ? className : ''}`


    return (
        <div className={s.sliderWidth}>
            <Slider className={s.sliderPosition}/>
        </div>
    )
}

export default SuperDoubleRange
