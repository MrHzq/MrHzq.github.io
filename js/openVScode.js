console.log(`
-------------------------------------------------
|                                               |
|  ██ ███    ███     ██   ██ ███████  ██████    |
|  ██ ████  ████     ██   ██    ███  ██    ██   |
|  ██ ██ ████ ██     ███████   ███   ██    ██   |
|  ██ ██  ██  ██     ██   ██  ███    ██ ▄▄ ██   |
|  ██ ██      ██     ██   ██ ███████  ██████    |
|                                        ▀▀     |
|                                               |
|           https://mrhzq.github.io             |
|           https://huangzq.pages.dev           |
|           https://huangzq.vercel.app          |
|           https://huangzq94.gitee.io          |
|                                               |
-------------------------------------------------
`);

function openVScode() {
  function openFileInVSCode(filePath, type = "") {
    // 替换成你想要打开的文件路径
    var filePathPrex = "Users/hzq/code/huangzq-blog/source";

    var fullPath = encodeURIComponent(filePathPrex + filePath + type);

    // 使用自定义URL协议唤起VS Code并打开指定文件
    window.open("vscode://file/" + fullPath);
  }

  var vscode = document.createElement("div");

  vscode.style.cssText = `
  position: fixed;
  bottom: 20px;
  right: 20px;
  zIndex: 999;
  background-color: rgb(0, 122, 204);
  border-radius: 5px;
  color: white;
  padding: 10px;
  cursor: pointer;`;

  vscode.innerHTML = "VSCode";

  vscode.setAttribute("id", "openVScode");

  var spPathMap = { "/about": "/index" };

  vscode.addEventListener("click", function () {
    var path = window.location.pathname.slice(0, -1);
    var fullPath = decodeURIComponent(path);
    if (spPathMap[path]) {
      fullPath += spPathMap[path];
    } else {
      fullPath = "/_posts" + fullPath;
    }
    openFileInVSCode(fullPath, ".md");
  });

  var body = document.getElementsByTagName("body")[0];
  body.appendChild(vscode);
}

var whiteList = ["/", "/archives", "/categories", "/tags", "/links"];

var isDev = location.href.indexOf("localhost") > -1;

if (isDev) {
  var path = window.location.pathname.slice(0, -1);
  if (!whiteList.includes(path)) openVScode();
}
