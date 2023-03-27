const map = new Map();

$(".yy").click(function()
{
    $("#end1").fadeOut(200);
    $("#log").fadeOut(200);
    $("#sign").slideDown(600);
});
$(".zz").click(function()
{
    $("#male").prop('checked', false);
    $("#female").prop('checked', false);
    document.querySelector("#username").value="";
    document.querySelector("#mail").value="";
    document.querySelector("#pswrd").value="";
    document.querySelector("#pswrd2").value="";
    document.querySelector("#age").value="";
    $("#end1").fadeIn(1700);
    $("#sign").slideUp(600);
    $("#log").fadeIn(1700);
});
function checkSign()
{
    var uname = document.querySelector("#username").value;
    var mail = document.querySelector("#mail").value;
    var pswrd = document.querySelector("#pswrd").value;
    var pswrd2 = document.querySelector("#pswrd2").value;
    var age = document.querySelector("#age").value;

    if(uname!=="" && (pswrd!=="" && pswrd2!=="" && pswrd2===pswrd) && mail.endsWith("@gmail.com") && (age >= 1 && age <= 99) && (document.getElementById("male").checked || document.getElementById("female").checked))
    {
        alert("you are signed in!");
        map.set(mail,pswrd);
        $("#male").prop('checked', false);
        $("#female").prop('checked', false);
        document.querySelector("#username").value="";
        document.querySelector("#mail").value="";
        document.querySelector("#pswrd").value="";
        document.querySelector("#pswrd2").value="";
        document.querySelector("#age").value="";
        $("#sign").slideUp(600);
        $("#end1").fadeIn(1700);
        $("#log").fadeIn(1700);
    }
    else
    {
        if(uname==="")
        {
            alert("enter username");
        }
        else if(mail==="" || !mail.endsWith("@gmail.com"))
        {
            alert("Incorrect email");
        }

        else if(pswrd==="" && pswrd2==="")
        {
            alert("enter passwords");
        }
        else if(pswrd!== pswrd2)
        {
            alert("passwords are not equal")
        }
        else if(age==="")
        {
            alert("enter your age");
        }
        else if(age < 1 || age > 99)
        {
            alert("incorrect age");
        }
        else if(!document.getElementById("male").checked && !document.getElementById("female").checked)
        {
            alert("enter your gender");
        }
    }
}
function checkLog()
{
    var email = document.querySelector("#email").value;
    var pass = document.querySelector("#password").value;
    if(email==="" || pass==="")
    {
        alert("please enter information")
    }
    else
    {
        if(map.has(email))
        {
            if(map.get(email)===pass) location.href="https://youtu.be/dQw4w9WgXcQ?t=0";
            else alert("Wrong Password")
        }
        else
        {
            alert("No such user with this name");
        }
    }
}

function login_php(mail , pswrd)
{
    $.ajax({
        url : '',
        type : 'POST',
        data : {username : mail , password : pswrd},
        success : function (result)
        {
            console.log("yeeah");
        },
        error : function (result)
        {
            console.log("error");
        }
    })
}