Ext.onReady(function()
{
	 Ext.QuickTips.init();
	
	 var treePnl = new Ext.tree.TreePanel({
		title:'Tree Panel',
		loader: new Ext.tree.TreeLoader(),
		rootVisible: false,
		height:200,
		listeners: {
            click: function(n) {
                Ext.Msg.alert('Navigation Tree Click', 'You clicked: "' + n.attributes.text + '"');
            }
        },
		root: new Ext.tree.AsyncTreeNode({
			expanded: true,
			children: [{
				id:'1',text:'Menu1',  leaf: false, children:
					[ {id:'1',text: 'test', leaf: true } ]
			},{
				id:'2',text:'Menu2',leaf: true 
			}]
		})
	 });
	 
	 var panel = new Ext.Panel({
		 renderTo:document.body,
		 layout:'fit',
		 title:'test',
		 items:[treePnl]
	 });
});



//tree.on('click', function(node, e){
//    Ext.Msg.alert('test','tset');
//}, this);

//SampleTreePanel = Ext.extend(Ext.tree.TreePanel, {
//    title: 'Sample Tree Panel',
//    width: 200,
//    height: 400,
//    loader: new Ext.tree.TreeLoader(),
//    rootVisible: false,
//    border: false,
//
//    initComponent: function(){
//        Ext.apply(this, {
//
//            root: new Ext.tree.AsyncTreeNode({
//                children: [{
//                    text: 'First',
//                    expanded: true,
//                    children: [{
//                        text: 'one',
//                        leaf: true
//                    }, {
//                        text: 'two',
//                        leaf: true
//                    }]
//                }, {
//                    text: 'Second',
//                    expanded: true,
//                    children: [{
//                        text: 'one',
//                        leaf: true
//                    }]
//                }]
//            })
//        })
//
//        SampleTreePanel.superclass.initComponent.apply(this, arguments);
//    }
//});
//Ext.reg('tree_panel', SampleTreePanel);
//
//
//// Instantiate the tree panel, then attach an event listener..
//
//var tree = new SampleTreePanel();
//
