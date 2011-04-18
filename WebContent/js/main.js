Ext.onReady(function()
{
	 Ext.QuickTips.init();
	
	 var formPnl = new Ext.FormPanel({
		 labelWidth:80,
		 frame:true,
		 title:'Please Login'
	 });
	 
	 var viewport = new Ext.Viewport({
//		 renderTo:document.body,
		 width: 250,
//		 title:'Test',
		 layout:'border',
		 items:[{
			 region:'north',
			 height:80
//			 layout:'fit'
		 },{
			 region:'west',
			 width:100,
//			 layout:'fit',
			 split:true,
			 collapsible:true,
			 collapseMode:'mini'
		 },{
			 region:'center',
//			 layout:'fit',
			 items:[formPnl]
		 }]
	 });
});