var patterns = [
    [/(president|donald|president\sdonald)+\strump/gi, quotes.trump]
];


function buildSpan() { return document.createElement("span"); }


function buildText(text) { return document.createTextNode(text); }


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


function getQuoteNode(quotes) {
    var quote = getRandomQuote(quotes),
        span = buildSpan();

    span.style.cssText = WRAPPER_STYLES;
    span.appendChild(buildText(quote[0]));
    span.setAttribute("title", "Source: " + quote[1]);
    return span;
}


function getRandomQuote(quotes) {
    if (quotes.fresh.length === 0) quotes.fresh.push(...quotes.stale);

    var quote = quotes.fresh.splice(
        Math.floor(Math.random() * quotes.fresh.length), 1)[0];
    quotes.stale.push(quote);
    return quote;
}


function getReplacementNode(match) {
    return wrapNodes(getReplacementNodes(match), buildSpan());
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
        } else if (match.pattern[0].lastIndex === result.input.length) {
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

    // handle remaining node text
    if (match.node.nodeValue.length > lastIndex && lastIndex !== 0) {
        newNodes.push(buildText(match.node.nodeValue.slice(lastIndex)));
    }

    return newNodes;
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


(function main() { swapNodes(filterNodes(getTextNodes())); })();
