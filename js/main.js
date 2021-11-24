$(document).ready(function() {
    // set-bg-img
    $(".set-bg-img").css('background', function() {
        var bg = ('url(' + $(this).data("image-src") + ')');
        return bg;
    });

    // btnToTop
    var btnToTop = document.getElementById("return-to-top");
    btnToTop.style.opacity = '0'

    window.onscroll = function() { scrollFunction() };

    function scrollFunction() {
        if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700) {
            btnToTop.style.opacity = '1'
        } else {
            btnToTop.style.opacity = '0'
        }
    }


    $('.navbar-nav .nav-link').on('click', function() {
        $("#nav-icon").click()
    })

})

function DownloadFile(fileName) {
    //Set the File URL.
    var url = "/images/" + fileName;

    $.ajax({
        url: url,
        cache: false,
        xhr: function() {
            var xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function() {
                if (xhr.readyState == 2) {
                    if (xhr.status == 200) {
                        xhr.responseType = "blob";
                    } else {
                        xhr.responseType = "text";
                    }
                }
            };
            return xhr;
        },
        success: function(data) {
            //Convert the Byte Data to BLOB object.
            var blob = new Blob([data], { type: "application/octetstream" });

            //Check the Browser type and download the File.
            var isIE = false || !!document.documentMode;
            if (isIE) {
                window.navigator.msSaveBlob(blob, fileName);
            } else {
                var url = window.URL || window.webkitURL;
                link = url.createObjectURL(blob);
                var a = $("<a />");
                a.attr("download", fileName);
                a.attr("href", link);
                $("body").append(a);
                a[0].click();
                $("body").remove(a);
            }
        }
    });
};