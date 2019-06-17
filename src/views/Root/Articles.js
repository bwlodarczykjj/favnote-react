import React from 'react';
import UserPageTemplate from 'templates/UserPageTemplate';
import Card from 'components/molecules/Card/Card';

const articles = [
    {
        title: 'It is React you looking for?',
        content:
      'Lorem lorem lorem lorem lorem lorem lrem lorem lorem lorem leoro ae, aeroj aerk? Lorem',
        articleUrl: 'https://youtube.com',
        created: '10 days ago',
    },
    {
        title: 'React on my mind',
        content:
      'Lorem lorem lorem lorem lorem lorem lrem lorem lorem lorem leoro ae, aeroj aerk? Lorem',
        articleUrl: 'https://facebook.com',
        created: '5 days ago',
    },
    {
        title: 'Wish you React',
        content:
      'Lorem lorem lorem lorem lorem lorem lrem lorem lorem lorem leoro ae, aeroj aerk? Lorem',
        articleUrl: 'https://twitter.com',
        created: '3 days ago',
    },
    {
        title: 'You gave React a bad name!',
        content:
      'Lorem lorem lorem lorem lorem lorem lrem lorem lorem lorem leoro ae, aeroj aerk? Lorem',
        articleUrl: 'https://twitch.com',
        created: '2 days ago',
    },
];

const Articles = () => (
    <UserPageTemplate pageType="article">
        {articles.map(item => (
            <Card
                cardType="article"
                title={item.title}
                content={item.content}
                articleUrl={item.articleUrl}
                created={item.created}
                key={item.title}
            />
        ))}
    </UserPageTemplate>
);

export default Articles;
