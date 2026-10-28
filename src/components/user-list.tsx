
export interface userPorps {
    name : string,
    id : string
}

const UserList = ({users} : {users : userPorps[]}) => {

    if(users.length === 0) {
        return <p>No users found</p>
    }

  return (
    <>
        <h2>Users</h2>
        <ul>
        {
            users.map((user) => (
                <li key={user.id}>
                   <a href={`/users/${user.id}`}>{user.name}</a>
                </li>
            ))
        }
        </ul>
    </>
  )
}

export default UserList