import React, { useContext, useState } from 'react'
import Card from '../../shared/component/UIElement/Card'
import './PlaceItem.css'
import Button  from '../../shared/component/FormElement/Button'
import Modal from '../../shared/component/UIElement/Model'
import Map from '../../shared/component/UIElement/Map'
import { AuthContext } from '../../shared/context/auth-context'

const PlaceItem = props => {
	const auth = useContext(AuthContext)
	const [showMap, setShowMap] = useState(false)
	const [showConfirmModal, setShowConfirmModal] = useState(false)

	const openMapHandler = () => {
		setShowMap(true)
	}
	const closeMapHandler = () => {
		setShowMap(false)
	}

	const showDeleteHandler = () => {
		setShowConfirmModal(true)
	}

	const cancelDeleteHandler = () => {
		setShowConfirmModal(false)
	}
	const confirmDeleteHandler = () => {
		setShowConfirmModal(false)
		console.log("Delete....");
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
					<Map center={props.coordinates} zoom={16}></Map>
				</div>
			</Modal>

			<Modal 
				show={showConfirmModal}
				onCancel={cancelDeleteHandler}
				header="刪除" 
				footerClass="place-item__modal-actions"
				footer={
				<React.Fragment>
					<Button inverse onClick={cancelDeleteHandler}>取消</Button>
					<Button danger onClick={confirmDeleteHandler}>刪除</Button>
				</React.Fragment>
			}>
				<p>確定要刪除這個嗎？</p>
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
						{auth.isLoggedIn && <Button to={`/place/${props.id}`}>修改</Button>}
						{auth.isLoggedIn && <Button danger onClick={showDeleteHandler}>刪除</Button>}
					</div>
				</Card>
			</li>
		</React.Fragment>
  )
}

export default PlaceItem
