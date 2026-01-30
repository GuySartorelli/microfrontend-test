import * as React from 'react';

// See FormProps in https://docs.piral.io/plugins/piral-forms/types for props
export default ({ piral, formData, submitting, changeForm }) => {
  return (
    <>
        <label>
            <piral.Extension name="FormLabelText" params={{ title: "Title" }} />
            <input name="title" type='text' value={formData.title} onChange={changeForm} />
        </label>
        <piral.Extension name="TextareaComponent" params={{
          name: 'description',
          value: formData.description,
          title: 'Description',
          changeForm,
        }} />
        <piral.Extension name="CheckboxComponent" params={{
          name: 'vue-field',
          value: formData['vue-field'],
          title: 'Vue field',
          changeForm,
        }} />
        <button type="submit" disabled={submitting}>Submit</button>
    </>
  );
};
