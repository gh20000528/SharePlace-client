import React from 'react'
import {useParams} from 'react-router-dom'
import PlaceList from '../components/PlaceList'


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
const UserPlace = () => {
	const userId = useParams().userId
	const loadedPlaces = DUMMY_PLACE.filter(place => place.creator === userId)
  return <PlaceList items={loadedPlaces}/>
}

export default UserPlace
