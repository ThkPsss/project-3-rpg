import React, { Component } from "react"
import API from "../utils/API"
import SelectBox, { Componnet } from '../components/select-box'


class characterCreation extends Component {
    state = {
        level: 0,
        race: "",
        class: "",
        //Hit points are calculated by the 
        hitPoints: 0,
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
        skills: [],
        //Abilties
        abilties: []
    }
    handleRace = event => {
        const btnType = event.target.attributes.getNamedItem("data-value").value

        API.getRace(btnType)
        .then(res =>
            this.setState({
                name: res.data.name,
                skills: res.data.proficiency_choices,
                hitDie: res.data.hit_die
            })
        )
        .catch(err => console.log(err))

        const newState = { ...this.state }

        if (btnType === "human") {

            newState.race = this.getRaceData

            newState.str += 1
            newState.dex += 1
            newState.con += 1
            newState.int += 1
            newState.wis += 1
            newState.cha += 1 
        }
        else if (btnType ===  "elf") {

            newState.race = this.getRaceData

            newState.dex += 2
        }
        else if (btnType === "dwarf") {

            newState.race = this.getRaceData

            newState.con += 2
        }

        this.setState(newState)
    }

    handleClass = event => {
        const btnType = event.target.attributes.getNamedItem("data-value").value

        const newState = { ...this.state }

        if (btnType === "figher") {

            newState.class = this.getClassData
        }
        else if (btnType ===  "ranger") {

            newState.class = this.getClassData
        }
        else if (btnType === "wizard") {

            newState.class = this.getClassData
        }

        this.setState(newState)
    }

    getClassData = (buttonValue) => {
        API.getRace(buttonValue)
        .then(res =>
            this.setState({
                name: res.data.name,
                skills: res.data.proficiency_choices,
                hitDie: res.data.hit_die
            })
        )
        .catch(err => console.log(err))
    }    

    getRaceData = (buttonValue) => {
        API.getRace(buttonValue)
        .then(res =>
            this.setState({
                name: res.data.name
            })
        )
        .catch(err => console.log(err))
    }    
    render() {
        return(
            <div id="character-creation">
                <h1>Character Creation Screen</h1>
                <br></br>
                <br></br>
                <h2>Race Selection</h2>
                <SelectBox 
                    width={200}
                    name="race_id"
                    items={[
                        { value: `Human`, id: 1},
                        { value: `Elf`, id: 2},
                        { value: `Dwarf`, id: 3},
                    ]}
                />
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <h2>Class Selection</h2>
                <SelectBox 
                    width={200}
                    name="race_id"
                    items={[
                        { value: `Fighter`, id: 1},
                        { value: `Ranger`, id: 2},
                        { value: `Wizard`, id: 3},
                    ]}
                />
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <button type="submit" onClick={this.handleRace} className="btn btn-success">
                    Submit
                </button>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
            </div>
        )
    }
}

export default characterCreation