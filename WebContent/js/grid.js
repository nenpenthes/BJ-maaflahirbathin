/*!
 * Ext JS Library 3.3.0
 * Copyright(c) 2006-2010 Ext JS, Inc.
 * licensing@extjs.com
 * http://www.extjs.com/license
 */
Ext.onReady(function(){
    Ext.QuickTips.init();

    // NOTE: This is an example showing simple state management. During development,
    // it is generally best to disable state management as dynamically-generated ids
    // can change across page loads, leading to unpredictable results.  The developer
    // should ensure that stable state ids are set for stateful components in real apps.    
    Ext.state.Manager.setProvider(new Ext.state.CookieProvider());

    // sample static data for the store
    var myData = [
        ['3m Co',23],
        ['Alcoa Inc',23],
        ['Alcoa Inc',23],
        ['Alcoa Inc',23],
        ['Alcoa Inc',23],
        ['Alcoa Inc',23],
        ['Alcoa Inc',23],
        ['Alcoa Inc',23],
        ['Alcoa Inc',23]
    ];

   

    // create the data store
    var store = new Ext.data.ArrayStore({
        fields: [
           {name: 'company'},
           {name: 'no'}
        ],
        url:'data2.store'
    });

    // manually load local data
//    store.loadData(myData);

    // create the Grid
    var grid = new Ext.grid.GridPanel({
        store: store,
        columns: [
            {
                id       :'company',
                header   : 'Company', 
                width    : 160, 
                sortable : true, 
                dataIndex: 'company'
            },
            {
                id       :'no',
                header   : 'No Company', 
                width    : 50, 
                sortable : true, 
                dataIndex: 'no'
            }
        ],
        stripeRows: true,
        autoExpandColumn: 'company',
        height: 350,
        width: 600,
        title: 'Array Grid',
        // config options for stateful behavior
        stateful: true,
        stateId: 'grid',
        
        
    });

    // render the grid to the specified div in the page
    grid.render('here');
});