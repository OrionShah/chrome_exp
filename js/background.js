

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    switch (request.method) {
        case 'saveVar':
            localStorage[request.name] = request.data;
            sendResponse({status: 'Saved'});
            break;

        // Case 'TrelloLogin':
        //     sendResponse({status: "OK", data: Tlogin()});
        //     break;

        case 'getTrello':
            console.log('getTrello');
            Trello.authorize();
            console.log(Trello);
            sendResponse({status: 'OK', data: Trello});
            break;

        case 'print':
            console.log(request.data);
            break;

    }
});
