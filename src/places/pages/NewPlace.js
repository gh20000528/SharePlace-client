import React from 'react'
import Input from '../../shared/component/FormElement/Input'
import { VALIDATOR_REQUIRE } from '../../shared/component/util/validators'
import './NewPlace.css'

const NewPlace = () => {
  return (
    <form className='place-form'>
      <Input element="input" type="text" label="標題" validators={[VALIDATOR_REQUIRE()]} errorText="請輸入標題"/>
    </form>
  )
}

export default NewPlace
