var iR= new GlideRecord('incident');
iR.initialize();
gs.info('Benne');
iR.caller_id="David Miller";
iR.short_description="Proba cucc";
var eredmeny = iR.insert();
gs.info(iR.number);