var cricketData = [
    {
        id: 1,
        title: 'What gearing up for the 2nd ODI against Australia looks like 😎🤙🤙 #INDvAUS',
        author: '@BCCI',
        img: 'https://pbs.twimg.com/media/D0zSqDZXQAA4rrw.jpg',
        topic: 'Mahendra Singh',
        url: 'https://twitter.com/BCCI/status/1102489655176499200'
    },
    {
        id: 2,
        title: `The former great was thrilled to see @imVkohli's beautiful wristwork. Don't miss his commentary on this one 🗣️🗣️`,
        author: '@BCCI',
        img: 'https://pbs.twimg.com/media/D0p99G3U0AAcUyc.jpg:large',
        topic: 'Virath Kohli',
        url: 'https://twitter.com/BCCI/status/1101831976951009281'
    },
    {
        id: 3,
        title: 'Shami picks up his second wicket. Maxwell departs for 40 runs.',
        author: '@BCCI',
        img: 'https://pbs.twimg.com/media/D0pcsrdVYAAdD83.jpg:large',
        topic: 'Mohammed Shami',
        url: 'https://twitter.com/BCCI/status/1101795228388777984'
    },
    {
        id: 4,
        title: 'Kuldeep Yadav picks up his second, Handscomb departs for 19 runs.',
        author: '@BCCI',
        img: 'https://pbs.twimg.com/media/D0pTuzrUYAEjnxo.jpg:large',
        topic: 'Kuldeep Yadav',
        url: 'https://twitter.com/BCCI/status/1101785416313626624'
    },
    {
        id: 5,
        title: `Presenting #TeamIndia's new jersey`,
        author: '@BCCI',
        img: 'https://pbs.twimg.com/media/D0oLvw9VYAAdC1J.jpg:large',
        topic: 'Team India',
        url: 'https://twitter.com/BCCI/status/1101706262025101312'
    },
    {
        id: 6,
        title: 'An outstanding knock of 113* from Maxwell guides the visitors to a 7-wkt victory in the second T20I.',
        author: '@BCCI',
        img: 'https://pbs.twimg.com/media/D0bUYSaWkAADo-b.jpg:large',
        topic: 'Maxwell',
        url: 'https://twitter.com/BCCI/status/1100801988214824960'
    }
];

const resolvers = {
    Query: {
        allUpdates: () => {
            return cricketData;
        },
        updates: (root, {id}) => {
            return cricketData.filter(updates => {
                return updates.id === id;
            })[0];
        }
    }
}

export default resolvers;