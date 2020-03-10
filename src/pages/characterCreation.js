import React, { Component } from "react"
import API from "../utils/API"

class characterCreation extends Component {
    createCharacter() {
        let character = {
            level: 0,
            race: "",
            class: "",
            //Strenght: Effects Physical attacks made by the player
            str: 0,
            //Dexterity: Effects Ranged attacks and other movement based things
            dex: 0,
            //Constitution: Effects the Character's Health. For every point of Con the player will get ___ Hit Points (HP)
            con: 0,
            //Intelligence: Effects magic attaks
            int: 0,
            //Wisdom
            wis: 0,
            //Charisma
            cha: 0,
            //These skills will come from the class they choose (Some races may have skills like Dragonborn)
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