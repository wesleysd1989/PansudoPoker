
import React, { PureComponent } from 'react'

class Footer extends PureComponent {

    render() {
        return (
            <div className="jumbotron jumbotron-fluid">
                <div className="container text-center">
                    <span className="text-muted">
                        © 2018 <i className='fa fa-trophy'></i><b> Pansudo Poker.</b> Todos os direitos reservados.
                        <br />
                        Aviso: O jogo pode viciar e você pode perder dinheiro. Jogue responsavelmente. Participantes terão que ser maiores de 18 anos de idade.
                        </span>
                </div>
            </div>
        );
    }
}

export default Footer