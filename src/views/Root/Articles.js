import React from 'react';
import { connect } from 'react-redux';
import GridTemplate from 'templates/GridTemplate';
import Card from 'components/molecules/Card/Card';

/* eslint-disable react/prop-types */
const Articles = ({ articles }) => (
    <GridTemplate pageType="articles">
        {articles.map(({ title, content, articleUrl, created, id }) => (
            <Card
                id={id}
                cardType="articles"
                title={title}
                content={content}
                articleUrl={articleUrl}
                created={created}
                key={id}
            />
        ))}
    </GridTemplate>
);

const mapStateToProps = state => {
    const { articles } = state;
    return { articles };
};

export default connect(mapStateToProps)(Articles);
/* eslint-disable react/prop-types */
