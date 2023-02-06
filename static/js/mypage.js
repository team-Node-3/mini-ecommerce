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