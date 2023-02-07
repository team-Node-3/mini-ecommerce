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
      alert('수정이 완료되었습니다.');
      window.location.reload();
    }
  })
}

function deleteMypage() {
  $.ajax({
    type: 'DELETE',
    url: '/mypage',
    data: {},
    success: function(reponse) {
      alert('계정이 삭제되었습니다.')
      window.location.href = 'http://localhost:3000/';
    }
  })
}