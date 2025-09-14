console.log('indult');
var iR= new GlideRecord('incident');
iR.addQuery('category','software');
iR.query;
while (iR.Next()) {
	console.log('Bement');
   gs.info('Incindentek :' + iR.priority);
}
console.log('vege');
