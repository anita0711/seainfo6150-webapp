import React from 'react';

const ArticleListItem = (props) => {
    return (
        <div>
            <h3>{props.article.title}</h3>
            <time dateTime={props.article.timeStamp}>{props.article.displayDate} </time>
            <p>{props.article.shortText}</p>
        </div>
    );
};

export default ArticleListItem;