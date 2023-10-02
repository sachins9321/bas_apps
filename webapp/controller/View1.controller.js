sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,JSONModel) {
        "use strict";

        return Controller.extend("my.app.pro03jsondata.controller.View1", {
            onInit: function () {
                let data = {
                    "1" : "Test1",
                    "2" : "Test2",
                    "3" : "Test3"
                 };
                 let data1 = {
                    "1" : "Test111",
                    "2" : "Test222",
                    "3" : "Test333"
                 };
                // var jsonmodel1 = new sap.ui.model.json.JSONModel(data);
                 let jsonmodel1 = new JSONModel(data);
                 let jsonmodel2 = new JSONModel(data1);
                 
                 this.getView().setModel(jsonmodel1);// single binding
                 this.getView().setModel(jsonmodel2,"test");// refrence

            }
        });
    });
