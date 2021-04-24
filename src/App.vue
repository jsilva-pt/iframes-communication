<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center text-h5">
        {{ selectedUserName }}
      </div>
    </v-app-bar>

    <v-main>
      <v-container>
        <v-data-table
          :headers="$store.state.headers"
          :items="$store.state.users"
          :sort-by.sync="sortBy"
          :sort-desc.sync="sortDesc"
          class="elevation-1"
        >
        <template v-slot:item.id="{ item }">
          <v-radio-group :value="userIsSelected(item)" @change="selectUser(item)">
            <v-radio :value="true" :label="String(item.id)"/>
          </v-radio-group>
          </template>
        </v-data-table>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    sortBy: ['id'],
    sortDesc: [true],
    selectedUser: null,
    parentDomain: 'http://localhost:8080'
  }),

  computed: {
    userIsSelected () {
      return function (item) {
        return item.id === this.selectedUser?.id
      }
    },
    selectedUserName () {
      return this.selectedUser?.name
    }
  },

  created () {
    window.addEventListener('message', this.receiveMessage, false)
  },

  destroyed () {
    window.removeEventListener('message', this.receiveMessage, false)
  },

  methods: {
    selectUser (item) {
      this.selectedUser = item
      this.broadcastSelectedUser(item)
    },
    broadcastSelectedUser (item) {
      parent.postMessage(item, this.parentDomain)
    },
    receiveMessage (event) {
      if (event.origin === this.parentDomain) {
        this.selectedUser = event.data
      }
    }
  }
}
</script>
