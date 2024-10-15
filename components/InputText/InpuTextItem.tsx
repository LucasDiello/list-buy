import React from 'react'
import { Item } from '../dropdown/DropDownCategory'

const InpuTextItem = ({newItem, handleChange} : {
    newItem: Item,
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}) => {
  return (
    <label className="text-body text-gray-200 ">
    Item
    <input
      className={` focus:border-purple-light mt-1 border-gray-300 block w-[326px] h-[40px] rounded-md border-[1px] bg-gray-400`}
      type="text"
      name="name"
      value={newItem.name}
      onChange={handleChange}
      required
    />
  </label>
  )
}

export default InpuTextItem
