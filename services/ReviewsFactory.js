nicksFlix.factory('ReviewsFactory', function ReviewsFactory() {
  var factory = {};
  // Five hard coded reviews
  factory.reviews = [
    {
      title: "Citizen Kane: Properly Rated by Critics",
      reviewBody: "Although Citizen Kane is generally regarded by critics to be one of the best movies of all-time, if not the single best movie ever, a lot of the general public views the movie as overrated and boring.  I entirely diasgree.  The story-telling was innovative and the cinematography (including ground-breaking use of deep-focus) is gorgeous and engaging by itself.",
      id: 1
    },
    {
      title: "Most overrated comedy ever is Napoleon Dynamite",
      reviewBody: "Chuckled once.  Laughed zero times.  Horribly boring.",
      id: 2
    },
    {
      title: "Godfather vs. Godfather: Part II",
      reviewBody: "Considered by critcs and audiences alike as two of the greatest movies of all-time, the consensus on which is better is up-in-the-air.  While the first film has an enthralling and tightly constructed rise-to-power story for Michael, I prefer the second film's spralling nature, showing both a young Vito's ascension to Don and Michael's reign as the current head of the family (not to mention the heartbreaking ending).",
      id: 3
    },
    {
      title: "The best Star Wars movie: The Phantom Menace",
      reviewBody: "....on April Fool's Day.",
      id: 4
    },
    {
      title: "Bubble Boy....Jake Gyllenhaal's best movie",
      reviewBody: "I mean...duh.",
      id: 5
    }
  ];

  factory.addReview = function() {
    factory.reviews.push({title: factory.reviewTitle, reviewBody: factory.reviewBody, id: factory.reviews.length +1});
    factory.reviewTitle = null;
    factory.reviewBody = null;
  };
  return factory;
});
