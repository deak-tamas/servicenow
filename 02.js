gs.addInfoMessage('indult');
var iR = new GlideRecord('incident');
iR.addQuery('category','software');
iR.query;
while (iR.next()) {
   gs.info('Incindentek :' + iR.number);
}
gs.info('vege');
