$(document).ready(function () {
  showMypage();
});

function showMypage() {
  $.ajax({
    type: 'GET',
    url: '/mypage',
    date: {},
    success: function(response){
      const user = response['user']
      $("#nickName").attr("value",user.nickname)
      $("#password").attr("value",user.password)
      $("#name").attr("value",user.name)
      $("#email").attr("value",user.email)
      $("#phone").attr("value",user.phone)
      $("#address").attr("value",user.address)
    }
  })
}

function modifyMypage() {
  $.ajax({
    type: 'PATCH',
    url: '/mypage',
    data: {
      password: $('#password').val(),
      email: $('#email').val(),
      phone: $('#phone').val(),
      address: $('#address').val()
    },
    success: function(response) {
      console.log(response)
    }
  })
}