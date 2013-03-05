Ext.define('Whs.store.WhsStore', {
	extend : 'Ext.data.Store',
	autoLoad : true,
	fields : [ {
		name : 'site'
	} ],
	
	// A jsonp request can only get back javascript 
	// You have to use AJAX to read XML   :(
	proxy : {
		type : 'ajax',
		// type: 'jsonp',
		url : 'data/Fails.xml',
		// url : 'data/Works.xml',

		 // type: 'jsonp',
		 // url: 'http://whc.unesco.org/en/list/xml/',

		reader : {
			type : 'xml',
			root : 'query',
			record : 'row'
		}
	}
});