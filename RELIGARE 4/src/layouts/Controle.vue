<template>
    <q-layout >
     <q-toolbar class="bg-primary text-white">
       <q-separator dark vertical inset />
         <q-btn @click="login()" stretch flat label="Religare" />
         <q-separator dark vertical inset />
         <q-btn @click="historia()" stretch flat label="Quem somos" />
       <q-space />
     </q-toolbar>
        <q-page-container>
         <router-view/>
        </q-page-container>

    </q-layout>
</template>

<script>
export default {
  name: 'Controle',
  data () {
    return {

    }
  },
  methods: {
    historia () {
      this.$router.push('/quem-somos')
    },
    login () {
      this.$router.push('/')
    }
  }
}
</script>

<style></style>
