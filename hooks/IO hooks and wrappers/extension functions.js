var _= require('lodash');
var expressobj={
    hooks:{
        preSaveFunction : function(options,callback)
            { var obj=[];
                var responseData={ data:[], errors:[]}
                for(var i=0;i<options.data.length;i++)
                {
                 
              obj=_.find(options.data[0][i],['id',23780])
              
            

                if(obj!='undefined')
                break;
                }
            //console.log(i)
             responseData.data.push(options.data[0][i]);
             //console.log(JSON.stringify(options.data));
               // console.log(JSON.stringify(responseData.data));
 
                return callback(null,responseData)
            },
            preMap : function(options,callback)
            {
               // console.log(JSON.stringify(options.data));
                
               var preResponseData=[{
                    data:[]
               }]

              preResponseData[0].data=options.data[0]
              
                //console.log('\n'+JSON.stringify(preResponseData[0]))
                return callback(null,preResponseData)
             },
             postMap: function(options,callback)
             {
               console.log(JSON.stringify(options.postMapData))
                var responseData=[{
                     data:[],
                     errors:[]
                 }]
                 var a={}
                 a.recordkind=options.postMapData[0].recordType;
                 a.kind=options.postMapData[0].Type; 
                 a.itemname=options.postMapData[0].Name;
                 a.itemid=options.postMapData[0].id;
                responseData[0].data.push(a);
                console.log(JSON.stringify(responseData))
                 callback(null,responseData)
             }
           
    },
    wrappers:
    {
        pingConnectionFunction : function (options, callback)
         {
           // console.log(options);
            var response= {
                statusCode: 200, errors:[]
            }
           callback(null,response)
        },
        inventoryitemFromNetsuite: function(options,callback)
        {
        //console.log('export wrapper',JSON.stringify(options));
            var response=
            {
                data:[{"itemid":"23780",
                "taxschedule":"Taxable",
                "subsidiary":"parent Company"}],
                errors:[],
                lastPage:true,
                state:""
            }
              callback(null,response)
        },
        
  
        importFunction: function(options,callback)
        {
            console.log('import wrapper',JSON.stringify(options))
            var response=[{
                statusCode: 200,
                id: "", 
                ignored: false,
                errors: []
            }]
           // console.log(options.postMapData);
            callback(null,response)

        }
    }
}  
           
               
    

module.exports=expressobj;