
import React, { PureComponent } from 'react'

class Campeonatos extends PureComponent {

    render() {
        return (
            <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-3">
                <div className="card text-center">
                    <div className="card-header bg-dark" data-toggle="collapse" href="#listCollapseCampeonatos" aria-expanded="true" aria-controls="listCollapseCampeonatos" style={{ color: 'grey' }}>
                        CAMPEONATOS
                                </div>
                    <div className="collapse show" id="listCollapseCampeonatos">
                        <ul className="list-group">
                            <li href="#" className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                                Todos
                                        <span className="badge badge-dark badge-pill">84</span>
                            </li>
                            <li className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                                Jogos de hoje
                                        <span className="badge badge-dark badge-pill">60</span>
                            </li>
                            <li className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                                amanha
                                        <span className="badge badge-dark badge-pill">24</span>
                            </li>
                            <li className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                                Australia Liga A
                                        <span className="badge badge-dark badge-pill">5</span>
                            </li>
                            <li className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                                Bulgaria Primeira Liga
                                        <span className="badge badge-dark badge-pill">6</span>
                            </li>
                            <li className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                                Croacia - 1A HNL
                                        <span className="badge badge-dark badge-pill">11</span>
                            </li>
                            <li className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                                Australia Liga A
                                        <span className="badge badge-dark badge-pill">2</span>
                            </li>
                            <li className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                                Bulgaria Primeira Liga
                                        <span className="badge badge-dark badge-pill">14</span>
                            </li>
                            <li className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                                Italia
                                        <span className="badge badge-dark badge-pill">124</span>
                            </li>
                            <li className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                                Russia
                                        <span className="badge badge-dark badge-pill">4</span>
                            </li>
                            <li className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                                Tiristisi
                                        <span className="badge badge-dark badge-pill">24</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Campeonatos