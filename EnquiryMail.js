$(function () {



    $("#contactForm input, #contactForm textarea").jqBootstrapValidation({
        preventSubmit: true,
        submitError: function ($form, event, errors) {
        },
        submitSuccess: function ($form, event) {
            event.preventDefault();

            var sell = "";
            var buy = "";
            $('input[name="buyitems"]:checked').each(function () {
                sell += this.value + ',';
            });

            $('input[name="sellitems"]:checked').each(function () {
                buy += this.value + ',';
            });

            var name = $("input#name").val();
            var email = $("input#email").val();
            var mobile = $("input#mobile").val();
            var message = $("textarea#message").val();

            $this = $("#sendMessageButton");
            $this.prop("disabled", true);

            $.ajax({
                url: "mail/EnquiryMail.php",
                type: "POST",
                data: {
                    name: name,
                    email: email,
                    mobile: mobile,
                    buyitems: buy,
                    sellitems: sell,
                    message: message
                },
                cache: false,
                success: function (result) {
                    debugger;
                    const obj = JSON.parse(result);

                    var rescd = obj.Code;
                    var restxt = obj.Res;

                    var msg = "";
                    if (rescd == '1')
                        msg = "Thank You Contacting Us We Will Response You As Early Possible.";
                    else
                        msg = "Sorry " + name + ", it seems that our mail server is not responding. Please try again later!";

                    alert(msg);
                    $('#contactForm').trigger("reset");
                },
                error: function () {
                    alert('Sorry ' + name + ', it seems that our mail server is not responding. Please try again later!');
                    $('#contactForm').trigger("reset");
                },
                complete: function () {
                    setTimeout(function () {
                        $this.prop("disabled", false);
                    }, 1000);
                }
            });
        },
        filter: function () {
            return $(this).is(":visible");
        },
    });

    $("a[data-toggle=\"tab\"]").click(function (e) {
        e.preventDefault();
        $(this).tab("show");
    });
});

$('#name').focus(function () {
    $('#success').html('');
});
