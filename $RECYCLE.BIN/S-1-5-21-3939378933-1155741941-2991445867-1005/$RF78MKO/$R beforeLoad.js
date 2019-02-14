function setCustname(type,form)
{
form.addButton('custpage_custombutton','Click me',script())

  function script()
  {

   var customform = $$.getFieldText('customform');
   $$.set('custentity3',customform);

}

nlapiLogExecution('debug','beforeLoad');
}
