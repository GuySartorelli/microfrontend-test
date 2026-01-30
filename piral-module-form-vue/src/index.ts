import { fromVue3 } from 'piral-vue-3/convert';
import type { PiletApi } from 'test-app';
import { h } from 'vue';
import Checkbox from './Checkbox.vue';

export function setup(app: PiletApi) {
  app.registerExtension('CheckboxComponent', fromVue3({
    // This wrapper takes the "params" and passes them in directly as props.
    // Probably we'd want to use something other than (or which wraps) piral's built-in extension API
    // which handles this for us so people can avoid this unintuitive boilerplate.
    props: ['params'],
    render() {
      return h(Checkbox, { ...this.params });
    },
  }));
}
