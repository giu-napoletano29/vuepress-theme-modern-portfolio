<template>
  <div
    class="global-layout global-background d-flex flex-column"
    :style="{
      backgroundImage: 'url(' + $withBase($themeConfig.background.imageUrl) + ')',

    }"
  >
    <div
      class="mask"
      :style="{
        /* fallback for old browsers */
        background: $themeConfig.background.fallbackColor,
        /* Chrome 10-25, Safari 5.1-6 */
        background: '-webkit-linear-gradient(45deg,' + $themeConfig.background.primaryColor + ',' + $themeConfig.background.secondaryColor + ')',
        /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        background: 'linear-gradient(45deg,' + $themeConfig.background.primaryColor + ',' + $themeConfig.background.secondaryColor + ')',
      }"
    >
      <Header />
      <DefaultGlobalLayout />
      <Footer />
      <ClientOnly v-if="$themeConfig.cookies">
        <cookie-law v-bind="$themeConfig.cookies" />
      </ClientOnly>
    </div>
  </div>
</template>

<script>
import CookieLaw from 'vue-cookie-law'
import GlobalLayout from '@app/components/GlobalLayout.vue'
import Header from '@theme/components/Header.vue'
import Footer from '@theme/components/Footer.vue'

export default {
  components: {
    DefaultGlobalLayout: GlobalLayout,
    Header,
    Footer,
    CookieLaw,
  },

}
</script>

<style>
  .global-background {
      background-size: cover;
      background-repeat: no-repeat;
      background-position: 100% 100%;
      min-height: 100vh;
  }
</style>
