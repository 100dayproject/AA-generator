"use strict";

module.exports = function (env) {
    env.addFilter('pagination', function (totalPage, currentPage) {
        if (__config.site.theme.name === 'bootstrap') {
            if (totalPage <= 1) {
                return ''
            } else {
                let nextPage, previous;
                if ( currentPage == 1) {
                    previous = `<li class="previous disabled"><a href="#">«</a></li>`;
                } else {
                    previous = `<li class="previous"><a href="?page=${1}">«</a></li>`;
                }
                var html = `<ul class="pagination pagination-md">${previous}`;
                for (var i = 1; i <= totalPage; i++) {
                    let cls = i === parseInt(currentPage) ? 'class="active"' : '';
                    html += `<li ${cls}><a href="?page=${i}">${i}</a></li>`;
                }
                if (currentPage == totalPage) {
                    nextPage = `<li class="next disabled"><a href="#">»</a></li>`;
                } else {
                    nextPage = `<li class="next"><a href="?page=${totalPage}">»</a></li>`;
                }
                html += `${nextPage}</ul>`;
                let safe = env.getFilter('safe');
                return safe(html);
            }
        }
    });
};