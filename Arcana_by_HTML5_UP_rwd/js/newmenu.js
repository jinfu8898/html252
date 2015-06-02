window.onload = function() {

    menubutton = null;

    newmenu = null;

    function open() {

        var body = document.body.children;

        for (var i = 0; i < body.length; i++) {

            
            if (body[i].id === "header") {
                body[i].style.cssText = "width:65%;left:35%;";
            } else {
                body[i].style.cssText = "width:65%;float:right";
            }
        


        }
        var div = document.createElement('div');

        div.style.cssText = "overflow:auto;" + "height:" + window.innerHeight + "px";

        div.setAttribute("id", "newmenu");

        div.innerHTML = "<ul><li class = 'current'><a href='index.html'>Home</a></li><li><a href = '' >Dropdown</a><ul><li><a href = '#'>Lorem dolor </a></li><li><a href = '#'>Magna phasellus </a></li><li><a href = '#'> Etiam sed tempus </a></li><li><a href = ''> Submenu </a><ul><li><a href = '#'> Lorem dolor </a></li><li><a href = '#'> Phasellus magna </a></li><li><a href = '#'> Magna phasellus </a></li><li><a href = '#'> Etiam nisl </a></li><li><a href = '#'> Veroeros feugiat </a></li></ul></li><li><a href = '#'> Veroeros feugiat </a></li></ul></li><li><a href = 'left-sidebar.html'> Left Sidebar </a></li ><li> <a href = 'right-sidebar.html'> Right Sidebar </a></li><li> <a href = 'two-sidebar.html'> Two Sidebar </a></li><li><a href = 'no-sidebar.html'> No Sidebar </a></li></ul>";

        document.body.appendChild(div);

    }

    function close() {

        var body = document.body.children;

        for (var i = 0; i < body.length; i++) {
            body[i].style.cssText = "";
        }

        var newmenu = document.getElementById("newmenu");

        if (newmenu !== null) {
            document.body.removeChild(newmenu);
        }

        if (window.innerWidth > 840) {
            var menubutton = document.getElementById('menubutton');

            if (menubutton !== null) {

                var header = document.getElementById('header');

                header.removeChild(menubutton);

            }

            /*two-sidebar*/

            var twoside1 = document.getElementById('twoside1');

            var twoside2 = document.getElementById('twoside2');

            var content = document.getElementById('twosidecontent');

            if (twoside1 !== null && twoside2 !== null && content !== null) {

                document.getElementById('twoside').removeChild(twoside1);

                document.getElementById('twoside').appendChild(twoside1);

                document.getElementById('twoside').removeChild(content);

                document.getElementById('twoside').appendChild(content);

                document.getElementById('twoside').removeChild(twoside2);

                document.getElementById('twoside').appendChild(twoside2);
            }

        }

    }

    function createbutton() {
        var menubutton = document.createElement('div');

        menubutton.style.cssText = "position:relative;display:inline-block;float:left;left:3%;top:0%;background:#333333;color:#474747;border:1px solid #333333;font-size:1.7em;cursor:pointer;padding-top:2px";

        menubutton.innerHTML = "≡";

        menubutton.setAttribute("id", "menubutton");

        var header = document.getElementById("header");

        header.appendChild(menubutton);

    }

    if (window.innerWidth <= 840) {
        var menubutton = document.getElementById('menubutton');
        if (menubutton === null) {
            createbutton();
        }

        /*left-sidebar*/

        var u4 = document.getElementById('u4');

        var u8 = document.getElementById('u8');

        if (u4 !== null && u8 !== null) {
            document.getElementById('left').removeChild(u4);

            document.getElementById('left').appendChild(u4);
        }

        /*two-sidebar*/

        var twoside1 = document.getElementById('twoside1');

        var twoside2 = document.getElementById('twoside2');

        if (twoside1 !== null && twoside2 !== null) {

            document.getElementById('twoside').removeChild(twoside1);

            document.getElementById('twoside').appendChild(twoside1);

            document.getElementById('twoside').removeChild(twoside2);

            document.getElementById('twoside').appendChild(twoside2);
        }


    }

    if (window.innerWidth > 840) {
        close();
    }

    var menubutton = document.getElementById('menubutton');

    if (menubutton !== null) {
        menubutton.onclick = function() {
            var menu = document.getElementById('newmenu');
            if (menu === null) {
                open();
            } else {
                close();
            }
        }
    }

    window.onresize = function() {

        if (window.innerWidth <= 840) {
            var menubutton = document.getElementById('menubutton');
            if (menubutton === null) {
                {
                    createbutton();
                }

            }

            /*left-sidebar*/

            var u4 = document.getElementById('u4');

            var u8 = document.getElementById('u8');

            if (u4 !== null && u8 !== null) {

                document.getElementById('left').removeChild(u4);

                document.getElementById('left').appendChild(u4);
            }

            /*two-sidebar*/

            var twoside1 = document.getElementById('twoside1');

            var twoside2 = document.getElementById('twoside2');

            if (twoside1 !== null && twoside2 !== null) {

                document.getElementById('twoside').removeChild(twoside1);

                document.getElementById('twoside').appendChild(twoside1);

                document.getElementById('twoside').removeChild(twoside2);

                document.getElementById('twoside').appendChild(twoside2);
            }

            var menubutton = document.getElementById('menubutton');

            menubutton.onclick = function() {
                var menu = document.getElementById('newmenu');
                if (menu === null) {
                    open();
                } else {
                    close();
                }
            }
        }


        if (window.innerWidth > 840) {
            close();
        }

    }

}
