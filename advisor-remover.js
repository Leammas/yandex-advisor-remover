//     Yandex-advisor remover
//     (c) 2015 Vladimir Samoylov
//     https://github.com/Leammas
//     You may freely distribute it under the MIT license.
(function() {

    // select the target node
    var target = document.querySelector('body');

    // create an observer instance
    var observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (
				mutation.addedNodes.length === 1 &&
				mutation.addedNodes[0].childNodes.length > 10 &&
				mutation.addedNodes[0].childNodes[1].tagName == 'DIV' &&
				mutation.addedNodes[0].id.search(/[a-z0-9]{13}/i) === 0
            )
            {
                var adviceId = mutation.addedNodes[0].id;
                // From here on you can even type "THE BEST DEAL OVER MARKET" in advisor panel
                var advisorElement = document.getElementById(adviceId);
                // But I will just kill it with fire
                advisorElement.parentNode.removeChild(advisorElement);
                document.getElementsByTagName("body")[0].style.marginTop = "-38px";
                // Bye advisor
                observer.disconnect();
            }
        });
    });

    // configuration of the observer:
    var config = { attributes: true, childList: true, characterData: true };

    // pass in the target node, as well as the observer options
    observer.observe(target, config);

})();