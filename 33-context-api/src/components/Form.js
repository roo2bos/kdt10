import React from 'react';
import Button from './Button';
import Panel from './Panel';

const Form = () => {
  return (
    <Panel title="Welcome">
      <Button>Sign up</Button>
      <Button>Login</Button>
    </Panel>
  );
};

export default Form;
