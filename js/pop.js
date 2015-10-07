var print = function (text) {
    chrome.runtime.sendMessage({method: 'print', data: text});
}
$(document).ready(function () {
    Trello.authorize();
});
$('#TrelloLogin').click(function() {
    console.log('test');
    // chrome.runtime.sendMessage(
    //     {method: "getTrello"},
    //     function(response) {
    //         console.log(response);
    //     }
    // );
    

    // var success = function(successMsg) {
    // console.log(successMsg);
    // };

    // var error = function(errorMsg) {
    //   console.log(errorMsg);
    // };
    Trello.get('/member/me/boards', print, print);
});

