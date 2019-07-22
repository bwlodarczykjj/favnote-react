import React, { Component } from 'react';
import DetailsTemplate from 'templates/DetailsTemplate';
import withContext from 'hoc/withContext';
import { connect } from 'react-redux';
import axios from 'axios';

class DetailsPage extends Component {
  state = {
    activeItem: {
      title: '',
      content: '',
      articleUrl: '',
      twitterName: '',
    },
  };

  componentDidMount() {
    /* eslint-disable react/destructuring-assignment */
    if (this.props.activeItem) {
      const [activeItem] = this.props.activeItem;
      this.setState({ activeItem });
    } else {
      const { id } = this.props.match.params;
      axios
        .get(`http://localhost:9000/api/note/${id}`)
        .then(({ data }) => {
          this.setState({ activeItem: data });
        })
        .catch(err => console.log(err));
    }
  }
  /* eslint-enable */

  render() {
    const { activeItem } = this.state;

    return (
      <DetailsTemplate
        title={activeItem.title}
        content={activeItem.content}
        articleUrl={activeItem.articleUrl}
        twitterName={activeItem.twitterName}
      />
    );
  }
}

/* ownProps to nic innego jak powiedzenie, ze bede pracowal teraz na swoich, zdeklarowanych wczenisj ew tym komponencie proppsach. 
state[ownProps.pageContext] to aktywny klucz, ktory bedzie sie za kazdym razem dopasowaywal do pageContext i go podmieniał. Dzięki metodzie filter() porownujemy, czy id aktualnie aktywnego itemu jest takie samo jak id z URL/ PATHa, jesli jest takie samo to wyswietlamy wsystko z danego elementu(notatki) */

const mapStateToProps = (state, ownProps) => {
  if (state[ownProps.pageContext]) {
    return {
      activeItem: state[ownProps.pageContext].filter(
        item =>
          // eslint-disable-next-line no-underscore-dangle
          item._id === ownProps.match.params.id,
      ),
    };
  }
  return {};
};

export default withContext(connect(mapStateToProps)(DetailsPage));
