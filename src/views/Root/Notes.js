import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import GridTemplate from 'templates/GridTemplate';
import Card from 'components/molecules/Card/Card';

/* eslint-disable react/prop-types */
const Notes = ({ notes }) => (
    <GridTemplate pageType="notes">
        {notes.map(({ title, content, created, id }) => (
            <Card id={id} cardType="notes" title={title} content={content} created={created} key={id} />
        ))}
    </GridTemplate>
);

Notes.defaultProps = {
    notes: [],
};

Notes.propTypes = {
    notes: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            content: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            cardType: PropTypes.string.isRequired,
            created: PropTypes.string.isRequired,
        }),
    ),
};

const mapStateToProps = state => {
    const { notes } = state;
    return { notes };
};

export default connect(mapStateToProps)(Notes);
/* eslint-disable react/prop-types */
