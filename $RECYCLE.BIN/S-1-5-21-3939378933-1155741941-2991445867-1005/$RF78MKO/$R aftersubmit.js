function afterSubmit(type,form){
    var recid=$$.getRecordId();
    var loadrec=new $R({
    nlobjRecordType : "salesorder",
    id : recid
    });
    var a=[]
    a=loadrec.get('item');
    $$.sendEmail(13429,'xmen@celigo.com','please go through attachmnt',a,null,null,null,null);
    var file=$$.printRecord('TRANSACTION',recid,'PDF',a);
    $$.logExecution('debug','mail sent succussfully','recid',recid);
}



