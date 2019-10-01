import React, { useState, useEffect } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

function Select1() {

  const [values, setValues] = useState({
    age: '',
    name: 'hai',
  });

  const inputLabel= React.useRef<HTMLElement>(null);
  const [labelWidth, setLabelWidth] = useState(50);

  // useEffect(() => {
  //   setLabelWidth(inputLabel.current!.offsetWidth);
  // }, []);

  const handleChange = (event: React.ChangeEvent<{name?: string; value: unknown}>) => {
    setValues(oldValues => ({
      ...oldValues,
      [event.target.name as string]: event.target.value,
    }));
  };

  return (
    <div className="SimpleSelect1">
    <InputLabel htmlFor="age-simple">Age</InputLabel>
      <Select
      value={values.age}
      onChange={handleChange}
      inputProps={{
        name: 'age',
        id:'age-simple',
      }}
      >
        <MenuItem value={10}>  Ten    </MenuItem>
        <MenuItem value={20}>  Twenty    </MenuItem>
        <MenuItem value={30}>  Thitry    </MenuItem>
      </Select>


    </div>
  );
}

export default Select1;
