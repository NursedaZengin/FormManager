$(document).ready(function () {

 

    $(":input").inputmask();

    $(".btn-field").click(function () {
        var n = $(this).parent().parent().find(".FieldName").val();
        var r = $(this).parent().parent().find(".Required option:selected").val();
        var d = $(this).parent().parent().find(".DataType option:selected").val();
        if (n == "") {
            Swal.fire({
                icon: 'warning',
                title: 'Dikkat!',
                text: "Alan adı boş geçilemez.",
                confirmButtonText: 'Tamam',
            });
        }
        else {
            $(this).parent().parent().parent().parent().find(".fields")
                .append("<div class='form-fields'><div class='col-md-4'><label for='FieldName' class=' col-form-label'>Alan Adı</label><input type='text' placeholder='Alan Adı' class='form-control FieldName' value='" + n + "'  name='FieldName'></div><div class='col-md-4'><label for='DataType' class='col-form-label'>Alan Veri Tipi</label><select name='DataType' class='DataType form-control'><option value='0'" + (d == 0 ? "selected" : "") + " class='card-color'>STRING</option><option value='1'" + (d == 1 ? "selected" : "") + " class='card-color'>NUMBER</option></select></div><div class='col-md-3'><label for='Required' class='col-form-label'>Alan Durumu</label><select  name='Required' class='Required form-control'><option value='0'" + (r == 0 ? "selected" : "") + "  class='card-color'>Zorunlu Değil</option><option value='1' " + (r == 1 ? "selected" : "") +" class='card-color'>Zorunlu</option></select></div><div class='col-md-1 display-center'><button type='button' class='btn btn-danger btn-field-remove'>x</button></div></div>");
            $(this).parent().parent().find(".FieldName").val("");
            $(this).parent().parent().find(".Required").val(0);
            $(this).parent().parent().find(".DataType").val(0);
        }
    });

    $("body").on("click", ".btn-field-remove",function () {
        $(this).parent().parent().removeClass('form-fields');
        $(this).parent().parent().html("");
    });


    //form
    $("#form-add").submit(function (e) {
        e.preventDefault();
        var name = $("#Name").val();
        if (name.length < 2) {
            Swal.fire({
                icon: 'warning',
                title: 'Dikkat!',
                text: 'Lütfen Forma bir isim verin!',
                confirmButtonText: "Ok"
            });
            return false;

        }
        if ($('#form-add >div.modal-body.card-color > div > div:nth-child(3) > div > .fields').find('div.form-fields').length == 0) {
            Swal.fire({
                icon: 'warning',
                title: 'Dikkat!',
                text: 'Lütfen en az bir tane form alanı ekleyin!',
                confirmButtonText: "Ok"
            });
            return false;
        }
        var fd = new FormData(this);
        fd.append('Name', name);
        fd.append('Description', $("#Description").val());
        var list = $(this).find("div.modal-body.card-color > div > div:nth-child(3) > div > .fields>.form-fields");
        var details = [];
        $.each(list, function (i, d) {
            details.push(
                {
                    fieldname: $(d).find(".FieldName").val(),
                    datatype: $(d).find(".DataType").val(),
                    required: $(d).find(".Required").val()

                }
            );
        });
        fd.append('Fields', JSON.stringify(details));
        $.ajax({
            type: "POST",
            url: "/forms/add/save",
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
                        window.location.href = '/';
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




//end form





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
                url: "/user-manager/delete",
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
        url: "/user-manager/add/save",
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
                    window.location.href = '/user-manager';
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
        url: "/user-manager/update/save",
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
                    window.location.href = '/user-manager';
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