import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const state = {
  headers: [
    { text: 'Id', value: 'id' },
    { text: 'E-mail', value: 'email' },
    { text: 'Name', value: 'name' },
    { text: 'Age', value: 'age' },
    { text: 'Height', value: 'height' }
  ],
  users: [{
    id: 1,
    email: 'bkas0@over-blog.com',
    name: 'Bertrand Kas',
    age: 55,
    height: 177
  }, {
    id: 2,
    email: 'ahammer1@360.cn',
    name: 'Abeu Hammer',
    age: 90,
    height: 172
  }, {
    id: 3,
    email: 'jgatward2@examiner.com',
    name: 'Jemmie Gatward',
    age: 81,
    height: 135
  }, {
    id: 4,
    email: 'blast3@si.edu',
    name: 'Bryana Last',
    age: 57,
    height: 140
  }, {
    id: 5,
    email: 'lanster4@state.gov',
    name: 'Levey Anster',
    age: 49,
    height: 163
  }, {
    id: 6,
    email: 'tgytesham5@nhs.uk',
    name: 'Tiffy Gytesham',
    age: 55,
    height: 193
  }]
}

export default new Vuex.Store({
  state
})
