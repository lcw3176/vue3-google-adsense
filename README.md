# vue3-google-adsense

vue 3 component for google adsense

demo is [here](https://kmapshot.com)

## Installation

```bash
npm install vue3-google-adsense
```


## Usage

Import the component and use it.

```vue
<template>
  <Adsense adStyle="display:inline-block;width:300px;height:300px"
           clientId="ca-pub-xxxxxxxx"
           slotId="xxxxxxxx">
    
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
           clientId="ca-pub-xxxxxxxx"
           slotId="xxxxxxxx"
           format="auto"
           fullWidthResponsive="true">
  </Adsense>
```

### Display Ads (fixed)

```vue
  <Adsense adStyle="display:inline-block;width:300px;height:300px"
           clientId="ca-pub-xxxxxxxx"
           slotId="xxxxxxxx">
    
  </Adsense>
```


### In-feed Ads

```vue
  <Adsense adStyle="display:block"
           format="fluid"
           layoutKey="-6t+ed+2i-1n-4w"
           clientId="ca-pub-xxxxxxxx"
           slotId="xxxxxxxx">

  </Adsense>
```

### In-article Ads

```vue

  <Adsense adStyle="display:block; text-align:center;"
         layout="in-article"
         format="fluid"
         clientId="ca-pub-xxxxxxxx"
         slotId="xxxxxxxx">
  </Adsense>
```

### Multiplex Ads (Responsive)
```vue

  <Adsense adStyle="display:block"
         format="autorelaxed"
         clientId="ca-pub-xxxxxxxx"
         slotId="xxxxxxxx">
      
  </Adsense>
```

### Multiplex Ads (fixed)
```vue

  <Adsense adStyle="display:inline-block;width:360px;height:800px"
         clientId="ca-pub-xxxxxxxx"
         slotId="xxxxxxxx">
      
  </Adsense>
```

## Props

| Attribute | Default            | Origin adsense tag         | Required |
|-----------|--------------------|----------------------------|----------|
| clientId    |                    | data-ad-client             | true     |
| slotId      |                    | data-ad-slot               | true     |
| adStyle   | display: block     | style                      | fasle    |
| format    | empty String ('')  | data-ad-format             | false    |
| fullWidthResponsive    | false              | data-full-width-responsive | false    |
| layoutKey    | empty String ('')  | data-ad-layout-key         | false    |
|layout| empty String ('')  | data-ad-layout                           | false    |


## Contributors

<a href="https://github.com/lcw3176/vue3-google-adsense/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=lcw3176/vue3-google-adsense" />
</a>

Made with [contrib.rocks](https://contrib.rocks).