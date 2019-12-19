import { ADD_ITEM, DELETE_ITEM } from './types';


export const addItem = (item) => {
    const items = {
        id: Math.random(),
        text: item
    }
    let listArray = JSON.parse(localStorage.getItem('listItem')) || [];
    listArray.push(items);
    localStorage.setItem('listItem', JSON.stringify(listArray));
    return {
        type: ADD_ITEM,
        item: items
    }
}

export const deleteItem = (id, index) => {
    let listArray = JSON.parse(localStorage.getItem('listItem')) || [];
    listArray.splice(index, 1)
    localStorage.setItem('listItem', JSON.stringify(listArray));
    return {
        type: DELETE_ITEM,
        id: id 
    }
}