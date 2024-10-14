<template>
  <component async
             :is="'script'"
          :src="scriptSrc"
          crossorigin="anonymous"></component>
  <ins class="adsbygoogle"
       :style="adStyle"
       :data-ad-client="clientId"
       :data-ad-slot="slotId"
       :data-ad-format="format"
       :data-ad-layout-key="layoutKey"
       :data-ad-layout="layout"
       :data-full-width-responsive="fullWidthResponsive">
  </ins>
  <component :is="'script'">
    (adsbygoogle = window.adsbygoogle || []).push({});
  </component>

</template>

<script>
export default {
  name: 'Adsense',
  props: {
    adStyle: {
      type: String,
      required: false,
      default: 'display: block'
    },

    clientId: {
      type: String,
      required: true
    },

    slotId: {
      type: String,
      required: true
    },

    format: {
      type: String,
      required: false,
      default: ''
    },

    fullWidthResponsive: {
      type: String,
      required: false,
      default: 'false'
    },

    layoutKey: {
      type: String,
      required: false,
      default: ''
    },

    layout:{
      type: String,
      required: false,
      default: ''
    }
  },

  data(){
    return {
      scriptSrc: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=" + this.clientId,
    }
  }
}
</script>
