import { Link } from "react-router-dom"

const Header = () => {

  return (
    <>
    <div className="flex justify-between items-center ">
        <div>logo</div>
        <nav>
            
            <Link to='/about'>About</Link>
        </nav>
    </div>
    </>
  )
}
export default Header