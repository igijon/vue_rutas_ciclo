<template>
  <a v-if="isExternalLink"
  :href="link.to">{{ link.name }}</a>
  <!--Ahora sólo vemos el de Google porque es el único que tiene Http-->
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

<style>

</style>