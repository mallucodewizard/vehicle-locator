
import './App.css';
import React ,{useState,useEffect} from 'react';
import Map from './Map';
import List from './List';
import {Grid } from '@material-ui/core';

//https://disease.sh/v3/covid-19/all 
function App() {
  
  return (
    <Grid container spacing={3} style={{ width: '100%' }}>
    <Grid item xs={12} md={4}>
      <List />
    </Grid>
    <Grid item xs={12} md={8} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Map />
    </Grid>
  </Grid>
  
    
   
  );
}

export default App;
