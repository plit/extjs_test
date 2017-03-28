/**
 * This view is an example list of people.
 */
Ext.define('portApp.view.main.List', {
    extend: 'Ext.Container',
    xtype: 'mainlist',

    layout: {type: 'vbox'},

    requires: [
        'portApp.store.Ports',
        'portApp.store.Timetables'
    ],

    title: 'Ports',


    items: [
        {
            xtype: 'selectfield',
            label: 'Choose one',
            store: {
                type: 'ports'
            },
            displayField: 'name',
            valueField: 'port_id',
            listeners: {
                change: 'onPortChange'
            }
        },
        {
            xtype: 'grid',
            itemId: 'gridListId',
            flex: 1,
            store: {
                type: 'timetables'
            },

            columns: [
                {
                    text: 'start',
                    dataIndex: 'start_port_id',
                    width: 100,
                    renderer: function (value, record) {
                        var ports = Ext.getStore('Ports');
                        var id = ports.findBy(function (item) {
                            return item.getData()['port_id'] == value;
                        });
                        return ports.getAt(id) ? ports.getAt(id).data.name : value;
                    }
                },
                {
                    text: 'end',
                    dataIndex: 'end_port_id',
                    width: 100,
                    renderer: function (value, record) {
                        var ports = Ext.getStore('Ports');
                        var id = ports.findBy(function (item) {
                            return item.getData()['port_id'] == value;
                        });
                        return ports.getAt(id) ? ports.getAt(id).data.name : value;
                    }
                },
                {
                    text: 'time',
                    dataIndex: 'time',
                    width: 230
                }
            ]
        }]

});
