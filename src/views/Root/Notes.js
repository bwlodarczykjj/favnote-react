import React from 'react';
import { connect } from 'react-redux';
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

const mapStateToProps = state => {
    const { notes } = state;
    return { notes };
};

export default connect(mapStateToProps)(Notes);
/* eslint-disable react/prop-types */
