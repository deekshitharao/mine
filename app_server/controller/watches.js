/* GET 'home' page */
module.exports.homelist = function(req, res) {
    res.render('watch-list', {
        title: 'TimeCraft - find a watch of your style',
        pageHeader: {
            title: 'TimeCraft',
            strapline: 'Find a watch you want!'
        },
        sidebar: "Looking for a watch that matches your outfit? TimeCraft helps you find watches to gift your loved ones. Perhaps for your mom, sister or a friend? Let TimeCraft help you find the watch you're looking for.",
        locations: [{
            name: 'DressBerry',
            address: 'a mauve pink analogue watch',
            rating: 3,
            facilities: ['Mauve pink', 'stainless steel', 'bracelet type'],
            distance: 'Rs.1699'
        }, {
            name: 'Casio',
            address: 'Vintage Women Rose gold digital watch',
            rating: 4,
            facilities: ['Rose gold color', 'foldure closure', 'Elegant'],
            distance: 'Rs.5995'
        }, {
            name: 'boAT',
            address: 'Storm call smart watch',
            rating: 2,
            facilities: ['Beige color', 'Fitness supported'],
            distance: 'Rs.2999'
        }]
    });
};


module.exports.watchInfo = function(req, res) {
    res.render('watch-info', {
        title: 'DressBerry',
        pageHeader: {
            title: 'DressBerry'
        },
        sidebar: {
            context: 'is on TimeCraft because it looks elegant and matches your ethnic and traditional outfits.',
            callToAction: 'If you\'ve been and you like it - or if you don\'t - please leave a review to help other people just like you.'
        },
        location: {
            name: 'DressBerry',
            address: 'A Mauve pink analogue watch',
            rating: 3,
            facilities: ['Mauve pink', 'stainless steel', 'bracelet type'],
            coords: {
                lat: 51.455041,
                lng: -0.9690884
            },
            openingTimes: ['Myntra','Ajio','Flipkart'],
            
            reviews: [{
                author: 'Sri Bhavana',
                rating: 5,
                timestamp: '16 July 2013',
                reviewText: 'What elegant watch. I can\'t say enough good things about it.'
            }, {
                author: 'Preethi Patel',
                rating: 3,
                timestamp: '16 June 2013',
                reviewText: 'It was okay. Battery wasn\'t great, but the color was cool.'
            }]
        }
    });
};

module.exports.addReview= function(req,res){
    res.render('watch-review-form',{title:'review'});
};

 
