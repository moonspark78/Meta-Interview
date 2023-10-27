import React from 'react'
import {Item} from "./Item"

export const List = ({items}) => {
  return (
    <div className='list flex'>
      {
        items.map((item) => {
          return <Item key={item} item={item}/>
        })
      }
    </div>
  )
}
