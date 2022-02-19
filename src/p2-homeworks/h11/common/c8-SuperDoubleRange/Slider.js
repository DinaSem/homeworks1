import React from 'react';
import Nouislider from 'nouislider-react';
import 'nouislider/distribute/nouislider.css'

class Slider extends React.Component {
    state = {
        textValue1: null,
        textValue2: null,
    };

    onSlide = (render, handle, value, ) => {
        this.setState({
            textValue1: value[0].toFixed(0),
            textValue2: value[1].toFixed(0),
        });
    };

    render() {
        const { textValue1, textValue2} = this.state;
        return (
            <div>
                <div>
                    <span>
                        {textValue1}
                    </span>

                    <Nouislider
                    connect
                    start={[20, 80]}
                    behaviour="tap"
                    range={{
                        min: [0],
                        max: [100]
                    }}
                    onSlide={this.onSlide}
                />
                    <span>
                        {textValue2}
                    </span>
                </div>
            </div>
        );
    }
}
export default Slider;