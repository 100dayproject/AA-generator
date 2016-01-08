"use strict";

let listModuleExtends = {};
module.exports = function (env) {
    env.addFilter('get_menu', function (m) {
        //!(blog)
        let moduleIgnore = '' || '*';
        __.getGlobbedFiles(__base + `app/modules/${moduleIgnore}/module.js`).forEach(function (path) {
            require(path)(listModuleExtends);
        });
        let content = '';
        for (let menu in listModuleExtends) {
            if (listModuleExtends.hasOwnProperty(menu)) {
                let node = listModuleExtends[menu].backend_menu;
                if (node.menu) {
                    let child = '';

                    for (let i in node.menu) {
                        if (node.menu.hasOwnProperty(i)) {
                            child += `<li><a class="link-active" href="${node.menu[i].link}"><i class="${node.menu[i].icon || 'fa fa-circle-o'}"></i>${node.menu[i].title}</a></li>`
                        }
                    }

                    content += `<li class="treeview">
        <a href="#"><i class="${node.icon}"></i> <span>${node.title}</span> <i
                  class="fa fa-angle-left pull-right"></i></a>
        <ul class="treeview-menu">
            ${child}
        </ul>
      </li>`
                } else {
                    content += `<li><a href="${node.link}"><i class="${node.icon}"></i> <span>${node.title}</span></a></li>`
                }
            }
        }

        return env.getFilter('safe')(content);
    })
};