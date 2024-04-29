//this file contains the application logic

sap.ui.define(
  [
    //'sap/m/Text',
    'sap/ui/core/mvc/XMLView',
  ],
  (
    // Text,
    XMLView
  ) => {
    'use strict';

    //XMLView
    XMLView.create({
      viewName: 'ui5.walkthrough.view.App',
    }).then((oView) => oView.placeAt('content'));

    //Control
    /* new Text({
    text: 'Welcome to UI000',
  }).placeAt('content'); */
  }
);
