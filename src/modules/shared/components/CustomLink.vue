<template>
  <a v-if="isExternalLink"
  target="_blank"
  :class=" isActive ? 'is-active': 'normal-link'"
  :href="link.to">{{ link.name }}</a>
  <!--Ahora sólo vemos el de Google porque es el único que tiene Http-->

  <router-link v-else
      :to="link.to"
      v-slot="{ href, isActive }"
      >
      <a :href="href" :class=" isActive ? 'is-active': 'normal-link'">
          {{ link.name }}
        </a>
      <!--quiero que a apunte a lo que expone el routerlink mediante v-slot -->
  </router-link>
</template>

<script>
export default {
    props: {
        link: {
            type: Object,
            required: true
        }
    },
    computed: {
        isExternalLink() {
            return this.link.to.startsWith('http')
        }
    }
}
</script>

<style scoped>
.is-active {
    color: #42b983;
}

.normal-link {
    color: #c6c5c5;
}

</style>