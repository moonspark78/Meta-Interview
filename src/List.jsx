import React from 'react'

export const List = ({items}) => {
  return (
    <div className='list flex'>
      {
        items.map((item) => {
          return <div>{item}</div>
        })
      }
    </div>
  )
}
