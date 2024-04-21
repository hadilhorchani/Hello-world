// Define a class for the Opinion Exchange
class OpinionExchange {
    constructor() {
        this.objects = {};
    }

    // Method to add object to chat about 
    addObject(objectName) {
        if (!this.objects[objectName]) {
            this.objects[objectName] = [];
            console.log(`"${objectName}" added to the Opinion Exchange.`);
            showNotification(`"${objectName}" added to the Opinion Exchange.`, 'success');
        } else {
            console.log(`"${objectName}" already exists in the Opinion Exchange.`);
            showNotification(`"${objectName}" already exists in the Opinion Exchange.`, 'error');
        }
    }

    // Method to add opinion
    addOpinion(objectName, opinion) {
        if (this.objects[objectName]) {
            this.objects[objectName].push(opinion);
            console.log(`Opinion added for "${objectName}": "${opinion}"`);
            showNotification(`Opinion added for "${objectName}": "${opinion}"`, 'success');
        } else {
            console.log(`"${objectName}" does not exist in the Opinion Exchange.`);
            showNotification(`"${objectName}" does not exist in the Opinion Exchange.`, 'error');
        }
    }

    // Method to get opinions as an input 
    getOpinions(objectName) {
        if (this.objects[objectName]) {
            console.log(`Opinions about "${objectName}":`);
            this.objects[objectName].forEach((opinion, index) => {
                console.log(`${index + 1}. ${opinion}`);
            });
        } else {
            console.log(`"${objectName}" does not exist in the Opinion Exchange.`);
            showNotification(`"${objectName}" does not exist in the Opinion Exchange.`, 'error');
        }
    }
}

// Initialize OpinionExchange object
const opinionExchange = new OpinionExchange();

// Cache frequently accessed DOM elements
const form = document.getElementById('opinionForm');
const objectNameInput = document.getElementById('objectName');
const opinionInput = document.getElementById('opinion');
const notificationsContainer = document.getElementById('notifications');
const subjectElements = document.querySelectorAll('.subject');

// Add event listeners
form.addEventListener('submit', handleFormSubmission);
subjectElements.forEach(subjectElement => {
    subjectElement.addEventListener('click', handleSubjectClick);
});

// Function to handle form submission
function handleFormSubmission(event) {
    event.preventDefault(); // Prevent form submission

    const objectName = objectNameInput.value;
    const opinion = opinionInput.value;

    // Add object to exchange if it doesn't exist
    opinionExchange.addObject(objectName);

    // Add opinion
    opinionExchange.addOpinion(objectName, opinion);

    // Clear form fields
    objectNameInput.value = '';
    opinionInput.value = '';
}

// Function to handle subject click events
function handleSubjectClick(event) {
    const selectedSubject = event.target.textContent;
    objectNameInput.value = selectedSubject;
}

// Function to show notification
function showNotification(message, type) {
    const notificationDiv = document.createElement('div');
    notificationDiv.classList.add('notification', type);
    notificationDiv.textContent = message;

    notificationsContainer.appendChild(notificationDiv);

    // Remove the notification after a certain time
    setTimeout(() => {
        notificationsContainer.removeChild(notificationDiv);
    }, 3000); // 3000 milliseconds (3 seconds) - adjust as needed
}
