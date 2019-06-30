import React from 'react';
import PageContext from 'context';

//  Higher Order Component (HOC) tworzy nam context aplikacji, dzięki któremu niwelujemy 90% propsów, bo pageContext sam w sobie bedzie przechowywal pageContext i cardType, dzięki czemu unikamy wycieków i błędów w podawanych propsach etc
const withContext = Component => {
  return function contextComponent(props) {
    return (
      <PageContext.Consumer>
        {context => <Component pageContext={context} {...props} />}
      </PageContext.Consumer>
    );
  };
};

export default withContext;
