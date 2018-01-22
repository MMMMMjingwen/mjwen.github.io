/**
 * Created by 马靖文 on 2018/1/21.
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

var brandtitleid = getSearch('brandtitleid')
//console.log(brandtitleid);



  //渲染第一个
  $.ajax({
    type:'get',
    url:'http://localhost:9090/api/getbrand',
    data:{
      brandtitleid:brandtitleid
    },
    success:function(info){
      console.log(info)
      $('.alls').html(template('tpl',info))
    }

  })


//渲染第二个
$.ajax({

      type:'get',
      url:'http://localhost:9090/api/getbrandproductlist',
      data:{
        brandtitleid:brandtitleid,
        pagesize:3
      },
      success:function(info){
        console.log(info);
        $('.information1').html(template('tpl2',info))
        var  productId=$('.star').data('productid')
        console.log(productId);
         render(productId)
      }
    })


function render(productId){
  //渲染第三个
  $.ajax({
    type:'get',
    url:'http://localhost:9090/api/getmoneyctrl',
    datatype:'json',
    data:{
      productid:productId,
    },
    success:function(info){
      //console.log(info);

      var jjj = info.result[0]
      //$('.pjLists').html(template('tpl3',info))
      //再请求一个ajax 获得标题
      $.ajax({
        type:'get',
        url:'http://localhost:9090/api/getproductcom',
        data:{
          productid :productId,
        },
        success:function(info){
           info.jjj = jjj;
          console.log(info)
          $('.pjLists').html(template('tpl3',info))
        }

      })
    }

  })
}





//var promise = new Promise(ajax1).then(ajax2);
//console.log(promise);






