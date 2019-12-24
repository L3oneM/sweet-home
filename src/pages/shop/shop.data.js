const SHOP_DATA = [
  {
    title: 'Kitchen',
    imageUrl: 'images/directory/kitchen.jpg',
    id: 1,
    linkUrl: '/kitchen',
    subSections: [
      {
        title: "Tables",
        id: 125,
        linkUrl: '/tables',
        items: [{
        id: 766,
        "name": "Gourka",
        "imageUrl": "http://dummyimage.com/112x214.jpg/dddddd/000000",
        "price": 196,
        "description": "Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc."
      }, {
        "id": 403,
        "name": "Weakstem Peperomia",
        "imageUrl": "http://dummyimage.com/185x217.jpg/ff4444/ffffff",
        "price": 49,
        "description": "Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus."
      }, {
        "id": 728,
        "name": "Lemington Hawthorn",
        "imageUrl": "http://dummyimage.com/142x104.jpg/dddddd/000000",
        "price": 156,
        "description": "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante."
      }, {
        "id": 62,
        "name": "Las Vegas Cryptantha",
        "imageUrl": "http://dummyimage.com/177x121.jpg/5fa2dd/ffffff",
        "price": 200,
        "description": "In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat."
      }, {
        "id": 251,
        "name": "Edwards Plateau Thimbleweed",
        "imageUrl": "http://dummyimage.com/210x215.jpg/cc0000/ffffff",
        "price": 109,
        "description": "In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue."
      }, {
        "id": 220,
        "name": "Remy's Pepperweed",
        "imageUrl": "http://dummyimage.com/245x155.jpg/dddddd/000000",
        "price": 42,
        "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc."
      }, {
        "id": 514,
        "name": "Longspur Lupine",
        "imageUrl": "http://dummyimage.com/211x157.jpg/ff4444/ffffff",
        "price": 235,
        "description": "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus."
      }, {
        "id": 232,
        "name": "Southwestern Brickellbush",
        "imageUrl": "http://dummyimage.com/135x196.jpg/5fa2dd/ffffff",
        "price": 75,
        "description": "Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci."
      }]},
      {
        title: "Chairs",
        linkUrl: '/chairs',
        id: 129,
        items: [{
        "id": 798,
        "name": "Alpine Bittercress",
        "imageUrl": "http://dummyimage.com/195x249.jpg/ff4444/ffffff",
        "price": 59,
        "description": "Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis."
      }, {
        "id": 160,
        "name": "Leichhardt's Datura",
        "imageUrl": "http://dummyimage.com/176x191.jpg/5fa2dd/ffffff",
        "price": 37,
        "description": "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc."
      }, {
        "id": 316,
        "name": "Sickle Spurge",
        "imageUrl": "http://dummyimage.com/125x150.jpg/dddddd/000000",
        "price": 199,
        "description": "Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat."
      }, {
        "id": 446,
        "name": "Pinyon Ricegrass",
        "imageUrl": "http://dummyimage.com/106x213.jpg/cc0000/ffffff",
        "price": 93,
        "description": "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus."
      }, {
        "id": 190,
        "name": "Digitgrass",
        "imageUrl": "http://dummyimage.com/176x156.jpg/5fa2dd/ffffff",
        "price": 57,
        "description": "Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede."
      }, {
        "id": 253,
        "name": "Veiny Pepperweed",
        "imageUrl": "http://dummyimage.com/183x171.jpg/ff4444/ffffff",
        "price": 203,
        "description": "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio."
      }]}
    ]
  },
  {
    title: 'Living Room',
    imageUrl: 'images/directory/livingroom.jpg',
    id: 2,
    linkUrl: '/livingroom',
    subSections: [
      {title: "Sofas",
      linkUrl: '/sofas',
      id: 137,
      items:[{
        "id": 4561,
        "name": "Manycolor Rimmed Lichen",
        "imageUrl": "http://dummyimage.com/147x176.jpg/5fa2dd/ffffff",
        "price": 57,
        "description": "Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus."
      }, {
        "id": 3981,
        "name": "Fragile Polytrichastrum Moss",
        "imageUrl": "http://dummyimage.com/185x123.jpg/cc0000/ffffff",
        "price": 106,
        "description": "Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam."
      }, {
        "id": 1809,
        "name": "Tupelo",
        "imageUrl": "http://dummyimage.com/234x228.jpg/cc0000/ffffff",
        "price": 130,
        "description": "Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula."
      }, {
        "id": 9538,
        "name": "Beard Lichen",
        "imageUrl": "http://dummyimage.com/104x188.jpg/ff4444/ffffff",
        "price": 128,
        "description": "Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio."
      }, {
        "id": 1500,
        "name": "Hairy Wild Coffee",
        "imageUrl": "http://dummyimage.com/136x149.jpg/cc0000/ffffff",
        "price": 88,
        "description": "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum."
      }, {
        "id": 482,
        "name": "Alpine Leafybract Aster",
        "imageUrl": "http://dummyimage.com/121x146.jpg/ff4444/ffffff",
        "price": 68,
        "description": "Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui."
      }]},
      {title: "Lighting",
      linkUrl: '/lighting',
      id: 138,
      items: [{
        "id": 3373,
        "name": "White Frasera",
        "imageUrl": "http://dummyimage.com/122x192.jpg/5fa2dd/ffffff",
        "price": 245,
        "description": "Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci."
      }, {
        "id": 8617,
        "name": "Melancholy Thistle",
        "imageUrl": "http://dummyimage.com/173x117.jpg/dddddd/000000",
        "price": 201,
        "description": "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis."
      }, {
        "id": 3330,
        "name": "Dacite Manzanita",
        "imageUrl": "http://dummyimage.com/104x230.jpg/ff4444/ffffff",
        "price": 91,
        "description": "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla."
      }, {
        "id": 9853,
        "name": "Melocactus",
        "imageUrl": "http://dummyimage.com/115x221.jpg/ff4444/ffffff",
        "price": 178,
        "description": "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus."
      }, {
        "id": 5922,
        "name": "Nevada Bird's-foot Trefoil",
        "imageUrl": "http://dummyimage.com/183x194.jpg/5fa2dd/ffffff",
        "price": 149,
        "description": "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius."
      }, {
        "id": 8656,
        "name": "Indian-physic",
        "imageUrl": "http://dummyimage.com/104x249.jpg/5fa2dd/ffffff",
        "price": 117,
        "description": "Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla."
      }, {
        "id": 7621,
        "name": "Gulf Hawthorn",
        "imageUrl": "http://dummyimage.com/236x122.jpg/5fa2dd/ffffff",
        "price": 91,
        "description": "Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque."
      }, {
        "id": 2207,
        "name": "Ponderosa Violet",
        "imageUrl": "http://dummyimage.com/145x243.jpg/cc0000/ffffff",
        "price": 62,
        "description": "Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum."
      }, {
        "id": 7459,
        "name": "Fishtail Swordfern",
        "imageUrl": "http://dummyimage.com/174x153.jpg/5fa2dd/ffffff",
        "price": 130,
        "description": "Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit."
      }]}
    ]
  },
  {
    title: 'Bedroom',
    imageUrl: 'images/directory/bedroom.jpg',
    id: 3,
    linkUrl: '/bedroom',
    subSections: [
      {title: "Beds",
       linkUrl: '/beds',
       id: 15486,
        items: [{
        "id": 6752,
        "name": "Floating Mannagrass",
        "imageUrl": "http://dummyimage.com/173x149.jpg/cc0000/ffffff",
        "price": 176,
        "description": "Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius."
      }, {
        "id": 8626,
        "name": "Strigose Beard Lichen",
        "imageUrl": "http://dummyimage.com/243x250.jpg/5fa2dd/ffffff",
        "price": 187,
        "description": "Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum."
      }, {
        "id": 3610,
        "name": "Lake Tahoe Yellowcress",
        "imageUrl": "http://dummyimage.com/159x245.jpg/dddddd/000000",
        "price": 211,
        "description": "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum."
      }, {
        "id": 3284,
        "name": "Marbleseed",
        "imageUrl": "http://dummyimage.com/243x203.jpg/dddddd/000000",
        "price": 246,
        "description": "Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue."
      }, {
        "id": 2086,
        "name": "Valley Lupine",
        "imageUrl": "http://dummyimage.com/209x170.jpg/dddddd/000000",
        "price": 218,
        "description": "Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis."
      }, {
        "id": 9033,
        "name": "Narrowleaf Crucianella",
        "imageUrl": "http://dummyimage.com/167x190.jpg/cc0000/ffffff",
        "price": 155,
        "description": "Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus."
      }]},
      {
        title: "Wardrobes",
        linkUrl: '/wardrobes',
        id: 154876,
        items: [{
        "id": 6816,
        "name": "Spearmint",
        "imageUrl": "http://dummyimage.com/119x147.jpg/cc0000/ffffff",
        "price": 136,
        "description": "Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend."
      }, {
        "id": 3756,
        "name": "Saguaro",
        "imageUrl": "http://dummyimage.com/119x153.jpg/cc0000/ffffff",
        "price": 91,
        "description": "Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus."
      }, {
        "id": 8511,
        "name": "Needle Lichen",
        "imageUrl": "http://dummyimage.com/184x188.jpg/ff4444/ffffff",
        "price": 124,
        "description": "Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo."
      }]} 
    ]
  },
  {
    title: 'Bath',
    imageUrl: 'images/directory/bathroom.jpg',
    id: 4,
    linkUrl: '/bathroom',
    subSections: [
      { title: "Bath",
        linkUrl: '/bath',
        id: 454876,
        items:[{
        "id": 692,
        "name": "False Mallow",
        "imageUrl": "http://dummyimage.com/170x244.jpg/ff4444/ffffff",
        "price": 91,
        "description": "Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis."
      }, {
        "id": 6913,
        "name": "Catnip",
        "imageUrl": "http://dummyimage.com/119x170.jpg/dddddd/000000",
        "price": 142,
        "description": "Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem."
      }, {
        "id": 9415,
        "name": "Wart Lichen",
        "imageUrl": "http://dummyimage.com/224x125.jpg/dddddd/000000",
        "price": 217,
        "description": "Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst."
      }]},
      { title: "Shower",
       linkUrl: '/shower',
       id: 4654776,
       items:[{
        "id": 3890,
        "name": "Leptarrhena",
        "imageUrl": "http://dummyimage.com/213x154.jpg/dddddd/000000",
        "price": 213,
        "description": "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis."
      }, {
        "id": 8294,
        "name": "Late Purple Aster",
        "imageUrl": "http://dummyimage.com/155x220.jpg/5fa2dd/ffffff",
        "price": 236,
        "description": "Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem."
      }]}
    ]
  },
  {
    title: 'More',
    imageUrl: 'images/directory/more.jpg',
    id: 5,
    linkUrl: '/more',
    subSections: [
      {title: "Cooking",
       linkUrl: '/cooking',
       id: 457894776,
       items:[{
        "id": 3245,
        "name": "Desert Thorn-apple",
        "imageUrl": "http://dummyimage.com/200x106.jpg/5fa2dd/ffffff",
        "price": 54,
        "description": "Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo."
      }, {
        "id": 3964,
        "name": "Hybrid Honeylocust",
        "imageUrl": "http://dummyimage.com/245x133.jpg/dddddd/000000",
        "price": 47,
        "description": "Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet."
      }, {
        "id": 1624,
        "name": "Yerba Parrera",
        "imageUrl": "http://dummyimage.com/237x145.jpg/cc0000/ffffff",
        "price": 50,
        "description": "Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo."
      }, {
        "id": 2062,
        "name": "Snakewood",
        "imageUrl": "http://dummyimage.com/175x157.jpg/5fa2dd/ffffff",
        "price": 203,
        "description": "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus."
      }, {
        "id": 7475,
        "name": "Leafystem Orchid",
        "imageUrl": "http://dummyimage.com/243x247.jpg/dddddd/000000",
        "price": 80,
        "description": "Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique."
      }, {
        "id": 3431,
        "name": "Chaparral Buckwheat",
        "imageUrl": "http://dummyimage.com/250x137.jpg/5fa2dd/ffffff",
        "price": 157,
        "description": "Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis."
      }, {
        "id": 3230,
        "name": "Bryoerythrophyllum Moss",
        "imageUrl": "http://dummyimage.com/169x196.jpg/5fa2dd/ffffff",
        "price": 194,
        "description": "Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla."
      }]},
      {title: "Art",
       linkUrl: '/art',
       id: 987894776,
       items:[{
        "id": 4997,
        "name": "American Chestnut",
        "imageUrl": "http://dummyimage.com/220x112.jpg/dddddd/000000",
        "price": 190,
        "description": "Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante."
      }, {
        "id": 5061,
        "name": "False Goldenweed",
        "imageUrl": "http://dummyimage.com/213x202.jpg/5fa2dd/ffffff",
        "price": 73,
        "description": "Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo."
      }, {
        "id": 3436,
        "name": "Chaparral Bird's-foot Trefoil",
        "imageUrl": "http://dummyimage.com/234x202.jpg/dddddd/000000",
        "price": 174,
        "description": "Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum."
      }, {
        "id": 4832,
        "name": "West Indian Dodder",
        "imageUrl": "http://dummyimage.com/152x211.jpg/dddddd/000000",
        "price": 240,
        "description": "Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis."
      }, {
        "id": 2424,
        "name": "Hairy False Goldenaster",
        "imageUrl": "http://dummyimage.com/133x117.jpg/5fa2dd/ffffff",
        "price": 72,
        "description": "Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam."
      }]}
    ]
  }
]

export default SHOP_DATA