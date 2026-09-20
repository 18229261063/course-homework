// 注册页面js
// 点注册按钮的时候把表单数据收集起来打印到控制台

var regForm = document.getElementById("regForm");

regForm.addEventListener("submit", function (e) {
    // 不让页面跳转刷新
    e.preventDefault();

    // 先判断两次密码是不是一样
    var pwd = document.getElementById("password").value;
    var pwd2 = document.getElementById("confirmPassword").value;
    if (pwd != pwd2) {
        alert("两次密码不一样，请重新填！");
        return;
    }

    // 一个一个取值
    var username = document.getElementById("username").value;
    var gender = document.querySelector("input[name=gender]:checked");
    var birthday = document.getElementById("birthday").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var city = document.getElementById("city").value;
    var bio = document.getElementById("bio").value;

    // 兴趣爱好是多选的，要循环判断checked
    var hobbyArr = [];
    var hobbys = document.getElementsByName("hobby");
    for (var i = 0; i < hobbys.length; i++) {
        if (hobbys[i].checked == true) {
            hobbyArr.push(hobbys[i].value);
        }
    }

    // 头像只打印文件名
    var avatar = document.getElementById("avatar");
    var avatarName = "没上传";
    if (avatar.files.length > 0) {
        avatarName = avatar.files[0].name;
    }

    console.log("用户名：" + username);
    console.log("密码：" + pwd);
    console.log("性别：" + (gender == null ? "没选" : gender.value));
    console.log("出生日期：" + birthday);
    console.log("邮箱：" + email);
    console.log("手机号：" + phone);
    console.log("兴趣爱好：" + hobbyArr.join(","));
    console.log("头像：" + avatarName);
    console.log("所在城市：" + city);
    console.log("个人简介：" + bio);
    console.log("====== 以上就是收集到的表单数据 ======");

    alert("注册信息收集成功！按F12打开控制台可以看到数据");
});
