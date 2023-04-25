$("#loginform").submit(function (e) {
    e.preventDefault();
    var user = $(".Username").val();
    var Password = $(".Password").val();
    if ($(".Username").val().length == 0) {
        $("#error-user").html('Kullanıcı adı alanı boş geçilemez!');
        $("#error-user").css("display", "block");
        $(".UserName").css('border', "2px solid rgb(244 220 226)");
        if ($(".Password").val().length == 0) {
            $("#error-password").html('Şifre alanı boş geçilemez!');
            $("#error-password").css("display", "block");
            $(".Password").css('border', "2px solid rgb(244 220 226)");
            return false;
        }
        else if ($(".Password").val().length < 4) {
            $("#error-password").css("display", "block");
            $(".Password").css('border', "2px solid rgb(244 220 226)");
            $("#error-password").html('Şifreniz en az 4 karakterden oluşur.');
            return false;
        }
        else {
            $("#error-password").html('');
            $(".Password").css('border', "0px");
            $("#error-password").css("display", "none");
        }
    }
    else if ($(".Username").val().length < 2) {
        $("#error-user").html('Kullanıcı adı en az 2 karakter olmalıdır!');
        $("#error-user").css("display", "block");
        $(".UserName").css('border', "2px solid rgb(244 220 226)");
    }
    else {
        $("#error-user").html('');
        $(".UserName").css('border', "0px");
        $("#error-user").css("display", "none");
    }

    if ($(".Password").val().length == 0) {
        $("#error-password").css("display", "block");
        $("#error-password").html('Şifre alanı boş geçilemez!');
        $(".Password").css('border', "2px solid rgb(244 220 226)");
        return false;
    }
    else if ($(".Password").val().length < 4) {
        $("#error-password").css("display", "block");
        $(".Password").css('border', "2px solid rgb(244 220 226)");
        $("#error-password").html('Şifreniz en az 4 karakterden oluşur.');
        return false;
    }
    else {
        $("#error-password").html('');
        $(".Password").css('border', "0px");
        $("#error-password").css("display", "none");
    }

    var fd = new FormData();
    fd.append("Username", user);
    fd.append("Password", Password);
    $.ajax({
        url: "/Login/Check",
        type: "post",
        contentType: false,
        cache: false,
        processData: false,
        data: fd,
        success: function (d) {
            if (d["code"] == "200") {
                const Toast = Swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.addEventListener('mouseenter', Swal.stopTimer)
                        toast.addEventListener('mouseleave', Swal.resumeTimer)
                    }
                })
                Toast.fire({
                    icon: 'success',
                    title: d["msg"]
                })
                setTimeout(function () {
                    window.location.href = '/Home/Index';
                }, 1500);
            } else {
                Swal.fire({
                    text: d["msg"],
                    icon: "error",
                    buttonsStyling: !1,
                    confirmButtonText: "Tamam",
                    customClass: { confirmButton: "btn btn-primary" },
                }).then((result) => {
                    location.reload();
                })
            }
        },
        error: function (d) {
            Swal.fire({
                text: "Error.",
                icon: "error",
                buttonsStyling: !1,
                confirmButtonText: "Tamam",
                customClass: { confirmButton: "btn btn-primary" },
            });
        }
    });
});