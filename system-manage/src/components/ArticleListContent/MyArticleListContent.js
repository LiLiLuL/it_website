import React from 'react';



const MyArticleListContent = ({ data: {title,author,summary,hits,create_by,comment_number} }) => (
  <div>
    <p>{title}</p>
    <p><span>作者：{author}</span><span>发表日期：{create_by}</span></p>
    <p>摘要：{summary}</p>
    <p>阅读：{hits}评论：{comment_number}</p>
  </div>
);



export default MyArticleListContent;
