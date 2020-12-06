<template>
  <div id="galeria" class="q-pa-md" style="max-width: 900px; font-family: arial" >
    <q-carousel
      swipeable
      animated
      v-model="slide1"
      thumbnails
      infinite
    >
      <q-carousel-slide :name="1" img-src="/img/img3.png" />
      <q-carousel-slide :name="2" img-src="/img/img4.png" />
      <q-carousel-slide :name="3" img-src="/img/img5.png" />
      <q-carousel-slide :name="4" img-src="/img/img6.png" />
    </q-carousel><br>

    <div>
      <q-carousel
      swipeable
      animated
      v-model="slide"
      thumbnails
      infinite
    >
      <q-carousel-slide :name="1" img-src="/img/cita1.png" />
      <q-carousel-slide :name="2" img-src="/img/cita2.png" />
      <q-carousel-slide :name="3" img-src="/img/cita3.png" />
      <q-carousel-slide :name="4" img-src="/img/cita4.png" />
    </q-carousel>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      slide: 1,
      slide1: 1
    }
  }
}
</script>
