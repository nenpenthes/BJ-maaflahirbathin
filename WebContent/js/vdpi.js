var Viewport28 = new Ext.Viewport({
    id: 'Viewport28',
    items: [{
        region: 'south',
        bodyStyle: 'background:#4e84b3 url(res/logo_vdpimanager1.png) no-repeat ;height:40;',
        id: 'Panel6',
        items: {
            region: 'center',
            id: 'Panel11',
            title: '<div style="vertical-align:bottom" align="center"><img src="./res/copyright_vdpi_manager.png" /></div>',
            baseCls: 'plain',
            xtype: 'panel'
        },
        xtype: 'panel',
        border: false
    },
    {
        region: 'north',
        bodyStyle: 'background:#4e84b3 url(res/logo_vdpimanager.png) no-repeat ;',
        id: 'Panel5',
        height: 70,
        xtype: 'panel',
        html: '<br><br><table style="color:WHITE;font-weight:bold;" width="100%" border="0"><tr><td width="30%"></td><td width="70%" align="right">Welcome,qwe<br> <a class="menu" href="#" onclick="jfm_request(\'reqStatusTrigger\',\'RequestPool29\',\'\')" >Support</a><a class="menu" href="#" onclick="jfm_request(\'reqStatusChangePassword\',\'RequestPool29\',\'\')" > | Change Password | </a><a class="menu" href="#" onclick="jfm_request(\'reqStatusPanel\',\'RequestPool29\',\'\')" >Logout</a></td></tr></table>',
        border: false
    },
    {
        bodyStyle: 'background:#dfe8f6 url(img/logo_vdpi_manager1.png) no-repeat ;',
        region: 'west',
        listeners: {
            render: function (tp) {
                tp.getSelectionModel().on('selectionchange', function (tree, node) {
                    jfm_request('onSelectionChange', 'Explorer27', '&nodeid=' + node.id);
                })
            }
        },
        root: {
            id: 'node1',
            nodeType: 'async'
        },
        collapsible: true,
        width: 200,
        id: 'Explorer27',
        rootVisible: false,
        dataUrl: 'Dispatch?_evt=onLoadContent&_obj=Explorer27',
        floatable: false,
        items: {
            bodyStyle: 'background:#dfe8f6 none no-repeat;',
            rootVisible: false,
            id: 'TreePanel151',
            listeners: {
                render: function (tp) {
                    tp.getSelectionModel().on('selectionchange', function (tree, node) {
                        jfm_request('onSelectionChange', 'TreePanel151', '&nodeid=' + node.id);
                    })
                }
            },
            title: 'Bigjava VDPI',
            dataUrl: 'Dispatch?_evt=onLoadContent&_obj=TreePanel151',
            root: {
                id: 'node1',
                children: [{
                    id: 'node11',
                    text: 'Dashboard VDPI',
                    children: [{
                        id: 'node12',
                        text: 'Core Switch',
                        children: [{
                            id: 'node13',
                            text: '<img src="./res/dm.png" width="16" height="16" />Mesin 1',
                            leaf: true
                        },
                        {
                            id: 'node14',
                            text: '<img src="./res/policy_manager.png" width="16" height="16" /> Policy Manager',
                            leaf: true
                        },
                        {
                            id: 'node15',
                            text: '<img src="./res/USER_manager.png" width="16" height="16" /> User Manager',
                            leaf: true
                        }]
                    },
                    {
                        id: 'node16',
                        text: 'Poli 2',
                        hidden: true
                    }]
                },
                {
                    id: 'node17',
                    text: '<img src="./res/service_manager.png" height="16" /> Service Manager',
                    leaf: true
                },
                {
                    id: 'node18',
                    text: 'Dashboard Moreto',
                    children: [{
                        id: 'node24',
                        text: 'All Devices',
                        children: {
                            id: 'node25',
                            hidden: true,
                            leaf: true
                        }
                    },
                    {
                        id: 'node19',
                        text: 'Service 1',
                        children: [{
                            id: 'node21',
                            text: '<img src="./res/dm.png" width="16" height="16" />Device 01',
                            leaf: true
                        },
                        {
                            id: 'node22',
                            text: '<img src="./res/dm.png" width="16" height="16" />S2',
                            leaf: true
                        },
                        {
                            id: 'node23',
                            text: '<img src="./res/dm.png" width="16" height="16" />S3',
                            leaf: true
                        }]
                    }]
                }]
            },
            xtype: 'treepanel',
            split: true
        },
        xtype: 'treepanel',
        split: true
    },
    {
        bodyStyle: 'background:#4e84b3 url(res/logo_vdpi_manager1.png) no-repeat ;',
        region: 'center',
        id: 'Panel7',
        items: [{
            id: 'TabPanel14',
            xtype: 'tabpanel'
        },
        {
            id: 'TabPanel20',
            xtype: 'tabpanel'
        },
        {
            id: 'TabPanel21',
            xtype: 'tabpanel'
        },
        {
            id: 'TabPanel15',
            xtype: 'tabpanel',
            border: false
        },
        {
            bodyStyle: 'background:#dfe8f6 none no-repeat ;',
            id: 'Panel9',
            title: 'VDPI Manager Support',
            xtype: 'panel',
            html: '<table width="100%" align="left" height="300" border="0" cellpadding="0" cellspacing="10"><tr><td ><div align="left" style="font-family:Arial, Helvetica, sans-serif; font-weight:bold;font-size:18px;">Using Bigjava VDPI Manager</div><br /><div align="left" style="font-family:Arial, Helvetica, sans-serif; font-weight:bold;font-size:18px;">Web Help</div></td></tr><tr><td colspan="3"><div>Welcome to Bigjava VDPI Manager Help on the web, part of the Bigjava Community Help environment. Bigjava specialists update web. Help regularly, and comments from users and expert moderators provide additional tips and solutions. You can search,browse, and comment on web Help content.When you are not connected to the internet, asubset of Help opens.<br /><br /><div align="left" style="font-family:Arial, Helvetica, sans-serif; font-weight:bold;font-size:18px;">Community Help</div> <br />Community Help brings together Help, instruction,support articles,videos,blogs,and examples from Bigjava and community experts around the world.The Bigjava custom search engine helps you find the best content available whether its produced by Bigjava or its user community. Result from online product Help are included whenever you search Community Help.<br />To access Community Help go to <a href="http://www.bigjava.com" target="_blank">http://www.bigjava.com.</a><br />To learn more about Community Help, see Help and support.  </div></table>',
            border: false
        },
        {
            bodyStyle: 'background:#dfe8f6 url(res/logo_vdpi_manager1.png) no-repeat ;',
            id: 'Panel8',
            title: 'Welcome',
            xtype: 'panel',
            html: '<table width="400" align="center" height="300" border="0" cellpadding="0" cellspacing="10"><tr><td colspan="3"><div align="center" style="font-family:Arial, Helvetica, sans-serif; font-weigh:bold;font-size:18px;"><img src="res/logo2.png" height="50" /><br />VDPI Manager</div></td></tr><tr><td colspan="3"><div align="left">Welcome to Bigjava VDPI Manager,<br />To help you get started, check out these excellent features for managing networks and managing user behavior.</div></td></tr><tr><td height="128" style="padding-right:20px;"><img src="res/wel_dm.png" width="139" height="128" /></td><td style="padding-right:20px;"><img src="res/wel_pm.png" width="139" height="128" /></td><td><img src="res/wel_sm.png" width="139" height="128" /></td></tr><tr><td valign="top" width="30%" style="padding-left:10px; font-size:12px; ">- Policy Manager&rsquo;s features allow traffic shaping up to layer seven.<br />- Packets inspection provides better granularity per service.<br />- User behavior can be managed by applying different Quality of Service.<br /></td><td valign="top" width="40%" style="padding-left:10px;font-size:12px;">- User profiling and application can also be managed by prioritizing the most important application to the least one. <br /> - Environment of the network can be optimized by identifying types of packets and application those are passing through the network. </td><td valign="top" width="30%" style="padding-left:10px;font-size:12px;">- Traffic can be inspected, thus preventing the threat of virus or unwanted Packet to be delivered inside the network. <br />- Instead of upgrading the network capacity, optimizing with Bigjava VDPI will reduce the Capex and Opex. </td></tr></table>',
            border: false
        },
        {
            id: 'TabPanel16',
            xtype: 'tabpanel',
            border: false
        },
        {
            id: 'TabPanel24',
            xtype: 'tabpanel'
        }],
        layout: 'card',
        xtype: 'panel',
        border: false
    },
    {
        region: 'east',
        bodyStyle: 'background:blue url(img/logo_vdpi_manager1.png) no-repeat ;',
        id: 'Panel4',
        title: '<img src="./res/details.png" />',
        floatable: false,
        items: [{
            bodyStyle: 'background:#dfe8f6 none no-repeat ;',
            id: 'Panel10',
            xtype: 'panel',
            border: false
        },
        {
            bodyStyle: 'background:#000000 none no-repeat ;',
            id: 'TabPanel17',
            xtype: 'tabpanel',
            border: false
        },
        {
            id: 'TabPanel13',
            xtype: 'tabpanel',
            border: false
        },
        {
            id: 'TabPanel12',
            xtype: 'tabpanel'
        },
        {
            id: 'TabPanel18',
            xtype: 'tabpanel'
        },
        {
            id: 'TabPanel19',
            xtype: 'tabpanel'
        },
        {
            id: 'TabPanel22',
            xtype: 'tabpanel'
        },
        {
            id: 'TabPanel23',
            xtype: 'tabpanel'
        },
        {
            id: 'TabPanel25',
            xtype: 'tabpanel'
        },
        {
            bodyStyle: 'background:#000000 none no-repeat ;',
            id: 'TabPanel26',
            xtype: 'tabpanel',
            border: false
        }],
        collapsible: true,
        width: 300,
        layout: 'card',
        xtype: 'panel',
        border: false
    }],
    layout: 'border',
    xtype: 'viewport'
});




