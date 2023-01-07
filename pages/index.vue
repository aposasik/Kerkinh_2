<template>
  <v-container fluid class="grey darken-3">
    <v-layout
      column
      justify-center
      align-center>
      <v-flex
        xs12
        sm8
        md6
        mb-4>
        <div class="text-xs-center my-4">
          <logo class="logo" />
        </div>
        <div class="text-xs-center my-4 grey--text text--lighten-3">
          <h3 class="headline"> {{ main.title }} </h3>
        </div>
        <div class="text-xs-center text-md-left grey--text text--lighten-3" style="margin-top: 100px;">
          <h4 class="font-weight-regular" style="font-size: 15px;"> {{ main.subTitle }} </h4>
        </div>
      </v-flex>
    </v-layout>
    
    <v-layout wrap row justify-center style="margin-top: 60px; margin-bottom: 100px;">
      <v-flex xs12>
        <v-layout row wrap justify-center align-center my-3>
          <!-- Using px-2 To seperate each v-flex since implementing it with `justify-space-between` or `around` (in the v-layout above) wasn't the desired design on this -->
          <v-flex v-for="(card, i) in cards" :key="i" xs10 sm8 md4 my-4 style="padding-left: 13px !important; padding-right: 13px !important;">
            <v-card color="grey lighten-3" class="pa-3 elevation-15">
              <h2 class="mt-1 mb-4 font-weight-regular"><v-icon medium left> {{ card.icon }} </v-icon> {{ card.name }} </h2>
              <v-divider class="mb-3"></v-divider>
              <div class="text-xs-right">
                <v-btn :to="card.to" dark outline color="green darken-1" style="text-transform: none;" :title="card.title">Αναζήτηση<v-icon right>search</v-icon></v-btn>
              </div>
            </v-card>
          </v-flex>
        </v-layout>
      </v-flex>

    </v-layout>
  </v-container>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  },
  head() {
    return {
      title: 'Φορέας Διαχείρισης Λίμνης Κερκίνης',
      meta: [
        {
          hid: 'description', name: 'description',
          content: 'Ο Φορέας Διαχείρισης Λίμνης Κερκίνης είναι υπεύθυνος για την μελέτη, συλλογή, αποθήκευση και ανάλυση πληροφοριών με τη δημιουργία στατιστικών για τη περιοχή της Λίμνης Κερκίνης.'
        }
      ]
    }
  },
  data() {
    return {
      main: {
        title: 'Διαχείριση των δεδομένων της λίμνης Κερκίνης',
        subTitle: 'Καλώς ήρθατε στη διαχείριση Κερκίνης, πλοηγηθείτε στα σημεία της εφαρμογής που σας ενδιαφέρουν. Για περισσότερες πληροφορίες μπορείτε να επισκεφθείτε την αντίστοιχη σελίδα χρησιμοποιώντας το menu αριστερά.'
      },
      cards: [
        {
          name: 'Πρωτόκολλα',
          to: '/prwtokola/search/page/1',
          icon: 'chrome_reader_mode',
          title: 'Αναζήτηση Πρωτοκόλλων'
        },
        {
          name: 'Δείγματα',
          to: '/deigmata/search/page/1',
          icon: 'select_all',
          title: 'Αναζήτηση Δειγμάτων'
        },
         {
          name: 'Ορνιθοπανιδα',
          to: '/ornithopanida/deigma-ornithopanida/search/page/1',
          icon: 'inbox',
          title: 'Αναζήτηση Δειγμάτων Θηλαστικών'
        },
        {
          name: 'Θηλαστικά',
          to: '/thhlastika/deigma-thhlastikwn/search/page/1',
          icon: 'inbox',
          title: 'Αναζήτηση Δειγμάτων Θηλαστικών'
        },
        {
          name: 'Φωτογραφίες',
          to: '/pictures/search/page/1',
          icon: 'photo_library',
          title: 'Αναζήτηση φωτογραφιών'
        },
        {
          name: 'Αρχεία',
          to: '/files/search/page/1',
          icon: 'file_copy',
          title: 'Αναζήτηση αρχείων'
        },
      ]
    }
  },
}
</script>
<style lang="stylus">
.logo{
  height: 260px !important;
  animation-name: logo;
  animation-timing-function: ease-in-out;
  animation-duration: 2s;
}

@keyframes logo {
  0% {
    opacity 0
  }

  100% {
    opacity 1
  }
}
</style>
