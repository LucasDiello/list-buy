import itemServices from '../service/itemService.js';
import mapStatusHTTP from '../util/mapStatusHttp.js';

export async function createItem(req, res) {
  const { name, quantity,unit, category, completed } = req.body;

  try {
    const {status, data} = await itemServices.createItem(name, quantity, category, unit, completed);
    res.status(mapStatusHTTP(status)).json(data);
  } catch (error) {
    res.status(mapStatusHTTP("INTERNAL_SERVER_ERROR")).json({ error: error.message });
  }
}

export async function getAllItems(req, res) {
    try {
      const {status, data} = await itemServices.getAllItems();
      res.status(mapStatusHTTP(status)).json(data);
    } catch (error) {
      res.status(mapStatusHTTP("INTERNAL_SERVER_ERROR")).json({ error: error.message });
    }
  }

  export async function updateItem(req, res) {
    const { id, name, quantity, unit, category, completed } = req.body; 
    
    const updateData = {
      name,
      quantity,
      unit,
      category,
      completed,
    };
  
    try {
      const { status, data } = await itemServices.updateItem(id, updateData);
      res.status(mapStatusHTTP(status)).json(data);
    } catch (error) {
      res.status(mapStatusHTTP("INTERNAL_SERVER_ERROR")).json({ error: error.message });
    }
  }
  
  export async function deleteAllItems(req, res) {
    try {
      const { status, data } = await itemServices.deleteAllItems();
      res.status(mapStatusHTTP(status)).json(data);
    } catch (error) {
      res.status(mapStatusHTTP("INTERNAL_SERVER_ERROR")).json({ error: error.message });
    }
  }
  
export default { createItem, getAllItems, updateItem, deleteAllItems };