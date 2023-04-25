$(document).ready(function () {

    var editor = ClassicEditor.create(document.querySelector('#CauseOfReturnCK'), {
        ckfinder: {
            uploadUrl: '/gorsel-yukle'
        }
    }).then(editor => {
        console.log(editor);
    })
        .catch(error => {
            console.error(editor);
        });

    $(":input").inputmask();
    //iade
    $(".return-delete").click(function () {
        var id = $(this).attr("data-id");
        Swal.fire({
            title: 'İade silinecek!',
            text: 'Onaylıyor musunuz?',
            showDenyButton: true,
            confirmButtonText: `Sil`,
            denyButtonText: `İptal`,
        }).then((result) => {
            if (result.isConfirmed) {
                $.ajax({
                    type: "POST",
                    url: "/home/return-manager/delete",
                    data: { id: id },
                    success: function (d) {
                        if (d["code"] == 200) {
                            Swal.fire({
                                icon: 'success',
                                title: 'Başarılı!',
                                text: d["msg"],
                                confirmButtonText: 'Tamam',
                            });
                            setTimeout(function () {
                                window.location.reload();
                            }, 1500);

                        } else {
                            Swal.fire({
                                icon: 'warning',
                                title: 'Hay Aksi...',
                                text: d["msg"],
                                confirmButtonText: 'Tamam',
                            });
                        }

                    },
                    error: function () {
                        Swal.fire({
                            icon: 'warning',
                            title: 'Hay Aksi...',
                            text: "İşlem Başarısız",
                            confirmButtonText: 'Tamam',
                        });
                    }
                });
            }
        })
    });
    $("#return-add").submit(function (e) {
        e.preventDefault();
        var fd = new FormData(this);
        fd.append('Date', $("#Date").val());
        $.ajax({
            type: "POST",
            url: "/home/return-manager/add/save",
            data: fd,
            contentType: false,
            cache: false,
            processData: false,
            success: function (d) {
                if (d["code"] == 200) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Başarılı!',
                        text: d["msg"],
                        confirmButtonText: 'Tamam',
                    });
                    setTimeout(function () {
                        window.location.href = '/home/return-manager';
                    }, 1500);

                } else {
                    Swal.fire({
                        icon: 'warning',
                        title: 'Hay Aksi...',
                        text: d["msg"],
                        confirmButtonText: 'Tamam',
                    });
                }

            },
            error: function () {
                Swal.fire({
                    icon: 'warning',
                    title: 'Hay Aksi...',
                    text: "İşlem Başarısız",
                    confirmButtonText: 'Tamam',
                });
            }
        });

    });




$("#return-edit").submit(function (e) {
    e.preventDefault();
    var fd = new FormData(this);
    fd.append('Date', $("#Date").val());
    $.ajax({
        type: "POST",
        url: "/home/return-manager/update/save",
        data: fd,
        contentType: false,
        cache: false,
        processData: false,
        success: function (d) {
            if (d["code"] == 200) {
                Swal.fire({
                    icon: 'success',
                    title: 'Başarılı!',
                    text: d["msg"],
                    confirmButtonText: 'Tamam',
                });
                setTimeout(function () {
                    window.location.href = '/home/return-manager';
                }, 1500);

            } else {
                Swal.fire({
                    icon: 'warning',
                    title: 'Hay Aksi...',
                    text: d["msg"],
                    confirmButtonText: 'Tamam',
                });
            }

        },
        error: function () {
            Swal.fire({
                icon: 'warning',
                title: 'Hay Aksi...',
                text: "İşlem Başarısız",
                confirmButtonText: 'Tamam',
            });
        }
    });

});
//end iade





//kullanıcı 
$(".user-delete").click(function () {
    var id = $(this).attr("data-id");
    Swal.fire({
        title: 'Kullanıcı silinecek!',
        text: 'Onaylıyor musunuz?',
        showDenyButton: true,
        confirmButtonText: `Sil`,
        denyButtonText: `İptal`,
    }).then((result) => {
        if (result.isConfirmed) {
            $.ajax({
                type: "POST",
                url: "/home/user-manager/delete",
                data: { id: id },
                success: function (d) {
                    if (d["code"] == 200) {
                        Swal.fire({
                            icon: 'success',
                            title: 'Başarılı!',
                            text: d["msg"],
                            confirmButtonText: 'Tamam',
                        });
                        setTimeout(function () {
                            window.location.reload();
                        }, 1500);

                    } else {
                        Swal.fire({
                            icon: 'warning',
                            title: 'Hay Aksi...',
                            text: d["msg"],
                            confirmButtonText: 'Tamam',
                        });
                    }

                },
                error: function () {
                    Swal.fire({
                        icon: 'warning',
                        title: 'Hay Aksi...',
                        text: "İşlem Başarısız",
                        confirmButtonText: 'Tamam',
                    });
                }
            });
        }
    })
});
$("#user-add").submit(function (e) {
    e.preventDefault();
    var fd = new FormData(this);
    $.ajax({
        type: "POST",
        url: "/home/user-manager/add/save",
        data: fd,
        contentType: false,
        cache: false,
        processData: false,
        success: function (d) {
            if (d["code"] == 200) {
                Swal.fire({
                    icon: 'success',
                    title: 'Başarılı!',
                    text: d["msg"],
                    confirmButtonText: 'Tamam',
                });
                setTimeout(function () {
                    window.location.href = '/home/user-manager';
                }, 1500);

            } else {
                Swal.fire({
                    icon: 'warning',
                    title: 'Hay Aksi...',
                    text: d["msg"],
                    confirmButtonText: 'Tamam',
                });
            }

        },
        error: function () {
            Swal.fire({
                icon: 'warning',
                title: 'Hay Aksi...',
                text: "İşlem Başarısız",
                confirmButtonText: 'Tamam',
            });
        }
    });

});


$("#user-edit").submit(function (e) {
    e.preventDefault();
    var fd = new FormData(this);
    $.ajax({
        type: "POST",
        url: "/home/user-manager/update/save",
        data: fd,
        contentType: false,
        cache: false,
        processData: false,
        success: function (d) {
            if (d["code"] == 200) {
                Swal.fire({
                    icon: 'success',
                    title: 'Başarılı!',
                    text: d["msg"],
                    confirmButtonText: 'Tamam',
                });
                setTimeout(function () {
                    window.location.href = '/home/user-manager';
                }, 1500);

            } else {
                Swal.fire({
                    icon: 'warning',
                    title: 'Hay Aksi...',
                    text: d["msg"],
                    confirmButtonText: 'Tamam',
                });
            }

        },
        error: function () {
            Swal.fire({
                icon: 'warning',
                title: 'Hay Aksi...',
                text: "İşlem Başarısız",
                confirmButtonText: 'Tamam',
            });
        }
    });

});
    //end kullanıcı



});