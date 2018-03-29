
import React, { PureComponent } from 'react'

class Search extends PureComponent {

    render() {
        return (
            <div className="container my-3">
                <nav className="navbar navbar-expand navbar-dark bg-dark">
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                        </ul>
                        <form className="form-inline ml-auto">
                            <input className="form-control col-5 col-sm-6 mx-2" type="search" placeholder="Cod. Bilhete" aria-label="Search" />
                            <button className="btn btn-outline-light " type="submit">Pesquisar Bilhete</button>
                        </form>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Search