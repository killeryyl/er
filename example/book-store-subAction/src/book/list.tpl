<!-- target: bookList -->
<div id="book-list-filter">
    <div id="book-list-order">
        <span class="filter-title">排序</span>
        <a<!-- if: ${orderPrice} || ${orderAuthor} || ${orderPublisher} --> href="#${path}~${orderQuery}"<!-- /if -->>默认</a>
        <a<!-- if: !${orderPrice} --> href="#${path}~${orderQuery}price"<!-- /if -->>价格</a>
        <a<!-- if: !${orderAuthor} --> href="#${path}~${orderQuery}author"<!-- /if -->>作者</a>
        <a<!-- if: !${orderPublisher} --> href="#${path}~${orderQuery}publisher"<!-- /if -->>出版社</a>
    </div>
    <div id="book-list-search">
        <input id="keywords" value="${keywords|html}" />
        <span id="submit-search" class="interactive">搜索</span>
    </div>
</div>
<!-- if: ${author} || ${publisher} || ${keywords} -->
    <a href="#${path}">所有</a> -> 
    <!-- if: ${author} -->
    作者: ${author}
    <!-- elif: ${publisher} -->
    出版社: ${publisher}
    <!-- elif: ${keywords} -->
    关键字: ${keywords}
    <!-- /if -->
<!-- /if -->
<ol id="book-list">
    <!-- for: ${list} as ${book} -->
    <li class="book-info" data-isbn="${book.isbn}">
        <a href="#/book/view~isbn=${book.isbn}" class="image" title="点击查看《${book.name|html}》详细信息">
            <img src="asset/img/book/${book.isbn}.jpg" alt="图书图片" width="160" height="160" />
        </a>
        <a href="#/book/view~isbn=${book.isbn}" class="name" title="点击查看《${book.name|html}》详细信息">${book.name}</a>
        <ul class="summary">
            <li class="author">
                <span class="key">作　　者</span>
                <a data-filter="author" class="value" href="#/book/list~author=${book.author|url}&keywords=${keywords|url}">${book.author}</a>
            </li>
            <li class="publisher">
                <span class="key">出 版 社</span>
                <a data-filter="publisher" class="value" href="#/book/list~publisher=${book.publisher|url}&keywords=${keywords|url}">${book.publisher}</a>
            </li>
            <li class="publish-date">
                <span class="key">出版时间</span>
                <span class="value">${book.publishDate}</span>
            </li>
            <li class="price">
                <span class="key">定　　价</span>
                <span class="value">${book.price}</span>
            </li>
        </ul>
        <div class="action">
            <span class="interactive buy">加入购物车</span>
        </div>
    </li>
    <!-- /for -->
</ol>
<div id="list-page">
    <a class="previous <!-- if: ${page} == 1 -->disable<!-- /if -->" href="#${path}~${pageQuery}${previewPage}">上一页</a>
    <!-- for: ${pages} as ${p} -->
    <a class="index <!-- if: ${p} == ${page} -->disable current<!-- /if -->" href="#${path}~${pageQuery}${p}">${p}</a>
    <!-- /for -->
    <a class="next <!-- if: ${page} == ${pageCount} -->disable<!-- /if -->" href="#${path}~${pageQuery}${nextPage}">下一页</a>
</div>