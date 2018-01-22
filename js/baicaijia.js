/**
 * Created by 马靖文 on 2018/1/20.
 */


  mui('.mui-scroll-wrapper').scroll({

    deceleration:0.0005,
    scrollX:true,

  })

$.ajax({
  type:'get',
  url:'http://localhost:9090/api/getbaicaijiatitle',
  success:function(info){
    //console.log(info);
    $('.nav').html(template('tpl',info))

  }
})



$('.nav').on('tap','.cart',function(){
  var titleId=$(this).data('id')
  //console.log(titleId);
  $.ajax({
    type:'get',
    url:'http://localhost:9090/api/getbaicaijiaproduct',
    data:{
      titleid:titleId,
    },
    success:function (info) {
      console.log(info);
      $('.big').html(template('tpl2',info))
    }
  })

})





