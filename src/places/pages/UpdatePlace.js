import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Input from '../../shared/component/FormElement/Input'
import Button from '../../shared/component/FormElement/Button'
import Card from '../../shared/component/UIElement/Card'
import { useForm } from '../../shared/hooks/form-hook'
import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH } from '../../shared/component/util/validators'
import './NewPlace.css'

const DUMMY_PLACE =[
  {
		id:'p1',
		title:'阿裕壽司',
		description:'好吃',
		imageUrl:'https://i.pinimg.com/236x/9a/01/27/9a012705c9aef003d629c4a7e331f9f1.jpg',
		address: '404台中市北區西屯路一段361號',
		location:{
			lat: 24.1610157,
			lng: 120.6600295
		},
		creator: 'u1'
	},
	{
		id:'p2',
		title:'阿裕壽司',
		description:'好吃',
		imageUrl:'https://i.pinimg.com/236x/9a/01/27/9a012705c9aef003d629c4a7e331f9f1.jpg',
		address: '404台中市北區西屯路一段361號',
		location:{
			lat: 24.1610157,
			lng: 120.6600295
		},
		creator: 'u1'
	},
	{
		id:'p3',
		title:'阿裕壽司',
		description:'好吃',
		imageUrl:'https://i.pinimg.com/236x/9a/01/27/9a012705c9aef003d629c4a7e331f9f1.jpg',
		address: '404台中市北區西屯路一段361號',
		location:{
			lat: 24.1610157,
			lng: 120.6600295
		},
		creator: 'u1'
	},
	{
		id:'p2',
		title:'阿裕壽司',
		description:'好吃',
		imageUrl:'https://i.pinimg.com/564x/89/60/6f/89606fb8ff5b51a0ca461d50c9c79000.jpg',
		address: '404台中市北區西屯路一段361號',
		location:{
			lat: 24.1610157,
			lng: 120.6600295
		},
		creator: 'u2'
	}
]

const UpdatePlace = (props) => {
	const [isLoading, setIsLoading] = useState(true)
  const placeId = useParams().placeId
	
	const [formState, inputHandler, setFormData] = useForm({
		title:{
			value: '',
			isValid:false
		},
		description: {
			value: '',
			isValid: false
		}
	}, false)
	
	const identifiedPlace = DUMMY_PLACE.find(p => p.id === placeId)
	
	useEffect(() => {
		if(identifiedPlace){
			setFormData({
				title:{
					value: identifiedPlace.title,
					isValid:true
				},
				description: {
					value: identifiedPlace.description,
					isValid: true
				}
			}, true)
			setIsLoading(false)
		}
	},[setFormData, identifiedPlace])

	
	const placeUpdateSubmitHandler = (e) => {
		e.preventDefault()
		console.log(formState.inputs);
	}

	if(!identifiedPlace){
		return(
			<div className="center">
				<Card className="w-1/2 text-white bg-gray-500">
					<h2>沒有找到你要的</h2>
				</Card>
			</div>
		)
	}
	console.log(formState.inputs.title.value);
	console.log(formState.inputs.description.value);
	if(isLoading){
		return(
			<div className="center">
				<h2>Loading....</h2>
			</div>
		)
	}
  return (
	<form className='place-form' onSubmit={placeUpdateSubmitHandler}>
      <Input 
        id="title"
        element="input" 
				type="text"
        label="標題" 
        validators={[VALIDATOR_REQUIRE()]} 
        errorText="請輸入標題"
        onInput={inputHandler}
				initialValue={formState.inputs.title.value}
				initialValid={formState.inputs.title.isValid}
      />
			<Input 
        id="description"
        element="textarea"  
        label="內容" 
        validators={[VALIDATOR_MINLENGTH(3)]} 
        errorText="請輸入標題"
        onInput={inputHandler}
				initialValue={formState.inputs.description.value}
				initialValid={formState.inputs.description.isValid}
      />
			<Button type="submit" disabled={!formState.isValid}>
				更新
			</Button>
    </form>
  )
}

export default UpdatePlace
