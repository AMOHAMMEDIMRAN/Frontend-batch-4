
import { Link } from "react-router-dom"
import users from "../data/data"



const UsersList = () => {
  return (
    <div>
        <h1 className="my-8 font-extrabold text-2xl text-amber-300 ">Users list</h1>
        <ul>
            {
                users.map((u) => (
                    <li className="cursor-pointer" key={u.id}>
                        <Link to={`/user/${u.id}`}>{u.name} </Link>
                    </li>
                ))
            }
        </ul>
        <Link to='/data' >Data</Link>
    </div>
  )
}
export default UsersList