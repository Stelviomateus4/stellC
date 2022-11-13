<template>
  <q-page class="flex flex-center">
    <div v-if="user">
      <img
      alt="Quasar logo"
      src="~assets/sm.jpg"
      style="width: 200px; height: 200px"
    >
      <p> Bem Vindo ao SM-App {{ user.user_metadata.name }}</p>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import useAuthUser from 'src/composables/UseAuthUser'

export default defineComponent({
  name: 'PageMe',

  setup () {
    const { user } = useAuthUser()

    return {
      user
    }
  }
})
</script>
