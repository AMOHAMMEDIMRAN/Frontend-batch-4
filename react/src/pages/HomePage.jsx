import Header from "../components/Header"
import UsersList from "../components/UsersList"

const HomePage = () => {
  
  return (
    <div>
        <Header/>
        <h1 className="text-3xl font-bold ">This Home page </h1>
        <UsersList />
    </div>
  )
}
export default HomePage