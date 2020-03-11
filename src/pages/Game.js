import React, { Component } from "react"
import characterCreation from "../pages/characterCreation"
import Battler from "../components/Battler"
import API from "../utils/API"

class gameMenu extends Component {

    Game () {
        var testHuman = {
            level: 1,
            race: "Human",
            class: "Wizard",
            //Hit points are calculated by the 
            hitPoints: 6,
            //Strenght: Effects Physical attacks made by the player
            str: 8,
            //Dexterity: Effects Ranged attacks and other movement based things
            dex: 8,
            //Constitution: Effects the Character's Health. For every point of Con the player will get ___ Hit Points (HP)
            con: 10,
            //Intelligence: Effects magic attaks
            int: 9,
            //Wisdom
            wis: 14,
            //Charisma
            cha: 3,
            //These skills will come from the class they choose (Some races may have skills like Dragonborn)
            skills: ["Acid Splash", "Chill Touch", "Dancing Light"],
            abilties: ["Arcana", "Medicine"]
        }

        var testElf = {
            level: 1,
            race: "Elf",
            class: "Ranger",
            //Hit points are calculated by the 
            hitPoints: 15,
            //Strenght: Effects Physical attacks made by the player
            str: 19,
            //Dexterity: Effects Ranged attacks and other movement based things
            dex: 10,
            //Constitution: Effects the Character's Health. For every point of Con the player will get ___ Hit Points (HP)
            con: 20,
            //Intelligence: Effects magic attaks
            int: 6,
            //Wisdom
            wis: 13,
            //Charisma
            cha: 3,
            //These skills will come from the class they choose (Some races may have skills like Dragonborn)
            skills: ["Minor Illusion"],
            abilties: ["Animal Handeling", "Nature", "Survival"]
        }

        var testDwarf = {
            level: 1,
            race: "Dwarf",
            class: "Warrior",
            //Hit points are calculated by the 
            hitPoints: 11,
            //Strenght: Effects Physical attacks made by the player
            str: 11,
            //Dexterity: Effects Ranged attacks and other movement based things
            dex: 18,
            //Constitution: Effects the Character's Health. For every point of Con the player will get ___ Hit Points (HP)
            con: 11,
            //Intelligence: Effects magic attaks
            int: 18,
            //Wisdom
            wis: 16,
            //Charisma
            cha: 11,
            //These skills will come from the class they choose (Some races may have skills like Dragonborn)
            skills: [],
            abilties: ["Acrobatics","Athletics"]
        }
        function basicAttack(attacker, defender) {
            let damage
            if (attacker.str >= defender.con) {
                damage = Math.floor(Math.random() * 10)
                defender.hitPoints -= damage
                console.log(`The Defender took ${damage}. The Defender now has ${defender.hitPoints}.`)
            }
            else {
                console.log(`The Attack has missed!`)
            }
        }
    }



    Defend(defender) {
        defender.defense *= .5
    }
    render(){
        return(
            <div>
                <h1>Battle!</h1>
            </div>
        )
    }
}

export default gameMenu