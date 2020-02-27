export const dinerData = [
    {
        id: 1,
        username: 'ThatFoodGuy92',
        password: '!FoodGod1',
        email: 'FoodGuy92@gmail.com',
        favoriteTrucks: []
    },
    {
        id: 2,
        username: 'RamseyGorden1',
        password: '!diot1',
        email: 'realramseygorden@gmail.com',
        favoriteTrucks: []
    }
];

export const operatorData = [
    {
        id: 101,
        username: 'Hot Tamale',
        password: '!Hot1s',
        email: 'hot1@live.com',
        trucksOwned: [
            {
                imageUrl: image,
                cuisineType: 'Hispanic',
                customerRatings: [5, 2, 5, 5, 1, 3, 5, 4],
                customerRatingAvg: 3.8,
                menu: [
                    menuItems = {
                        itemName: 'Tamale',
                        itemDescription: 'Tamales are a hispanic dish. Which feature a corn-based masa (dough) wrapped around a filling and steamed in a corn husk. They are traditionally filled with either chicken, pork, beef, chesse and/or beans.',
                        itemPhotos: [],
                        itemPrice: parseFloat(),
                        customerRatings: [5, 2, 5, 5, 1, 3, 5, 4],
                        customerRatingAvg: 3.8,
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