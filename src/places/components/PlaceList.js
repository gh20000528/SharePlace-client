import React from 'react'
import {Link} from 'react-router-dom'
import Card from '../../shared/component/UIElement/Card'
import Button from '../../shared/component/FormElement/Button'
import './PlaceList.css'
import PlaceItem from './PlaceItem'

const PlaceList = (props) => {
	if (props.items.length === 0){
		return <div className="place-list center">
			<Card>
				<h2>沒有發現地點，要分享一個嗎</h2>
				<Button to="/place/new">分享</Button>
			</Card>
		</div>
	}
  return (
    <ul className='place-list'>
      {props.items.map(place => 
				<PlaceItem 
					key={place.id} 
					id={place.id} 
					image={place.imageUrl}
					title={place.title}
					description={place.description}
					address={place.address}
					creatorId={place.creator}
					coordinates={place.location}
					/>)}
    </ul>
  )
}

export default PlaceList
