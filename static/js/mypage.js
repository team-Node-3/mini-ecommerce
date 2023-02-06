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
      $("#nickName").attr("value",user.nickName)
      $("#password").attr("value",user.pw)
      // $("#name").attr("value",user.)
      $("#email").attr("value",user.email)
      $("#phone").attr("value",user.PhoneNumber)
      $("#address").attr("value",user.address)
    }
  })
}

function modifyMypage() {
  $.ajax({
    type: 'PATCH',
    url: '/mypage',
    data: {
      pw: $('#password').val(),
      email: $('#email').val(),
      PhoneNumber: $('#phone').val(),
      address: $('#address').val()
    },
    success: function(response) {
      console.log(response)
    }
  })
}