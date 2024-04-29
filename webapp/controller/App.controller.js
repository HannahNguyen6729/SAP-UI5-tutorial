sap.ui.define(
  [
    'sap/ui/core/mvc/Controller',
    'sap/m/MessageToast',
    'sap/ui/model/json/JSONModel',
    'sap/ui/model/resource/ResourceModel',
  ],
  (Controller, MessageToast, JSONModel, ResourceModel) => {
    'use strict';

    return Controller.extend('ui5.walkthrough.controller.App', {
      onInit() {
        // set data model on view
        const oData = {
          recipient: {
            name: 'World !!!!!',
          },
        };
        //instantiate a JSON model
        const oModel = new JSONModel(oData);
        this.getView().setModel(oModel);

        // set i18 model on view
        const i18nModel = new ResourceModel({
          bundleName: 'ui5.walkthrough.i18n.i18n',
        });
        this.getView().setModel(i18nModel, 'i18n');
      },

      onShowHello() {
        // read msg from i18n model
        const oBundle = this.getView().getModel('i18n').getResourceBundle();
        const sRecipient = this.getView()
          .getModel()
          .getProperty('/recipient/name');

        const sMsg = oBundle.getText('helloMsg', [sRecipient, ' from Vietnam']); //helloMsg=Xin chao {0} {1}

        // show message
        MessageToast.show(sMsg);
      },
    });
  }
);
