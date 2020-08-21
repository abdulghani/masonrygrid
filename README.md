# Breakpointcontext

React.js flexbox-based masonry grid with determned column and sequentially rendered item.

## Install

get it from yarn/npm whatever

```
yarn add @abdulghani/masonrygrid

npm install @abdulghani/masonrygrid
```

## Usage

use it as simple as

```tsx
import MasonryGrid from "@abdulghani/masonrygrid";

const MyComponent = () => {
  return (
    <MasonryGrid col={3} className="mx-3">
      {products.map((item: any) => (
        <Product key={item.id} value={item} />
      ))}
    </MasonryGrid>
  );
};

// the className will applied to each column element
```
