function preMapSuiteScript(options)
{
    nlapiLogExecution('Debug', 'Object Received', JSON.stringify(options));
   var responseObj=[];
   var obj= {}
   obj.data={}
   obj.data.companyname=options.data[0].company
  
   obj.data.subsidiary=options.data[0].subsidiary
   
  responseObj.push(obj)
  nlapiLogExecution('Debug','Object Response', JSON.stringify(responseObj));
  return responseObj;
}