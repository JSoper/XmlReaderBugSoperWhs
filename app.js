Ext.Loader.setConfig({
	enabled : true
});

Ext.application({
	name : 'Whs',
	stores : [ 'WhsStore' ],
	autoCreateViewport : true
});
