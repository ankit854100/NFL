import React from 'react'
import Loader from "react-loader-spinner"

function LoaderComp() {
    return (
        <div>
            <Loader
            type="TailSpin"
            color="rgb(255, 255, 255)"
            height={70}
            width={70}
        />
        </div>
    )
}

export default LoaderComp
