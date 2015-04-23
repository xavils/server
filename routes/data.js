exports.register = function(server, options, next) {
	//include routes here
	server.route([
		{
			method: 'GET',
			path: '/data',
			handler: function(request, reply) {
				var topics = [
					{
						titles: ["hongKong", "restaurant", "butaoRamen"],
						message: "Been here quite a few times and every time I have the Green King because it tastes the best. They have other special flavours such as Prawn, Curry etc but they are always sold out when I get there. On this visit, they had Sea Salt King which is limited to 30 bowls per day so I tried that.I was so lucky I did not have to queue that day.",
						user_id: "5537581677caa5e20adf6671",
						username: "victoriali"
					},
					{
						titles: ["barcelona", "sights", "barceloneta"],
						message: "La Barceloneta is known for its sandy beach (which made an appearance in Don Quixote, book 2) and its many restaurants and nightclubs along the boardwalk. Over the past several years the quality of the sand on the beach has become a source of continued controversy. In February 2008, the World Health Organisation began an inquiry designed to ascertain whether the sand meets WHO beach health and safety guidelines.",
						user_id: "5537581677caa5e20adf6671",
						username: "victoriali"
					},
					{
						titles: ["hongKong", "restaurant", "butchersClub"],
						message: "Butcher's Club is known for their beef expertise and their burgers don't disappoint!  Been wanting to try this place out for awhile and never got to it till recently. Very packed when we arrived at 8pm which is ok. For a burger joint I don't mind the crowd. It's free seating so if you're with a friend you can have one wait for a seat while you order.",
						user_id: "5537581677caa5e20adf6671",
						username: "victoriali"
					},
					{
						titles: ["hongKong", "sights", "thePeak"],
						message: "If there is only one thing you can do in Hong Kong, go to The Peak. If you have many things to do here, still go to The Peak. The highest point on Hong Kong Island, this has been the city’s most exclusive neighbourhood since colonial times – back then it was the cooler air that attracted the rich and famous; in the post air-conditioning era, the views of one of the world’s most spectacular cityscapes keep them coming.",
						user_id: "5537581977caa5e20adf6672",
						username: "dimpleyuen"
					},
					{
						titles: ["hongKong", "sights", "mongkok"],
						message: "The area is characterized by a mixture of old and new multi-story buildings, with shops and restaurants at street level and commercial or residential units above. Major industries in Mong Kok are retail, restaurants (including fast food) and entertainment. It has been described and portrayed in films as an area in which triads run bars, nightclubs, and massage parlors. With its extremely high population density of 130,000/km2, Mong Kok was described as the busiest district in the world by the Guinness World Records.",
						user_id: "5537581977caa5e20adf6672",
						username: "dimpleyuen"
					},
					{
						titles: ["hongKong", "sights", "causewayBay"],
						message: "The present-day Causeway Bay is usually confused with East Point, the former having assimilated the latter. The original Causeway Bay is near the present-day Tin Hau MTR station, whereas the Causeway Bay MTR station is at East Point. The present-day concept of the Causeway Bay area covers all the way until Canal Road (Canal Road East and Canal Road West), or the Canal Road district or in Chinese Ngo Keng Kiu (鵝頸橋), lit., the bridge of a goose's neck.",
						user_id: "5537581977caa5e20adf6672",
						username: "dimpleyuen"
					},
					{
						titles: ["barcelona", "restaurant", "ticketsBar"],
						message: "The food ranged from good to great and the presentation and flavor profile of every dish was perfectly executed. I recommend trying things outside your boundaries here as what they can do with the flavors here is quite spectacular, you'll be surprised with what your favorite dish might be, I promise you that.",
						user_id: "5537581c77caa5e20adf6673",
						username: "kenchan"
					},
					{
						titles: ["hongKong", "sights", "starFerry"],
						message: "By 1941, the company had six vessels. During the Japanese Occupation of Hong Kong, the competing Yaumati Ferry was allowed to continue, while the Japanese commandeered the Star Ferry for their own purposes. The Golden Star and the Meridian Star were used to transport prisoners of war from Sham Shui Po to Kai Tak Airport. In 1943, the Golden Star was bombed and sunk in the Canton River by the Americans, and the Electric Star was sunk in the harbour. After the war, the ferries were recovered and returned to service.",
						user_id: "5537581c77caa5e20adf6673",
						username: "kenchan"
					},
					{
						titles: ["newYork", "restaurant", "alinea"],
						message: "Grant Achatz has been a world leader in culinary innovation since opening Alinea in Chicago back in 2005. Dishes such as hot potato, cold potato and black truffle explosion, as well as food suspended on wires or plated straight on to the table, have become iconic around the globe. And nearly a decade on, the chef continues to push the boundaries of avant-garde cuisine with his ever-evolving menus.",
						user_id: "5537581c77caa5e20adf6673",
						username: "kenchan"
					},
					{
						titles: ["hongKong", "restaurant", "australiaDairyCo"],
						message: "Australia Dairy Company (澳洲牛奶公司) is voted (by public) as the top eatery in Hong Kong at OpenRice Hong Kong, defeating all 5-star Hotels and 3-stars Michelin restaurants. They are famous for two things, their variations of egg custard pudding and their scrambled egg.",
						user_id: "5537582077caa5e20adf6674",
						username: "yangyang"
					},
					{
						titles: ["newYork", "sights", "broadway"],
						message: "The Broadway Theater District is a popular tourist attraction in New York City. According to The Broadway League, Broadway shows sold a record US$1.36 billion worth of tickets in 2014, an increase of 14% over the previous year. Attendance in 2014 stood at 13.13 million, a 13% increase over 2013.",
						user_id: "5537582077caa5e20adf6674",
						username: "yangyang"
					},
					{
						titles: ["newYork", "restaurant", "alinea"],
						message: "There’s the edible balloon, made from dehydrated apple and filled with helium, or a table-top camp-fire whose logs turn out to be charred parsnips. More recently, dishes have started to move away from the more in-your-face theatrics to offer more subtle creations where the drama takes place off-stage.",
						user_id: "5537582077caa5e20adf6674",
						username: "yangyang"
					},
					{
						titles: ["newYork", "restaurant", "momofuku"],
						message: "Momofuku could be translated from Japanese as 'lucky peach', though Chef David Chang has written that the name is 'an indirect nod' to Momofuku Ando, the Taiwanese-Japanese inventor of instant ramen. Chang also suggested it is not an accident he chose a word that sounds like the English curse word 'motherfucker'.",
						user_id: "5537582477caa5e20adf6675",
						username: "wilsoncheng"
					},
					{
						titles: ["newYork", "restaurant", "katsDeli"],
						message: "I ordered The Reuben with Pastrami when I came to Katz's Deli. The line was very long, however that's expected as many tourists throughout the area come here. When you walk in, they hand you a ticket that you give to the staff who then write down the price of your order. You NEED to hold on to this ticket, as it is your way out of the deli. They have security here for that reason. You also need to bring cash (if you want to avoid the ATM fees) since that's all they take.",
						user_id: "5537582477caa5e20adf6675",
						username: "wilsoncheng"
					},
					{
						titles: ["barcelona", "sights", "gothicQuarter"],
						message: "Despite several changes undergone in the 19th and early 20th century, many of the buildings date from Medieval times, some from as far back as the Roman settlement of Barcelona. Remains of the squared Roman Wall can be seen around Tapineria and Sots-Tinent Navarro to the north, Avinguda de la Catedral and Plaça Nova to the west and Carrer de la Palla to the south. El Call, the medieval Jewish quarter, is located within this area too.",
						user_id: "5537583177caa5e20adf6676",
						username: "eliasommerland"
					},
					{
						titles: ["barcelona", "sights", "boqueriaMarket"],
						message: "It is a paradise for the senses. Wake to the smells and colors of the Boqueria. A multitude of feelings that 's open passage between the busy comings and goings of people in the right profession strives to buy and sell.",
						user_id: "5537583177caa5e20adf6676",
						username: "eliasommerland"
					},
					{
						titles: ["newYork", "sights", "statueOfLiberty"],
						message: "The statue was constructed in France, shipped overseas in crates, and assembled on the completed pedestal on what was then called Bedloe's Island. The statue's completion was marked by New York's first ticker-tape parade and a dedication ceremony presided over by President Grover Cleveland.",
						user_id: "5537583177caa5e20adf6676",
						username: "eliasommerland"
					},
					{
						titles: ["newYork", "sights", "empireState"],
						message: "The Empire State Building is generally thought of as an American cultural icon. It is designed in the distinctive Art Deco style and has been named as one of the Seven Wonders of the Modern World by the American Society of Civil Engineers. The building and its street floor interior are designated landmarks of the New York City Landmarks Preservation Commission, and confirmed by the New York City Board of Estimate.",
						user_id: "5537583777caa5e20adf6677",
						username: "domdunnet"
					},
					{
						titles: ["hongKong", "sights", "lantauBuddha"],
						message: "Widely touted as one of the most significant Lantau tourist spots, Tian Tan Buddha takes visitors on a sacred land tour of enlightenment. It’s a seated outdoor bronze Buddha statue sits calmly next to Po Lin Monastery. The easiest way to reach the Buddha is through the Ngong Ping 360 Cable Car, which takes merely 25 minutes and allows visitors to breathe in the beautiful scenery along the journey. ",
						user_id: "5537583777caa5e20adf6677",
						username: "domdunnet"
					},
					{
						titles: ["hongKong", "restaurant", "libertyPrivateWorks"],
						message: "Throughout the 8-course meal you have a front row seat to watch Executive Chef Vicky Cheng and his team hard at work cooking and plating each dish. Vicky's creativity and passion shines through his visually stunning and equally delicious dishes. Congratulations on the engagement by the way!",
						user_id: "5537583777caa5e20adf6677",
						username: "domdunnet"
					},
					{
						titles: ["hongKong", "restaurant", "chinoHK"],
						message: "CHINO, with its laid back vibe, bold black and white mural and funky tunes is brought to us by Chef Erik Idos, former executive chef at Nobu Hong Kong. Erik is Filipino but grew up in LA. Merging this with his solid experience preparing Japanese cuisine, Erik has created an eclectic yet delicious mix of flavours that really get the taste buds going.",
						user_id: "5537583e77caa5e20adf6678",
						username: "miadacamara"
					},
					{
						titles: ["newYork", "sights", "centralPark"],
						message: "During the park's construction, Olmsted fought constant battles with the park commissioners, many of them also politicians. In 1860, he was forced out for the first of many times as Central Park's superintendent, and Andrew Haswell Green, the former president of New York City's Board of Education took over as the commission's chairman.",
						user_id: "5537583e77caa5e20adf6678",
						username: "miadacamara"
					},
					{
						titles: ["barcelona", "restaurant", "ticketsBar"],
						message: "I went for the tasting menu which they can cater to you, mine ran about $125 a person. Service started off excellent and by the end it was very good, I make the distinction because of the price point it is worth noting. As it got busier we wished we were checked on more.",
						user_id: "5537583e77caa5e20adf6678",
						username: "miadacamara"
					},
					{
						titles: ["newYork", "restaurant", "alinea"],
						message: "Alinea is one of the most decorated restaurants in the world. It currently holds the highest rating of three stars from the Michelin Guide. It has received the AAA Five Diamond Award, the highest level of recognition given by the AAA, in consecutive years from 2007 to 2014. It also ranked No. 9 on the S. Pellegrino World's 50 Best Restaurants List, second only to Eleven Madison Park in the U.S.",
						user_id: "5537584377caa5e20adf6679",
						username: "xiaoyang"
					},
					{
						titles: ["barcelona", "restaurant", "dosPalillos"],
						message: "This is Japanese-Catalan fusion, if there is such a thing so you need to be ready for that. I loved the fried sardines wrapped in a lily pad. Sounds heavy but it was light and delicious. Steer away from seaweed salad if you're not up for something that tastes like you just scooped it out of the sea.",
						user_id: "5537584377caa5e20adf6679",
						username: "xiaoyang"
					},
					{
						titles: ["barcelona", "restaurant", "barTomas"],
						message: "I am from Barcelona and I can tell you that after a morning at school there is nothing like going to this bar and having two burgers with fried eggs and delicious brava chips for 5 euros. It is not glamurous, the food is not the best, it is noisy, but it is one of the most genuine restaurants of the quarter.",
						user_id: "5537584377caa5e20adf6679",
						username: "xiaoyang"
					},
					{
						titles: ["barcelona", "restaurant", "shunka"],
						message: "This is one of my 3 favorite restaurants in the whole world. It's the best Japanese restaurant I know (ok, koyshunka, of the same chef and two streets behind Shunka, is arguably better, but more ambitious and expensive). Do book in advance or you won't find a table. I have never had a meal that was not just gorgeous.",
						user_id: "5537584d77caa5e20adf667a",
						username: "michaelchow"
					},
					{
						titles: ["barcelona", "sights", "sagradaFamilia"],
						message: "The style of la Sagrada Família is variously likened to Spanish Late Gothic, Catalan Modernism and to Art Nouveau or Catalan Noucentisme. While the Sagrada Família falls within the Art Nouveau period, Nikolaus Pevsner points out that, along with Charles Rennie Macintosh in Glasgow, Gaudí carried the Art Nouveau style far beyond its usual application as a surface decoration.",
						user_id: "5537584d77caa5e20adf667a",
						username: "michaelchow"
					},
					{
						titles: ["newYork", "sights", "timesSquare"],
						message: "The northern triangle of Times Square is Duffy Square, which was dedicated in 1937 to Chaplain Francis P. Duffy of New York City's Fighting 69th Infantry Regiment. A memorial to Duffy is located there, along with a statue of George M. Cohan and the TKTS discount theatre tickets booth. The stepped red roof of the TKTS booth also provides seating for various events. The statue of Duffy and Duffy Square were listed on the National Register of Historic Places in 2001.",
						user_id: "5537584d77caa5e20adf667a",
						username: "michaelchow"
					},
					{
						titles: ["barcelona, sights, antiaircraftBatteries"],
						message: "This is a site recently restored in collaboration between local neighbors, former residents, the MUHBA (Barcelona HIstory Museum), architects, and the Memorial Democratic. It was an anti-aircraft battery in use by the Spanish Republican government to defend Barcelona from aerial bombardments from fascist General Francisco Franco and his Italian Fascist allies.",
						user_id: "5537581977caa5e20adf6672",
						username: "dimpleyuen"
					}
				];

				var db = request.server.plugins['hapi-mongodb'].db;
				var ObjectID = request.server.plugins['hapi-mongodb'].ObjectID;

				for (var i = 0; i < topics.length; i++) {
					console.log(topics[i]);
					topics[i].user_id = ObjectID(topics[i].user_id);

					db.collection('topics').insert(topics[i], function(err, writeResult){
						reply(writeResult);
					});
				};
			}
		}
	]);


	next();
};

//give this file some attributes
exports.register.attributes = {
	name: 'data-route',
	version: '0.0.1'
};
