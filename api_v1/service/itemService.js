import prisma from '../model/prisma.js';

async function createItem(name, quantity, category,unit, completed) {
  const item = await prisma.item.create({
    data: {
      name,
      quantity,
      category,
      unit,
      completed
    },
  });
  return {
    status: 'CREATED',
    data: item,
  };
}

export async function getAllItems() {
    const items = await prisma.item.findMany();
    const ordenedForCompleted = items.sort((a, b) => a.completed - b.completed);
    return {
        status: 'SUCCESSFUL',
        data: items,
    };
  }
  
  export async function updateItem(id, updateData) {
    const item = await prisma.item.update({
      where: {
        id: id,
      },
      data: updateData,
    });
    return {
      status: 'SUCCESSFUL',
      data: item,
    };
  }
  
 export async function deleteAllItems() {
    const items = await prisma.item.deleteMany();
    return {
      status: 'SUCCESSFUL',
      data: items,
    };
 } 
  export default { createItem, getAllItems, updateItem, deleteAllItems };