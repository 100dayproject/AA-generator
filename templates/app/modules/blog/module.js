"use strict";

module.exports = function (module) {
    module.blog = {
        title: 'Blog',
        author: 'Hai Nho',
        version: '0.0.1',
        system: false,
        description: 'Bài viết',
        backend_menu: {
            title: 'Bài viết',
            icon: 'fa fa-newspaper-o',
            menu: [
                {
                    title: 'Danh sách bài viết',
                    link: `/${__config.admin_prefix}/blog`,
                    icon: 'fa fa-arrows-h'
                }, {
                    title: 'Viết bài mới',
                    link: `/${__config.admin_prefix}/blog/create`
                }
            ]
        }
    };
    return module;
};