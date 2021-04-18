Install with yarn (or `npm install`):

```bash
yarn add @vouchpanel/vue
```

Include it as a Vue element:

```tsx
<template>
  <Wall id="4" darkMode="off" />
</template>

<script lang="ts">
import Vue from "vue";
import VouchpanelVue2 from "@vouchpanel/vue";

Vue.component("Wall", VouchpanelVue2);

export default new Vue({});
</script>
```
