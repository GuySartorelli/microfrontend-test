import * as React from 'react';
import { Link } from 'react-router-dom';
// import type { PiletApi } from 'test-app';
import type { PiletApi } from 'piral-core';

const Form = React.lazy(() => import('./Form'));

export function setup(app: PiletApi) {
  const withForm = app.createForm({
    emptyData: {
      // @TODO pull this in from Silverstripe app
      title: '123',
      description: 'abc',
    },
    onSubmit(data) {
      // @TODO submit to Silverstripe app
      console.log(data);
      return Promise.resolve();
    },
  });
  app.registerPage('/admin/microadmin/form', withForm((props) => <Form ExtensionComponent={app.Extension} {...props} />));

  app.registerMenu(() => <Link to="/admin/microadmin/form">Form Module</Link>);

}
