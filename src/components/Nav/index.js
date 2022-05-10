import { Link } from "react-router-dom";

function Nav() {
    return (
        <header>
            <div class="uk-position-top">
                <nav class="uk-navbar-container uk-navbar-transparent" uk-navbar>
                    <div class="uk-navbar-left">
                        <ul class="uk-navbar-nav">
                            <li> <Link to='/'> MH </Link></li>
                            <li> <Link to='/about'> About </Link></li>
                            <li> <Link to='/projects'> Projects </Link></li>
                            <li> <Link to='/contact'> Contact </Link></li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default Nav;
