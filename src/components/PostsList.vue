<template>
  <div
    class="mx-auto col-md-12 col-lg-8 zoomIn mb-3 about-card"
  >
      <post-card
        v-for="post in posts"
        :key="post.key"
        :post="post"
        class="mb-4 cursor-pointer"
        shadow="hover"
      />
  </div>
</template>

<script>
import PostCard from '@theme/components/PostCard.vue'

export default {
  components: {
    'post-card': PostCard,
  },
  props: {
    posts: {
      type: Array,
      default: () => [],
    },
  },
}
</script>