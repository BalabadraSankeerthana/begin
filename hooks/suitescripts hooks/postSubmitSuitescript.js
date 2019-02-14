function postSubmitSuitescript(options) {
    nlapiLogExecution('Debug', 'Object options of postSubmit', JSON.stringify(options));
    var response = [{
            id: 143756,
            statusCode: 200,
            errors: []
            data: {
                id: 143757
            },
            ignored:false,
        }]

    if (options.responseData[0].statusCode == 200) {
        var id = options.responseData[0].id

        var sale1 = new $R({
            nlobjRecordType: 'salesorder',
            nlobjFieldIds:
            {
                entity: id
            },
            nlobjSublistIds: {
                item: [{
                    item: 27429,
                    quantity: '4',
                    amount: '40'
                }]
            }
        })
        response[0].statusCode = options.responseData[0].statusCode
        var salesid = sale1.save();
        $$.logExecution('debug', 'sales order recrd suuussfully', 'salesid=' + salesid);
    }
    nlapiLogExecution('Debug', 'postSubmitlog', response);
   return response
}