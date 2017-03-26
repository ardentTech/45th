var NYT = "https://www.nytimes.com/2016/10/08/us/donald-trump-tape-transcript.html",
    PRO_PUBLICA_URL = "https://projects/propublica.org/politwoops/tweet/",
    WRAPPER_STYLES = "background: #111; color: gold; padding: 0 2px;";


var proPublicaTweet = function(id) {
    return PRO_PUBLICA_URL + id;
};


var _quotes = {
    trump: [
        ["Mexico will pay for the wall!", proPublicaTweet("771299405563588608")],
        ["We will repeal and replace disastrous #Obamacare!", proPublicaTweet("764154460264394752")],
        ["I would NEVER Moch disabled. Shame!", proPublicaTweet("741983436865306627")],
        ["I will spill the beans on your wife", proPublicaTweet("712454697311928320")],
        ["Mitt Romney is a mixed up man who doesn't have a clue.", proPublicaTweet("710924145584771072")],
        ["Lying Ted Cruz and leightweight chocker Marco Rubio", proPublicaTweet("")],
        ["In fact, I took her out furniture shopping.", NYT],
        ["I moved on her like a bitch.", NYT],
        ["Grab 'em by the pussy. You can do anything.", NYT],
        ["And when you're a star, they let you do it. You can do anything.", NYT],
    ]
};

var patterns = [[/president.*trump/gi, _quotes.trump]];


function getQuoteNode(quotes) {
    var quote = quotes[Math.floor(Math.random() * quotes.length)],
        span = document.createElement("span");

    span.style.cssText = WRAPPER_STYLES;
    span.appendChild(document.createTextNode(quote[0]));
    span.setAttribute("title", "Source: " + quote[1]);
    return span;
}


function getReplacementNode(match) {
    return wrapNodes(
        getReplacementNodes(match),
        document.createElement("span"));
}


function getReplacementNodes(match) {
    var lastIndex = 0,
        newNodes = [],
        result = null;

    while ((result = match.pattern[0].exec(match.node.nodeValue)) !== null) {
        // match at beginning
        if (result.index === 0) {
            newNodes.push(getQuoteNode(match.pattern[1]));
        // match at end
        } else if (pattern.lastIndex === result.input.length) {
            if (result.index > lastIndex) {
                newNodes.push(buildText(result.input.slice(lastIndex, result.index)));
            }
            newNodes.push(getQuoteNode(match.pattern[1]));
        // match in middle
        } else {
            if (result.index > lastIndex) {
                newNodes.push(buildText(result.input.slice(lastIndex, result.index)));
            }
            newNodes.push(getQuoteNode(match.pattern[1]));
        }
        lastIndex = match.pattern[0].lastIndex;
    }

    // handle tail text
    if (match.node.nodeValue.length > lastIndex && lastIndex !== 0) {
        newNodes.push(buildText(match.node.nodeValue.slice(lastIndex)));
    }

    return newNodes;
}


function filterNodes(nodes) {
    var matches = [];
    nodes.forEach(function(node) {
        return patterns.some(function(pattern) {
            if (pattern[0].test(node.nodeValue)) {
                matches.push({ node: node, pattern: pattern }); 
                return true;
            } 
        }); 
    });
    return matches;
}


function getTextNodes() {
    var node, matches = [],
        walker = document.createTreeWalker(
            document.body, NodeFilter.SHOW_TEXT, null, false);
    while (node = walker.nextNode()) matches.push(node);
    return matches;
}


function swapNodes(matches) {
    matches.forEach(function(match) {
        match.node.parentNode.replaceChild(
            getReplacementNode(match), match.node);
    });
}


function wrapNodes(nodes, wrapper) {
    nodes.forEach(function(node) { wrapper.appendChild(node); });
    return wrapper;
}


(function main() {
    swapNodes(filterNodes(getTextNodes()));
})();
