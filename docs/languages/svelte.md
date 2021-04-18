Install with yarn (or `npm install`):

```bash
yarn add @vouchpanel/svelte
```

Include it as a module. Replace `id` with your wall id from [app.vouchpanel.com](https://app.vouchpanel.com).

```tsx
// Component.svelte
<script>
	import Wall from '@vouchpanel/svelte/dist/index'
</script>

<Wall id="4" darkMode="off"></Wall>
```
