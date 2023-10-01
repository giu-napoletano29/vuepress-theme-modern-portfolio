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
import Vuejs from 'vue-material-design-icons/Vuejs.vue'
import LanguageC from 'vue-material-design-icons/LanguageC.vue'
import LanguageCpp from 'vue-material-design-icons/LanguageCpp.vue'
import LanguageCsharp from 'vue-material-design-icons/LanguageCsharp.vue'
import LanguageCss3 from 'vue-material-design-icons/LanguageCss3.vue'
import LanguageHtml5 from 'vue-material-design-icons/LanguageHtml5.vue'
import LanguageJava from 'vue-material-design-icons/LanguageJava.vue'
import LanguageJavascript from 'vue-material-design-icons/LanguageJavascript.vue'
import LanguageKotlin from 'vue-material-design-icons/LanguageKotlin.vue'
import LanguageMarkdown from 'vue-material-design-icons/LanguageMarkdown.vue'
import LanguageMarkdownOutline from 'vue-material-design-icons/LanguageMarkdownOutline.vue'
import LanguagePhp from 'vue-material-design-icons/LanguagePhp.vue'
import LanguagePython from 'vue-material-design-icons/LanguagePython.vue'
import LanguageR from 'vue-material-design-icons/LanguageR.vue'
import LanguageRuby from 'vue-material-design-icons/LanguageRuby.vue'
import LanguageRubyOnRails from 'vue-material-design-icons/LanguageRubyOnRails.vue'
import LanguageSwift from 'vue-material-design-icons/LanguageSwift.vue'
import LanguageTypescript from 'vue-material-design-icons/LanguageTypescript.vue'
import LanguageXaml from 'vue-material-design-icons/LanguageXaml.vue'
import Linux from 'vue-material-design-icons/Linux.vue'
import SQL from 'vue-material-design-icons/Database.vue'
import Docker from 'vue-material-design-icons/Docker.vue'
import Gear from 'vue-material-design-icons/CogOutline.vue'

export default {
  components: {
    Vuejs,
    LanguageC,
    LanguageCpp,
    LanguageCsharp,
    LanguageCss3,
    LanguageHtml5,
    LanguageJava,
    LanguageJavascript,
    LanguageKotlin,
    LanguageMarkdown,
    LanguageMarkdownOutline,
    LanguagePhp,
    LanguagePython,
    LanguageR,
    LanguageRuby,
    LanguageRubyOnRails,
    LanguageSwift,
    LanguageTypescript,
    LanguageXaml,
    Linux,
    SQL,
    Docker,
    Gear
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
        case 'Vue':
          return 'Vuejs'
        case 'C':
          return 'LanguageC'
        case 'Cpp':
          return 'LanguageCpp'
        case 'Csharp':
          return 'LanguageCsharp'
        case 'Css':
          return 'LanguageCss3'
        case 'Html':
          return 'LanguageHtml5'
        case 'Java':
          return 'LanguageJava'  
        case 'Javascript':
          return 'LanguageJavascript'
        case 'Kotlin':
          return 'LanguageKotlin'
        case 'Markdown':
          return 'LanguageMarkdown'
        case 'MarkdownOutline':
          return 'LanguageMarkdownOutline'
        case 'Php':
          return 'LanguagePhp'
        case 'Python':
          return 'LanguagePython'
        case 'R':
          return 'LanguageR'
        case 'Ruby':
          return 'LanguageRuby'
        case 'RubyOnRails':
          return 'LanguageRubyOnRails'
        case 'Typescript':
          return 'LanguageTypescript'
        case 'Xaml':
          return 'LanguageXaml'
        case 'Swift':
          return 'LanguageSwift'
        case 'Linux':
          return 'Linux'
        case 'SQL':
          return 'SQL'
        case 'Docker':
          return 'Docker'
        case 'Gear':
          return 'Gear'
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
