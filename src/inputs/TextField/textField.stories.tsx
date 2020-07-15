import React, { useState } from 'react';

import TextField from './index';
import { Icon } from '../../dataDisplay';

export default {
  title: 'Inputs/TextField',
  component: TextField,
  parameters: {
    componentSubtitle: 'Text field input with several variants'
  }
};

const onSubmit = (e: React.FormEvent) => e.preventDefault();

export const textField = () => {
  const [value, setValue] = useState<string>('');
  return (
    <form noValidate autoComplete="off" onSubmit={onSubmit}>
      <TextField
        id="standard-name"
        label="Name"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </form>
  );
};

export const error = () => {
  const [value, setValue] = useState<string>('some incorrect value');
  return (
    <form noValidate autoComplete="off" onSubmit={onSubmit}>
      <TextField
        id="standard-name"
        label="Name"
        value={value}
        meta={{ error: 'Some error' }}
        onChange={(e) => setValue(e.target.value)}
      />
    </form>
  );
};

export const readOnly = () => {
  const [value, setValue] = useState<string>('some value readOnly');
  return (
    <form noValidate autoComplete="off" onSubmit={onSubmit}>
      <TextField
        id="standard-name"
        label="Name"
        readOnly
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </form>
  );
};

export const startAdornment = () => {
  const [value, setValue] = useState('');
  const adornment = <Icon size="md" type="assets"/>;
  return (
    <form noValidate autoComplete="off" onSubmit={onSubmit}>
      <TextField
        id="standard-name"
        label="Name"
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
        startAdornment={adornment}
      />
    </form>
  );
};

export const endAdornment = () => {
  const [value, setValue] = useState('');
  const adornment = <Icon size="md" type="assets"/>;
  return (
    <form noValidate autoComplete="off" onSubmit={onSubmit}>
      <TextField
        id="standard-name"
        label="Name"
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
        endAdornment={adornment}
      />
    </form>
  );
};