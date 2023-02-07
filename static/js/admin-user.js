$(document).ready(function() {
  showUser()
});

function showUser() {

  $.ajax({
    type: 'GET',
    url: '/admin/users',
    data:{},
    success: function (response) {
      let rows = response['user']
      for (let i = 0; i < rows.length; i++) {
        let nickname = rows[i]['nickname'];
        let name = rows[i]['name'];
        let email = rows[i]['email'];
        
        let temp_html = `
        <div class="usercontent_wrap">
          <div class="userlist_wrap">
            <div class="userAll_wrap">
              <div class="user_label">
                <label>닉네임</label>
                <label>이름</label>
                <label>이메일</label>
              </div>
      
              <div class="user_input">
                <input class="user_info" id="nickname" type="text" value="${nickname}" readonly>
                <input class="user_info" id="name" type="text" value="${name}" readonly>
                <input class="user_info" id="email" type="text" value="${email}" readonly>
              </div>
            </div>
    
            <div class="user_button">
              <button class="userbtn">삭제</button>
            </div>
    
  
          </div>
  
        </div>

        `
        $('.user_wrap').append(temp_html);
      };
    }
  })

}
