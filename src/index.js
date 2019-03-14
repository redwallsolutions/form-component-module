import React from 'react';
import {render} from "react-dom";
import {Form} from 'informed';
import {FaUserAlt, FaInfoCircle} from 'react-icons/fa';

import {InputField, SelectField} from './lib'

const validate = value => {
  return !value || value.length < 5 ? 'Field must be at least five characters' : undefined;
}

const App = () => (<div style={{
    height: '99vh',
    width: '99vw',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
}}>
  <Form>
    <InputField field='User' label="Nome" placeholder='Digite seu nome' validate={validate} icon={<FaUserAlt/>} afterIcon={
      <div title="Apenas um teste">
        <FaInfoCircle/>
      </div>
    }/>
    <InputField
      field='Another'
      label='A very long label for a simple input'
      placeholder='Say something...'
      icon={<FaUserAlt/>}/>
    <SelectField field='service'/>
    <SelectField field='product' key='something' onChange={(e) => console.log(e)} label="Serviço" icon={<FaUserAlt/>} options={[{
      value: 1, label: 'Alguma Coisa'
    }, {
      value: 2, label: 'Outra Coisa'
    }]}/>
    <br/>
    <button type="submit">
      Submit
    </button>
  </Form>
</div>);

render(<App/>, document.getElementById("root"));
