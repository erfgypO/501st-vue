<template>
  <div style="max-width: 1200px" class="mx-auto py-4">
    <v-row class="pa-3 section-row">
      <v-col cols="12" md="4" class="v-center-text" v-if="$vuetify.display.smAndDown">
        <v-icon icon="mdi-human-greeting-variant" :size="iconSize" class="mx-auto"/>
      </v-col>
      <v-col cols="12" md="8" class="v-center-text">
          <div class="text-h5">
            Hi there, I'm Julius, a web developer with a passion for building high-performance web applications.
            With around 3 years of experience in ASP.NET Core, Vue.js, and JavaScript, as well as experience with Linux
            systems and server administration, I've honed my skills in creating scalable and user-friendly web
            applications that meet the needs of clients and users alike.
          </div>
      </v-col>
      <v-col cols="12" md="4" class="v-center-text" v-if="$vuetify.display.mdAndUp">
        <v-icon icon="mdi-human-greeting-variant" :size="iconSize" class="mx-auto" />
      </v-col>
    </v-row>
    <v-row class="secondary-row pa-3 section-row">
      <v-col cols="12" md="4" class="v-center-text">
        <v-icon icon="mdi-docker" :size="iconSize" class="mx-auto"/>
      </v-col>
      <v-col cols="12" md="8" class="v-center-text">
            <div class="text-h5 my-auto">
              I have extensive experience with Docker and containerization technologies, which allow me to deploy and
              manage complex applications with ease. I'm always eager to learn about new and emerging technologies,
              and I enjoy exploring how these technologies can be applied to create more efficient and effective
              web applications.
            </div>
      </v-col>
    </v-row>
    <v-row class="pa-3 section-row">
      <v-col cols="12" md="4" class="v-center-text" v-if="$vuetify.display.smAndDown">
        <v-icon icon="mdi-flag-checkered" :size="iconSize" class="mx-auto"/>
      </v-col>
      <v-col cols="12" md="8" class="v-center-text">
          <div class="text-h5">
            Outside of work, I'm a big fan of Star Wars and Formula 1. I love exploring the rich lore of the Star Wars
            universe and discussing theories and insights with fellow fans. As for Formula 1, I'm fascinated by the
            engineering and strategy that goes into building a competitive race car and managing a successful team.
            I find that my passion for these interests helps me stay motivated and focused on my work, as I strive to
            apply the same level of dedication and attention to detail to my web development projects.
          </div>
      </v-col>
      <v-col cols="12" md="4" class="v-center-text" v-if="$vuetify.display.mdAndUp">
        <v-icon icon="mdi-flag-checkered" :size="iconSize" class="mx-auto"/>
      </v-col>
    </v-row>
    <v-row class="secondary-row pa-3 section-row">
      <v-col cols="12" md="4" class="v-center-text">
        <v-icon icon="mdi-forum" :size="iconSize" class="mx-auto"/>
      </v-col>
      <v-col cols="12" md="8" class="v-center-text">
            <div class="text-h5">
              If you're interested in working with a web developer who is both skilled and passionate about what they do,
              and who is always looking to improve their skills and stay up-to-date with new technologies, I'd love to
              hear from you. Feel free to get in touch through my <router-link to="/contact">contact</router-link> page.
            </div>
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
const iconSize = 200;
</script>

<style scoped>
.section-row {
  min-height: 300px;
}
.secondary-row {
  /* background-color: #29373d; */
  background: linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(41,55,61,1) 33%, rgba(41,55,61,1) 100%);
}

.v-center-text {
  display: flex;
  align-items: center;
}
</style>
