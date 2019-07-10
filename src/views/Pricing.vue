<template>
  <article class="group">
    <h1>Ceník služeb</h1>

    <table>
      <tr>
        <td>
          <p>Kosmetické ošetření pleti dermokosmetikou <strong>SynCare</strong></p>
        </td><td></td>
      </tr>
      <tr v-for="service in cosmeticServices" :key="service.index">
        <td><p> <strong>{{ service.name }}</strong><br> <small v-if="'note' in service">({{ service.note }})</small> </p></td>
        <td> {{ service.price }} Kč </td>
      </tr>
      <tr class="empty"><td><br></td><td></td></tr>

      <tr v-for="service in otherServices" :key="service.index" v-if="service.name != ''">
        <td><p> <strong>{{ service.name }} </strong> <small v-if="'note' in service">({{ service.note }})</small> </p></td>
        <td> {{ service.price }} Kč </td>
      </tr>
      <tr v-else class="empty"><td><br></td><td></td></tr>
    </table>

  </article>
</template>

<script>
export default {
  name: "Pricing",
  data() {
    return {
      cosmeticServices: [
        { name: "Základní ošetření", note: "formování obočí, povrchové čištění pleti, enzymatický peeling, masáž obličeje, maska, krém", price: 480 },
        { name: "Suchá pleť", note: "základní ošetření + masáž dekoltu, pleťové sérum", price: 550 },
        { name: "Mastná nebo aknózní pleť", note: "úprava obočí, povrchové čištění pleti, enzymatický peeling, změkčení pleti, hluboké čištění pleti, maska, krém", price: 450 },
        { name: "Zralá pleť", note: "omlazující ošetření 100% kyselinou hyaluronovou základní péče + masáž dekoltu, pleťové sérum", price: 480 },
      ],
      otherServices: [
        { name: "Objemové prodloužení řas", note: "první aplikace", price: 990 },
        { name: "Doplnění po 2 týdnech", price: 350 },
        { name: "Doplnění po 3 týdnech", price: 450 },
        { name: "Doplnění po 4 týdnech", price: 550 },
        { name: "Doplnění z jiného salonu", price: 700 },
        { name: ""},
        { name: "Parafínový zábal rukou", note: "v rámci kosmetického ošetření 50,-", price: 80 },
        { name: "Masáž rukou", note: "v rámci manikůry 80,-", price: 100 },
        { name: ""},
        { name: "Barvení řas", price: 60 },
        { name: "Barvení obočí", price: 60 },
        { name: "Formování obočí", price: 50 },
        { name: ""},
        { name: "Depilace horní ret", price: 60 },
        { name: "Depilace brada", price: 60 },
        { name: "Depilace tváře", price: 80 },
        { name: "Depilace lýtka", price: 230 },
        { name: "Depilace celé nohy", price: 350 },
        { name: "Depilace předloktí", price: 160 },      
      ]
    }
  }
}
</script>

<style>

</style>
