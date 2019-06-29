import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import GridTemplate from 'templates/GridTemplate';
import Card from 'components/molecules/Card/Card';

const Twitters = ({ twitters }) => (
    <GridTemplate pageType="twitters">
        {twitters.map(({ title, content, twitterName, created, id }) => (
            <Card
                id={id}
                cardType="twitters"
                title={title}
                content={content}
                twitterName={twitterName}
                created={created}
                key={id}
            />
        ))}
    </GridTemplate>
);

Twitters.defaultProps = {
    twitters: [],
};

Twitters.propTypes = {
    twitters: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            content: PropTypes.string.isRequired,
            articleUrl: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            cardType: PropTypes.string.isRequired,
            created: PropTypes.string.isRequired,
        }),
    ),
};

const mapStateToProps = state => {
    const { twitters } = state;
    return { twitters };
};

export default connect(mapStateToProps)(Twitters);
