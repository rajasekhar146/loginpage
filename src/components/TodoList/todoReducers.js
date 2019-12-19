import {ADD_ITEM, DELETE_ITEM } from './types';


let listArray = JSON.parse(localStorage.getItem('listItem')) || [];
export default function(state = listArray, action) {
    switch(action.type) {
        case ADD_ITEM:
            return [
                ...state,
                {
                    id: action.item.id,
                    text: action.item.text
                }
            ]
        case DELETE_ITEM:
            return [
                ...state.filter(item => item.id !== action.id)
            ];
        default:
            return state;
    }
    
}