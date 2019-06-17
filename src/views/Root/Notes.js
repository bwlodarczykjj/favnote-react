import React from 'react';
import UserPageTemplate from 'templates/UserPageTemplate';
import Card from 'components/molecules/Card/Card';

const notes = [
    {
        title: 'Dokąd nocą tupta jeż?',
        content:
      'Lorem lorem lorem lorem lorem lorem lrem lorem lorem lorem leoro ae, aeroj aerk? Lorem',
        articleUrl: 'https://youtube.com',
        created: '10 days ago',
    },
    {
        title: 'Czy warto było szaleć tak?',
        content:
      'Lorem lorem lorem lorem lorem lorem lrem lorem lorem lorem leoro ae, aeroj aerk? Lorem',
        articleUrl: 'https://facebook.com',
        created: '5 days ago',
    },
    {
        title: 'Leć z fartem!',
        content:
      'Lorem lorem lorem lorem lorem lorem lrem lorem lorem lorem leoro ae, aeroj aerk? Lorem',
        articleUrl: 'https://twitter.com',
        created: '23 days ago',
    },
    {
        title: 'Kinley liderem wśród toników',
        content:
      'Lorem lorem lorem lorem lorem lorem lrem lorem lorem lorem leoro ae, aeroj aerk? Lorem',
        articleUrl: 'https://twitch.com',
        created: '18 days ago',
    },
];

const Notes = () => (
    <UserPageTemplate pageType="note">
        {notes.map(item => (
            <Card
                cardType="note"
                title={item.title}
                content={item.content}
                articleUrl={item.articleUrl}
                created={item.created}
                key={item.title}
            />
        ))}
    </UserPageTemplate>
);

export default Notes;
