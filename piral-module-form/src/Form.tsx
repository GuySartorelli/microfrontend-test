import * as React from 'react';

// See FormProps in https://docs.piral.io/plugins/piral-forms/types for props
export default ({ formData, submitting, changeForm, ExtensionComponent }) => {
  return (
    <>
        <label>
            Title
            <input name="title" type='text' value={formData.title} onChange={changeForm} />
        </label>
        <ExtensionComponent name="TextareaComponent" params={{
          name: 'description',
          value: formData.description,
          title: 'Description',
          changeForm,
        }} />
        <button type="submit" disabled={submitting}>Submit</button>
    </>
  );
};
