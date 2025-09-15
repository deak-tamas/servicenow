console.log('indult');
var iR= new GlideRecord('incident');
iR.addQuery('short_description','CONTAINS','email');
iR.query();
if (iR.hasNext()) {
   gs.info("van " + iR.number);
}
while (iR.Next()) {
	console.log('Bement');
   gs.info('Incindentek :' + iR.priority);
}
var a='ServiceNow';
gs.log(a,'Proba');
console.log('vege');
