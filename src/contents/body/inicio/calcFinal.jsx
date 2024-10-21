import React from 'react'

import LeftResult from "./LeftResult";
import RigthResult from "./RigthResult";

function CalcFinal() {
  return (
    <div className='row p-3' style={{justifyContent: "row"}}>
      <LeftResult />
      <RigthResult />
    </div>
  )
}

export default CalcFinal
