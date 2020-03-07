import React, { Component } from "react"
import API from "../utils/API"

class characterCreation extends Component {
    createCharacter() {
        let character = {
            level: 0,
            class: "",
            health: 0,
            attack: 0,
            defense: 0,
            skills: []
        }

        function characterSelection() {
            
            //Create Wizard
            function createWizard() {
                character.class = API.getClass("wizard")
            }

            //Create Warrior
            function createFighter() {
                character.class = API.getClass("fighter")
            }

            //Create Ranger
            function createRanger() {
                character.class = API.getClass("ranger")
            }
        }

    }
}