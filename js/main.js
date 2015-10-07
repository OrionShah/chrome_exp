var print = function (text) {
    chrome.runtime.sendMessage({method: 'print', data: text});
}

$(document).ready(function() {
    Trello.authorize();

    var Boards;
    Trello.get(
        '/members/me/boards',
        function (data) {
            _.each(data, function (el) {
                console.log('each');
                console.log(el);
            });
        },
        function (error) {
            console.log(error);
        }
    );
});


// _.each(function(index, el) {
    
// });