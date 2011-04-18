Ext.onReady(function()
{
	 Ext.QuickTips.init();
	
	 new Ext.Viewport({
		    layout: 'border',
		    renderTo: 'here',
		    items: [{

		        region: 'north',
		        id: 'nth',
		        height: 70,
		        xtype: 'panel',
		        html: 'north'
		    
		    },{
		    	region: 'center',
		    	id: 'pnl99',
		    	title: 'Example Wizard',
		        layout:'card',
		        activeItem: 0, // make sure the active item is set on the container config!
		        bodyStyle: 'padding:15px',
		        defaults: {
		            // applied to each contained panel
		            border:false
		        },
		        
		        // the panels (or "cards") within the layout
		        items: [{
		            id: 'card-0',
		            html: '<h1>Welcome to the Wizard!</h1><p>Step 1 of 3</p>'
		        },{
		            id: 'card-1',
		            html: '<p>Step 2 of 3</p>'
		        },{
		            id: 'card-2',
		            html: '<h1>Congratulations!</h1><p>Step 3 of 3 - Complete</p>'
		        }]


		    }]
		});
	 
	 var Panel=Ext.getCmp('pnl99');
	 Panel.layout.setActiveItem('card-2');
//	 setActivePanel('tab01');
});



