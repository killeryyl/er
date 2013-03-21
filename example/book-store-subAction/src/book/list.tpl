<!-- target: bookList -->
<!-- if: ${author} || ${publisher} || ${keywords} -->
    <a id="all-list" data-filter="ALL" href="javascript:;">所有</a> -> 
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
        <a href="#/book/view~isbn=${book.isbn}" class="image" title="点击查看《${book.name}》详细信息">
            <img src="asset/img/book/${book.isbn}.jpg" alt="图书图片" width="160" height="160" />
        </a>
        <a href="#/book/view~isbn=${book.isbn}" class="name" title="点击查看《${book.name}》详细信息">${book.name}</a>
        <ul class="summary">
            <li class="author">
                <span class="key">作　　者</span>
                <a data-filter="author" class="value" href="javascript:;">${book.author}</a>
            </li>
            <li class="publisher">
                <span class="key">出 版 社</span>
                <a data-filter="publisher" class="value" href="javascript:;">${book.publisher}</a>
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
    <a data-page="${page}-1" class="previous <!-- if: ${page} == 1 -->disable<!-- /if -->">上一页</a>
    <!-- for: ${pages} as ${p} -->
    <a data-page="${p}" class="index <!-- if: ${p} == ${page} -->disable current<!-- /if -->">${p}</a>
    <!-- /for -->
    <a data-page="${page}+1" class="next <!-- if: ${page} == ${pageCount} -->disable<!-- /if -->">下一页</a>
</div>