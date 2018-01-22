/**
 * Created by 马靖文 on 2018/1/21.
 */

$.ajax({
  type:'get',
  url:'http://localhost:9090/api/getsitenav',
  success:function(info){
    console.log(info);
    $('.brand').html(template('tpl',info))
  }
})
