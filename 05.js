gs.addInfoMessage('indult');
var iR = new GlideRecord('incident');
iR.addQuery('priority',1);
iR.setvalue('short_description','prio egy');
iR.update();
