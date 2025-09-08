import { Link } from "react-router-dom"

const Header = () => {

  return (
    <>
      <div className="flex justify-between items-center bg-blue-600 px-8 py-4 shadow-md">
        <div className="text-white text-2xl font-bold tracking-wide">Logo</div>
        <nav>
          <Link to='/about' className="text-white hover:text-blue-200 transition-colors duration-200 text-lg font-medium">About</Link>
        </nav>
      </div>
    </>
  )
}
export default Header