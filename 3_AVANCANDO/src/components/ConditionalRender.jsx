import React, { useState } from 'react'

const ConditionalRender = () => {
  const [x] = useState()
  
    return (
        <div>
        <div>
            <h1>X é Verdadeiro ou Falso?</h1>
            {x && <p>X é verdadeiro</p>}
            {!x && <p>X é falso</p>}
        </div>
        <div>
            <h1>if ternário</h1>
            {x == true ? (<>ternário true</>) 
                       : (<>ternário False</>)
            }
        </div>
    </div>
  )
}

export default ConditionalRender
