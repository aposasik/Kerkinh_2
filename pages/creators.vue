<template>
  <v-container>
    <v-container>
      <v-layout justify-center align-center>
        <v-flex xs12>
          <div class="text-xs-left">
            <div class="mt-4 mb-2">
              <h3 class="headline"> {{ title }} </h3>
            </div>
            <div>
              <h4 class="subheading"> {{ text }} </h4>
            </div>
            <div>
              <h4 class="subheading mt-1"> {{ text1 }} </h4>
            </div>
            <div class="mt-5 mb-2">
              <h2 class="font-weight-regular"> {{ creatorsHeadline }} </h2>
            </div>
            <div v-for="(creator, i) in creators" :key="i" class="mt-2 mb-2">
              <v-layout row wrap>
                <v-flex xs12 md4 class="mt-1 mb-1">
                  <h3 class="font-weight-thin"> {{ creator.name }} </h3>
                </v-flex>
                <v-flex xs12 md8 class="mt-1 mb-1">
                  <a class="mr-3" :href="creator.githubLink" target="_blank"><github-icon/></a>
                  <a :href="creator.linkedInLink" target="_blank"><in-icon/></a>
                </v-flex>
              </v-layout>
            </div>
          </div>
        </v-flex>
      </v-layout>
    </v-container>
  </v-container>
</template>
<script>
import InIcon from '~/components/InIcon.vue'
import GithubIcon from '~/components/GithubIcon.vue'

export default {
  components: {
    InIcon,
    GithubIcon
  },
  data() {
    return {
      title: 'Creators of Kerkini Management Web Application',
      text: 'This application is a project created and developed by undergraduated university students of the Technological Institute of Central Macedonia Informatics Engineering as part of their Thesis.',
      text1: 'Under no circumstances is this project giving commercial rights or sharing rights to any of the Kerkini authorities or the TEI of Central Macedonia. The project is Licensed under the Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0). This project is created and developed only for the use of the Kerkini authorities.',
      creatorsHeadline: 'Creators of the application',
      creators: [
        { name: 'Αλέξανδρος Μάρκοβιτς', githubLink: 'https://github.com/alexgil1994', linkedInLink: 'https://www.linkedin.com/in/alexandros-markovits/' }
      ]
    }
  }
}
</script>
