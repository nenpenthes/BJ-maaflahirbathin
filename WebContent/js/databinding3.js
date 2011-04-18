/*!
 * Ext JS Library 3.3.1
 * Copyright(c) 2006-2010 Sencha Inc.
 * licensing@sencha.com
 * http://www.sencha.com/license
 */
Ext.onReady(function(){

    // create the Data Store
    var store = new Ext.data.Store({
        // load using HTTP
        url: 'sheldon.xml',

        // the return will be XML, so lets set up a reader
        reader: new Ext.data.XmlReader({
               // records will have an "Item" tag
               record: 'Item',
               id: 'ASIN',
               totalRecords: '@total'
           }, [
               // set up the fields mapping into the xml doc
               // The first needs mapping, the others are very basic
               {name: 'Author', mapping: 'ItemAttributes > Author'},
               'Title', 'Manufacturer', 'ProductGroup'
           ])
    });

    // create the grid
    var grid = new Ext.grid.GridPanel({
        store: store,
        columns: [
            {header: "Author", width: 120, dataIndex: 'Author', sortable: true},
            {header: "Title", width: 180, dataIndex: 'Title', sortable: true},
            {header: "Manufacturer", width: 115, dataIndex: 'Manufacturer', sortable: true},
            {header: "Product Group", width: 100, dataIndex: 'ProductGroup', sortable: true}
        ],
//        renderTo:'here',
        width:540,
        itemId: 'gridPanel',
		region: 'north',
		height: 210,
		split: true
    });

    // create the panel grid detail
    var panelDetail = new Ext.Panel({
    	bodyStyle: 
    	{
			background: '#ffffff',
			padding: '7px'
		},
		html: 'Test',
		itemId: 'detailPanel',
		region: 'center'
    });
    
    // create the main panel
    var panelMain = new Ext.Panel({
    	renderTo:'here',
    	frame: true,
		title: 'Book List',
		width: 540,
		height: 400,
		layout: 'border',
		items: [grid,panelDetail]
    });
    
    store.load();
//    var detailPanel = this.getComponent('detailPanel');
	panelDetail.update('asd');
});
