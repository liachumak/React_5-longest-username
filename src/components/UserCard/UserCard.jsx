import './userCard.css'

const UserCard = ({ name, surname, email, id,onClickDeleteBtn, onClickUpdateBtn }) => {

	return (
		<div className='common-user-card'>
			<div>{ `Name : ${name}` }</div>
			<div>{ `Surname : ${surname}` }</div>
			<div>{ `Email : ${email}` }</div>
			<button type='button' onClick={() => { onClickDeleteBtn(id)
			}}>Delete user</button>
			<button type='button' onClick={() => { onClickUpdateBtn(id)
			}}>Update user</button>
		</div>
	)
};

export default UserCard;