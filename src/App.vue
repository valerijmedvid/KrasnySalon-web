<template>
  <div>
    <div class="banner">
      <div class="container group">
        <p class="logo">
          <router-link to="/">logo</router-link> 
        </p>
        <ul class="menu">
          <li>
            <router-link to="/">Úvod</router-link> 
          </li>
          <li class="dropdown">
            <a>Služby</a>
            <div class="dropdown-content">
              <router-link to="/objemove-prodluzovani-ras">Objemové prodlužování řas</router-link>
              <router-link to="/parafinovy-zabal">Parafínový zábal na ruce</router-link>
              <router-link to="/kosmetika">Kosmetika SynCare</router-link>
            </div>
          </li>
          <li>
            <router-link to="/cenik">Ceník</router-link>
          </li>
          <li>
            <router-link to="/kontakt">Kontakt</router-link>
          </li>
        </ul>
        <ul class="menu2">
          <li>
            <router-link to="/">Úvod</router-link> 
          </li>
          <li>
            <router-link to="/objemove-prodluzovani-ras">Objemové prodlužování řas</router-link>
          </li>
          <li>
            <router-link to="/parafinovy-zabal">Parafínový zábal na ruce</router-link>
          </li>
          <li>
            <router-link to="/kosmetika">Kosmetika SynCare</router-link>
          </li>
          <li>
            <router-link to="/cenik">Ceník</router-link>
          </li>
          <li>
            <router-link to="/kontakt">Kontakt</router-link>
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
            <a href="tel:+420606025605">+420 606 025 605</a>
            <br>
            <a href="mailto:dominika@krasnysalon.cz">dominika@krasnysalon.cz</a>
          </p>
        </div>
        <div class="foot left">
          <p>Copyright&nbsp;©&nbsp; 2019</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<style lang="scss">
@import "./assets/scss/style.scss";

a {
  cursor: pointer;
}


</style>
