/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('portApp.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',


    
    onPortChange: function (parentScope, newValue) {

        var grid_list = this.getView().down('#gridListId');

        grid_list.getStore().clearFilter();
        grid_list.getStore().filterBy(function (rec) {
            return rec.data['start_port_id'] === newValue.data.port_id;
        });
    }
});
