<template>
  <el-card
    shadow="hover"
    :body-style="{ padding: '1rem' }"
  >
    <ul class="list-unstyled">
      <li
        v-for="item in skills"
        :key="item.text"
        class="d-inline-block mx-2 my-2"
      >
        <div class="el-button el-button--small text-decoration-none">
          <component :is="item.iconComponent" />
          {{ item.title }}
        </div> 
      </li>
    </ul>
  </el-card>
</template>

<script>
import {
  GithubIcon,
  FacebookIcon,
  TwitterIcon,
  YoutubeIcon,
  InstagramIcon,
  LinkedinIcon,
} from 'vue-feather-icons'

export default {
  components: {
    GithubIcon,
    FacebookIcon,
    TwitterIcon,
    YoutubeIcon,
    InstagramIcon,
    LinkedinIcon,
  },

  props: {
    tags: {
      type: Array,
      default: () => [],
    },
  },

  computed: {
    skills () {
      return ((this.$themeConfig.skills) || [])
                .map(({title, icon}) => {
                  return {
                    iconComponent: this.getIconComponentName(icon),
                    title,
                  }
                })
                .filter(({ iconComponent }) => iconComponent)
    },
  },

  methods: {
    getIconComponentName (contactType) {
      switch (contactType) {
        case 'github':
          return 'GithubIcon'
        case 'facebook':
          return 'FacebookIcon'
        case 'twitter':
          return 'TwitterIcon'
        case 'instagram':
          return 'InstagramIcon'
        case 'linkedin':
          return 'LinkedinIcon'
        case 'youtube':
          return 'YoutubeIcon'
        default:
          return ''
      }
    },
  },
}
</script>

<style lang="stylus">
.el-badge__content {
  z-index: 10;
}
</style>
