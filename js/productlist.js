/**
 * Created by 马靖文 on 2018/1/19.
 */
//categoryid=0&category=电视&pageid=1

//获取地址栏的参数
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

var categoryid = getSearch('categoryid')


//渲染列表数据

function renderData(pageid){
  var pageid=pageid || 1;
  $.ajax({
    type:'get',
    url:'http://localhost:9090/api/getcategorybyid',
    data:{
      categoryid:categoryid,
    },
    success:function(info){
      console.log(info);
      $('.setion').html(template ('navTpl',info ))
      $.ajax({
        type:'get',
        url:'http://localhost:9090/api/getproductlist',
        data:{
          categoryid:categoryid,
          pageid:pageid,
        },
        success:function(info){
          console.log(info);

          $('.data').html(template('tpl',info))
        }
      })
    }
  })
}
renderData()





//点击当前页面
  $('#currentage').on('click',function(){
    var current= $("[name='page']").val()
    console.log(current);
    var pageid=current;
    console.log(pageid);
    renderData(+pageid)
  })





//点击上一页 触发事件
//$('.prev').on('click',function(){
//  var current= $("[name='page']").val()
//  //console.log(curr);
//  var pageid=+current-1;
//  console.log(pageid);
//
//  if(pageid==0){
//    mui.toast('当前已经是最前面的一页了！！')
//    return
//  }
//  renderData(+pageid)
//})

//点击下一页触发事件

     var current
//$('.next').on('click',function(){
//     renderCurent()
//      current++
//     //current = $("[name='page']").val()
//
//   //console.log(current);
//
//
//
//  //var string=curres.toString()
//  //console.log(string);
//
//  //console.log(curres);
//
//
//  //var pageid=+current+1
//  //console.log(pageid);
//  //   //current++
//  //console.log(pageid);
//  //renderData(pageid)
//
//  //console.log(pageid);
//
//
//  //if(pageid==3){
//  //  mui.toast('当前已经是最后面的一页了')
//  //}
//
//
//})