import React from 'react'

export const Item = ({item}) => {
  return (
    <label>
        <input type='checkbox'/>
        {item}
    </label>
  )
}
