"use client";
import { categoryColors, categoryTextColors, Icons } from '@/icons/CategoryIcons'
import pluralizeUnit from '@/utils/pluralizeUnit'
import { CheckIcon, MoreVertical } from 'lucide-react'
import React, { useCallback, useEffect } from 'react'
import { Item } from '@/types';

const ListItem = ({items,
   toggleComplete
} : {
  items: Item[],
  toggleComplete: (item: Item) => void
}) => {


  return (
    <ul className="mt-10">
    {items.map((item) => (
      <div
        key={item.id}
        className={`flex mb-2 p-4 ${
          item.completed ? "bg-gray-500" : "bg-gray-400"
        } ${item.completed && "brightness-75"} justify-between items-center rounded-lg border-[1px]  border-gray-300`}
      >
        <div className="flex space-x-4 ">
          <div className="flex justify-center items-center">
            {item.completed ? (
              <>
                <div>
                  <input type="checkbox" checked={item.completed} readOnly className="appearance-none" />
                </div>
                <label
                  className="rounded-sm border-[1px] hover:bg-[rgb(81,154,87)] cursor-pointer hover:border-[rgb(81,154,87)] border-[rgb(53,117,58)] h-4 w-4 bg-[rgb(53,117,58)] flex justify-center items-center"
                  onClick={() => toggleComplete(item)}
                >
                  <CheckIcon size={10} />
                </label>
              </>
            ) : (
              <div className="task-item">
                <input
                  type="checkbox"
                  checked={item.completed}
                  onChange={() => toggleComplete(item)}
                  className="appearance-none w-4 h-4 bg-inherit hover:cursor-pointer hover:bg-purple-dark border-purple-light border-[1px] rounded-sm"
                />
              </div>
            )}
          </div>
          <div>
            <h2 className={`text-heading2 ${item.completed && "line-through"}`}>{item.name}</h2>
            <p className="text-body text-gray-200">
              {item.quantity} {pluralizeUnit(item.unit, item.quantity)}
            </p>
          </div>
        </div>
        <div className="flex items-center">
          <div
            style={{
              backgroundColor: categoryColors[item.category],
              color: categoryTextColors[item.category],
            }}
            className="flex items-center  pr-4 pl-4 p-2 rounded-full text-body"
          >
            {Icons[item.category as keyof typeof Icons]} <span className="ml-2">{item.category}</span>
          </div>
          <MoreVertical size={20} color="#A881E6" />
        </div>
      </div>
    ))}
  </ul>
  )
}

export default ListItem
