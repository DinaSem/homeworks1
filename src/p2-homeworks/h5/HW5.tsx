import React from 'react'
import {HashRouter} from 'react-router-dom'
import Header from './Header'
import Routes from './Routes'

function HW5() {
    return (
        <HashRouter>
            <div>
                {/*в gh-pages лучше работает HashRouter*/}


                <Header />

                <Routes/>


            </div>
        </HashRouter>
    )
}

export default HW5
