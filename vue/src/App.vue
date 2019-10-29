<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import io from 'socket.io-client'
const socket = io('http://localhost:4001')

export default {
  name: 'App',
  mounted () {
      socket.on('connect', this.onConnect)
      // this.socket.on('event', onEvent)
      // this.socket.on('disconnect', function () {})
      // this.socket.on('MESSAGE', (data) => {
      //     this.messages = [...this.messages, data]
      //     // you can also do this.messages.push(data)
      // })
  },
  methods: {
    onConnect: () => {
      console.log('connection established!', {socket})

      socket.emit('action', {type: 'fetch', data: 'Listing'}, answer => {
        console.log('got reply', { answer })
      })
    }
  }
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
