/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import colors from 'vuetify/lib/util/colors'

// Composables
import { createVuetify } from 'vuetify'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: 'dark',
    themes: {
      dark: {
        dark: true,
        colors: {
          primary: colors.pink.darken1,
          primaryAlt: colors.pink.darken3,
          secondary: '#9217A3',
          background: '#263238'
        }
      },
      custom: {
        dark: true,
        colors: {
          primary: '#68b0ab',
          secondary: '#f1bf98',
          tertiary: '#2f4858',
          error: '#dc493a',
          background: '#263238'
        }
      }
    }
  },
})
