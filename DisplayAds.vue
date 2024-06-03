<template>
  <ins class="adsbygoogle"
       :style="adStyle"
       :data-ad-client="adClient"
       :data-ad-slot="adSlot"
       :data-ad-format="adFormat"
       :data-full-width-responsive="fullWidthResponsive"
       ></ins>
</template>

<script>
export default {
  props: {
    adStyle: {
      type: String,
      required: false,
      default: 'display: block'
    },

    adClient: {
      type: String,
      required: true
    },

    adSlot: {
      type: String,
      required: true
    },

    adFormat: {
      type: String,
      required: false,
      default: 'auto'
    },

    fullWidthResponsive: {
      type: String,
      required: false,
      default: 'false'
    }
  },


  mounted() {
    (window.adsbygoogle = window.adsbygoogle || []).push({})
  }
}
</script>
