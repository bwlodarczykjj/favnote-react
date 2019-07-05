/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import DetailsTemplate from 'templates/DetailsTemplate';
import { routes } from 'routes';
import withContext from 'hoc/withContext';

class DetailsPage extends Component {
  state = {
    pageContext: 'notes',
  };

  componentDidMount() {
    const { match } = this.props;

    switch (match.path) {
      case routes.twitter:
        this.setState({ pageContext: 'twitters' });
        break;
      case routes.note:
        this.setState({ pageContext: 'notes' });
        break;
      case routes.article:
        this.setState({ pageContext: 'articles' });
        break;
      default:
        console.log('Something went wrong with matching paths');
    }
  }

  render() {
    const dummyArticle = {
      id: 1,
      title: 'Przykładowa notatka statyczna, nie pobierana z nikąd',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
      twitterName: 'hello_roman',
      articleUrl: 'https://youtube.com/helloroman',
      created: '1 day',
    };

    const { pageContext } = this.state;

    return (
      <>
        <DetailsTemplate
          pageContext={pageContext}
          title={dummyArticle.title}
          created={dummyArticle.created}
          content={dummyArticle.content}
          articleUrl={dummyArticle.articleUrl}
          twitterName={dummyArticle.twitterName}
        />
      </>
    );
  }
}

export default withContext(DetailsPage);
/* eslint-disable react/prop-types */
