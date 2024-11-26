import { View, Text, TextInput, Button, FlatList, TouchableOpacity, Modal, Image } from 'react-native';  
import React, { useEffect, useState } from 'react';  
import { useAddItem } from '@/hooks/useAddItem';  
import Checkbox from 'expo-checkbox';
import DropdownUnit from '@/components/DropdownUnit';
import DropdownCategory from '@/components/DropDownCategory';
import ButtonAdd from '@/components/ButtonAdd';
import { MoreVertical } from 'lucide-react-native';

import {
  Milk,
  Beef,
  Apple,
  Carrot,
  Sandwich,
  Check,
} from "lucide-react-native";
import { ShoppingItem } from '@/types';

const categoryColors: { [key: string]: string } = {
  Fruta: "rgba(38, 26, 23, 1)",
  Legume: "rgba(28, 32, 21, 1)",
  Padaria: "rgba(26, 29, 35, 1)",
  Carne: "rgba(37, 22, 34, 1)",
  Bebida: "rgba(26, 29, 35, 1)",
};

const icons: { [key: string]: JSX.Element } = {
  Fruta: <Apple size={20} color="#E07B67" />,
  Legume: <Carrot size={20} color="#8CAD51" />,
  Padaria: <Sandwich size={20} color="#BB9F3A " />,
  Carne: <Beef size={20} color="#DB5BBF" />,
  Bebida: <Milk size={20} color="#7B94CB" />,
};

export default function Index() {  
  const { item, setItem, quantity, setQuantity, unit, setUnit, category, setCategory, addItem, shoppingList, toggleCompleted, getAllItems } = useAddItem();  
  const [isFocusInput, setIsFocusInput] = useState(false);

  useEffect(() => {
    (async () => {
    await getAllItems();
    })();
  }, []);

  const ListItem = ({ item, toggleCompleted } : {item : ShoppingItem, toggleCompleted: (item : ShoppingItem) => any}) => {    
    
    return (      
      <View className={`${item.completed ? "bg-gray-500" : "bg-gray-400"} rounded-lg  flex-row justify-between items-center p-4 border-[1px] border-gray-300 mb-2`}>          
        <View className=' flex-row space-x-6 justify-center items-center'>          
          <Checkbox color={
            item.completed ? '#32754f' : '#A881E6'
          } 
          style={{ transform: [{ scaleX: 0.9 }, { scaleY: 0.9 }] }}
          className='border-[1px] ' value={item.completed} onValueChange={() => toggleCompleted(item)}/>          
          <View>        
            <Text className={`text-gray-100 font-bold `} style={{ textDecorationLine: item.completed ? 'line-through' : 'none', color: item.completed ? 'gray' : 'white' }}>          
              {item.name}        
            </Text>        
            <Text className='text-gray-200 text-xs'>           
              {item.quantity} {item.unit}        
            </Text>        
          </View>        
        </View>        
        <View className="flex-row items-center space-x-2">
        <Text
          className="p-2 rounded-full"
          style={{
            backgroundColor: categoryColors[item.category],
            color: item.completed ? 'gray' : 'white',
          }}
          >
          {icons[item.category]}  
        </Text>
        <MoreVertical size={24} color="#A881E6" />
      </View>
    </View>
    );    
  };

  return (    
    <View className='flex-1 bg-zinc-950 h-full'>      
      <Image   source={require('@/assets/images/bg-image.png')} 
  resizeMode='cover'
  height={200} 
  className=' w-[100%] absolute'/>  
      <View className='p-4 mt-16'>
      <Text className='text-white text-2xl font-bold mb-4'>Lista de Compras</Text>      
      <View className=''>      
        <Text className={`${isFocusInput ? "text-purple-light" : "text-gray-200"} text-xs mb-2`}>Item</Text>      
        <TextInput          
          className={`bg-gray-400 rounded-lg border-[1px] border-gray-300 text-white p-2 mb-2 ${isFocusInput ? 'border-[#A881E6]' : ''}`}          
          placeholder="Item"        
          placeholderTextColor="#A0AEC0"        
          onChangeText={(e) => {
            setItem(e);
          }}
          value={item}
          onFocus={() => setIsFocusInput(true)}
          onBlur={() => setIsFocusInput(false)}
        />      
      </View>      
      <View className="flex-row justify-center items-end">        
        <DropdownUnit setUnit={setUnit} setQuantity={setQuantity} unit={unit} quantity={quantity}/>        
        <DropdownCategory setCategory={setCategory} category={category}/>        
        <ButtonAdd addItem={addItem}/>          
      </View>          
      <FlatList          
        data={shoppingList}          
        renderItem={({ item }) => <ListItem item={item} toggleCompleted={toggleCompleted}/>}          
        keyExtractor={(item, index) => index.toString()}          
        className='mt-4'        
      />      
      </View>
    </View>  
  );
}
