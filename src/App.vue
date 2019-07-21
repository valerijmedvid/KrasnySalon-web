<template>
  <div>
    <div class="banner">
      <div class="container group">
        <p class="logo">
          <router-link to="/">logo</router-link> 
        </p>
        <ul class="menu">
          <li v-for="menu in $router.options.routes" :key="menu.index" :class="{ dropdown: 'children' in menu}" v-if="!menu.metadata.hide">
            <router-link :to="menu.path">{{ menu.metadata.title }}</router-link>
            <div v-if="'children' in menu" class="dropdown-content">
              <router-link v-for="submenu in menu.children" :key="submenu.index" :to="submenu.path">{{ submenu.metadata.title }}</router-link>
            </div>
          </li>
        </ul>
        <ul class="menu2">
          <li v-for="menu in $router.options.routes" :key="menu.index" v-if="!menu.metadata.hide">
            <router-link v-if="menu.name != 'services'" :to="menu.path">{{ menu.metadata.title }}</router-link>
            <div v-else>
              <li v-for="submenu in menu.children" :key="submenu.index">
                <router-link  :to="submenu.path">{{ submenu.metadata.title }}</router-link>
              </li>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="container">
      <router-view/>
    </div>

    <footer>
      <div class="container">
        <div class="foot left">
          <p>Adresa salonu:
            <br> Palackého tř. 49/14
            <br> Pasáž Grand 2. patro
            <br> Nymburk 288 02

          </p>
        </div>
        <div class="foot left">
          <p>Fakturační adresa:
            <br> Dominika Urbanová
            <br> Kladenská 604
            <br> Přelouč 535 01
          </p>
        </div>
        <div class="foot left">
          <p>Kontaktní údaje:<br>
            Dominika Urbanová<br>
            <a href="tel:+420606025605" @click="onClick('zavolat')">+420 606 025 605</a>
            <br>
            <a href="mailto:dominika@krasnysalon.cz" @click="onClick('poslat mail')">dominika@krasnysalon.cz</a>
          </p>
        </div>
        <div class="foot left">
          <p>Copyright&nbsp;©&nbsp; 2019</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  methods: {
    onClick(name){
      this.$gtm.trackEvent({
        event: "Tlacitko", // Event type [default = 'interaction'] (Optional)
        category: 'FooterForm',
        action: 'mouseClick',
        label: name,
        noninteraction: false // Optional
      });
    }
  }
}
</script>

<style lang="scss">
@import "./assets/scss/style.scss";

a {
  cursor: pointer;
}
</style>
