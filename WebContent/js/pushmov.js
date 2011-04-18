Ext.onReady(function(){

    var expander = new Ext.ux.grid.RowExpander({
        tpl : new Ext.Template(
            '<div style="margin-left:50px;"><p><b>Project Name:</b> {prj_nama}</p><br>',
            '<p><b>Site Name:</b> {sit_nama}</p><br>',
            '<p><b>Total PR value:</b> {val_kode} {total_pr}</p><br>',
            '<p><b>Total PO value:</b> {val_kode} {total_po}</p></div>'
        )
    });

	var store = new Ext.ux.data.PagingJsonStore({
        idProperty: 'id',
        totalProperty: 'count',
        root : 'posts',
        fields: [
			{name: 'id'},
			{name: 'trano'},
			{name: 'prj_kode'},
			{name: 'sit_kode'},
			{name: 'prj_nama'},
			{name: 'sit_nama'},
			{name: 'balance'},
			{name: 'tgl_last_po', type: 'date',  dateFormat: 'Y-m-d'},
			{name: 'balance_total'},
			{name: 'total_pr'},
			{name: 'total_po'},
			{name: 'pic'},
			{name: 'val_kode'}
          ],
        autoLoad: {params: {start: 0, limit: 50}},
        url: '/pool_pr.json'
    });
	store.load();

    searchDocument = function(){

        store.clearFilter();
        store.filterBy(function(record,id)
        {
            var docs = Ext.getCmp('document-text').getValue();
            reg = new RegExp(docs, "gi");
            if(reg.test(record.data['trano']))
            {
                return true;
            }
        });
    	Ext.getCmp('user-grids').getStore().reload();
    	Ext.getCmp('user-grids').getView().refresh();
    };

    refreshGrid = function(){
        store.clearFilter();
        Ext.getCmp('document-text').setValue('');
        Ext.getCmp('user-grids').getStore().reload();
    	Ext.getCmp('user-grids').getView().refresh();
    }

	var grid = new Ext.grid.GridPanel({
        store: store,
        id: 'user-grids',
        stateful: false,
        loadMask: true,
        title: 'Pool PR',
        columns: [
            new Ext.grid.RowNumberer(),
            expander,
            {header: "Trans No.", width: 100, sortable: true, dataIndex: 'trano'},
            {header: "Project Code", width: 80, sortable: true, dataIndex: 'prj_kode'},
            {header: "Site Code", width: 70, sortable: true, dataIndex: 'sit_kode'},
            {header: "Date of Last PO", width: 100, sortable: true, dataIndex: 'tgl_last_po',renderer: Ext.util.Format.dateRenderer('d/m/Y')},
            {header: "Balance Qty", width: 70, sortable: true, dataIndex: 'balance',css:'text-align:right;'},
            {header: "Balance Total", width: 100, sortable: true, dataIndex: 'balance_total',css:'text-align:right;', renderer: function (v,p,r) {
                return r.data['val_kode'] + ' ' + v;
            }
            },
            {header: "Executor", width: 150, sortable: true, dataIndex: 'pic'}
       ],
        frame:true,
        height: 400,
        width: 650,
        plugins: expander,
        layout: 'fit',
        renderTo: 'here',
        bbar: new Ext.PagingToolbar({
            id: 'paging',
            pageSize: 50,
            store: store,
            displayInfo: true,
            displayMsg: 'Displaying data {0} - {1} of {2}',
            emptyMsg: "No data to display"
        }),
        tbar: [
				{
					text: 'Trans. No',
					xtype:'label',
				    style: 'margin-right: 5px'
				},
				{
					xtype: 'textfield',
					id: 'document-text'
				},
				{
				    text: 'Search',
				    iconCls: 'search-icon',
				    handler: searchDocument,
				    scope: this
				},
                '-',
                {
				    text: 'refresh',
				    iconCls: 'icon-refresh',
				    handler: refreshGrid,
				    scope: this
				}
               ]
    });

    Ext.override(Ext.PagingToolbar, {
    doRefresh: function(){
        this.clearFilter();
        Ext.getCmp('document-text').setValue('');
        delete this.store.lastParams;
        this.doLoad(this.cursor);
    }
    });


    Ext.TaskMgr.start({
    run: function(){

	    store.clearFilter();
        Ext.getCmp('document-text').setValue('');
        store.reload();
    	Ext.getCmp('user-grids').getView().refresh();
    },
    interval: 900000
    });

});

</script>