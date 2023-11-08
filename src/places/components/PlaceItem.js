import React, { useState } from 'react'
import Card from '../../shared/component/UIElement/Card'
import './PlaceItem.css'
import Button  from '../../shared/component/FormElement/Button'
import Modal from '../../shared/component/UIElement/Model'

const PlaceItem = props => {
	const [showMap, setShowMap] = useState(false)

	const openMapHandler = () => {
		setShowMap(true)
	}
	const closeMapHandler = () => {
		setShowMap(false)
	}
  return (
		<React.Fragment>
			<Modal 
				show={showMap}
				onCancel={closeMapHandler}
				header={props.address}
				contentClass="place-item__modal-content"
				footerClass="place-item__modal-actions"
				footer={<Button onClick={closeMapHandler}>離開</Button>}
			>
				<div className="map_container">
					<h2>Map</h2>
				</div>
			</Modal>
			<li className='place-item'>
				<Card className="place-item__content">
					<div className="place-item__image">
						<img src={props.image} alt="" />
					</div>
					<div className="place-item__info">
						<h2>{props.title}</h2>
						<h3>{props.address}</h3>
						<p>{props.description}</p>
					</div>
					<div className='place-item__actions'>
						<Button inverse onClick={openMapHandler}>在地圖上檢視</Button>
						<Button to={`/place/${props.id}`}>修改</Button>
						<Button danger>刪除</Button>
					</div>
				</Card>
			</li>
		</React.Fragment>
  )
}

export default PlaceItem
