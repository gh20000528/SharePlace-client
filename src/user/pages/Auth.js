import React, { useContext, useState } from 'react'
import Card from '../../shared/component/UIElement/Card'
import Input from '../../shared/component/FormElement/Input'
import Button from '../../shared/component/FormElement/Button'
import { VALIDATOR_EMAIL, VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from '../../shared/component/util/validators'
import { useForm } from '../../shared/hooks/form-hook'
import './Auth.css'
import { AuthContext } from '../../shared/context/auth-context'

const Auth = () => {
	const auth = useContext(AuthContext)
	const [isLoginMode, setIsLoginMode] = useState(true)
	const [formState, inputHandler, setFormData] = useForm({
		email:{
			value:'',
			isValid: false
		},
		password:{
			value: '',
			isValid: false
		}
	}, false)
	const authHandler = (e) => {
		e.preventDefault()
		console.log(formState.inputs);
		auth.login()
	}

	const switchModeHandler = () => {
		if(!isLoginMode){
			setFormData({
				...formState.inputs,
				name: undefined
			}, formState.inputs.email.isValid && formState.inputs.password.isValid)
		}else{
			setFormData({
				...formState.inputs,
				name:{
					value: '',
					isValid: false
				}
			}, false)
		}
		setIsLoginMode(prevMode => !prevMode)
	}

  return (
    <Card className="authentication">
			<h2 className='text-2xl font-bold'>登入</h2>
			<form  onSubmit={authHandler}>	
				{!isLoginMode && (
					<Input
						element="input"
						id="name"
						type='text'
						label="名稱"
						validators={[VALIDATOR_REQUIRE]}
						errorText="請輸入名稱"
						onInput={inputHandler}
					/>
				)}
				<Input 
					element="input"
					id="email"
					type='email'
					label="信箱"
					validators={[VALIDATOR_EMAIL()]}
					errorText="請輸入正確的email"
					onInput={inputHandler}
				/>
				<Input 
					element="input"
					id="password"
					type='password'
					label="密碼"
					validators={[VALIDATOR_MINLENGTH(6)]}
					errorText="密碼要超過6個字"
					onInput={inputHandler}
				/>
				<Button type="submit" disabled={!formState.isValid}> {!isLoginMode ? '註冊' : '登入'}</Button>
			</form>
			<Button inverse onClick={switchModeHandler}>{isLoginMode ? '還沒有帳號嗎？' : '登入'}</Button>
    </Card>
  )
}

export default Auth
