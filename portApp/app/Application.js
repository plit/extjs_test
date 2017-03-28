
Ext.define('portApp.Application', {
    extend: 'Ext.app.Application',
    
    name: 'portApp',

    stores: [
        'Ports'
    ],
    
    launch: function () {
        // TODO - Launch the application
    },

    onAppUpdate: function () {
        Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
            function (choice) {
                if (choice === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
