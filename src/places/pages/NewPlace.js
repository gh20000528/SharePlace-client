import React, { useCallback, useReducer } from 'react'
import Input from '../../shared/component/FormElement/Input'
import Button from '../../shared/component/FormElement/Button'
import { useForm } from '../../shared/hooks/form-hook'
import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH } from '../../shared/component/util/validators'
import './NewPlace.css'

// const formReducer = (state, action) => {
//   switch (action.type) {
//     case 'INPUT_CHANGE':
//       let formIsValid = true;
//       for (const inputId in state.inputs) {
//         if (inputId === action.inputId) {
//           formIsValid = formIsValid && action.isValid;
//         } else {
//           formIsValid = formIsValid && state.inputs[inputId].isValid;
//         }
//       }
//       return {
//         ...state,
//         inputs: {
//           ...state.inputs,
//           [action.inputId]: { value: action.value, isValid: action.isValid },
//         },
//         isValid: formIsValid,
//       };
//     default:
//       return state;
//   }
// };

const NewPlace = () => {
  const [formState, inputChangeHandler] = useForm(
    {
      title: {
        value: '',
        isValid: false
      },
      description: {
        value: '',
        isValid: false
      },
      address: {
        value: '',
        isValid: false
      }
    },
    false
  )
  // const [formState, dispatch] = useReducer(formReducer, {
  //   inputs: {
  //     title: {
  //       value: '',
  //       isValid: false
  //     },
  //     description: {
  //       value: '',
  //       isValid: false
  //     },
  //     address: {
  //       value: '',
  //       isValid: false
  //     }
  //   },
  //   isValid: false
  // })


  // const inputHandler = useCallback((id, value, isValid) => {
  //   dispatch({ type: 'INPUT_CHANGE', value: value, isValid:isValid, inputId: id})
  // },[])

  const submitHandler = (e) => {
    e.preventDefault()
    console.log(formState.inputs);
  }

  return (
    <form className='place-form' onSubmit={submitHandler}>
      <Input 
        id="title"
        element="input" 
        type="text" 
        label="標題" 
        validators={[VALIDATOR_REQUIRE()]} 
        errorText="請輸入標題"
        onInput={inputChangeHandler}
        />
      <Input 
        id="description"
        element="textarea" 
        type="text" 
        label="內容" 
        validators={[VALIDATOR_MINLENGTH(3)]} 
        errorText="請添加一點內容~"
        onInput={inputChangeHandler}
      />
      <Input 
        id="address"
        element="input" 
        type="address" 
        label="地址" 
        validators={[VALIDATOR_REQUIRE()]} 
        errorText="請添加地址~"
        onInput={inputChangeHandler}
      />
      <Button type="submit" disabled={!formState.isValid}>
        新增
      </Button>
    </form>
  )
}

export default NewPlace
