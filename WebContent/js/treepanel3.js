Ext.onReady(function()
{
	 Ext.QuickTips.init();
	
	 new Ext.Viewport({
		    layout: 'border',
		    renderTo: 'here',
		    items: [{
		        region: 'west',
		        collapsible: true,
		        title: 'Navigation',
		        xtype: 'treepanel',
		        id:'navTree',
		        width: 200,
		        autoScroll: true,
		        split: true,
		        loader: new Ext.tree.TreeLoader(),
		        root: new Ext.tree.AsyncTreeNode({
		            expanded: true,
		            children: [{
		                text: 'Option 1',		        
		                leaf: true,
		                listeners: 
				        {
				            click: function(n) {	
						    	var Panel=Ext.getCmp('pnl99');
						   	 	Panel.layout.setActiveItem('card-0');
						   	 	Ext.Msg.alert('Navigation Tree Click', 'You clicked: "' + n.text + '"');
				            }
				        }
		            }, {
		                text: 'Option 2',
		                leaf: true,
		                listeners: 
				        {
				            click: function(n) {	
				            	var Panel=Ext.getCmp('pnl99');
						   	 	Panel.layout.setActiveItem('card-1');
				            }
				        }
		            }, {
		                text: 'Option 3',
		                id:'child',
		                leaf: true,
		                listeners: 
				        {
				            click: function(n) {	
				            	var Panel=Ext.getCmp('pnl99');
						   	 	Panel.layout.setActiveItem('card-2');
				                Ext.Msg.alert('Navigation Tree Click', 'You clicked: "' + n.attributes.text + '"');
				            }
				        }
		            }]
		        }),
		        rootVisible: false
//		        listeners: {
//		        	click: 
//		        	{
//		            	fn:clickListener
//		        	}
//		    	}

		        
		    }, {
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

//	 clickListener = function (node,event){
//		    // The node argument represents the node that
//		    // was clicked on within your TreePanel
//		};


	 
});



