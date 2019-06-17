import React from 'react';
import UserPageTemplate from 'templates/UserPageTemplate';
import Card from 'components/molecules/Card/Card';

const twitters = [
    {
        title: 'Czy React Cię szuka?',
        content:
      'Lorem lorem lorem lorem lorem lorem lrem lorem lorem lorem leoro ae, aeroj aerk? Lorem',
        twitterName: 'JakMarcin',
        created: '10 days ago',
    },
    {
        title: 'Trump, zniesie wizy?',
        content:
      'Lorem lorem lorem lorem lorem lorem lrem lorem lorem lorem leoro ae, aeroj aerk? Lorem',
        twitterName: 'TomaszSiemoniak',
        created: '5 days ago',
    },
    {
        title: 'Afera z żydkami w tle',
        content:
      'Lorem lorem lorem lorem lorem lorem lrem lorem lorem lorem leoro ae, aeroj aerk? Lorem',
        twitterName: 'ARomasze',
        created: '3 days ago',
    },
    {
        title: 'React Cię nie zawiedzie!',
        content:
      'Lorem lorem lorem lorem lorem lorem lrem lorem lorem lorem leoro ae, aeroj aerk? Lorem',
        twitterName: 'L_Rogowski',
        created: '2 days ago',
    },
];

const Twitters = () => (
    <UserPageTemplate pageType="twitter">
        {twitters.map(item => (
            <Card
                cardType="twitter"
                title={item.title}
                twitterName={item.twitterName}
                content={item.content}
                created={item.created}
                key={item.title}
            />
        ))}
    </UserPageTemplate>
);

export default Twitters;
