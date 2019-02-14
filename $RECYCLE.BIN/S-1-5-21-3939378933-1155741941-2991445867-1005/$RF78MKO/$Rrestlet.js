function newfunction(request,response)
{
$$.SearchRecord('salesorder',null,[['email','contains','@sachdeva'], 'AND' ,['status', 'is', 'SalesOrd:F']],[new $.SearchColumn('internalid'),new $.SearchColumn('amount')]);
var result = [];
for(var i=0;i<rec.length;i++)
  {
    result.push({
      order_number: rec[i].id,
      amount: rec[i].getValue('amount')
    })
}
return result;
}
