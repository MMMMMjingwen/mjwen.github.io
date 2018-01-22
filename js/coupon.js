/**
 * Created by 马靖文 on 2018/1/20.
 */
$.ajax({
  type:'get',
  url:'http://localhost:9090/api/getcoupon',
  success:function(info){
    console.log(info);
    $('.mmb-main').html(template('tpl',info))
  }
})