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
            <a href="objemove-prodluzovani-ras" onclick="javascript:void(0)">Služby</a>
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
  </div>
</template>

<style lang="scss">
@import "./assets/scss/style.scss";

</style>
