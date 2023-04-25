$(document).ready(function () {


    _UrlArr = location.pathname.split("/");
    _HrefTab = _UrlArr[2];
    $(".nav .nav-item a").removeClass("active");
    $(".nav .nav-item a[name=" + _HrefTab + "]").addClass("active");

    $("#langStatus").change(function () {
        if ($(this).val() == 1) {
            $(this).addClass("active");
            $(this).removeClass("passive");
        } else {
            $(this).addClass("passive");
            $(this).removeClass("active");
        }
    });


    //teklif form
        $("#form-offer-edit").submit(function (e) {
        var p = this;
        e.preventDefault();
        var fd = new FormData(this);
        $.ajax({
            type: "POST",
            url: "/panel/form-offer/edit/save",
            data: fd,
            contentType: false,
            cache: false,
            processData: false,
            success: function (data) {
                if (data.code == "200") {
                    Swal.fire({
                        icon: 'success',
                        title: 'Başarılı!',
                        text: data["message"],
                        confirmButtonText: 'Tamam',
                    });
                    window.location.href = '/panel/form-offer';
                } else {
                    Swal.fire({
                        icon: 'warning',
                        title: 'Hay Aksi...',
                        text: data["message"],
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

    $(".offer-message-delete").click(function () {
        var id = $(this).attr("data-id");
        Swal.fire({
            title: 'Mesaj silinecek!',
            text: 'Onaylıyor musunuz?',
            icon: 'warning',
            confirmButtonText: 'Sil',
            showCancelButton: true,
        }).then((result) => {
            if (result.isConfirmed) {
                $.ajax({
                    url: "/panel/form-offer/delete",
                    method: "POST",
                    data: { id: id },
                    success: function (data) {
                        if (data["code"] == "200") {
                            Swal.fire({
                                title: 'Başarılı !',
                                showConfirmButton: true,
                                icon: 'success',
                            }).then((result) => {
                                location.reload();
                            })

                        } else {
                            Swal.fire({
                                title: "Hata !",
                                text: data["message"],
                                showCancelButton: true,
                                icon: 'error',
                            }).then((result) => {
                                location.reload();
                            })
                        }
                    },
                    error: function (d) {
                        Swal.fire({
                            icon: 'warning',
                            title: 'Hay Aksi...',
                            text: "İşlem başarısız",
                            confirmButtonText: 'Tamam',
                        });
                    }
                });
            }
        })
    });

    //end teklif form

    //iletişim formu
    $("#form-contact-edit").submit(function (e) {
        var p = this;
        e.preventDefault();
        var fd = new FormData(this);
        $.ajax({
            type: "POST",
            url: "/panel/form-contact/edit/save",
            data: fd,
            contentType: false,
            cache: false,
            processData: false,
            success: function (data) {
                if (data.code == "200") {
                    Swal.fire({
                        icon: 'success',
                        title: 'Başarılı!',
                        text: data["message"],
                        confirmButtonText: 'Tamam',
                    });
                    window.location.href = '/panel/form-contact';
                } else {
                    Swal.fire({
                        icon: 'warning',
                        title: 'Hay Aksi...',
                        text: data["message"],
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

    $(".contact-message-delete").click(function () {
        var id = $(this).attr("data-id");
        Swal.fire({
            title: 'Mesaj silinecek!',
            text: 'Onaylıyor musunuz?',
            icon: 'warning',
            confirmButtonText: 'Sil',
            showCancelButton: true,
        }).then((result) => {
            if (result.isConfirmed) {
                $.ajax({
                    url: "/panel/form-contact/delete",
                    method: "POST",
                    data: { id: id },
                    success: function (data) {
                        if (data["code"] == "200") {
                            Swal.fire({
                                title: 'Başarılı !',
                                showConfirmButton: true,
                                icon: 'success',
                            }).then((result) => {
                                location.reload();
                            })

                        } else {
                            Swal.fire({
                                title: "Hata !",
                                text: data["message"],
                                showCancelButton: true,
                                icon: 'error',
                            }).then((result) => {
                                location.reload();
                            })
                        }
                    },
                    error: function (d) {
                        Swal.fire({
                            icon: 'warning',
                            title: 'Hay Aksi...',
                            text: "İşlem başarısız",
                            confirmButtonText: 'Tamam',
                        });
                    }
                });
            }
        })
    });

    //end iletişim form
    $("#form-edit").submit(function (e) {
        e.preventDefault();
        var fd = new FormData(this);

        $.ajax({
            type: "POST",
            url: "/panel/form-manager/edit/save",
            data: fd,
            contentType: false,
            cache: false,
            processData: false,
            success: function (d) {
                if (d["code"] == 200) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Başarılı!',
                        text: d["message"],
                        confirmButtonText: 'Tamam',
                    });
                    setTimeout(function () {
                        window.location.href = '/panel/form-manager?langId=' + fd.get('LangId');
                    }, 1500);

                } else {
                    Swal.fire({
                        icon: 'warning',
                        title: 'Hay Aksi...',
                        text: d["message"],
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

    //referans
    $("#referance-add").submit(function (e) {
        e.preventDefault();
        var fd = new FormData(this);
        $.ajax({
            type: "POST",
            url: "/panel/referance-manager/add/save",
            data: fd,
            contentType: false,
            cache: false,
            processData: false,
            success: function (d) {
                if (d["code"] == 200) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Başarılı!',
                        text: d["message"],
                        confirmButtonText: 'Tamam',
                    });
                    setTimeout(function () {
                        window.location.href = '/panel/referance-manager?langId=' + fd.get("LangId");
                    }, 1500);

                } else {
                    Swal.fire({
                        icon: 'warning',
                        title: 'Hay Aksi...',
                        text: d["message"],
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
    $("#referance-edit").submit(function (e) {
        e.preventDefault();
        var fd = new FormData(this);

        $.ajax({
            type: "POST",
            url: "/panel/referance-manager/edit/save",
            data: fd,
            contentType: false,
            cache: false,
            processData: false,
            success: function (d) {
                if (d["code"] == 200) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Başarılı!',
                        text: d["message"],
                        confirmButtonText: 'Tamam',
                    });
                    setTimeout(function () {
                        window.location.href = '/panel/referance-manager?langId=' + fd.get('LangId');
                    }, 1500);

                } else {
                    Swal.fire({
                        icon: 'warning',
                        title: 'Hay Aksi...',
                        text: d["message"],
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
    $(".referance-delete").click(function () {
        var id = $(this).attr("data-id");
        Swal.fire({
            title: 'Referans silinecek!',
            text: 'Onaylıyor musunuz?',
            showDenyButton: true,

            confirmButtonText: `Sil`,
            denyButtonText: `İptal`,
        }).then((result) => {
            if (result.isConfirmed) {
                $.ajax({
                    type: "POST",
                    url: "/panel/referance-manager/delete",
                    data: { id: id },
                    success: function (d) {
                        if (d["code"] == 200) {
                            Swal.fire({
                                icon: 'success',
                                title: 'Başarılı!',
                                text: d["message"],
                                confirmButtonText: 'Tamam',
                            });
                            setTimeout(function () {
                                window.location.reload();
                            }, 1500);

                        } else {
                            Swal.fire({
                                icon: 'warning',
                                title: 'Hay Aksi...',
                                text: d["message"],
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

    //end referans


    //proje
    $(".project-delete").click(function () {
        var id = $(this).attr("data-id");
        Swal.fire({
            title: 'Proje silinecek!',
            text: 'Onaylıyor musunuz?',
            showDenyButton: true,
            confirmButtonText: `Sil`,
            denyButtonText: `İptal`,
        }).then((result) => {
            if (result.isConfirmed) {
                $.ajax({
                    type: "POST",
                    url: "/panel/project-manager/delete",
                    data: { id: id },
                    success: function (d) {
                        if (d["code"] == 200) {
                            Swal.fire({
                                icon: 'success',
                                title: 'Başarılı!',
                                text: d["message"],
                                confirmButtonText: 'Tamam',
                            });
                            setTimeout(function () {
                                window.location.reload();
                            }, 1500);

                        } else {
                            Swal.fire({
                                icon: 'warning',
                                title: 'Hay Aksi...',
                                text: d["message"],
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
    $("#project-edit").submit(function (e) {
        e.preventDefault();
        var fd = new FormData(this);
        $.ajax({
            type: "POST",
            url: "/panel/project-manager/edit/save",
            data: fd,
            contentType: false,
            cache: false,
            processData: false,
            success: function (d) {
                if (d["code"] == 200) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Başarılı!',
                        text: d["message"],
                        confirmButtonText: 'Tamam',
                    });
                    setTimeout(function () {
                        window.location.href = '/panel/project-manager?langId=' + fd.get("LangId");
                    }, 1500);

                } else {
                    Swal.fire({
                        icon: 'warning',
                        title: 'Hay Aksi...',
                        text: d["message"],
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
    $("#project-add").submit(function (e) {
        e.preventDefault();
        var fd = new FormData(this);
        $.ajax({
            type: "POST",
            url: "/panel/project-manager/add/save",
            data: fd,
            contentType: false,
            cache: false,
            processData: false,
            success: function (d) {
                if (d["code"] == 200) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Başarılı!',
                        text: d["message"],
                        confirmButtonText: 'Tamam',
                    });
                    setTimeout(function () {
                        window.location.href = '/panel/project-manager?langId=' + fd.get("LangId");
                    }, 1500);

                } else {
                    Swal.fire({
                        icon: 'warning',
                        title: 'Hay Aksi...',
                        text: d["message"],
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
    //end proje


    //team 
    $("#team-add").submit(function (e) {
        e.preventDefault();
        var fd = new FormData(this);
        $.ajax({
            type: "POST",
            url: "/panel/team-manager/add/save",
            data: fd,
            contentType: false,
            cache: false,
            processData: false,
            success: function (d) {
                if (d["code"] == 200) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Başarılı!',
                        text: d["message"],
                        confirmButtonText: 'Tamam',
                    });
                    setTimeout(function () {
                        window.location.href = '/panel/team-manager?langId=' + fd.get("LangId");
                    }, 1500);

                } else {
                    Swal.fire({
                        icon: 'warning',
                        title: 'Hay Aksi...',
                        text: d["message"],
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

    $(".team-delete").click(function () {
        var id = $(this).attr("data-id");
        Swal.fire({
            title: 'Ekip silinecek!',
            text: 'Onaylıyor musunuz?',
            showDenyButton: true,
            confirmButtonText: `Sil`,
            denyButtonText: `İptal`,
        }).then((result) => {
            if (result.isConfirmed) {
                $.ajax({
                    type: "POST",
                    url: "/panel/team-manager/delete",
                    data: { id: id },
                    success: function (d) {
                        if (d["code"] == 200) {
                            Swal.fire({
                                icon: 'success',
                                title: 'Başarılı!',
                                text: d["message"],
                                confirmButtonText: 'Tamam',
                            });
                            setTimeout(function () {
                                window.location.reload();
                            }, 1500);

                        } else {
                            Swal.fire({
                                icon: 'warning',
                                title: 'Hay Aksi...',
                                text: d["message"],
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

    $("#team-edit").submit(function (e) {
        e.preventDefault();
        var fd = new FormData(this);
        $.ajax({
            type: "POST",
            url: "/panel/team-manager/edit/save",
            data: fd,
            contentType: false,
            cache: false,
            processData: false,
            success: function (d) {
                if (d["code"] == 200) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Başarılı!',
                        text: d["message"],
                        confirmButtonText: 'Tamam',
                    });
                    setTimeout(function () {
                        window.location.href = '/panel/team-manager?langId=' + fd.get("LangId");
                    }, 1500);

                } else {
                    Swal.fire({
                        icon: 'warning',
                        title: 'Hay Aksi...',
                        text: d["message"],
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
    //end team

    //navbar

    $("#navbar-edit").submit(function (e) {
        e.preventDefault();
        var fd = new FormData(this);
        $.ajax({
            type: "POST",
            url: "/panel/navbar-manager/edit/save",
            data: fd,
            contentType: false,
            cache: false,
            processData: false,
            success: function (d) {
                if (d["code"] == 200) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Başarılı!',
                        text: d["message"],
                        confirmButtonText: 'Tamam',
                    });
                    setTimeout(function () {
                        window.location.href = '/panel/navbar-manager?langId=' + fd.get("LangId");
                    }, 1500);

                } else {
                    Swal.fire({
                        icon: 'warning',
                        title: 'Hay Aksi...',
                        text: d["message"],
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
    $("#navbar-add").submit(function (e) {
        e.preventDefault();
        var fd = new FormData(this);
        $.ajax({
            type: "POST",
            url: "/panel/navbar-manager/add/save",
            data: fd,
            contentType: false,
            cache: false,
            processData: false,
            success: function (d) {
                if (d["code"] == 200) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Başarılı!',
                        text: d["message"],
                        confirmButtonText: 'Tamam',
                    });
                    setTimeout(function () {
                        window.location.href = '/panel/navbar-manager?langId=' + fd.get("LangId");
                    }, 1500);

                } else {
                    Swal.fire({
                        icon: 'warning',
                        title: 'Hay Aksi...',
                        text: d["message"],
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

    $(".navbar-delete").click(function () {
            var id = $(this).attr("data-id");
            Swal.fire({
                title: 'Navbar silinecek!',
                text: 'Onaylıyor musunuz?',
                showDenyButton: true,
                confirmButtonText: `Sil`,
                denyButtonText: `İptal`,
            }).then((result) => {
                if (result.isConfirmed) {
                    $.ajax({
                        type: "POST",
                        url: "/panel/navbar-manager/delete",
                        data: { id: id },
                        success: function (d) {
                            if (d["code"] == 200) {
                                Swal.fire({
                                    icon: 'success',
                                    title: 'Başarılı!',
                                    text: d["message"],
                                    confirmButtonText: 'Tamam',
                                });
                                setTimeout(function () {
                                    window.location.reload();
                                }, 1500);

                            } else {
                                Swal.fire({
                                    icon: 'warning',
                                    title: 'Hay Aksi...',
                                    text: d["message"],
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
    //end navbar


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
                    url: "/panel/user-manager/delete",
                    data: { id: id },
                    success: function (d) {
                        if (d["code"] == 200) {
                            Swal.fire({
                                icon: 'success',
                                title: 'Başarılı!',
                                text: d["message"],
                                confirmButtonText: 'Tamam',
                            });
                            setTimeout(function () {
                                window.location.reload();
                            }, 1500);

                        } else {
                            Swal.fire({
                                icon: 'warning',
                                title: 'Hay Aksi...',
                                text: d["message"],
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
            url: "/panel/user-manager/add/save",
            data: fd,
            contentType: false,
            cache: false,
            processData: false,
            success: function (d) {
                if (d["code"] == 200) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Başarılı!',
                        text: d["message"],
                        confirmButtonText: 'Tamam',
                    });
                    setTimeout(function () {
                        window.location.href = '/panel/user-manager';
                    }, 1500);

                } else {
                    Swal.fire({
                        icon: 'warning',
                        title: 'Hay Aksi...',
                        text: d["message"],
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
            url: "/panel/user-manager/edit/save",
            data: fd,
            contentType: false,
            cache: false,
            processData: false,
            success: function (d) {
                if (d["code"] == 200) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Başarılı!',
                        text: d["message"],
                        confirmButtonText: 'Tamam',
                    });
                    setTimeout(function () {
                        window.location.href = '/panel/user-manager';
                    }, 1500);

                } else {
                    Swal.fire({
                        icon: 'warning',
                        title: 'Hay Aksi...',
                        text: d["message"],
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
    //Foto galeri
    $("#foto-add").submit(function (e) {
        e.preventDefault();
        var fd = new FormData(this);

        $.ajax({
            type: "POST",
            url: "/panel/foto-galeri/ekle/kaydet",
            data: fd,
            contentType: false,
            cache: false,
            processData: false,
            success: function (d) {
                if (d["code"] == 200) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Başarılı!',
                        text: d["message"],
                        confirmButtonText: 'Tamam',
                    });
                    setTimeout(function () {
                        window.location.href = '/panel/foto-galeri?langId=' + fd.get("LangId");
                    }, 1500);

                } else {
                    Swal.fire({
                        icon: 'warning',
                        title: 'Hay Aksi...',
                        text: d["message"],
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

    $(".imageChange").change(function () {

        var fd = new FormData(document.getElementById("foto-edit"));
        fd.append("id", $(this).attr("data-id"));
        fd.append("image", $(this)[0].files[0]);
        $.ajax({
            type: "POST",
            url: "/panel/foto-galeri/duzenle/kaydet",
            data: fd,
            contentType: false,
            cache: false,
            processData: false,
            success: function (d) {
                if (d["code"] == "200") {
                    Swal.fire({
                        icon: 'success',
                        title: 'Başarılı!',
                        text: d["message"],
                        confirmButtonText: 'Tamam',
                    });
                    setTimeout(function () {
                        window.location.reload();
                    }, 1500);

                } else {
                    Swal.fire({
                        icon: 'warning',
                        title: 'Hay Aksi...',
                        text: "Hata",
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


    $(".foto-delete").click(function () {
        var id = $(this).attr("data-id");
        Swal.fire({
            title: 'Fotoğraf silinecek!',
            text: 'Onaylıyor musunuz?',
            showDenyButton: true,
            confirmButtonText: `Sil`,
            denyButtonText: `İptal`,
        }).then((result) => {
            if (result.isConfirmed) {
                $.ajax({
                    type: "POST",
                    url: "/panel/foto-galeri/sil",
                    data: { id: id },
                    success: function (d) {
                        if (d["code"] == 200) {
                            Swal.fire({
                                icon: 'success',
                                title: 'Başarılı!',
                                text: d["message"],
                                confirmButtonText: 'Tamam',
                            });
                            setTimeout(function () {
                                window.location.reload();
                            }, 1500);

                        } else {
                            Swal.fire({
                                icon: 'warning',
                                title: 'Hay Aksi...',
                                text: d["message"],
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
    //end Foto galeri

    //General  Settings 
    $("#generalSet-edit").submit(function (e) {
        e.preventDefault();
        var fd = new FormData(this);
        $("#generalSet-edit button[type=submit]").attr("disabled", true);
        $.ajax({
            xhr: function () {
                var xhr = new window.XMLHttpRequest();
                xhr.upload.addEventListener("progress", function (evt) {
                    if (evt.lengthComputable) {
                        var percentComplete = evt.loaded / evt.total;
                        console.log(percentComplete);
                        $('.progress').css({
                            width: percentComplete * 100 + '%'
                        });
                        if (percentComplete === 1) {
                            $('.progress').addClass('hide');
                        }
                    }
                }, false);
                xhr.addEventListener("progress", function (evt) {
                    if (evt.lengthComputable) {
                        var percentComplete = evt.loaded / evt.total;
                        console.log(percentComplete);
                        $('.progress').css({
                            width: percentComplete * 100 + '%'
                        });
                    }
                }, false);
                return xhr;
            },
            type: "POST",
            url: "/panel/setting-manager/edit/save",
            data: fd,
            contentType: false,
            cache: false,
            processData: false,
            success: function (d) {
                if (d["code"] == "200") {
                    Swal.fire({
                        icon: 'success',
                        title: 'Başarılı!',
                        text: d["message"],
                        confirmButtonText: 'Tamam',
                    });
                    setTimeout(function () {
                        window.location.reload();
                    }, 1500);

                } else {
                    Swal.fire({
                        icon: 'warning',
                        title: 'Hay Aksi...',
                        text: "Hata",
                        confirmButtonText: 'Tamam',
                    });
                }
                $("#generalSet-edit button[type=submit]").removeAttr("disabled");
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

    //end General  Settings 

    $("#general-header-form").submit(function (e) {
        e.preventDefault();
        var fd = new FormData(this);
        fd.append('LangId', $("#langId").val());
        $.ajax({
            type: "POST",
            url: "/panel/header-kaydet",
            data: fd,
            contentType: false,
            cache: false,
            processData: false,
            success: function (d) {
                if (d["code"] == 200) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Başarılı!',
                        text: d["message"],
                        confirmButtonText: 'Tamam',
                    });

                } else {
                    Swal.fire({
                        icon: 'warning',
                        title: 'Hay Aksi...',
                        text: d["message"],
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




    $("#general-form-set").submit(function (e) {
        e.preventDefault();
        var fd = new FormData(this);
        fd.append('LangId', $("#langId").val());
        $.ajax({
            type: "POST",
            url: "/panel/form-kaydet",
            data: fd,
            contentType: false,
            cache: false,
            processData: false,
            success: function (d) {
                if (d["code"] == 200) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Başarılı!',
                        text: d["message"],
                        confirmButtonText: 'Tamam',
                    });

                } else {
                    Swal.fire({
                        icon: 'warning',
                        title: 'Hay Aksi...',
                        text: d["message"],
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


    $("#general-premium-product").submit(function (e) {
        e.preventDefault();
        var fd = new FormData(this);
        fd.append('LangId', $("#langId").val());
        $.ajax({
            type: "POST",
            url: "/panel/premium-product-kaydet",
            data: fd,
            contentType: false,
            cache: false,
            processData: false,
            success: function (d) {
                if (d["code"] == 200) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Başarılı!',
                        text: d["message"],
                        confirmButtonText: 'Tamam',
                    });

                } else {
                    Swal.fire({
                        icon: 'warning',
                        title: 'Hay Aksi...',
                        text: d["message"],
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



    $("#general-aS3luButtons").submit(function (e) {
        e.preventDefault();
        var fd = new FormData(this);
        fd.append('LangId', $("#langId").val());
        $.ajax({
            type: "POST",
            url: "/panel/uclu-butonlar",
            data: fd,
            contentType: false,
            cache: false,
            processData: false,
            success: function (d) {
                if (d["status"] == 200) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Başarılı!',
                        text: d["message"],
                        confirmButtonText: 'Tamam',
                    });

                } else {
                    Swal.fire({
                        icon: 'warning',
                        title: 'Hay Aksi...',
                        text: d["message"],
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






    $("#general-footer-set").submit(function (e) {
        e.preventDefault();
        var fd = new FormData(this);
        fd.append('LangId', $("#langId").val());
        $.ajax({
            type: "POST",
            url: "/panel/footer-ayarlari",
            data: fd,
            contentType: false,
            cache: false,
            processData: false,
            success: function (d) {
                if (d["status"] == 200) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Başarılı!',
                        text: d["message"],
                        confirmButtonText: 'Tamam',
                    });

                } else {
                    Swal.fire({
                        icon: 'warning',
                        title: 'Hay Aksi...',
                        text: d["message"],
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




    $("#general-info-sett").submit(function (e) {
        e.preventDefault();
        var fd = new FormData(this);
        fd.append('LangId', $("#langId").val());
        $.ajax({
            type: "POST",
            url: "/panel/bilgilendirme-yazi-ayarlari",
            data: fd,
            contentType: false,
            cache: false,
            processData: false,
            success: function (d) {
                if (d["status"] == 200) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Başarılı!',
                        text: d["message"],
                        confirmButtonText: 'Tamam',
                    });

                } else {
                    Swal.fire({
                        icon: 'warning',
                        title: 'Hay Aksi...',
                        text: d["message"],
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






    $("#general-product-page-sett").submit(function (e) {
        e.preventDefault();
        var fd = new FormData(this);
        fd.append('LangId', $("#langId").val());
        $.ajax({
            type: "POST",
            url: "/panel/urun-sabit-sayfasi-yazilari",
            data: fd,
            contentType: false,
            cache: false,
            processData: false,
            success: function (d) {
                if (d["status"] == 200) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Başarılı!',
                        text: d["message"],
                        confirmButtonText: 'Tamam',
                    });

                } else {
                    Swal.fire({
                        icon: 'warning',
                        title: 'Hay Aksi...',
                        text: d["message"],
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






    $("#general-about-us-sett").submit(function (e) {
        e.preventDefault();
        var fd = new FormData(this);
        fd.append('LangId', $("#langId").val());
        $.ajax({
            type: "POST",
            url: "/panel/hakkimızda-sayfasi-yazilari",
            data: fd,
            contentType: false,
            cache: false,
            processData: false,
            success: function (d) {
                if (d["status"] == 200) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Başarılı!',
                        text: d["message"],
                        confirmButtonText: 'Tamam',
                    });

                } else {
                    Swal.fire({
                        icon: 'warning',
                        title: 'Hay Aksi...',
                        text: d["message"],
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





    $("#slider-add").submit(function (e) {
        e.preventDefault();
        var fd = new FormData(this);
        fd.append('LangId', $("#langId").val());
        $.ajax({
            type: "POST",
            url: "/panel/slider-manager/add/save",
            data: fd,
            contentType: false,
            cache: false,
            processData: false,
            success: function (d) {
                if (d["code"] == 200) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Başarılı!',
                        text: d["message"],
                        confirmButtonText: 'Tamam',
                    });
                    setTimeout(function () {
                        window.location.href = '/panel/slider-manager';
                    }, 1500);

                } else {
                    Swal.fire({
                        icon: 'warning',
                        title: 'Hay Aksi...',
                        text: d["message"],
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



    $("#slider-edit").submit(function (e) {
        e.preventDefault();
        var fd = new FormData(this);

        $.ajax({
            type: "POST",
            url: "/panel/slider-manager/edit/save",
            data: fd,
            contentType: false,
            cache: false,
            processData: false,
            success: function (d) {
                if (d["code"] == 200) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Başarılı!',
                        text: d["message"],
                        confirmButtonText: 'Tamam',
                    });
                    setTimeout(function () {
                        window.location.href = '/panel/slider-manager?langId=' + fd.get('LangId');
                    }, 1500);

                } else {
                    Swal.fire({
                        icon: 'warning',
                        title: 'Hay Aksi...',
                        text: d["message"],
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
    $(".slider-delete").click(function () {
        var id = $(this).attr("data-id");
        Swal.fire({
            title: 'Slider silinecek!',
            text: 'Onaylıyor musunuz?',
            showDenyButton: true,

            confirmButtonText: `Sil`,
            denyButtonText: `İptal`,
        }).then((result) => {
            if (result.isConfirmed) {
                $.ajax({
                    type: "POST",
                    url: "/panel/slider-manager/delete",
                    data: { id: id },
                    success: function (d) {
                        if (d["code"] == 200) {
                            Swal.fire({
                                icon: 'success',
                                title: 'Başarılı!',
                                text: d["message"],
                                confirmButtonText: 'Tamam',
                            });
                            setTimeout(function () {
                                window.location.reload();
                            }, 1500);

                        } else {
                            Swal.fire({
                                icon: 'warning',
                                title: 'Hay Aksi...',
                                text: d["message"],
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

    /*ürün*/
    $("#product-add").submit(function (e) {
        e.preventDefault();
        var fd = new FormData(this);

        var imageList = $(".product-img");
        var imageArr = [];
        $(imageList).each(function (i, d) {
            imageArr.push(d.files[0]);
        });

        fd.append('LangId', $("#langId").val());
        fd.append('ImageList', imageArr);



        $.ajax({
            type: "POST",
            url: "/panel/urun/ekle/kaydet",
            data: fd,
            contentType: false,
            cache: false,
            processData: false,
            success: function (d) {
                if (d["code"] == 200) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Başarılı!',
                        text: d["message"],
                        confirmButtonText: 'Tamam',
                    });
                    setTimeout(function () {
                        window.location.href = '/panel/urunler';
                    }, 1500);

                } else {
                    Swal.fire({
                        icon: 'warning',
                        title: 'Hay Aksi...',
                        text: d["message"],
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





    $("#product-edit").submit(function (e) {
        e.preventDefault();
        var fd = new FormData(this);

        var imageList = $(".product-img");
        var imageArr = [];
        $(imageList).each(function (i, d) {
            imageArr.push(d.files[0]);
        });


        fd.append('ImageList', imageArr);



        $.ajax({
            type: "POST",
            url: "/panel/urun/duzenle/kaydet",
            data: fd,
            contentType: false,
            cache: false,
            processData: false,
            success: function (d) {
                if (d["status"] == 200) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Başarılı!',
                        text: d["message"],
                        confirmButtonText: 'Tamam',
                    });
                    setTimeout(function () {
                        window.location.reload();
                    }, 1500);

                } else {
                    Swal.fire({
                        icon: 'warning',
                        title: 'Hay Aksi...',
                        text: d["message"],
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


    $(".product-delete").click(function () {

        var id = $(this).attr("data-id");
        Swal.fire({
            title: 'Ürün silinecek!',
            text: 'Onaylıyor musunuz?',
            showDenyButton: true,

            confirmButtonText: `Sil`,
            denyButtonText: `İptal`,
        }).then((result) => {
            if (result.isConfirmed) {
                $.ajax({
                    type: "POST",
                    url: "/panel/urun/sil",
                    data: { id: id },
                    success: function (d) {
                        if (d["status"] == 200) {
                            Swal.fire({
                                icon: 'success',
                                title: 'Başarılı!',
                                text: d["message"],
                                confirmButtonText: 'Tamam',
                            });
                            setTimeout(function () {
                                window.location.reload();
                            }, 1500);

                        } else {
                            Swal.fire({
                                icon: 'warning',
                                title: 'Hay Aksi...',
                                text: d["message"],
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




    /*ürün*/
    /*premium*/
    $("#premium-product-add").submit(function (e) {
        e.preventDefault();
        var fd = new FormData(this);
        fd.append('LangId', $("#langId").val());
        $.ajax({
            type: "POST",
            url: "/panel/premium-urunler/ekle/kaydet",
            data: fd,
            contentType: false,
            cache: false,
            processData: false,
            success: function (d) {
                if (d["status"] == 200) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Başarılı!',
                        text: d["message"],
                        confirmButtonText: 'Tamam',
                    });
                    setTimeout(function () {
                        window.location.href = '/panel/premium-urunler';
                    }, 1500);

                } else {
                    Swal.fire({
                        icon: 'warning',
                        title: 'Hay Aksi...',
                        text: d["message"],
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
    $("#premium-product-edit").submit(function (e) {
        e.preventDefault();
        var fd = new FormData(this);
        fd.append('LangId', $("#langId").val());
        $.ajax({
            type: "POST",
            url: "/panel/premium-urunler/duzenle/kaydet",
            data: fd,
            contentType: false,
            cache: false,
            processData: false,
            success: function (d) {
                if (d["status"] == 200) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Başarılı!',
                        text: d["message"],
                        confirmButtonText: 'Tamam',
                    });
                    setTimeout(function () {
                        window.location.href = '/panel/premium-urunler?langId=' + fd.get("LangId");
                    }, 1500);

                } else {
                    Swal.fire({
                        icon: 'warning',
                        title: 'Hay Aksi...',
                        text: d["message"],
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

    $(".premium-urunler-delete").click(function () {
        var id = $(this).attr("data-id");
        Swal.fire({
            title: 'Premium Ürünler Tanıtımı silinecek!',
            text: 'Onaylıyor musunuz?',
            showDenyButton: true,
            confirmButtonText: `Sil`,
            denyButtonText: `İptal`,
        }).then((result) => {
            if (result.isConfirmed) {
                $.ajax({
                    type: "POST",
                    url: "/panel/premium-urunler/sil",
                    data: { id: id },
                    success: function (d) {
                        if (d["status"] == 200) {
                            Swal.fire({
                                icon: 'success',
                                title: 'Başarılı!',
                                text: d["message"],
                                confirmButtonText: 'Tamam',
                            });
                            setTimeout(function () {
                                window.location.reload();
                            }, 1500);

                        } else {
                            Swal.fire({
                                icon: 'warning',
                                title: 'Hay Aksi...',
                                text: d["message"],
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




    /*Dil*/

    $("#lang-add").submit(function (e) {
        e.preventDefault();
        var fd = new FormData(this);
        $.ajax({
            type: "POST",
            url: "/panel/lang-manager/add/save",
            data: fd,
            contentType: false,
            cache: false,
            processData: false,
            success: function (d) {
                if (d["code"] == 200) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Başarılı!',
                        text: d["message"],
                        confirmButtonText: 'Tamam',
                    });
                    setTimeout(function () {
                        window.location.href = '/panel/lang-manager';
                    }, 1500);

                } else {
                    Swal.fire({
                        icon: 'warning',
                        title: 'Hay Aksi...',
                        text: d["message"],
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

    $("#dil-edit").submit(function (e) {
        e.preventDefault();
        var fd = new FormData(this);
        $.ajax({
            type: "POST",
            url: "/panel/lang-manager/edit/save",
            data: fd,
            contentType: false,
            cache: false,
            processData: false,
            success: function (d) {
                if (d["code"] == 200) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Başarılı!',
                        text: d["message"],
                        confirmButtonText: 'Tamam',
                    });
                    setTimeout(function () {
                        window.location.href = '/panel/lang-manager?langId=' + fd.get("Id");
                    }, 1500);

                } else {
                    Swal.fire({
                        icon: 'warning',
                        title: 'Hay Aksi...',
                        text: d["message"],
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


    $(".lang-delete").click(function () {
        var id = $(this).attr("data-id");
        Swal.fire({
            title: 'Dil silinecek!',
            text: 'Onaylıyor musunuz?',
            showDenyButton: true,
            confirmButtonText: `Sil`,
            denyButtonText: `İptal`,
        }).then((result) => {
            if (result.isConfirmed) {
                $.ajax({
                    type: "POST",
                    url: "/panel/lang-manager/delete",
                    data: { id: id },
                    success: function (d) {
                        if (d["code"] == 200) {
                            Swal.fire({
                                icon: 'success',
                                title: 'Başarılı!',
                                text: d["message"],
                                confirmButtonText: 'Tamam',
                            });
                            setTimeout(function () {
                                window.location.reload();
                            }, 1500);

                        } else {
                            Swal.fire({
                                icon: 'warning',
                                title: 'Hay Aksi...',
                                text: d["message"],
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
    //end dil


    /*Form
    $(".edit-form").click(function () {
        let dataId = $(this).attr("data-id");
        $.ajax({
            type: "GET",
            url: "/panel/form-manager/edit",
            contentType: "html",
            data: { id: dataId },
            cache: false,
            success: function (d) {

                $("#modal-default .modal-body").html(d);
                $("#modal-default").modal("show");


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


    $("body").on("submit", "#form-edit", function (e) {
        var p = this;
        e.preventDefault();
        var fd = new FormData(this);
        fd.append("Status", $(p).find("#Status").val());
        fd.append("Note", $(p).find("#Note").val());
        fd.append("id", $(p).find("#id").val());

        $.ajax({
            type: "POST",
            url: "/panel/form-yonetimi/duzenle/kaydet",
            data: fd,
            contentType: false,
            cache: false,
            processData: false,
            success: function (d) {
                if (d["code"] == 200) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Başarılı!',
                        text: d["message"],
                        confirmButtonText: 'Tamam',
                    });
                    window.location.reload();
                } else {
                    Swal.fire({
                        icon: 'warning',
                        title: 'Hay Aksi...',
                        text: d["message"],
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

    $(".form-delete").click(function () {
        var id = $(this).attr("data-id");
        Swal.fire({
            title: 'Form silinecek!',
            text: 'Onaylıyor musunuz?',
            showDenyButton: true,
            confirmButtonText: `Sil`,
            denyButtonText: `İptal`,
        }).then((result) => {
            if (result.isConfirmed) {
                $.ajax({
                    type: "POST",
                    url: "/panel/form-yonetimi/sil",
                    data: { id: id },
                    success: function (d) {
                        if (d["code"] == 200) {
                            Swal.fire({
                                icon: 'success',
                                title: 'Başarılı!',
                                text: d["message"],
                                confirmButtonText: 'Tamam',
                            });
                            setTimeout(function () {
                                window.location.reload();
                            }, 1500);

                        } else {
                            Swal.fire({
                                icon: 'warning',
                                title: 'Hay Aksi...',
                                text: d["message"],
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

    $(".edit-form").click(function () {
        let dataId = $(this).attr("data-id");
        $("#MainImage").attr('data-id', dataId);
        $.ajax({
            url: '/panel/form/getform',
            type: 'POST',
            data: {
                id: dataId
            },
            success: function (d) {
                $("#modal-default .modal-body").html(d);
                $("#modal-default").modal("show");
            },
            error: function () {
                Swal.fire({
                    icon: 'warning',
                    title: 'Hay Aksi...',
                    text: 'Form gönderilemiyor.',
                    confirmButtonText: 'Tamam',
                });
            }
        });
    });
    */


    $("body").on("click", ".form-update-button", function () {
        let id = $("body").find('#form-id').val();
        let notes = $("body").find('#Notes').val();
        let status = $("body").find('#Status').val();

        $.ajax({
            url: '/panel/form/update',
            type: 'POST',
            data: {
                id: id,
                Notes: notes,
                Status: status
            },
            success: function (d) {
                if (d["code"] == 200) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Başarılı!',
                        text: 'Form Gönderildi.',
                        confirmButtonText: 'Tamam',
                    });
                    setTimeout(function () { window.location.reload(); }, 1000);
                } else {
                    Swal.fire({
                        icon: 'warning',
                        title: 'Hay Aksi...',
                        text: 'Form gönderilemedi.',
                        confirmButtonText: 'Tamam',
                    });
                }
            },
            error: function () {
                Swal.fire({
                    icon: 'warning',
                    title: 'Hay Aksi...',
                    text: 'Form gönderilemiyor.',
                    confirmButtonText: 'Tamam',
                });
            }

        });


    });



















    /*Form*/
    //Kategori

    $("#categories-add").submit(function (e) {
        e.preventDefault();
        var fd = new FormData(this);

        $.ajax({
            type: "POST",
            url: "/panel/kategori/ekle/kaydet",
            data: fd,
            contentType: false,
            cache: false,
            processData: false,
            success: function (d) {
                if (d["status"] == 200) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Başarılı!',
                        text: d["msg"],
                        confirmButtonText: 'Tamam',
                    });
                    setTimeout(function () {
                        window.location.href = '/panel/kategoriler';
                    }, 750);

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

    $("#category-edit").submit(function (e) {
        e.preventDefault();
        var fd = new FormData(this);

        $.ajax({
            type: "POST",
            url: "/panel/kategori/duzenle/kaydet",
            data: fd,
            contentType: false,
            cache: false,
            processData: false,
            success: function (d) {
                if (d["status"] == 200) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Başarılı!',
                        text: d["msg"],
                        confirmButtonText: 'Tamam',
                    });
                    setTimeout(function () {
                        window.location.href = '/panel/kategoriler';
                    }, 750);

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

    $(".category-delete").click(function () {
        var id = $(this).attr("data-id");
        Swal.fire({
            icon: "info",
            title: 'Kategori Silinecek!',
            text: 'Onaylıyor musunuz?',
            showDenyButton: true,

            confirmButtonText: `Sil`,
            denyButtonText: `İptal`,
        }).then((result) => {
            if (result.isConfirmed) {
                $.ajax({
                    type: "POST",
                    url: "/panel/kategori/sil",
                    data: { id: id },
                    success: function (d) {
                        if (d["status"] == 200) {
                            Swal.fire({
                                icon: 'success',
                                title: 'Başarılı!',
                                text: d["message"],
                                confirmButtonText: 'Tamam',
                            });
                            setTimeout(function () {
                                window.location.reload();
                            }, 1500);

                        } else {
                            Swal.fire({
                                icon: 'warning',
                                title: 'Hay Aksi...',
                                text: d["message"],
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

    //Kategori


    //sss
    //$("#sss-add").submit(function (e) {
    //    e.preventDefault();
    //    var fd = new FormData(this);

    //    $.ajax({
    //        type: "POST",
    //        url: "/panel/sss/ekle/kaydet",
    //        data: fd,
    //        contentType: false,
    //        cache: false,
    //        processData: false,
    //        success: function (d) {
    //            if (d["status"] == 200) {
    //                Swal.fire({
    //                    icon: 'success',
    //                    title: 'Başarılı!',
    //                    text: d["msg"],
    //                    confirmButtonText: 'Tamam',
    //                });
    //                setTimeout(function () {
    //                    window.location.href = '/panel/sss';
    //                }, 750);

    //            } else {
    //                Swal.fire({
    //                    icon: 'warning',
    //                    title: 'Hay Aksi...',
    //                    text: d["msg"],
    //                    confirmButtonText: 'Tamam',
    //                });
    //            }

    //        },
    //        error: function () {
    //            Swal.fire({
    //                icon: 'warning',
    //                title: 'Hay Aksi...',
    //                text: "İşlem Başarısız",
    //                confirmButtonText: 'Tamam',
    //            });
    //        }
    //    });

    //});
    //sss

    $(".category-list").on("click", ".edit-cat", function () {
        var id = $(this).attr("data-id");
        var catNane = $(this).attr("data-name");
        var p = $(".category-add-edit");
        $(p).css("display", "block");
        $(p).find(".info-text ").html(catNane + " kategorisini düzenliyorsunuz.");
        $(p).find("#cat-add-edit-type").val(1);
        $(p).find(".cat-input").val(catNane);
        $(p).find("#category-add-edit-save").html("Düzenle");
        $(p).find("#category-add-edit-save").attr("data-catId", id);
    });
    $(".new-main-category").on("click", function () {
        var p = $(".category-add-edit");
        $(p).css("display", "block");
        $(p).find(".info-text ").html("Ana Kategori eklemektesiniz.");
        $(p).find("#cat-add-edit-type").val(0);
        $(p).find(".cat-input").attr("placeholder", "Kategori adı giriniz");
        $(p).find(".cat-input").val("");
        $(p).find("#category-add-edit-save").html("Ekle");
    });
    $(".category-list").on("click", ".add-sub-cat", function () {
        var id = $(this).attr("data-id");
        var catNane = $(this).attr("data-name");
        var p = $(".category-add-edit");
        $(p).css("display", "block");
        $(p).find(".info-text ").html(catNane + " kategorisine ALT KATEGORİ eklemektesiniz.");
        $(p).find("#cat-add-edit-type").val(2);
        $(p).find(".cat-input").val("");
        $(p).find(".cat-input").attr("placeholder", "Alt Kategori adı giriniz");
        $(p).find("#category-add-edit-save").html("Alt Kategori Ekle");
        $(p).find("#category-add-edit-save").attr("data-catId", id);
    });
    $(".category-list").on("click", ".get-category", function () {
        var t = this;
        var p = $(t).parent();
        if ($(t).find("i").hasClass("fa-plus")) {
            $(t).find("i").removeClass("fa-plus");
            $(t).find("i").addClass("fa-minus");
        } else {
            $(t).find("i").addClass("fa-plus");
            $(t).find("i").removeClass("fa-minus");
        }
        if ($(t).hasClass("show")) {
            $(p).find(".sub-category").toggle();
            return false;
        }

        $.ajax({
            url: "/panel/get-sub-category",
            type: "post",
            data: { Id: $(t).attr("data-id"), LangId: $("#LangId").val() },
            success: function (d) {
                $(t).find("i").removeClass("fa-plus");
                $(t).find("i").addClass("fa-minus");
                $(t).addClass("show");
                $(p).find(".sub-category").html(d);
            },
            error: function () {
                Swal.fire({
                    icon: 'error',
                    title: 'Hay Aksi!',
                    text: "Ana Kategori Eklenemedi.",
                    confirmButtonText: 'Tamam',
                });
            }
        });
    });


    $("#category-add-edit-save").on("click", function () {
        var t = this;
        $.ajax({
            url: "/panel/add-edit-category",
            type: "post",
            data: {
                cat_name: $("#cat-name").val(),
                editType: $("#cat-add-edit-type").val(),
                catId: $(t).attr("data-catid"),
                LangId: $("#LangId").val()
            },
            success: function (d) {
                Swal.fire({
                    icon: 'success',
                    title: 'Başarılı!',
                    text: d["message"],
                    confirmButtonText: 'Tamam',
                });
                if ($("#cat-add-edit-type").val() == "0") {

                    alert("ana kategori eklendi.");
                    $.ajax({
                        url: "/panel/get-sub-category",
                        type: "post",
                        data: { Id: $(t).attr("data-catid"), LangId: $("#LangId").val() },
                        success: function (d) {
                            $(".category-list").html(d);
                        },
                        error: function () {
                            Swal.fire({
                                icon: 'error',
                                title: 'Hay Aksi!',
                                text: "İşlem başarısız. Sayfayı yenileniz.",
                                confirmButtonText: 'Tamam',
                            });
                        }
                    });
                } else if ($("#cat-add-edit-type").val() == "1") {
                    alert(1);
                }
                else if ($("#cat-add-edit-type").val() == "2") {
                    alert("alt kategori eklendi.");
                    $.ajax({
                        url: "/panel/get-sub-category",
                        type: "post",
                        data: { Id: $(t).attr("data-catid"), LangId: $("#LangId").val() },
                        success: function (d) {
                            $(".get-category[data-id='" + $(t).attr("data-catid") + "']").parent().find(".sub-category").html(d);
                        },
                        error: function () {
                            Swal.fire({
                                icon: 'error',
                                title: 'Hay Aksi!',
                                text: "İşlem başarısız. Sayfayı yenileniz.",
                                confirmButtonText: 'Tamam',
                            });
                        }
                    });
                }





            },
            error: function () {
                Swal.fire({
                    icon: 'error',
                    title: 'Hay Aksi!',
                    text: "Kategori Eklenemedi.",
                    confirmButtonText: 'Tamam',
                });
            }
        });
    });



    $(".category-list").on("click", ".delete-cat", function () {
        var id = $(this).attr("data-id");
        var p = $(this).parent().parent();
        Swal.fire({
            title: 'Kategori silinecek!',
            text: 'Onaylıyor musunuz?',
            showDenyButton: true,
            confirmButtonText: `Sil`,
            denyButtonText: `İptal`,
        }).then((result) => {
            if (result.isConfirmed) {
                $.ajax({
                    type: "POST",
                    url: "/panel/delete-category",
                    data: { catId: id },
                    success: function (d) {
                        if (d["status"] == 200) {
                            Swal.fire({
                                icon: 'success',
                                title: 'Başarılı!',
                                text: d["message"],
                                confirmButtonText: 'Tamam',
                            });
                            $(p).remove();
                        } else {
                            Swal.fire({
                                icon: 'warning',
                                title: 'Hay Aksi...',
                                text: d["message"],
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








    $(".category-list").on("click", ".delete-cat", function () {
        var id = $(this).attr("data-id");
        var p = $(this).parent().parent();
        Swal.fire({
            title: 'Kategori silinecek!',
            text: 'Onaylıyor musunuz?',
            showDenyButton: true,
            confirmButtonText: `Sil`,
            denyButtonText: `İptal`,
        }).then((result) => {
            if (result.isConfirmed) {
                $.ajax({
                    type: "POST",
                    url: "/panel/delete-category",
                    data: { catId: id },
                    success: function (d) {
                        if (d["status"] == 200) {
                            Swal.fire({
                                icon: 'success',
                                title: 'Başarılı!',
                                text: d["message"],
                                confirmButtonText: 'Tamam',
                            });
                            $(p).remove();
                        } else {
                            Swal.fire({
                                icon: 'warning',
                                title: 'Hay Aksi...',
                                text: d["message"],
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


    //General  Settings 

    $("body").on("click", ".change-image", function () {
        $(this).parent().parent().find(".product-image").trigger("click");
    });
    $("body").on("change", ".product-image", function () {
        var fd = new FormData();
        fd.append("ProductId", $(this).attr("data-productId"));
        fd.append("FileId", $(this).attr("data-fileId"));
        fd.append("FileData", this.files[0]);

        $.ajax({
            url: "/panel/urunler/gorsel-degistir",
            type: "post",
            cache: false,
            contentType: false,
            processData: false,
            data: fd,
            success: function (d) {
                if (d["status"] == 200) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Başarılı!',
                        text: d["message"],
                        confirmButtonText: 'Tamam',
                    });
                    setTimeout(function () { window.location.reload(); }, 1500)
                } else {
                    Swal.fire({
                        icon: 'warning',
                        title: 'Hay Aksi...',
                        text: d["message"],
                        confirmButtonText: 'Tamam',
                    });
                }
            },
            error: function () {
            }
        });
    });





});




