// ===== 注册表单数据收集脚本 =====
// 监听表单提交事件，将收集到的数据打印到 Console 面板
// 使用 Chrome DevTools (F12) 的 Console 面板可查看提交结果

// 等待 DOM 加载完成后再绑定事件
document.addEventListener("DOMContentLoaded", function () {
    // 获取注册表单元素
    var regForm = document.getElementById("regForm");

    // 监听表单的 submit 事件
    regForm.addEventListener("submit", function (event) {
        // 阻止表单默认提交行为（避免页面刷新导致数据丢失）
        event.preventDefault();

        // 先做前端校验：确认密码与密码是否一致
        var pwd = document.getElementById("password").value;
        var confirmPwd = document.getElementById("confirmPassword").value;
        if (pwd !== confirmPwd) {
            alert("两次输入的密码不一致，请重新填写！");
            return;
        }

        // 使用 FormData 对象收集表单数据（教材表单部分的知识扩展）
        var formData = new FormData(regForm);

        // 将 FormData 转换为普通对象，方便在 Console 中查看
        var dataObj = {};
        // 处理普通字段
        formData.forEach(function (value, key) {
            // 兴趣爱好 hobby 是多选，需要收集成数组
            if (dataObj[key]) {
                if (Array.isArray(dataObj[key])) {
                    dataObj[key].push(value);
                } else {
                    dataObj[key] = [dataObj[key], value];
                }
            } else {
                dataObj[key] = value;
            }
        });

        // 头像文件单独处理：只打印文件名，避免打印二进制内容
        var avatarInput = document.getElementById("avatar");
        if (avatarInput.files.length > 0) {
            var fileNames = [];
            for (var i = 0; i < avatarInput.files.length; i++) {
                fileNames.push(avatarInput.files[i].name);
            }
            dataObj["avatar"] = fileNames;
        } else {
            dataObj["avatar"] = "未上传";
        }

        // ===== 在 Console 中打印收集到的数据 =====
        console.log("%c====== 用户注册表单提交数据 ======", "color:#4a90d9; font-weight:bold; font-size:14px;");
        console.log("用户名：" + (dataObj.username || "（空）"));
        console.log("密码：" + "（已隐藏，长度 " + (dataObj.password ? dataObj.password.length : 0) + " 位）");
        console.log("确认密码：" + "（已隐藏）");
        console.log("性别：" + (dataObj.gender || "（未选择）"));
        console.log("出生日期：" + (dataObj.birthday || "（未填写）"));
        console.log("邮箱：" + (dataObj.email || "（空）"));
        console.log("手机号：" + (dataObj.phone || "（空）"));
        console.log("兴趣爱好：" + (Array.isArray(dataObj.hobby) ? dataObj.hobby.join("、") : (dataObj.hobby || "（无）")));
        console.log("头像：" + (Array.isArray(dataObj.avatar) ? dataObj.avatar.join(", ") : dataObj.avatar));
        console.log("所在城市：" + (dataObj.city || "（未选择）"));
        console.log("个人简介：" + (dataObj.bio || "（未填写）"));

        console.log("%c------ 完整数据对象 ------", "color:#e74c3c; font-weight:bold;");
        // 打印完整对象，可在 Console 中展开查看
        console.log(dataObj);

        // 提示用户提交成功（实验演示用）
        console.log("%c✅ 表单数据收集成功！共收集到 " + Object.keys(dataObj).length + " 个字段。", "color:#27ae60; font-weight:bold;");
        alert("注册信息已提交！\n请打开浏览器控制台（F12 → Console）查看收集到的表单数据。");
    });

    // 重置按钮点击时清空提示
    regForm.addEventListener("reset", function () {
        console.log("%c表单已重置，所有字段清空。", "color:#e67e22;");
    });

    // 页面加载完成提示
    console.log("%c🎓 用户注册页面加载完成！", "color:#4a90d9; font-weight:bold; font-size:16px;");
    console.log("请填写注册表单并点击「注册」按钮，提交后在此处可看到收集的数据。");
});
