var leftForm = document.getElementById("leftMessageForm");
var rightForm = document.getElementById("rightMessageForm");
var leftInput = document.getElementById("leftMessageinput");
var rightInput = document.getElementById("rightMessageinput");
var leftMessages = document.getElementById("leftMessages");
var rightMessages = document.getElementById("rightMessages");

var user1Prefix = "User A";
var user2Prefix = "User B";

leftForm.addEventListener("submit", sendMessageFromUser1);
rightForm.addEventListener("submit", sendMessageFromUser2);

function sendMessageFromUser1(event)
{
    event.preventDefault();

    if (!leftInput.value)
      return;

    var message = user1Prefix + ": " + leftInput.value;
    var selfMessage = "You: " + leftInput.value;
    leftInput.value = null;

    var li = document.createElement("li");
    var li2 = document.createElement("li");
    li.textContent = selfMessage;
    li2.textContent = message;
    leftMessages.appendChild(li);
    rightMessages.appendChild(li2);
}

function sendMessageFromUser2(event)
{
    event.preventDefault();

    if (!rightInput.value)
      return;

    var message = user2Prefix + ": " + rightInput.value;
    var selfMessage = "You: " + rightInput.value;
    rightInput.value = null;

    var li = document.createElement("li");
    var li2 = document.createElement("li");
    li.textContent = selfMessage;
    li2.textContent = message
    rightMessages.appendChild(li);
    leftMessages.appendChild(li2);
}