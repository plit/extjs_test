
Ext.define('portApp.store.Timetables', {
    extend: 'Ext.data.Store',

    alias: 'store.timetables',

    model: 'portApp.model.Timetables',

    autoLoad: true,
    autoSync: false,
    storeId: 'Timetables',

    data: {},
    listeners: {
        /**
         * 
         * @param store
         * @param records
         * @param isSuccessfull true if ajax successfull
         * @param eOpts
         */
        load: function(store, records, isSuccessfull, eOpts) {
            console.log('store', arguments);
            
            var ls_name = 'store.timetables';

            if (isSuccessfull) {
                var json_txt = JSON.stringify(records.map(function (item) {
                    return item.data;
                }));
                localStorage.setItem(ls_name, json_txt);

            } else {
                var get_data = localStorage.getItem(ls_name);
                if (get_data === null) {
                    alert('internet connection error');
                } else {
                    var json = JSON.parse(get_data);
                    store.setData(json);
                }
            }
        }
    },
    proxy :
    {
        type : 'ajax',
        reader :
        {
            type : 'json'
        },
        api :
        {
            read : 'http://localhost:3000/get_table/timetables'
        },
        actionMethods :
        {
            read : 'GET'
        },
        writer: {
            type : 'json',
            allowSingle : false // set false to send a single record in array
        }
    }

});