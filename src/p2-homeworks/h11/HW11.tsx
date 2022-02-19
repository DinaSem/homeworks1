import React, {ChangeEventHandler, useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'

function HW11() {
    const [value1, setValue1] = useState(0)
    const [value2, setValue2] = useState(100)

    // setMin = (e) => {
    //     const { min, max, currentMax, minValueBetween } = this.state;
    //     const inputMin = e.target.value;
    //
    //     this.setState({
    //         inputMin
    //     });

const RangeSlider = (e:any) => {
    const inputValue1 = e.target.value;
    let value1 = inputValue1
    setValue1(value1)
}
    const SuperRangeSlider = (e:any) => {
        const inputValue1 = e.target.value;
        let value1 = inputValue1
        setValue1(value1)
        const inputValue2 = e.target.value;
        let value2 = inputValue2
        setValue2(value1)
    }
    return (
        <div>
            <hr/>
            homeworks 11

            {/*should work (должно работать)*/}
            <div>
                <span>{value1}</span>
                <SuperRange
                    onChange={RangeSlider}
                    // сделать так чтоб value1 изменялось
                />
            </div>

            <div>
                <SuperDoubleRange
                    onChange={SuperRangeSlider}
                    // сделать так чтоб value1 изменялось
                />
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr/>
        </div>
    )
}

export default HW11
