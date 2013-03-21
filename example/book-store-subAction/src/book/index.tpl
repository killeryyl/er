<!-- target: index -->
<div id="book-list-filter">
    <div id="book-list-order">
        <span class="filter-title">排序</span>
        <a data-order="" href="javascript:;">默认</a>
        <a data-order="price" href="javascript:;">价格</a>
        <a data-order="author" href="javascript:;">作者</a>
        <a data-order="publisher" href="javascript:;">出版社</a>
    </div>
    <div id="book-list-search">
        <input id="keywords" value="${keywords|html}" />
        <span id="submit-search" class="interactive">搜索</span>
    </div>
</div>
<div id="list-wrap"></div>