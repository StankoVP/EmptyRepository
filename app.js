window.addEventListener("DOMContentLoaded", init);

function init() {
    function allTheNumbers(n1, n2) {
        var start, end;
        var result = [];
        if (typeof n1 == "number" && typeof n2 == "number") {
            start = n1 > Math.round(n1) ? Math.round(n1) + 1 : Math.round(n1);
            end = n2 < Math.round(n2) ? Math.round(n2) - 1 : Math.round(n2);
            for (var i = start; i <= end; i++) {
                result.push(i);
            }
            return result;
        } else {
            console.log(
                "The function allTheNumbers requires numbers as arguments. But the arguments are: " +
                    n1 +
                    ", " +
                    n2
            );
        }
    }

    function allTheFibonacciNumbers(n1, n2) {
        const result = [];
        let a = 0;
        let b = 1;
        if (typeof n1 == "number" && typeof n2 == "number") {
            if (n2 >= n1) {
                while (true) {
                    nextFibonacci = a + b;
                    a = b;
                    b = nextFibonacci;
                    if (n1 <= nextFibonacci && nextFibonacci <= n2) {
                        result.push(nextFibonacci);
                    }
                    if (nextFibonacci > n2) {
                        return result;
                    }
                }
            } else {
                console.log("Диапазон не верен");
            }
        } else {
            console.log(
                "The function allTheFibonacciNumbers requires numbers as arguments. But the arguments are: " +
                    n1 +
                    ", " +
                    n2
            );
        }
    }

    function allTheSimpleNumbers(n1, n2) {
        var start, end;
        var result = [];
        var isSimple;
        if (typeof n1 == "number" && typeof n2 == "number") {
            if (n2 >= n1) {
                start =
                    n1 > Math.round(n1) ? Math.round(n1) + 1 : Math.round(n1);
                end = n2 < Math.round(n2) ? Math.round(n2) - 1 : Math.round(n2);
                for (var i = start; i <= end; i++) {
                    isSimple = true;
                    for (var j = 2; j <= i / 2; j++) {
                        if (i % j == 0) {
                            isSimple = false;
                            break;
                        }
                    }
                    if (isSimple) {
                        result.push(i);
                    }
                }
                return result;
            } else {
                console.log("Диапазон не верен");
            }
        } else {
            console.log(
                "The function allTheFibonacciNumbers requires numbers as arguments. But the arguments are: " +
                    n1 +
                    ", " +
                    n2
            );
        }
    }

    function allTheNechetNumbers(n1, n2) {
        var start, end;
        var result = [];
        var isSimple;
        if (typeof n1 == "number" && typeof n2 == "number") {
            if (n2 >= n1) {
                start =
                    n1 > Math.round(n1) ? Math.round(n1) + 1 : Math.round(n1);
                end = n2 < Math.round(n2) ? Math.round(n2) - 1 : Math.round(n2);
                for (var i = start; i <= end; i++) {
                    if (i % 2 == 1) {
                        result.push(i);
                    }
                }
                return result;
            } else {
                console.log("Диапазон не верен");
            }
        } else {
            console.log(
                "The function allTheNechetNumbers requires numbers as arguments. But the arguments are: " +
                    n1 +
                    ", " +
                    n2
            );
        }
    }

    function allTheMod3Numbers(n1, n2) {
        var start, end;
        var result = [];
        var isSimple;
        if (typeof n1 == "number" && typeof n2 == "number") {
            if (n2 >= n1) {
                start =
                    n1 > Math.round(n1) ? Math.round(n1) + 1 : Math.round(n1);
                end = n2 < Math.round(n2) ? Math.round(n2) - 1 : Math.round(n2);
                for (var i = start; i <= end; i++) {
                    if (i % 3 == 0) {
                        result.push(i);
                    }
                }
                return result;
            } else {
                console.log("Диапазон не верен");
            }
        } else {
            console.log(
                "The function allTheMod3Numbers requires numbers as arguments. But the arguments are: " +
                    n1 +
                    ", " +
                    n2
            );
        }
    }

    // function myFunction1 () {
    //     console.log("Вызвана функция 1");
    //     myFunction2();
    // }

    // function myFunction2 () {
    //     console.log("Вызвана функция 2");
    // }

    // var i=1;

    // function nums1to10(){
    //     console.log(i);
    //     i++;
    //     if (i <= 10) {
    //         setTimeout (nums1to10, 1000);
    //     }
    // }
    // nums1to10();

    // //Анонимная функция
    // setTimeout(function(){
    //     console.log("Привет из анонимной функции");
    // },1000);

    function rect(width, height) {
        var str =
            '<div style="width: ' +
            width +
            "px; height: " +
            height +
            'px; background: red;"></div>';
        document.write(str);
    }
    function circle(r) {
        var str =
            '<div style="width: ' +
            r * 2 +
            "px; height: " +
            r * 2 +
            'px; border-radius: 50%; background: black;"></div>';
        document.write(str);
    }

    function createContainer(x, y, width, height, isInner) {
        var result = document.createElement("div");
        result.style.width = "0px"; //(isInner)? "0px" : width+"px";
        result.style.height = "0px"; //(isInner)? "0px": height+"px";
        result.style.transformStyle = isInner ? "inherit" : "preserve-3d";
        result.style.perspective = isInner ? "inherit" : "none";
        result.style.perspectiveOrigin = isInner ? "inherit" : "center center";
        result.style.left = isInner ? "0px" : x + "px";
        result.style.top = isInner ? "0px" : y + "px";
        result.style.opacity = "1.0";
        result.style.zIndex = "0px";
        result.style.float = "left";
        result.style.position = "absolute"; //(isInner)? "relative" : "absolute";
        //result.style.transform = "rotateY(10deg)";
        return result;
    }

    function add3dFace(
        x,
        y,
        z,
        width,
        height,
        color,
        transform,
        container,
        text
    ) {
        var div = document.createElement("div");
        div.className = "face3d";
        div.style.width = width + "px";
        div.style.height = height + "px";
        div.style.perspective = "inherit";
        div.style.perspectiveOrigin = "inherit";
        div.style.background = color;
        div.style.left = x + "px";
        div.style.top = y + "px";
        div.style.zIndex = z + "px";
        div.style.transform = transform;
        div.style.backfaceVisibility = "visible";
        div.style.opacity = "0.5";
        div.style.float = "left";
        div.style.position = "absolute";
        var h2 = document.createElement("h2");
        h2.appendChild(document.createTextNode(text));
        h2.style.textAlign = "center";
        div.appendChild(h2);
        container.appendChild(div);
        return div;
    }

    var upA = {},
        downA = {},
        leftA = {},
        rightA = {};

    function createParallelepiped(x, y, width, height, depth, id) {
        var div = document.createElement("div");
        div.style.position = "relative";
        div.style.margin = "50px";
        div.style.padding = "0px";
        div.id = id;

        var upButton = document.createElement("p");
        upButton.setAttribute("class", "abc-button");
        upA[id] = document.createElement("p");
        upA[id].id = id + "xPlus";
        upA[id].href = "#";
        upA[id].appendChild(document.createTextNode(">>"));
        upA[id].addEventListener("mousedown", rotate);
        upA[id].style.padding = "0px";
        upA[id].style.margin = "0px";
        upA[id].style.textAlign = "center";
        upButton.appendChild(upA[id]);
        upButton.style.position = "absolute";
        upButton.style.transform = "rotateZ(-90deg)";
        upButton.style.top =
            y -
            Math.sqrt(height * height + width * width + depth * depth) * 0.5 -
            25 +
            "px";
        //div.style.top = upButton.style.top;
        div.style.height =
            Math.sqrt(height * height + width * width + depth * depth) + "px";
        upButton.style.left = x - 10 + "px";
        div.appendChild(upButton);

        var downButton = document.createElement("p");
        downButton.setAttribute("class", "abc-button");
        downA[id] = document.createElement("p");
        downA[id].id = id + "xMinus";
        downA[id].href = "#";
        downA[id].appendChild(document.createTextNode(">>"));
        downA[id].addEventListener("mousedown", rotate);
        downA[id].style.padding = "0px";
        downA[id].style.margin = "0px";
        downA[id].style.textAlign = "center";
        downButton.appendChild(downA[id]);
        downButton.style.position = "absolute";
        downButton.style.top =
            y +
            Math.sqrt(height * height + width * width + depth * depth) * 0.5 +
            5 +
            "px";
        downButton.style.left = x - 10 + "px";
        downButton.style.transform = "rotateZ(90deg)";
        div.appendChild(downButton);

        var rightButton = document.createElement("p");
        rightButton.setAttribute("class", "abc-button");
        rightA[id] = document.createElement("p");
        rightA[id].id = id + "yPlus";
        rightA[id].href = "#";
        rightA[id].appendChild(document.createTextNode(">>"));
        rightA[id].addEventListener("mousedown", rotate);
        rightA[id].style.padding = "0px";
        rightA[id].style.margin = "0px";
        rightA[id].style.textAlign = "center";
        rightButton.appendChild(rightA[id]);
        rightButton.style.position = "absolute";
        rightButton.style.top = y - 10 + "px";
        rightButton.style.left =
            x +
            Math.sqrt(height * height + width * width + depth * depth) * 0.5 +
            0 +
            "px";
        rightButton.style.transform = "rotateZ(0deg)";
        div.appendChild(rightButton);

        var leftButton = document.createElement("p");
        leftButton.setAttribute("class", "abc-button");
        leftA[id] = document.createElement("p");
        leftA[id].id = id + "yMinus";
        leftA[id].href = "#";
        leftA[id].appendChild(document.createTextNode(">>"));
        leftA[id].addEventListener("mousedown", rotate);
        leftA[id].style.padding = "0px";
        leftA[id].style.margin = "0px";
        leftA[id].style.textAlign = "center";
        leftButton.appendChild(leftA[id]);
        leftButton.style.position = "absolute";
        leftButton.style.top = y - 10 + "px";
        leftButton.style.left =
            x -
            Math.sqrt(height * height + width * width + depth * depth) * 0.5 -
            20 +
            "px";
        leftButton.style.transform = "rotateZ(180deg)";
        //div.style.left = leftButton.style.left
        div.style.width = Math.max(height, width, depth) + 280 + "px";
        div.appendChild(leftButton);

        var cntXrot = createContainer(x, y);
        cntXrot.id = id + "Xrot";
        var cntYrot = createContainer(0, 0, true);
        cntYrot.id = id + "Yrot";
        cntXrot.appendChild(cntYrot);
        div.appendChild(cntXrot);

        var div1a = createContainer(0, 0, true);
        cntYrot.appendChild(div1a);
        var div1 = add3dFace(
            -width / 2,
            -height / 2,
            0,
            width,
            height,
            "orange",
            "translate3d(0px, 0px,+" + depth / 2 + "px)",
            div1a,
            "enter text 1"
        );
        div1.addEventListener("click", textEditor);
        div1a.style.transform = "rotateY(180deg)";

        var div2 = add3dFace(
            -width / 2,
            -height / 2,
            0,
            width,
            height,
            "orange",
            "translate3d(0px, 0px,+" + depth / 2 + "px)",
            cntYrot,
            "enter text 2"
        );
        div2.addEventListener("click", textEditor);
        var div3 = add3dFace(
            -(width + depth) / 2,
            -height / 2,
            0,
            depth,
            height,
            "green",
            "rotateY(-90deg)",
            cntYrot,
            "enter text 3"
        );
        div3.addEventListener("click", textEditor);
        var div4 = add3dFace(
            (width - depth) / 2,
            -height / 2,
            0,
            depth,
            height,
            "green",
            "rotateY(90deg)",
            cntYrot,
            "enter text 4"
        );
        div4.addEventListener("click", textEditor);
        var div5 = add3dFace(
            -width / 2,
            -(height + depth) / 2,
            0,
            width,
            depth,
            "yellow",
            "rotateX(90deg)",
            cntYrot,
            "enter text 5"
        );
        div5.addEventListener("click", textEditor);
        var div6 = add3dFace(
            -width / 2,
            (height - depth) / 2,
            0,
            width,
            depth,
            "yellow",
            "rotateX(-90deg)",
            cntYrot,
            "enter text 6"
        );
        div6.addEventListener("click", textEditor);
        //document.body.appendChild(div);
        return div;
    }

    var angleX = {};
    var angleY = {};
    var interval;

    /*
    <p><a id="xPlus" href="#"> Вращать вверх </a></p>
    <p><a id="xMinus" href="#"> Вращать вниз </a></p>
    <p><a id="yPlus" href="#"> Крутить вправо </a></p>
    <p><a id="yMinus" href="#"> Крутить влево </a></p>*/

    /*document.getElementById("xPlus").addEventListener("mousedown", rotate);
    document.getElementById("xMinus").addEventListener("mousedown", rotate);
    document.getElementById("yPlus").addEventListener("mousedown", rotate);
    document.getElementById("yMinus").addEventListener("mousedown", rotate);*/
    function rotate(e) {
        var re = /^(.*)([xy][MP].*)$/;
        var id = re.exec(e.target.id)[1];
        switch (re.exec(e.target.id)[2]) {
            case "xPlus":
                interval = setInterval(function () {
                    angleX[id] = angleX[id] ? angleX[id] + 1 : 1;
                    document.getElementById(id + "Xrot").style.transform =
                        "rotateX(" + angleX[id] + "deg)";
                }, 25);
                break;
            case "xMinus":
                interval = setInterval(function () {
                    angleX[id] = angleX[id] ? angleX[id] - 1 : -1;
                    document.getElementById(id + "Xrot").style.transform =
                        "rotateX(" + angleX[id] + "deg)";
                }, 25);
                break;
            case "yPlus":
                interval = setInterval(function () {
                    angleY[id] = angleY[id] ? angleY[id] + 1 : 1;
                    document.getElementById(id + "Yrot").style.transform =
                        "rotateY(" + angleY[id] + "deg)";
                }, 25);
                break;
            case "yMinus":
                interval = setInterval(function () {
                    angleY[id] = angleY[id] ? angleY[id] - 1 : -1;
                    document.getElementById(id + "Yrot").style.transform =
                        "rotateY(" + angleY[id] + "deg)";
                }, 25);
                break;
            default:
                alert("неизвестно что вызвало функцию rotate");
        }
        e.target.addEventListener("mouseup", function () {
            clearInterval(interval);
        });
        e.target.addEventListener("mouseout", function () {
            clearInterval(interval);
        });
    }

    function textEditor(e) {
        if (e.target.nodeName == "H2") {
            e.target.childNodes[0].nodeValue = prompt(
                "Старый текст: " +
                    e.target.childNodes[0].nodeValue +
                    "\nВведите новый текст: "
            );
        }
    }

    function Parallelepiped(x, y, width, height, z, id) {
        this.x = x;
        this.y = y;
        this.depth = z;
        this.width = width;
        this.height = height;
        this.id = id;
        this.div = createParallelepiped(
            this.x,
            this.y,
            this.width,
            this.height,
            this.depth,
            this.id
        );
        this.show = function () {
            try {
                document.body.removeChild(document.getElementById(this.id));
            } catch (e) {}
            document.body.appendChild(this.div);
            return this.div;
        };
    }

    var pd = new Parallelepiped(200, 90, 120, 80, 60, "mika");
    pd.show();

    document.body.appendChild(document.createElement("hr"));

    var pd2 = new Parallelepiped(220, 120, 200, 140, 90, "salo");
    pd2.show();
}
