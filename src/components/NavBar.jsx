import { Link } from 'react-router-dom'
import '../css/NavBar.css'


function NavBar() {
    return <div className="nav-bar">
        <nav>
            <div className="navHome">
                <Link to = '/'>Home Page</Link>
            </div>
            <div className="navOptions">
                <Link to = '/'>All books</Link>
                <Link to = '/favBooks'>my favorite books</Link>
            </div>
        </nav>
    </div>
}
export default NavBar;