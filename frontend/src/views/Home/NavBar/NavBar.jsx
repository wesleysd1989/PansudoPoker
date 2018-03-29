
import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'

class NavBar extends PureComponent {

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <a className="navbar-brand" href="#/home"><i className='fa fa-trophy'></i><b> Pansudo</b> Poker</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">

                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            <button className="btn btn-outline-light my-2 my-sm-0" type="submit" ><Link to={'/login'} style={{ textDecoration: 'none', color: 'white', ':hover': { background: 'green' } }}>Login</Link></button>
                        </form>
                    </div>
                </div>
            </nav>
        );
    }
}

export default NavBar