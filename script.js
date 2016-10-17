(function () {

    const messageContainerNotImportant = document.getElementsByClassName("not-important-message-container")[0];
    const messageContainerImportant = document.getElementsByClassName("important-message-container")[0];
    const messageContainerCritical = document.getElementsByClassName("critical-message-container")[0];

    const messageCounterNotImportant = document.getElementsByClassName("not-important-message-counter")[0];
    const messageCounterImportant = document.getElementsByClassName("important-message-counter")[0];
    const messageCounterCritical = document.getElementsByClassName("critical-message-counter")[0];

    const messageTitleInput = document.getElementsByClassName("message-title-input")[0];
    const messageBodyInput = document.getElementsByClassName("message-body-input")[0];
    const messageAddButton = document.getElementsByClassName("message-add-button")[0];





    const Message = function (title, body) {
        this.title = title;
        this.body = body;
        this.div = document.createElement("div");
        this.div.className = "message";
        this.div.innerHTML = this.title + "<br>" + this.body;
    };

    const MessageList = function (container, counter) {
        this.messageContainer = container;
        this.messageCountElement = counter;
        this.messageCount = 0;

        this.addMessage = function(message){
            this.messageContainer.appendChild(message.div);
            message.div.addEventListener("click", this.removeMessage.bind(this));
            this.incrementMessageCount();
        };

        this.removeMessage = function (event) {
            event.target.remove();
            this.decrementMessageCount();
        };

        this.incrementMessageCount = function(){
            this.messageCount++;
            this.messageCountElement.innerHTML = this.messageCount;
        };
        this.decrementMessageCount = function(){
            this.messageCount--;
            this.messageCountElement.innerHTML = this.messageCount;
        }
    };
    const notImportantMessages = new MessageList(messageContainerNotImportant, messageCounterNotImportant);
    const importantMessages = new MessageList(messageContainerImportant, messageCounterImportant);
    const criticalMessages = new MessageList(messageContainerCritical, messageCounterCritical);

    const addMessage = function(){
        if(document.querySelector('input[name="priority"]:checked').value === "not-important"){
            const newMessage = new Message (messageTitleInput.value, messageBodyInput.value);
            notImportantMessages.addMessage(newMessage);
        } else if(document.querySelector('input[name="priority"]:checked').value === "important"){
            const newMessage = new Message (messageTitleInput.value, messageBodyInput.value);
            importantMessages.addMessage(newMessage);
        } else if(document.querySelector('input[name="priority"]:checked').value === "critical"){
            const newMessage = new Message (messageTitleInput.value, messageBodyInput.value);
            criticalMessages.addMessage(newMessage);
        }
    };
    messageAddButton.addEventListener("click" , addMessage);





})();