<template>
  <transition
    name="el-fade-in-linear"
    mode="in-out"
  >
    <el-card
      class="mb-3 cursor-pointer post-card card-H"
      shadow="hover"
      :body-style="{ padding: '0rem' }"
    >
      <div
        class="ui-post row px-3"
      >
        <div
          v-if="post.frontmatter.postcard_image || post.frontmatter.image"
          class="ui-post-image col-sm-12 col-md-6 col-lg-5 py-3"
        >
          <img
            :src="$withBase(post.frontmatter.image)"
            :alt="post.title"
            class="w-75 rounded"
            style="max-height: 20rem;"
          >
        </div>
        <div class="col-sm-12 col-md-6 col-lg-7 py-4">
          <div>
            <h3 class="h3">
              {{ post.title }}
            </h3>
            <h5>
              <NavigationIcon />
              {{ post.frontmatter.location }}
            </h5>
          </div>
          <p class="mt-4">
            <CalendarIcon />
            {{ post.frontmatter.period }}
          </p>
          <div
            v-if="post.summary"
            class="ui-post-summary text-secondary my-2 mt-4"
          >
            <!-- eslint-disable-next-line -->
            <p align="justify" v-html="post.content"/>
          </div>
        </div>
      </div>
    </el-card>
  </transition>
</template>

<script>
import { NavigationIcon, CalendarIcon } from 'vue-feather-icons'
import PostInfo from '@theme/components/PostInfo.vue'
export default {
  name: 'PostCard',
  components: {
    PostInfo,
    NavigationIcon,
    CalendarIcon
  },
  props: {
    post: {
      type: Object,
      default: () => {
        return {}
      },
    },
  },
  methods: {
    go (path) {
      this.$router.push(path)
    },
  },
}
</script>
<style lang="stylus">

.card-H {
  max-height: 22rem;
  @media only screen and (max-width: $MQMobile) {
    max-height: 80rem!important;
  }
}

.post-info {
  @media only screen and (max-width: $MQMobile) {
    padding-top: 0 !important;
    justify-content: start !important;

    div.post-info-item {
      @media only screen and (max-width: $MQMobile) {
        text-align: left;
      }
    }
  }
}
</style>
