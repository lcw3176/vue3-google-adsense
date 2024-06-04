# vue3-google-adsense

vue 3 component for google adsense

## Installation

```bash
npm install vue3-google-adsense
```


## Usage

Import the component and use it.

```vue
<template>
  <Adsense adStyle="display:inline-block;width:300px;height:300px"
           client="ca-pub-xxxxxxxx"
           slot="xxxxxxxx">
    
  </Adsense>
</template>

<script>
  
  import { Adsense } from 'vue3-google-adsense';

  export default {
    name: 'Sample-AdsView',
    
    components:{
      Adsense
    }
    
  }

</script>
```


## Usage Examples

### Display Ads (Responsive)

```vue
  <Adsense adStyle="display:block"
           client="ca-pub-xxxxxxxx"
           slot="xxxxxxxx"
           format="auto"
           fullWidthResponsive="true">
  </Adsense>
```

### Display Ads (fixed)

```vue
  <Adsense adStyle="display:inline-block;width:300px;height:300px"
           client="ca-pub-xxxxxxxx"
           slot="xxxxxxxx">
    
  </Adsense>
```


### In-feed Ads

```vue
  <Adsense adStyle="display:block"
           format="fluid"
           layoutKey="-6t+ed+2i-1n-4w"
           client="ca-pub-xxxxxxxx"
           slot="xxxxxxxx">

  </Adsense>
```

### In-article Ads

```vue

  <Adsense style="display:block; text-align:center;"
         layout="in-article"
         format="fluid"
         client="ca-pub-xxxxxxxx"
         slot="xxxxxxxx">
  </Adsense>
```

### Multiplex Ads (Responsive)
```vue

  <Adsense style="display:block"
         format="autorelaxed"
         client="ca-pub-xxxxxxxx"
         slot="xxxxxxxx">
      
  </Adsense>
```

### Multiplex Ads (fixed)
```vue

  <Adsense style="display:inline-block;width:360px;height:800px"
         client="ca-pub-xxxxxxxx"
         slot="xxxxxxxx">
      
  </Adsense>
```

## Props

| Attribute | Default            | Origin adsense tag         | Required |
|-----------|--------------------|----------------------------|----------|
| client    |                    | data-ad-client             | true     |
| slot      |                    | data-ad-slot               | true     |
| adStyle   | display: block     | style                      | fasle    |
| format    | empty String ('')  | data-ad-format             | false    |
| fullWidthResponsive    | false              | data-full-width-responsive | false    |
| layoutKey    | empty String ('')  | data-ad-layout-key         | false    |
|layout| empty String ('')  | data-ad-layout                           | false    |
