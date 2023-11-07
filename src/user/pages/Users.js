import React from 'react'
import UserList from '../component/UserList'

const Users = () => {
  const USERS = [{
		id:'u1',
		name:'日向翔陽', 
		image:'https://i.pinimg.com/564x/c3/76/a1/c376a13073b06aa7a2402b493c55ff74.jpg', places: 3
	}]
  return (
    <div>
      <UserList items={USERS}/>
    </div>
  )
}

export default Users
