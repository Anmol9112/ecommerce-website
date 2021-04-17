const INITIAL_STATE = {
    sections: [
        {
        title: 'hats',
        imageUrl: 'https://burst.shopifycdn.com/photos/the-man-in-the-hat.jpg?width=925&amp;format=pjpg&amp;exif=0&amp;iptc=0',
        id:1,
        linkUrl: 'shop/hats'
    },
    {
        title: 'hoodies',
        imageUrl: 'https://burst.shopifycdn.com/photos/close-up-of-man-in-tan-hoodie.jpg?width=925&amp;format=pjpg&amp;exif=0&amp;iptc=0',
        id:2,
        linkUrl:'shop/hoodies'
    },
    {
        title: 'shoes',
        imageUrl: 'https://burst.shopifycdn.com/photos/light-up-shoes-for-adults.jpg?width=925&amp;format=pjpg&amp;exif=0&amp;iptc=0',
        id:3,
        linkUrl:'shop/sneakers'  
    },
    {
        title: 'womens',
        imageUrl: 'https://burst.shopifycdn.com/photos/fashion-model-under-carnival-lights.jpg?width=925&amp;format=pjpg&amp;exif=0&amp;iptc=0',
        size: 'large',
        id:4,
        linkUrl:'shop/womens'    
    },
    {
        title: 'mens',
        imageUrl: 'https://burst.shopifycdn.com/photos/bearded-young-man.jpg?width=925&amp;format=pjpg&amp;exif=0&amp;iptc=0',
        size: 'large',
        id:5,
        linkUrl:'shop/mens'  
    }
]
};

const directoryReducer = (state = INITIAL_STATE,action) => {
    switch(action.type){
        default:
            return state;
    }
};

export default directoryReducer;