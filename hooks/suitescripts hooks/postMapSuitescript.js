function postMapSuitescript(options)
{
    nlapiLogExecution('DEBUG', 'Post Map options', JSON.stringify(options));
    var responseData=[{
        data:{},
        errors:[]
    }]

   responseData[0].data=options.postMapData[0]

nlapiLogExecution('DEBUG','Post Map ResponseData', JSON.stringify(responseData));
return responseData;
}
