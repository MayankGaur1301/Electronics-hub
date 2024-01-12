import './Header.css';
import { Link } from 'react-router-dom';

const Header = ({cartItems}) => {
    return (
        <header className='header'>
            <h1>
                <Link to='/' className='logo'>Electronics Shop</Link>
            </h1>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/signup'>SignUp</Link>
                </li>
                <li>
                    <Link to='/cart'>
                        <i className='fas fa-shopping-cart' />
                        <sup className='cart-length'>
                             {
                                cartItems.length === 0 ? '' : cartItems.length
                            } 
                        </sup>
                    </Link>
                </li>
            </ul>
        </header>
    );
};

export default Header;
