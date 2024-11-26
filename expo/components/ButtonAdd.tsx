import { useAddItem } from '@/hooks/useAddItem';
import { ButtonAddProps } from '@/types';
import { Plus } from 'lucide-react-native'
import React from 'react'
import { Button, Pressable } from 'react-native'

const ButtonAdd = ({ addItem } : ButtonAddProps) => {
  return (
  <Pressable onPress={addItem}  className='rounded-full  bg-pur bg-purple h-12 w-12 flex items-center justify-center hover:bg-purple-dark' >
    <Plus size={24} color='white' />
    </Pressable>
  )
}


export default ButtonAdd
