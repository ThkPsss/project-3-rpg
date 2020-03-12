import React, { Component } from "react"
import Hero from "../components/Hero"
import NavBar from "../components/Navbar"

class Opening extends Component {
    handleFormSubmit = event => {
        event.preventDefault();
        //Insert function will go here
      };

    render() {
        return (
            <div>
                <NavBar />
                <Hero backgroundImage="https://lolstatic-a.akamaihd.net/frontpage/apps/prod/piltover/en_US/0d65273e55685b53b82f4f0ead52fc167a27f911/assets/img/share/zaun_1200x630.jpg">
                    <div id="main-text">
                        <h1>Steam Punk RPG</h1>
                        <h2>The Steam Punk Battler RPG!</h2>
                    </div>
                </Hero>
            </div>
        )
    }
}

export default Opening