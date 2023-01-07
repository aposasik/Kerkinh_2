<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      temporary
      app
      dark
    >
      <v-list>
        <v-list-tile
          v-for="(item, i) in items"
          :to="item.to"
          :key="i"
          nuxt
          exact
          active-class="green--text text--darken-1"
        >
          <v-list-tile-action>
            <v-icon v-html="item.icon" />
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title" />
          </v-list-tile-content>
        </v-list-tile>

        <v-list-group
          :prepend-icon="groupDeigmata.icon"
          no-action
          active-class="green--text text--darken-1"
        >
          <v-list-tile slot="activator" active-class="green--text text--darken-1">
            <v-list-tile-title>{{ groupDeigmata.title }}</v-list-tile-title>
          </v-list-tile>
          <v-list-tile 
            v-for="(page, i) in groupDeigmata.pages"
            :key="i"
            :to="page.to"
            nuxt
            exact
            active-class="green--text text--darken-1"
          >
            <v-list-tile-content>
              <v-list-tile-title v-text="page.title" />
            </v-list-tile-content>
            <v-list-tile-action>
              <v-icon v-html="page.icon" />
            </v-list-tile-action>
          </v-list-tile>
        </v-list-group>

        <v-list-group
          :prepend-icon="groupPrwtokola.icon"
          no-action
          active-class="green--text text--darken-1"
        >
          <v-list-tile slot="activator" active-class="green--text text--darken-1">
            <v-list-tile-title>{{ groupPrwtokola.title }}</v-list-tile-title>
          </v-list-tile>
          <v-list-tile 
            v-for="(page, i) in groupPrwtokola.pages"
            :key="i"
            :to="page.to"
            nuxt
            exact
            active-class="green--text text--darken-1"
          >
            <v-list-tile-content>
              <v-list-tile-title v-text="page.title" />
            </v-list-tile-content>
            <v-list-tile-action>
              <v-icon v-html="page.icon" />
            </v-list-tile-action>
          </v-list-tile>
        </v-list-group>

        <v-list-group
          :prepend-icon="groupThhlastika.icon"
          no-action
          active-class="green--text text--darken-1"
        >
          <v-list-tile slot="activator" active-class="green--text text--darken-1">
            <v-list-tile-title>{{ groupThhlastika.title }}</v-list-tile-title>
          </v-list-tile>
          <v-list-group
            no-action
            sub-group
            v-for="(subGroup, i) in groupThhlastika.subGroups"
            :key="i"
            active-class="green--text text--darken-1"
          >
            <v-list-tile slot="activator" active-class="green--text text--darken-1">
              <v-list-tile-title> {{subGroup.title}} </v-list-tile-title>
            </v-list-tile>
            <v-list-tile
              v-for="(page, i) in subGroup.pages"
              :key="i"
              :to="page.to"
              nuxt
              exact
              active-class="green--text text--darken-1"
            >
              <v-list-tile-title v-text="page.title" />
              <v-list-tile-action>
                <v-icon v-html="page.icon" />
              </v-list-tile-action>
            </v-list-tile>
          </v-list-group>
        </v-list-group>

        <v-list-group
          :prepend-icon="groupOrnithopanida.icon"
          no-action
          active-class="green--text text--darken-1"
        >
          <v-list-tile slot="activator" active-class="green--text text--darken-1">
            <v-list-tile-title>{{ groupOrnithopanida.title }}</v-list-tile-title>
          </v-list-tile>
          <v-list-group
            no-action
            sub-group
            v-for="(subGroup, i) in groupOrnithopanida.subGroups"
            :key="i"
            active-class="green--text text--darken-1"
          >
            <v-list-tile slot="activator" active-class="green--text text--darken-1">
              <v-list-tile-title> {{subGroup.title}} </v-list-tile-title>
            </v-list-tile>
            <v-list-tile
              v-for="(page, i) in subGroup.pages"
              :key="i"
              :to="page.to"
              nuxt
              exact
              active-class="green--text text--darken-1"
            >
              <v-list-tile-title v-text="page.title" />
              <v-list-tile-action>
                <v-icon v-html="page.icon" />
              </v-list-tile-action>
            </v-list-tile>
          </v-list-group>
        </v-list-group>

        <v-list-group
          :prepend-icon="groupPictures.icon"
          no-action
          active-class="green--text text--darken-1"
        >
          <v-list-tile slot="activator" active-class="green--text text--darken-1">
            <v-list-tile-title>{{ groupPictures.title }}</v-list-tile-title>
          </v-list-tile>
          <v-list-tile 
            v-for="(page, i) in groupPictures.pages"
            :key="i"
            :to="page.to"
            nuxt
            exact
            active-class="green--text text--darken-1"
          >
            <v-list-tile-content>
              <v-list-tile-title v-text="page.title" />
            </v-list-tile-content>
            <v-list-tile-action>
              <v-icon v-html="page.icon" />
            </v-list-tile-action>
          </v-list-tile>
        </v-list-group>

        <v-list-group
          :prepend-icon="groupFiles.icon"
          no-action
          active-class="green--text text--darken-1"
        >
          <v-list-tile slot="activator" active-class="green--text text--darken-1">
            <v-list-tile-title>{{ groupFiles.title }}</v-list-tile-title>
          </v-list-tile>
          <v-list-tile 
            v-for="(page, i) in groupFiles.pages"
            :key="i"
            :to="page.to"
            nuxt
            exact
            active-class="green--text text--darken-1"
          >
            <v-list-tile-content>
              <v-list-tile-title v-text="page.title" />
            </v-list-tile-content>
            <v-list-tile-action>
              <v-icon v-html="page.icon" />
            </v-list-tile-action>
          </v-list-tile>
        </v-list-group>

        
      </v-list>
    </v-navigation-drawer>
    <v-toolbar      
      app
      color="green lighten-1"
      style="background: linear-gradient(90deg, rgba(102,187,106,1) 0%, rgba(165,214,167,1) 100%);"
      dark
      dense
    >
      <v-toolbar-side-icon @click="drawer = !drawer"/>
      <v-spacer></v-spacer>
      <div style="height: 100%; padding: 3px">
        <nuxt-link to="/" title="Αρχική σελίδα">
          <logo-menu style="height: 100%"/>
        </nuxt-link>
      </div>
    </v-toolbar>
    <v-content>
      <nuxt />
    </v-content>
    <v-footer>
      <span class="ml-2">&copy; 2018 - {{ currentYear }}</span>
      <v-spacer></v-spacer>
      <div class="mr-2">
        Rights reserved by 
      <nuxt-link title="Creators of the Web App" to="/creators">Creators</nuxt-link>
      </div>
    </v-footer>
  </v-app>
