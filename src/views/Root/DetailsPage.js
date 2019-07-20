/* eslint-disable react/prop-types */
import React from 'react';
import DetailsTemplate from 'templates/DetailsTemplate';
import { connect } from 'react-redux';
import withContext from 'hoc/withContext';

const DetailsPage = ({ activeItem }) => {
  const [item] = activeItem;
  return (
    <DetailsTemplate
      title={item.title}
      content={item.content}
      articleUrl={item.articleUrl}
      twitterName={item.twitterName}
    />
  );
};

const mapStateToProps = (state, ownProps) => {
  console.log(ownProps);
  return {
    // eslint-disable-next-line no-underscore-dangle
    activeItem: state[ownProps.pageContext].filter(item => item._id === ownProps.match.params.id),
  };
};

export default withContext(connect(mapStateToProps)(DetailsPage));
/* eslint-disable react/prop-types */
