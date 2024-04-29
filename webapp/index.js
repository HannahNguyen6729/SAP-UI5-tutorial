//this file contains the application logic

sap.ui.define(
  [
    //'sap/m/Text',
    //  'sap/ui/core/mvc/XMLView',
    'sap/ui/core/ComponentContainer',
  ],
  (
    // Text,
    // XMLView,
    ComponentContainer
  ) => {
    'use strict';

    //XMLView
    /*   XMLView.create({
      viewName: 'ui5.walkthrough.view.App',
    }).then((oView) => oView.placeAt('content')); */

    //ComponentContainer
    new ComponentContainer({
      name: 'ui5.walkthrough',
      settings: {
        id: 'walkthrough',
      },
      async: true,
    }).placeAt('content');
  }
);
