gs.addInfoMessage('indult');
var iR = new GlideRecord('incident');
iR.addQuery('priority',1);
iR.query();
while (iR.next()) {
   gs.info('Incindentek :' + iR.number);
}
gs.info('vege')