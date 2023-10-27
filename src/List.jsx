import React from 'react'
import {Item} from "./Item"

export const List = ({items, handleToggle}) => {
  return (
    <div className='list flex'>
      {
        items.map((item) => {
          return <Item key={item} item={item} handleToggle={handleToggle}/>
        })
      }
    </div>
  )
}