</template>

<script>
import LogoMenu from '~/components/LogoMenu.vue'

  export default {
    components: {
      LogoMenu
    },
    data() {
      return {
        drawer: false,
        items: [
          { icon: 'apps', title: 'Αρχική', to: '/' },
          { icon: 'info_outline', title: 'Πληροφορίες', to: '/about' }
        ],
        groupDeigmata: {
          icon: 'select_all',
          title: 'Δείγματα',
          pages: [
            { icon: 'info_outline', title: 'Σχετικά', to: '/deigmata/' },
            { icon: 'search', title: 'Αναζήτηση', to: '/deigmata/search/page/1' },
            { icon: 'find_replace', title: 'Δυναμική αναζήτηση', to: '/deigmata/dynamic-search/page/1' }
          ]
        },
        groupPrwtokola: {
          icon: 'chrome_reader_mode',
          title: 'Πρωτόκολα',
          pages: [
            { icon: 'info_outline', title: 'Σχετικά', to: '/prwtokola/' },
            { icon: 'create_new_folder', title: 'Εγγραφή', to: '/prwtokola/new' },
            { icon: 'search', title: 'Αναζήτηση', to: '/prwtokola/search/page/1' }
          ]
        },
        groupFiles: {
          icon: 'file_copy',
          title: 'Αρχεία',
          pages: [
            { icon: 'info_outline', title: 'Σχετικά', to: '/files/' },
            { icon: 'find_in_page', title: 'Αναζήτηση', to: '/files/search/page/1' }
          ]
        },
        groupPictures: {
          icon: 'photo_library',
          title: 'Φωτογραφίες',
          pages: [
            { icon: 'info_outline', title: 'Σχετικά', to: '/pictures/' },
            { icon: 'image_search', title: 'Αναζήτηση', to: '/pictures/search/page/1' }
          ]
        },
        groupOrnithopanida: {
          icon: 'inbox',
          title: 'Ορνιθοπανιδα',
          subGroups: [
            {
              title: 'Είδη',
              pages: [
                { icon: 'info_outline', title: 'Σχετικά', to: '/ornithopanida/ct-eidh/' },
                { icon: 'create_new_folder', title: 'Εγγραφή', to: '/ornithopanida/ct-eidh/new' },
                { icon: 'search', title: 'Αναζήτηση', to: '/ornithopanida/ct-eidh/search/page/1' },
                { icon: 'find_replace', title: 'Δυναμική αναζήτηση', to: '/ornithopanida/ct-eidh/dynamic-search/page/1' }
              ]
            },
            {
              title: 'Πιέσεις',
              pages: [
                { icon: 'info_outline', title: 'Σχετικά', to: '/ornithopanida/ct-press-threats/' },
                { icon: 'create_new_folder', title: 'Εγγραφή', to: '/ornithopanida/ct-press-threats/new' },
                { icon: 'search', title: 'Αναζήτηση', to: '/ornithopanida/ct-press-threats/search/page/1' },
                { icon: 'find_replace', title: 'Δυναμική αναζήτηση', to: '/ornithopanida/ct-press-threats/dynamic-search/page/1' }
              ]
            },
            {
              title: 'Δείγμα Ορνιθαπανίδας',
              pages: [
                { icon: 'info_outline', title: 'Σχετικά', to: '/ornithopanida/deigma-ornithopanida/' },
                { icon: 'create_new_folder', title: 'Εγγραφή', to: '/ornithopanida/deigma-ornithopanida/new' },
                { icon: 'map', title: 'Χάρτης', to: '/ornithopanida/deigma-ornithopanida/map' },
                { icon: 'search', title: 'Αναζήτηση', to: '/ornithopanida/deigma-ornithopanida/search/page/1' },
                { icon: 'find_replace', title: 'Δυναμική αναζήτηση', to: '/ornithopanida/deigma-ornithopanida/dynamic-search/page/1' }
              ]
            },
            {
              title: 'Δείγμα Χ είδη',
              pages: [
                { icon: 'info_outline', title: 'Σχετικά', to: '/ornithopanida/deigma-ornithopanida-x-eidh/' },
                { icon: 'create_new_folder', title: 'Εγγραφή', to: '/ornithopanida/deigma-ornithopanida-x-eidh/new' },
                { icon: 'search', title: 'Αναζήτηση', to: '/ornithopanida/deigma-ornithopanida-x-eidh/search/page/1' },
                { icon: 'find_replace', title: 'Δυναμική αναζήτηση', to: '/ornithopanida/deigma-ornithopanida-x-eidh/dynamic-search/page/1' }
              ]
            },
            {
              title: 'Δείγμα Χ πιέσεις',
              pages: [
                { icon: 'info_outline', title: 'Σχετικά', to: '/ornithopanida/deigma-ornithopanida-x-press-threats/' },
                { icon: 'create_new_folder', title: 'Εγγραφή', to: '/ornithopanida/deigma-ornithopanida-x-press-threats/new' },
                { icon: 'search', title: 'Αναζήτηση', to: '/ornithopanida/deigma-ornithopanida-x-press-threats/search/page/1' },
                { icon: 'find_replace', title: 'Δυναμική αναζήτηση', to: '/ornithopanida/deigma-ornithopanida-x-press-threats/dynamic-search/page/1' }
              ]
            },
          ]
        },
        groupThhlastika: {
          icon: 'inbox',
          title: 'Θηλαστικά',
          subGroups: [
            {
              title: 'Είδη',
              pages: [
                { icon: 'info_outline', title: 'Σχετικά', to: '/thhlastika/ct-eidh/' },
                { icon: 'create_new_folder', title: 'Εγγραφή', to: '/thhlastika/ct-eidh/new' },
                { icon: 'search', title: 'Αναζήτηση', to: '/thhlastika/ct-eidh/search/page/1' },
                { icon: 'find_replace', title: 'Δυναμική αναζήτηση', to: '/thhlastika/ct-eidh/dynamic-search/page/1' }
              ]
            },
            {
              title: 'Πιέσεις',
              pages: [
                { icon: 'info_outline', title: 'Σχετικά', to: '/thhlastika/ct-press-threats/' },
                { icon: 'create_new_folder', title: 'Εγγραφή', to: '/thhlastika/ct-press-threats/new' },
                { icon: 'search', title: 'Αναζήτηση', to: '/thhlastika/ct-press-threats/search/page/1' },
                { icon: 'find_replace', title: 'Δυναμική αναζήτηση', to: '/thhlastika/ct-press-threats/dynamic-search/page/1' }
              ]
            },
            {
              title: 'Δείγμα θηλαστικών',
              pages: [
                { icon: 'info_outline', title: 'Σχετικά', to: '/thhlastika/deigma-thhlastikwn/' },
                { icon: 'create_new_folder', title: 'Εγγραφή', to: '/thhlastika/deigma-thhlastikwn/new' },
                { icon: 'map', title: 'Χάρτης', to: '/thhlastika/deigma-thhlastikwn/map' },
                { icon: 'search', title: 'Αναζήτηση', to: '/thhlastika/deigma-thhlastikwn/search/page/1' },
                { icon: 'find_replace', title: 'Δυναμική αναζήτηση', to: '/thhlastika/deigma-thhlastikwn/dynamic-search/page/1' }
              ]
            },
            {
              title: 'Δείγμα Χ είδη',
              pages: [
                { icon: 'info_outline', title: 'Σχετικά', to: '/thhlastika/deigma-thhlastikwn-x-eidh/' },
                { icon: 'create_new_folder', title: 'Εγγραφή', to: '/thhlastika/deigma-thhlastikwn-x-eidh/new' },
                { icon: 'search', title: 'Αναζήτηση', to: '/thhlastika/deigma-thhlastikwn-x-eidh/search/page/1' },
                { icon: 'find_replace', title: 'Δυναμική αναζήτηση', to: '/thhlastika/deigma-thhlastikwn-x-eidh/dynamic-search/page/1' }
              ]
            },
            {
              title: 'Δείγμα Χ πιέσεις',
              pages: [
                { icon: 'info_outline', title: 'Σχετικά', to: '/thhlastika/deigma-thhlastikwn-x-press-threats/' },
                { icon: 'create_new_folder', title: 'Εγγραφή', to: '/thhlastika/deigma-thhlastikwn-x-press-threats/new' },
                { icon: 'search', title: 'Αναζήτηση', to: '/thhlastika/deigma-thhlastikwn-x-press-threats/search/page/1' },
                { icon: 'find_replace', title: 'Δυναμική αναζήτηση', to: '/thhlastika/deigma-thhlastikwn-x-press-threats/dynamic-search/page/1' }
              ]
            },
          ]
        },
        
        currentYear: ''
      }
    },
    mounted(){
      this.getCurrentYear()
    },
    methods: {
      getCurrentYear: function() {
        this.currentYear = new Date().getFullYear()
      }
    }
  }
</script>
