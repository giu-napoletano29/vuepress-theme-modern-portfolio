<template>
  <div
    class="mx-auto col-lg-6"
  >
    <el-card
      align="center"
      class="mx-auto zoomIn mb-5 about-card"
      shadow="hover"
    >
      <div
        class="card-header rounded p-3"
        :style="{
          background: $themeConfig.about.headerColor,
        }"
      >
        <img
          :src="$withBase($themeConfig.about.image)"
          :alt="$themeConfig.about.fullName"
          width="200px"
          class="rounded-circle"
        >
        <h1
          class="mt-2"
          :class="{'text-light': $themeConfig.about.lightText}"
          :style="{
            'font-weight': 350,
            'font-size': '2.5rem'
          }"
        >
          {{ $themeConfig.about.fullName }}
        </h1>
        <center>
          <div
            class="ml-4"
            style="font-size:15px"
          >
            <flag
              v-for="flag in languages"
              :key="flag"
              :iso="flag"
              class="mt-2 mr-3"
            />
          </div>
        </center>
      </div>
      <div class="p-3">
        <p style="font-size: 1.2rem;">{{ $themeConfig.about.bio }}</p>
      </div>
      <BlogTags :tags="tags" />
      <hr class="mt-0">
      <ul
        v-if="contact"
        class="list-inline m-0"
      >
        <li
          v-for="item in contact"
          :key="item.text"
          class="list-inline-item"
        >
          <NavLink :link="item.link">
            <component :is="item.iconComponent" />
            {{ item.text }}
          </NavLink>
        </li>
      </ul>
    </el-card>
  </div>
</template>

<script>
import {
  GithubIcon,
  FacebookIcon,
  TwitterIcon,
  YoutubeIcon,
  InstagramIcon,
  LinkedinIcon,
  MailIcon,
} from 'vue-feather-icons'

export default {
  components: {
    GithubIcon,
    FacebookIcon,
    TwitterIcon,
    YoutubeIcon,
    InstagramIcon,
    LinkedinIcon,
    MailIcon,
  },

  computed: {
    contact () {
      return (
        (this.$themeConfig.footer && this.$themeConfig.footer.contact) ||
        []
      )
        .map(({ type, link }) => {
          return {
            iconComponent: this.getIconComponentName(type),
            link,
          }
        })
        .filter(({ iconComponent }) => iconComponent)
    },

    languages () {
      return ((this.$themeConfig.languages) || [])
    },

    tags () {
      return this.$tag.list
    },

    copyright () {
      return (
        (this.$themeConfig.footer && this.$themeConfig.footer.copyright) || []
      )
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
        case 'mail':
          return 'MailIcon'
        default:
          return ''
      }
    },
  },
}
</script>

<style lang="stylus" scoped>
.about-card {
  max-width 48rem;
  .card-header {
    min-height: 220px;
  }

  .card-img-bg {
    background: $accentColor;
    background: linear-gradient(to right, $accentColor, lighten($accentColor, 30%));
  }
}
</style>
