import React, { Component } from "react"
import API from "../utils/API"

class characterCreation extends Component {
    createCharacter() {
        let character = {
            level: 0,
            race: "",
            class: "",
            health: 0,
            attack: 0,
            defense: 0,
            skills: []
        }
        function raceSelection() {

            //Create Human
            function selectHuman() {
                //Setting the player's race to human
                character.race = API.getRace("human")
            }

            //Create Dwarf
            function selectDwarf() {
                //Setting the player's race to Dwarf
                character.race = API.getRace("dwarf")
            }

            //Create Elf
            function selectElf() {
                //Setting the player's race to Elf
                character.race = API.getRace("elf")
            }
        }
        function characterSelection() {
            
            //Create Wizard
            function selectWizard() {
                //Setting the player's class to Wizard
                character.class = API.getClass("wizard")
                //With the class selected, the player inherits two of the class' skills.
            }

            //Create Warrior
            function selectFighter() {
                //Setting the player's class to Fighter
                character.class = API.getClass("fighter")
                //With the class selected, the player inherits two of the class' skills.

            }

            //Create Ranger
            function selectRanger() {
                //Setting the player's class to Ranger
                character.class = API.getClass("ranger")
                //With the class selected, the player inherits two of the class' skills.
            }
        }

    }
    render() {
        return(
            <div>
                <h1>Character Creation Screen</h1>
            </div>
        )
    }
}

export default characterCreation