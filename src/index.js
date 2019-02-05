import React from 'react';
import { render } from "react-dom";
import Field from './lib/components/Field';
import {Form} from 'informed';
import { FaUserAlt} from 'react-icons/fa';


const App = () => (
  <div style={{height:'99vh',width:'99vw',display: 'flex', justifyContent:'center', alignItems:'center',flexDirection:'column'}}>
    <Form>
      <Field field='User' placeholder='Digite seu nome' icon={<FaUserAlt/>}/>
    </Form>
  </div>
);

render(<App />, document.getElementById("root"));
