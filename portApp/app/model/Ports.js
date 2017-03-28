Ext.define('portApp.model.Ports',
    {
        extend : 'Ext.data.Model',

        idProperty : 'port_id',
        fields: [
            { name: 'port_id', type: 'int', defaultValue: 0 },
            { name: 'name', type: 'string' }
        ]
    });