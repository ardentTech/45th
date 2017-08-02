var NYT = "https://www.nytimes.com/2016/10/08/us/donald-trump-tape-transcript.html",
    PRO_PUBLICA_URL = "https://projects/propublica.org/politwoops/tweet/",
    WRAPPER_STYLES = "background: #111; color: gold; padding: 0 2px;";


var proPublicaTweet = function(id) {
    return PRO_PUBLICA_URL + id;
};


var quotes = {
    trump: {
        fresh: [
            ["This is more work than in my previous life.", "http://www.reuters.com/article/us-usa-trump-100days-idUSKBN17U0CA"],
            ["I thought it would be easier.", "http://www.reuters.com/article/us-usa-trump-100days-idUSKBN17U0CA"],
            ["I think we've done more than perhaps any president in the first 100 days.", "http://www.washingtonexaminer.com/full-interview-with-president-trump-on-his-first-100-days/article/2621516"],
            ["I'd give us an A.", "http://www.washingtonexaminer.com/full-interview-with-president-trump-on-his-first-100-days/article/2621516"],
            ["If Abe Lincoln came back to life, he would lose New York and he would lose California.", "https://apnews.com/c810d7de280a47e88848b0ac74690c83"],
            ["President Xi [of China], we have a, like, a really great relationship.", "https://apnews.com/c810d7de280a47e88848b0ac74690c83"],
            ["So I've been working on health care for 60 days...You know, we're very close.", "https://apnews.com/c810d7de280a47e88848b0ac74690c83"],
            ["Hey, I’m a nationalist and a globalist. I’m both.", "https://www.wsj.com/articles/trump-says-nafta-partners-persuaded-him-to-keep-u-s-in-trade-pact-1493320127"],
            ["...you have to take out their families.", "http://www.cnn.com/2015/12/02/politics/donald-trump-terrorists-families/"],
            ["Mexico will pay for the wall!", proPublicaTweet("771299405563588608")],
            ["We will repeal and replace disastrous #Obamacare!", proPublicaTweet("764154460264394752")],
            ["I would NEVER Moch disabled. Shame!", proPublicaTweet("741983436865306627")],
            ["I will spill the beans on your wife", proPublicaTweet("712454697311928320")],
            ["Mitt Romney is a mixed up man who doesn't have a clue.", proPublicaTweet("710924145584771072")],
            ["Lying Ted Cruz and leightweight chocker Marco Rubio", proPublicaTweet("703223661658963968")],
            ["In fact, I took her out furniture shopping.", NYT],
            ["I moved on her like a bitch.", NYT],
            ["Grab 'em by the pussy. You can do anything.", NYT],
            ["And when you're a star, they let you do it. You can do anything.", NYT],
            ["I like people that weren't captured.", "http://blogs.wsj.com/washwire/2015/07/19/what-donald-trump-said-about-mccain-obama-immigrants-his-hair/"],
            ["How stupid are the people of Iowa?", "http://fortune.com/2015/12/27/donald-trump-quotes-of-2015/"],
            ["I don't like the name 'birther'...", "http://blogs.wsj.com/washwire/2015/07/19/what-donald-trump-said-about-mccain-obama-immigrants-his-hair/"],
            ["Look at that face! Would anyone vote for that?", "http://www.insideedition.com/headlines/13517-here-are-the-most-outrageous-things-donald-trump-said-this-year"],
            ["...as long as you've got a young and beautiful piece of ass.", "http://www.huffingtonpost.com/entry/donald-trump-books_55d4a1a7e4b07addcb44e2e3"],
            ["...blood coming out of her whatever.", "http://www.insideedition.com/headlines/13517-here-are-the-most-outrageous-things-donald-trump-said-this-year"],
            ["...if Ivanka weren't my daughter, perhaps I'd be dating her.", "http://www.bustle.com/articles/94152-10-donald-trump-quotes-about-women-that-help-explain-why-nbc-gave-him-the-boot"],
            ["...when you get these terrorists, you have to take out their families.", "http://www.nationalreview.com/article/428719/kill-terrorists-families-gangsta-trump"],
            ["I identify more as a Democrat.", "http://crooksandliars.com/cltv/2015/08/rand-paul-releases-attack-ad-against"],
            ["I know Hillary and I think she'd make a great president or vice-president.", "http://www.buzzfeed.com/andrewkaczynski/donald-trump-once-blogged-that-hillary-clinton-would-make-a?utm_term=.wj97N1p8b#.gwo81kL0Z"]
        ],
        stale: []
    }
};
