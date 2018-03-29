
import React, { PureComponent } from 'react'

class Jogos extends PureComponent {

    render() {
        return (
            <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-6">
                <div className="card ">
                    <div className="card-header text-center bg-dark" data-toggle="collapse" href="#listCollapseJogos" aria-expanded="true" aria-controls="listCollapseJogos" style={{ color: 'grey' }}>
                        JOGOS
                                </div>
                    <div className="collapse show" id="listCollapseJogos">
                        <div className="table-responsive">
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th className="table-secondary" scope="row">Hora - Casa x Visitante</th>
                                        <td className="text-center table-secondary">Casa</td>
                                        <td className="text-center table-secondary">Empate</td>
                                        <td className="text-center table-secondary">Fora</td>
                                        <td className="text-center table-secondary">+ Opções</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="table-active">
                                        <td colSpan="5">03/01/2018</td>
                                    </tr>
                                    <tr>
                                        <th scope="row"><small>14:30 - <b> Barcelona x Real Madri</b></small></th>
                                        <td className="text-center">1.8</td>
                                        <td className="text-center">1.3</td>
                                        <td className="text-center">2.3</td>
                                        <td className="text-center">+47</td>
                                    </tr>
                                    <tr>
                                        <th className="table-secondary" scope="row"><small>15:00 - <b>Altetico de Madri x Juventos </b></small></th>
                                        <td className="text-center table-secondary">1.2</td>
                                        <td className="text-center table-secondary">1.9</td>
                                        <td className="text-center table-secondary">3.3</td>
                                        <td className="text-center table-secondary">+18</td>
                                    </tr>
                                    <tr>
                                        <th scope="row"><small>16:00 - <b>Juventos x Inter</b></small></th>
                                        <td className="text-center">1.8</td>
                                        <td className="text-center">1.3</td>
                                        <td className="text-center">2.3</td>
                                        <td className="text-center">+47</td>
                                    </tr>
                                    <tr>
                                        <th className="table-secondary" scope="row"><small>16:30 - <b>Vasco x Flamengo</b></small></th>
                                        <td className="text-center table-secondary">1.2</td>
                                        <td className="text-center table-secondary">1.9</td>
                                        <td className="text-center table-secondary">3.3</td>
                                        <td className="text-center table-secondary">+18</td>
                                    </tr>
                                </tbody>
                                <thead className="thead-dark">
                                    <tr className="table-active">
                                        <td colSpan="5">04/01/2018</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row"><small>11:30 - <b>Barcelona x Real Madri</b></small></th>
                                        <td className="text-center">1.8</td>
                                        <td className="text-center">1.3</td>
                                        <td className="text-center">2.3</td>
                                        <td className="text-center">+47</td>
                                    </tr>
                                    <tr>
                                        <th className="table-secondary" scope="row"><small>13:40 - <b>Altetico de Madri x Juventos</b></small></th>
                                        <td className="text-center table-secondary">1.2</td>
                                        <td className="text-center table-secondary">1.9</td>
                                        <td className="text-center table-secondary">3.3</td>
                                        <td className="text-center table-secondary">+18</td>
                                    </tr>
                                    <tr>
                                        <th scope="row"><small>16:30 - <b>Juventos x Inter</b></small></th>
                                        <td className="text-center">1.8</td>
                                        <td className="text-center">1.3</td>
                                        <td className="text-center">2.3</td>
                                        <td className="text-center">+47</td>
                                    </tr>
                                    <tr>
                                        <th className="table-secondary" scope="row"><small>16:30 - <b>Vasco x Flamengo</b></small></th>
                                        <td className="text-center table-secondary">1.2</td>
                                        <td className="text-center table-secondary">1.9</td>
                                        <td className="text-center table-secondary">3.3</td>
                                        <td className="text-center table-secondary">+18</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Jogos