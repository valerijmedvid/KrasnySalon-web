<template>
  <article class="group">
    
    <h1>Kontakt</h1>

    <div class="contact">
      <p><strong>Dominika Urbanová</strong><br>
      <a href="tel:+420606025605" @click="onClick('zavolat')">+420 606 025 605</a><br>
      <a href="mailto:dominika@krasnysalon.cz" @click="onClick('poslat mail')">dominika@krasnysalon.cz</a><br>
      <p><strong>IČO:</strong> 06443591</p>
    </div>

    <div class="contact">
      <p><strong>Krásný salon</strong><br>
      Topolová 2151<br>
      Nymburk 288 02</p>
      <p><strong>Otevírací doba:</strong> dle objednání</p>
    </div>

    <iframe id="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2554.6360091995566!2d15.04096025172402!3d50.18664157933899!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470c0f76366e5cc5%3A0xf3014e0be0c4e37e!2zS3LDoXNuw70gc2Fsb24!5e0!3m2!1scs!2scz!4v1514741287581" allowfullscreen></iframe>
  
  </article>
</template>

<script>
export default {
  name: "Contact",
  methods: {
    onClick(name){
      this.$gtm.trackEvent({
        event: "Tlacitko", // Event type [default = 'interaction'] (Optional)
        category: 'ContactForm',
        action: 'mouseClick',
        label: name,
        noninteraction: false // Optional
      });
    }
  }
}
</script>
