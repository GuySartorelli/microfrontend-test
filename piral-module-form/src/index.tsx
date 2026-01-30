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
      'vue-field': true,
    },
    onSubmit(data) {
      // @TODO submit to Silverstripe app
      console.log(data);
      return Promise.resolve();
    },
  });
  app.registerPage('/admin/microadmin/form', withForm((props) => <Form {...props} changeForm={(...args) => {
    // For checkboxes, check the "checked" attribute of the target, not the "value" attribute.
    if (args[0] instanceof Event && !args[0].target) {
      console.log(args[0]);
    }
    if (args[0] instanceof Event && args[0].target.type === 'checkbox') {
      const e = args[0];
      // piral-forms only cares about these keys. For checkboxes the event.target.value isn't actually
      // the checked status, so we have to give a shim event with the correct value.
      args = [{ target: { name: e.target.name, value: e.target.checked } }];
    }
    props.changeForm(...args);
  }} />));
  // This label text extension is used to validate that we can nest react inside non-react inside react for a tasty sandwhich.
  app.registerExtension('FormLabelText', ({ params: { title } }) => (<span>{title}</span>));
  app.registerMenu(() => <Link to="/admin/microadmin/form">Form Module</Link>);
}
