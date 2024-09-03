import {Link} from 'react-router-dom';
import '../Styles/App.css'

const Header = () => {
    return (
        <header className='Header'>
        <nav>
            <ul>
            <li>
                <Link to="/movies">Фильмы</Link>
            </li>
            <li>
                <Link to="/cartoons">Мультфильмы</Link>
            </li>
            <li>
                <Link to="/shows">Сериалы</Link>
            </li>
            </ul>
        </nav>
        </header>
    );
}

export default Header;