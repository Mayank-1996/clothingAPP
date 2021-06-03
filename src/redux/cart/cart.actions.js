import {ActionTypes} from './cart.actiontypes'

export const toggleCart = () =>(
    {
       type:ActionTypes.TOGGLE_CART
}
)

export const addItem = item =>({
    type:ActionTypes.ADD_ITEM,
    payload:item
}) 