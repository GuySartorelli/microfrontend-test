import * as React from 'react';

// See FormProps in https://docs.piral.io/plugins/piral-forms/types for props
export default ({ formData, submitting, changeForm }) => {
  return (
    <>
        <label>
            Title
            <input name="title" type='text' value={formData.title} onChange={changeForm} />
        </label>
        <label>
            Description
            <textarea name="description" value={formData.description} onChange={changeForm} />
        </label>
        <button type="submit" disabled={submitting}>Submit</button>
    </>
  );
};
