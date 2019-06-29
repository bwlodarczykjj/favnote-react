import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import GridTemplate from 'templates/GridTemplate';
import Card from 'components/molecules/Card/Card';

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

Articles.defaultProps = {
    articles: [],
};

Articles.propTypes = {
    articles: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            content: PropTypes.string.isRequired,
            articleUrl: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            created: PropTypes.string.isRequired,
        }),
    ),
};

const mapStateToProps = state => {
    const { articles } = state;
    return { articles };
};

export default connect(mapStateToProps)(Articles);
