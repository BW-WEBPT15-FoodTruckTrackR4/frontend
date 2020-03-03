export const dinerData = [
    {
        id: 1,
        userName: 'ThatFoodGuy92',
        password: '!FoodGod1',
        email: 'FoodGuy92@gmail.com',
        currentLocation: 'Twentynine Palms, California, 92277',
        favoriteTrucks: ['Hot tamale']
    },
    {
        id: 2,
        userName: 'RamseyGorden1',
        password: '!diot1',
        email: 'realramseygorden@gmail.com',
        currentLocation: 'Fort Benning, Ga, 31905',
        favoriteTrucks: ['Hot Tamale']
    }
];

export const operatorData = [
    {
        id: 101,
        userName: 'Hot Tamale',
        password: '!Hot1s',
        email: 'hot1@live.com',
        trucksOwned: [
            {
                imageUrl: '',
                cuisineType: 'Hispanic',
                customerRatings: [5, 2],
                customerRatingAvg: 3.5,
                menu: [
                    menuItems = {
                        itemName: 'Tamale',
                        itemDescription: 'Tamales are a hispanic dish. Which feature a corn-based masa (dough) wrapped around a filling and steamed in a corn husk. They are traditionally filled with either chicken, pork, beef, chesse and/or beans.',
                        itemPhotos: [imageUrl= ''],
                        itemPrice: parseFloat(),
                        customerRatings: [5, 2],
                        customerRatingAvg: 3.5,
                        currentLocation: {
                            latitude: 41.850608,
                            longitude: -87.670746,
                        },
                        departureTime: {month: 'March', day: '3rd', year: 2020, hour: 8, minutes: 30}
                    }
                ]
            }
        ]
    }
];