//++++



TabPanel14.add({
    bodyStyle: 'background:#dfe8f6 none no-repeat ;',
    title: '<img src="./res/dashboard2.png" />',
    closable: false,
    items: {
        bodyStyle: 'background:#dfe8f6;',
        id: 'DashboardPanel110',
        height: 450,
        autoScroll: true,
        bodyBorder: true,
        items: [{
            bodyStyle: 'background:#dfe8f6;',
            id: 'Panel111',
            xtype: 'panel',
            html: '<table width="100%" border="0" cellspacing="0" cellpadding="0"><tr><td><img src=" res/error_occured.png " /></td><td align="right"><a href="#" onclick="jfm_request(\'reqStatusSticky\',\'RequestPool29\',\'&pageid=DashVDPI\')"><img src="res/sticky.png" /></a></td></tr></table>',
            border: false
        },
        {
            bodyStyle: 'background:#dfe8f6;',
            id: 'Panel112',
            xtype: 'panel',
            html: '<div style=" border:#A3B6EE 1px solid;background:#C1D2EC;padding:10px; "><table width="100%" border="0" cellspacing="1" cellpadding="1"><tr><td><b>0000-00-00 00:00:00</b></td><td rowspan="2" align="right"><a href="#" onclick="jfm_request(\'reqStatusPanel\',\'DashboardPanel110\',\'&alarmid=1\')" >Critical</a>	</td></tr><tr><td>Core Switch:Mesin 1 (31):test1</td></tr></table></div><div style=" border:#A3B6EE 1px solid;background:#D3E2F7;padding:10px; "><table width="100%" border="0" cellspacing="1" cellpadding="1"><tr><td><b>0000-00-00 00:00:00</b></td><td rowspan="2" align="right"><a href="#" onclick="jfm_request(\'reqStatusPanel\',\'DashboardPanel110\',\'&alarmid=2\')" >Mayor</a>	</td></tr><tr><td>Core Switch:Mesin 1 (404):yuyu</td></tr></table></div>',
            border: false
        }],
        xtype: 'form',
        method: 'GET',
        border: false,
        url: 'Dispatch?_obj=DashboardPanel110&_evt=reqSubmitted'
    }
}).show();