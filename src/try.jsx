 import React, { useState, useHistory } from 'react';
import { BrowserRouter as Router, Route, NavLink, useHistory } from 'react-router-dom';
import './fillinfo.css';


import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  'Bench Press',
  'Squat',
  'Deadlift',
  'Lat Pulldown',
  'Barbell Row',
  'Dumbbell Lateral Raise',
  'Leg Extension',
  'Leg Press',
  'Barbell Curl',

];

const weights = [
  '1-20',
  '21-50',
  '51-80',
  

];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

function getWeightStyles(weight, selectedWeights, theme) {
  return {
    fontWeight:
      selectedWeights.indexOf(weight) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}



function FillInfo() {


  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };




 
  const [Weight, setWeight] = React.useState([]);

  const handleChangeW = (event) => {
    const {
      target: { value },
    } = event;
   setWeight(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };



  const [username, setUsername] = useState('');
  const [age, setAge] = useState('');
 
 




  // const [age, setAge] = React.useState('');

  const handleChangeA = (event) => {
    setAge(event.target.value);
  };




  return (


    <div className="fillinfo">
    <p className='msg'>Initialy fill your some information and choose your desire workout 	&#128512;</p>
  <div className='choose'>

<form onSubmit={handleSubmit}>
   <div className="mb-3">
     <label htmlFor="username" className="form-label">Username</label>
     <input 
       type="text" 
       className="form-control" 
       id="username" 
       value={username} 
       onChange={(e) => setUsername(e.target.value)} 
     />
   </div>

   <div className="mb-3">
   <FormControl sx={{ m: 1, minWidth: 80 }}>
        <InputLabel id="demo-simple-select-autowidth-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={age}
          onChange={handleChangeA}
          autoWidth
          label="Age"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Twenty</MenuItem>
          <MenuItem value={21}>Twenty one</MenuItem>
          <MenuItem value={22}>Twenty one and a half</MenuItem>
        </Select>
      </FormControl>
   </div>
 
   <div className="mb-3">
   <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-name-label">Select Exercise</InputLabel>
        <Select
  labelId="demo-multiple-name-label"
  id="demo-multiple-name"
  multiple
  value={personName}
  onChange={handleChange}
  input={<OutlinedInput label="Name" />}
  MenuProps={MenuProps}
>
  {names.map((name) => (
    <MenuItem
      key={name}
      value={name}
      style={getStyles(name, personName, theme)}
    >
      {name}
    </MenuItem>
  ))}
</Select>
      </FormControl>

   </div>


   <div className="mb-3">
   <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-name-label">Weight</InputLabel>
        <Select
  labelId="demo-multiple-name-label"
  id="demo-multiple-name"
  multiple
  value={Weight}
  onChange={handleChangeW}
  input={<OutlinedInput label="Weight" />}
  MenuProps={MenuProps}
>
  {weights.map((weight) => (
    <MenuItem
      key={weight}
      value={weight}
      style={getWeightStyles(weight, Weight, theme)}
    >
      {weight}
    </MenuItem>
  ))}
</Select>
      </FormControl>

   </div>
  

<div className='mb-3'>
<span className="form-check form-check-inline">
        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
        <label className="form-check-label" htmlFor="inlineRadio1">Male</label>
      </span>
      <span className="form-check form-check-inline">
        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
        <label className="form-check-label" htmlFor="inlineRadio2">Female</label>
      </span>
</div>


  


   <button type="submit" className="btn btn-primary mt-3">Submit</button>
 </form>
 </div>
</div>

  )
}

export default FillInfo




