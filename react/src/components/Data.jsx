import { useContext } from "react"
import { Link } from "react-router-dom"
import { DataContext } from "../context/DataContext"



const Data = () => {

    const {user} = useContext(DataContext)

  return (
    <div>Data
<br />
        <Link to='/'>Back</Link>


        <div>
            {
                user.map((u) => (
                    <h1 key={u.id}>{u.name} </h1>
                ))
            }
        </div>
    </div>
  )
}
export default Data