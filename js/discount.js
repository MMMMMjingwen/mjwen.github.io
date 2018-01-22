/**
 * Created by 马靖文 on 2018/1/20.
 */


function  getseachobj(){
  var search=decodeURI(location.search)
  //console.log(search);
  search=search.slice(1)
  //console.log(search);
  var arr=search.split('&')
  //console.log(arr);
  var obj={};
  for(var i = 0; i < arr.length; i++) {
    var  k=arr[i].split('=')[0];
    //console.log(k);
    var v=arr[i].split('=')[1]
    //console.log(v);
    obj[k]=v
  }
  return obj
}

function getSearch(key){
  return  this.getseachobj()[key]
}

getSearch()

var productid= getSearch('productid')


$.ajax({
   type:'get',
  url:'http://localhost:9090/api/getdiscountproduct',
   data:{
     productid:productid,
   },
   success:function(info){
    console.log(info);
     $('.big').html(template('tpl',info))
  }
})