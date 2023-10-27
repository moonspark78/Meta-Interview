import React from 'react'

export const Actions = ({moveLeft, moveRight}) => {
  return (
    <div className='actions flex'>
      <button onClick={moveRight}>&gt;</button>
      <button onClick={moveLeft}>&gt;</button>
    </div>
  )
}
