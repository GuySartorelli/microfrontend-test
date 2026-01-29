import * as React from 'react';
// import type { PiletApi } from 'test-app';
import type { PiletApi } from 'piral-core';

const Form = React.lazy(() => import('./TextArea'));

// @TODO DO TWO MORE:
//       one in a non-react library
//       one with vanilla JS and templates if doable

export function setup(app: PiletApi) {
  // @TODO we probably wouldn't use extension for this - we'd implement a registerComponent API instead
  // and just pass props directly instead of this params object-in-an-object.
  app.registerExtension('TextareaComponent', ({ params: { title, name, changeForm, value } }) => (
    <label>
      {title}
      <textarea name={name} value={value} onChange={changeForm} />
    </label>
  ));
}

