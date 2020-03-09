import React, { Component } from "react"
import characterCreation from "../pages/characterCreation"
import Battler from "../components/Battler"

class gameMenu extends Component {

    Attack (attacker, defender) {
        let damage
        if (attacker.attack >= defender.defense) {
            damage = Math.floor(Math.random() * 10)
            defender.health -= damage
            console.log(`The Defender took ${damage}. The Defender now has ${defender.health}.`)
        }
        else {
            console.log(`The Attack has missed!`)
        }
    }



    Defend(defender) {
        defender.defense *= .5
    }
    render(){
        return(
            <Battler />
        )
    }
}

export default gameMenu