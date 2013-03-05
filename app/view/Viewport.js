Ext.define('Whs.view.Viewport', {
	extend : 'Ext.container.Container',
	renderTo : Ext.getBody(),
	height : 440,
	layout : 'border',
	items : [ {
		title : 'World Hertage Sites',
		xtype : 'gridpanel',
		store : 'WhsStore',
		region : 'center',
		flex : 1,
		columns : [ {
			xtype : 'gridcolumn',
			dataIndex : 'site',
			text : 'Site',
			flex : 1
		} ]
	} ]
});