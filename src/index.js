import React from 'react';
import {render} from "react-dom";
import Field from './lib/components/Field';
import {Form} from 'informed';
import {FaUserAlt} from 'react-icons/fa';

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
    <Field field='User' label="Nome" placeholder='Digite seu nome' validate={validate} icon={<FaUserAlt/>}/>
    <br/>
    <button type="submit">
      Submit
    </button>
  </Form>
</div>);

render(<App/>, document.getElementById("root"));
