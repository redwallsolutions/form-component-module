import React from 'react';
import {render} from "react-dom";
import {Form} from 'informed';
import {FaUserAlt, FaInfoCircle} from 'react-icons/fa';

import {InputField, SelectField, TextAreaField} from './lib'

const validate = value => {
  return !value || value.length < 5 ? 'Field must be at least five characters' : undefined;
}

const App = () => (<div style={{
  width:'500px',
  background: 'rgb(250,250,250)'
}}>
  <Form>
    <InputField field='totally-empty'/>
    <InputField field='only-placeholder' placeholder="Input with placeholder..."/>
    <InputField field='error-handling' placeholder="Input with error handling..." label='With Error' validate={validate} validateOnChange/>
    <InputField field='placeholder-and-label' placeholder="Placeholder..." label='A normal label'/>
    <InputField field='placeholder-and-longlabel' placeholder="Placeholder..." label="A very long label that we can't even imagine"/>
    <InputField field='with-icon' placeholder="With icon..." label="With icon" icon={<FaUserAlt/>}/>
    <InputField field='with-pretext' placeholder="With predefined text" label="With predefined text" icon={<FaUserAlt/>} initialValue='predefined text'/>
    <InputField field='with-after-icon' placeholder="I have an after icon" label="What do you have?" icon={<FaUserAlt/>} afterIcon={<FaInfoCircle/>}/>
    <InputField
      field='Another'
      label='A very long label for a simple input'
      placeholder='Say something...'
      icon={<FaUserAlt/>}/>
    <SelectField field='category'/>
    <SelectField field='product' key='something' label="Serviço" icon={<FaUserAlt/>} options={[{
        value: 1, label: 'Alguma Coisa'
    }, {
        value: 2, label: 'Outra Coisa'
    }]}/>
    <SelectField field='service'/>
    <TextAreaField field='area'/>
    <TextAreaField field='area-with-label' label='I have a label'/>
    <TextAreaField field='area-with-label-and-placeholder' label='Description' placeholder='I have a awesome placeholder to indicate users what they have to do.'/>
    <TextAreaField field='area-with-icon' label='Icon' placeholder='I have a awesome icon!!!' icon={<FaUserAlt/>}/>
    <br/>
    <button type="submit">
      Submit
    </button>
  </Form>
</div>);

render(<App/>, document.getElementById("root"));
