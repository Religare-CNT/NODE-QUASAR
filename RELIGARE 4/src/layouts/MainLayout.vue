<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated id="layout">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
        <em> Religare CNT</em>
        </q-toolbar-title>

        <div>
           <template>
              <q-btn label="Sair" icon="exit_to_app" color="#DCDCDC" @click="confirm = true" />
                 <q-dialog v-model="confirm" persistent>
                  <q-card>
                   <q-card-section class="row items-center">
                     <q-avatar icon="exit_to_app" color="primary" text-color="white" />
                       <span class="q-ml-sm"> Você tem certeza que você deseja sair ? </span>
                   </q-card-section>
                   <q-card-actions align="right">
                       <q-btn flat label="Cancelar" color="primary" v-close-popup />
                       <q-btn flat label="Sair" color="red" v-close-popup @click="sair" />
                   </q-card-actions>
                  </q-card>
                 </q-dialog>
          </template>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-indigo-1"
    >
      <q-list>
        <q-item-label
          header
          class="text-black"
        >
          <strong>Religare cnt</strong>
        </q-item-label>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue'

const linksData = [
  {
    title: 'Página principal',
    caption: '',
    icon: 'home',
    link: '/home'
  },
  {
    title: 'Multimidia',
    caption: 'Vídeos , Músicas..',
    icon: 'music_video',
    link: '/multimidia'
  },
  {
    title: 'Leitura',
    caption: 'Reflexões em textos',
    icon: 'wysiwyg',
    link: '/leitura-diaria'
  },
  {
    title: 'Galeria',
    caption: 'Clique aqui para acessar as imagens',
    icon: 'collections',
    link: '/galeria'
  },
  {
    title: 'Quem Somos',
    caption: 'Clique aqui para nos conhecer',
    icon: 'help',
    link: '/nossa-historia'
  }
]

export default {
  name: 'MainLayout',
  components: { EssentialLink },
  data () {
    return {
      leftDrawerOpen: false,
      essentialLinks: linksData,
      confirm: false
    }
  },
  methods: {
    sair () {
      this.$router.push('/')
    }
  }
}
</script>
