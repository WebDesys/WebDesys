import React from 'react'

import { Oval } from 'react-loader-spinner'

const Loader = ({h , color="#fff"}) => {
    return (
        <Oval
            height={h || 20}
            width={h || 20}
            color={color}
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            ariaLabel='oval-loading'
            secondaryColor={color}
            strokeWidth={5}
            strokeWidthSecondary={7}
        />
    )
}

export default Loader