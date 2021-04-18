Install with yarn (or `npm install`):

```bash
yarn add @vouchpanel/react
```

Include it as a JSX element:

```tsx
import Wall from "@vouchpanel/react";

const MyWall = (props: {}) => {
  return (
    <div>
      <Wall darkMode={"off"} id={4}></Wall>
    </div>
  );
};
```
