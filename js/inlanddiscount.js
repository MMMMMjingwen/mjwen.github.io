/**
 * Created by 马靖文 on 2018/1/20.
 */


$.ajax({
  type:'get',
  url:'http://localhost:9090/api/getinlanddiscount',
  datatype:'json',
  success:function(info){
    console.log(info);
    $('.list').html(template('tpl',info))
  }
})