//this file contains the application logic

sap.ui.define(['sap/m/Text'], (Text) => {
  'use strict';
  alert('welcome to UI5');

  new Text({
    text: 'Welcome to UI000',
  }).placeAt('content');
});
