
export interface userProps {
    id : number;
    name : string;
    isAdmin : boolean;
}

const UserAccount = ({user}: {user: userProps}) => {
  return (
    <>
        <h1>UserAccount</h1>
        <p>ID: {user.id}</p>
       <h2>{user.name}</h2>
        <p>IsAdmin: {user.isAdmin ? "Yes" : "No"}</p>
        <div>
           {user.isAdmin &&  <button>Edit</button>}
        </div>
    </>
  )
}

export default UserAccount