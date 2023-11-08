import React, { useReducer } from 'react'
import { validate } from '../../../shared/component/util/validators'
import './Input.css'
const inputReducer = (state, action) => {
	switch (action.type) {
		case 'CHANGE':
			return{
				...state,
				value: action.val,
				inValid: validate(action.val, action.validators)
			}
		case 'TOUCH':
				return{
					...state,
					isTouched: true
				}	
		default:
			return state
	}
}

const Input = props => {
	const [inputState, dispatch] = useReducer(inputReducer, {
		value: '', 
		inValid: false,
		isTouched: false
	})
	const changeHandler = e => {
		dispatch({type: 'CHANGE', val: e.target.value, validators: props.validators})
	}
	const touchHandler = () => {
		dispatch({
			type: 'TOUCH'
		})
	}
  const element = props.element === 'input' ? (
	<input 
		id={props.id} 
		type={props.type} 
		placeholder={props.placeholder}
		onChange={changeHandler} 
		onBlur={touchHandler}
		value={inputState.value}/>):(
	<textarea 
		id={props.id} 
		rows={props.rows || 3} 
		onBlur={touchHandler}
		onChange={changeHandler} 
		value={inputState.value}/>)
  return (
    <div className={`form-control ${!inputState.inValid && inputState.isTouched && 'form-control--invalid'}`}>
      <label htmlFor={props.id}>{props.label}</label>
      {element}
			{!inputState.inValid && inputState.isTouched && <p>{props.errorText}</p>}
    </div>
  )
}

export default Input