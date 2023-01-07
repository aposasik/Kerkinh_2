<template>
  <v-container>
    <v-layout align-center justify-center>
      <v-flex xs12 md10 class="pa-4">
        <h2 v-if="error.statusCode === 404" class="text-xs-center grey--text text--darken-2 mt-1 mb-4">{{ title404 }}</h2>
        <h2 v-else-if="error.statusCode === 502" class="text-xs-center grey--text text--darken-2 mt-1 mb-4">{{ title502 }}</h2>
        <h2 v-else class="text-xs-center grey--text text--darken-2 mt-1 mb-4">{{ main.titleOther }}</h2>

        <p class="subheading"> {{ text }} </p>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  props: ['error'],
  layout: 'default',
  head() {
    return {
      title: 'Σφάλμα | Φορέας Διαχείρισης Λίμνης Κερκίνης',
      meta: [
        {
          hid: 'description', name: 'description',
          content: 'Υπήρξε κάποιο σφάλμα με αποτέλεσμα να διακοπεί η φυσιολογική ροή της εφαρμογής. Επικοινωνήστε μαζί μας. Φορέας Διαχείρισης Λίμνης Κερκίνης.'
        }
      ]
    }
  },
  data() {
    return {
      title404: 'Σφάλμα 404 Η σελίδα δεν βρέθηκε',
      title502: 'Σφάλμα 502. Υπήρξε κάποιο σφάλμα με τον διακομιστή - server',
      titleOther: 'Υπήρξε κάποιο σφάλμα',
      text: 'Υπήρξε κάποιο πρόβλημα προσπαθώντας να γίνει πρόσβαση στον ζητούμενο σύνδεσμο. Αυτό μπορεί να προέκυψε από αδρανοποίηση του τοπικού δικτύου. Αλλιώς είτε ο σύνδεσμος μπορεί να μην υπάρχει πλέον ή έγινε κάποιο λάθος κατά την καταχώρησή του, παρακαλούμε σιγουρευτείτε ότι ο σύνδεσμος που χρησημοποιήσατε είναι ο σωστός. Μπορείτε πάντοτε να συνεχίσετε την πλοήγησή σας χρησημοποιώντας το μενού.'
    }
  }
}
</script>
