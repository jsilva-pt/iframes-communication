import Vue from 'vue'
import Vuex from 'vuex'
import Vuetify from 'vuetify'
import App from '@/App.vue'
import { createLocalVue, mount } from '@vue/test-utils'
import { state } from '@/store'
Vue.use(Vuetify)

describe('App.vue', () => {
  const localVue = createLocalVue()
  localVue.use(Vuex)

  let vuetify
  let store

  beforeEach(() => {
    vuetify = new Vuetify()
    store = new Vuex.Store({
      state
    })
  })

  it('Is sorted by id descending by default', async () => {
    const wrapper = mount(App, {
      store,
      localVue,
      vuetify
    })

    // Check the first user
    const firstUserId = wrapper.find('tbody tr:first-child td:nth-child(1)')
    const firstUserName = wrapper.find('tbody tr:first-child td:nth-child(3)')
    expect(firstUserId.text()).toBe(String(state.users[5].id))
    expect(firstUserName.text()).toBe(String(state.users[5].name))

    // Check the last user
    const lastUserId = wrapper.find('tbody tr:last-child td:nth-child(1)')
    const lastUserName = wrapper.find('tbody tr:last-child td:nth-child(3)')
    expect(lastUserId.text()).toBe(String(state.users[0].id))
    expect(lastUserName.text()).toBe(String(state.users[0].name))
  })

  it('Selects a user and display its name in the header correctly', async () => {
    const wrapper = mount(App, {
      store,
      localVue,
      vuetify
    })

    // Check default state
    const headerText = wrapper.find('.v-toolbar__content')
    expect(headerText.text()).toMatch('')
    expect(wrapper.vm.selectedUser).toBeNull()

    // select and test the second user
    const secondUser = wrapper.find('tbody tr:nth-child(2) .v-input--selection-controls__ripple')
    await secondUser.trigger('click')
    expect(wrapper.vm.selectedUser).toEqual(state.users[4])
    expect(headerText.text()).toBe(state.users[4].name)

    // select and test the lats user
    const lastUser = wrapper.find('tbody tr:last-child .v-input--selection-controls__ripple')
    await lastUser.trigger('click')
    expect(wrapper.vm.selectedUser).toEqual(state.users[0])
    expect(headerText.text()).toBe(state.users[0].name)
  })
})
