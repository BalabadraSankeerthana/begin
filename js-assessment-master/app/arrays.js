.exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item)
var i, c=0;
for(i=0;i<arr.length;i++)
{
  if(arr[i]==3)
  {
    c=5;
    return i;
  }
}
  if(c!=5)
  return -1
}
  },

  sum: function(arr) {
    var i,add=0;
    for ( i = 0; i < arr.length; i++)
     {
      add=add+arr[i];
    }

    return add;

  },

  remove: function(arr, item) {

  },

  removeWithoutCopy: function(arr, item) {

  },

  append: function(arr, item) {
var arr2=[];
arr2=arr.push(item);
return arr2;
  },

  truncate: function(arr) {
var arr2=[];
arr2=arr.pop();
return arr2;
  },

  prepend: function(arr, item) {
var i,arr2=[];
arr2=arr.unshift(item);
return arr2;
  },

  curtail: function(arr) {
var arr2=[];
arr2=arr.shift();
return arr2;
  },

  concat: function(arr1, arr2) {
    var i;
    for(i=0;i<arr1.length;i++)
    {
      arr1.push(arr2[i]);
    }
return arr1;
  },

  insert: function(arr, item, index) {

  },

  count: function(arr, item) {
var cnt=0;
for(i=0,i<arr.length,i++)
{
  if(arr[i]==item)
  {
    cnt=cnt+1;
  }

}
return cnt;
  },

  duplicates: function(arr) {
    var arr2=[];
    for(i=0;i<arr.length;i++)
{
  if(arr[i]==arr[i+1])
  arr2.push(arr[i]);
}
return arr2;
  },

  square: function(arr) {
var i, arr2=[];
for(i=0;i<arr.length;i++)
{
  arr2[i]=arr[i]*arr[i];
}
return arr2;
  },

  findAllOccurrences: function(arr, target) {
var i;
for(i=0;i<arr.length;i++)
{
  if(arr[i]==target)
  return i;

  }
};
