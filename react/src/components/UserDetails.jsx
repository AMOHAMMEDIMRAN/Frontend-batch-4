import { useParams } from "react-router-dom"
import users from "../data/data"






const UserDetails = () => {
    const {id} = useParams();
    const user = users.find((u) => (u.id === parseInt(id)))
  return (
    <div>
        <p>{user.id}</p>
        <h2>{user.name}</h2>
        <h3>{user.bio}</h3>
    </div>
  )
}
export default UserDetails