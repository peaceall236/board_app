function sendErrorReport(form) {
	var user = document.querySelector("#user_name").value;
	var mail = document.querySelector("#user_mail").value;
	var issue = document.querySelector("#issue").value;
	if (user !== "" && mail !== "" && issue !== "") {
		if (user.length > 7 && mail.length > 7 && issue.length > 12) {
			if (mail.includes("@") && mail.includes(".")) {
				var formData = new FormData(form);
				var xhr = new XMLHttpRequest();
				xhr.open("POST", form.action, true);
				xhr.onreadystatechange = function (e) {
					if (xhr.readyState == 4 && xhr.status == 200) {
						alert_info(xhr.responseText);
					}
				};
				xhr.send(formData);
			}
			else {
				alert_info("Invalid Email address.");
			}
		}
		else {
			alert_info("Enter Information correctly");
		}
	}
    else {
    	alert_info("Fill The Form First.");
    }
    return false;
}

function alert_info(text) {
    document.querySelector("#send_info").innerHTML = text;
    document.querySelector("#send_info").style.display = "block";
    setTimeout(function () {
        document.querySelector("#send_info").style.display = "none";
    }, 3000);
}

function chage_menu(li) {
    var ul = document.querySelector("#menuu");
    var lis = ul.getElementsByTagName("li");
    for (var i = 0; i < lis.length; i++) {
        var li_class = lis[i].classList;
        if (li_class.contains("active")) {
            li_class.remove("active");
        }
    }
    li.classList.add("active");
}
