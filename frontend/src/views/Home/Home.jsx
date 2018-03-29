
import React, { Component } from 'react'
//import { Link } from 'react-router-dom'
//import { reduxForm, Field } from 'redux-form'
//import { connect } from 'react-redux'
//import { bindActionCreators } from 'redux'
//import { Container, Row, Col, CardGroup, Card, CardBody, Button, InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap';

import NavBar from './NavBar/'
import Carousel from './Carousel/'
import Search from './Search/'
import Campeonatos from './Campeonatos/'
import Jogos from './Jogos/'
import Bilhetes from './Bilhetes/'
import Footer from './Footer/'

class Home extends Component {
    constructor(props) {
        super(props)
        const styles = {
            link: {
                color: "white",
                ":hover": {
                    textDecoration: "none",
                    color: "red",
                },
            },
        };
    }

    render() {
        return (
            <div>
                <NavBar />
                <Carousel />
                <Search />
                <div className="container ">
                    <div className="row">
                        <Campeonatos />
                        <Jogos />
                        <Bilhetes />
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Home