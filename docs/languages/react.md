Install with yarn (or `npm install`):

```bash
yarn add @vouchpanel/react
```

Include it as a TSX element. Remove the types if using JSX.

```tsx
import Wall from "@vouchpanel/react";

const MyWall = (props: any) => {
  return (
    <div>
      <Wall darkMode={"off"} id={4}></Wall>
    </div>
  );
};
```
