import React from 'react'

const Description = ({title, Description}) => {
  return (
    <>
      <div>
        <h2>
          {title}

        </h2>
        <p>
          {Description}

        </p>
      </div>
    </>
  )
}

export default Description