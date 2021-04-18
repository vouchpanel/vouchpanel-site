Install with yarn (or `npm install`):

```bash
yarn add @vouchpanel/angular
```

Include it as a module.

```tsx
import { VouchpanelModule } from "@vouchpanel/angular";

@NgModule({
  declarations: [AppComponent],
  imports: [VouchpanelModule, BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

Add the following to the corresponding angular template. Replace `id` with your wall id from [app.vouchpanel.com](https://app.vouchpanel.com).

```tsx
// *.component.html
<vouchpanel darkMode="off" id="4"></vouchpanel>
```
