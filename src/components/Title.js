import React from "react"

const Title = ({title}) => {
  return(
    <div className='section-tile'>
      <h2 style={{textAlign:"center"}}>{title||"default title"}</h2>
      <div className='underline'></div>
    </div>
  )
}

export default Title
