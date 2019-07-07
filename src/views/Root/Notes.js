import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import GridTemplate from 'templates/GridTemplate';
import Card from 'components/molecules/Card/Card';
import { fetchItems } from 'actions';

class Notes extends Component {
  componentDidMount() {
    const { fetchNotes } = this.props;
    fetchNotes();
  }

  render() {
    const { notes } = this.props;

    return (
      <GridTemplate>
        {notes.map(({ title, content, created, id }) => (
          <Card id={id} title={title} content={content} created={created} key={id} />
        ))}
      </GridTemplate>
    );
  }
}

Notes.propTypes = {
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      created: PropTypes.string.isRequired,
    }),
  ),
};

Notes.defaultProps = {
  notes: [],
};

const mapDispatchToProps = dispatch => ({
  fetchNotes: () => dispatch(fetchItems('notes')),
});

const mapStateToProps = state => {
  const { notes } = state;
  return { notes };
};

// mapStateToProps MUSI BYĆ ZAWSZE PIERWSZE!!!
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Notes);
