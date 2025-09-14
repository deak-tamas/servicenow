console.log('indult');
var iR= new GlideRecord('incident');
iR.initialize();
iR.caller_id="David Miller";
iR.short_description="Proba cucc";
iR.insert();