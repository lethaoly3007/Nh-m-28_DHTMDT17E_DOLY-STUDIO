function goingay(){
    alert('Chức năng này chỉ hỗ trợ trên thiết bị điện thoại!!')
}

function dangkytin(){
    let ten = document.getElementById('yName').value
    let errorname = document.getElementById('errorname')
    if(ten.trim()==''){
        errorname.innerHTML = '* Phải nhập tên để đăng ký'
        return false
    }
    errorname.innerHTML = ''

    let e1 = document.getElementById('yEmail').value
    let errore1 = document.getElementById('errore1')
    let rbe1 = /^[a-zA-Z0-9._%+-]+\@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    if(e1.trim()==''){
        errore1.innerHTML = '* Không được rỗng'
        return false
    }
    if(!rbe1.test(e1)){
        errore1.innerHTML = '* Phải nhập đúng form abc@abc.abc'
        return false
    }
    errore1.innerHTML = ''
    alert('Cảm ơn bạn đã tin tưởng chúng tôi! Chúng tôi sẽ cập nhật tin tức thường xuyên để bạn theo dõi')
    window.location.href = 'home.html'
    return true  
}
function muagoi(){
    document.getElementById('submitBooking').addEventListener('click', function() {
        let name = document.getElementById('ten').value;
        let email = document.getElementById('e1').value;
        let phone = document.getElementById('sdt').value;
        let date = document.getElementById('ngay').value;
        let goi = document.getElementById('chon').value;
        let ph = document.getElementById('phanhoi').value;
    
        alert('Đặt lịch thành công' + '\nSố điện thoại: ' + phone  + "\nTên người đặt: " + name + "\nNgày chụp: " + date + "\nGói chụp: " + goi + "\nChúng tôi sẽ liên lạc đến bạn trong vài phút!!");
        $('#bookingModal').modal('hide');
      });
}