function beforeSubmit()
{
var company=$$.get('companyname');
var email=$$.get('email');
var phone=$$.get('phone');

var newrec=new $R(
{
nlobjRecordType:'customrecord493',
nlobjFieldIds:
{
name:"b,
email:"buoyancy@jsh.com",
phone:928329309
}
});
var newrecrd=newrec.save();
$$.logExecution('debug','saved custom recrd suuussfully','newrecdid='+newrecrd);
}
