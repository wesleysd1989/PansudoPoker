
import React, { PureComponent } from 'react'

class Bilhetes extends PureComponent {

    render() {
        return (
            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-3">
                <div className="card">
                    <div className="card-header bg-dark" data-toggle="collapse" href="#listCollapseBilhetes" aria-expanded="true" aria-controls="listCollapseBilhetes" style={{ color: 'grey' }}>
                        BILHETES
                                </div>
                    <div className="collapse show" id="listCollapseBilhetes">
                        <div className="table-responsive">
                            <table className="table table-hover">
                                <tbody>
                                    <tr>
                                        <th scope="row">
                                            <button className="btn btn-light mx-auto"><i className='fa fa-trash'></i></button>
                                            <br />
                                            <small><b>Barcelona x Real Madri</b></small>
                                            <br />
                                            <small>03/01/2018 - 16:30</small>
                                            <br />
                                            <small>Vencedor: jogo - Acima 2.5 - Taxa: 2,23</small>
                                        </th>
                                    </tr>
                                    <tr>
                                        <th scope="row">
                                            <button className="btn btn-light my-auto"><i className='fa fa-trash'></i></button>
                                            <br />
                                            <small><b>Altetico de Madri x Juventos</b></small>
                                            <br />
                                            <small>03/01/2018 - 16:30</small>
                                            <br />
                                            <small>Vencedor: jogo - Acima 2.5 - Taxa: 2,23</small>
                                        </th>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <ul className="list-group">
                            <li className="list-group-item">
                                <ul className="list-inline" >
                                    <li className="list-inline-item">Numero de Jogos:</li>
                                    <li className="list-inline-item">2</li>
                                </ul>
                                <ul className="list-inline my-2" >
                                    <li className="list-inline-item">Valor do Premio:</li>
                                    <li className="list-inline-item">0</li>
                                </ul>
                                <form>
                                    <div className="form-group row">
                                        <div className="col-12">
                                            <input type="text" className="form-control" id="inputValorAposta3" placeholder="Valor" />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <div className="col-12">
                                            <input type="text" className="form-control" id="inputCliente3" placeholder="Cliente (Opcional)" />
                                        </div>
                                    </div>
                                    <div className="form-inline form-group row">
                                        <div className="col-12">
                                            <button type="submit" className="btn btn-dark mx-2 ">Pré-bilhete</button>
                                            <button type="submit" className="btn btn-dark ">Limpa</button>
                                        </div>
                                    </div>
                                </form>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Bilhetes