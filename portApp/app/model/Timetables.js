Ext.define('portApp.model.Timetables',
    {
        extend : 'Ext.data.Model',

        idProperty : 'timetable_id',
        fields: [
            { name: 'timetable_id', type: 'int', defaultValue: 0 },
            { name: 'start_port_id', type: 'int' },
            { name: 'stop_port_id', type: 'int' },
            { name: 'time', type: 'string' }
        ]
    });