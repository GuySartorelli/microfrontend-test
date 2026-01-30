import * as React from 'react';

// NOTE: This example uses the special `piral` prop to call an extension.
// In production code, especially for dependency injection, we should do the
// dependency injection higher up and just pass the final component through as a prop.
// Then here we would just have `<MyComponent />` (optionally passing in props).
// Reducing coupling has several advantages over what we're doing below:
// 1. We can use this component in non-piral scenarios
// 2. Makes testing this component easier in isolation
// 3. We follow the pilet best practices (https://docs.piral.io/guidelines/tutorials/09-pilet-best-practices)
export default ({ piral }) => {
  return (
    <>
      <h1>New Javascript API</h1>
      <p>
        Javascript components that can have <piral.Extension name="module-one-ext" empty={() => <span style={{color:"blue"}}> clear extension points</span>}/>.
      </p>
      <p>
        Each Javascript component can be built separately but share core dependencies (eg React) without complex webpack.config files
      </p>
      <p>
        Component will have a clear API for interacting with the CMS
      </p>
    </>
  );
};
