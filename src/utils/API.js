import axios from "axios";

// Export an object containing methods we'll use for accessing the Dog.Ceo API

export default {
  getRace: function(race) {
    return axios.get(`http://www.dnd5eapi.co/api/races/${race}`)
    .then(function (response) {
      console.log(response)
    })
  },
  getClass: function(classes) {
    return axios.get(`http://www.dnd5eapi.co/api/classes/${classes}`)
    .then(function (response) {
      console.log(response)
    })
  },
  getMonster: function(monster) {
    return axios.get(`http://www.dnd5eapi.co/api/monsters/${monster}`)
    .then(function (response) {
      console.log(response)
    })
  }
};
