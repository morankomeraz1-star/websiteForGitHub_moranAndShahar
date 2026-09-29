function checkForm() {
    const nameVal = document.getElementById('fullName').value;
    const emailVal = document.getElementById('email').value;
    const msgVal = document.getElementById('message').value;

    let hasAtSign = false;
    for (let i = 0; i < emailVal.length; i++) {
        if (emailVal[i] === '@') {
            hasAtSign = true;
           break ; 
        }
    }

    let isRoleSelected = false;
    if (document.getElementById('roleStudent').checked || document.getElementById('roleLecturer').checked) { 
        isRoleSelected = true;
    }

    const btn = document.getElementById('submitBtn');
    if (nameVal !== "" && emailVal !== "" && hasAtSign && msgVal !== "" && isRoleSelected) {
        btn.disabled = false;
    } else {
        btn.disabled = true;
    }
}
function handleRadio() {
    checkForm(); 

    document.getElementById('imgStudent').classList.add('hidden');
    document.getElementById('imgLecturer').classList.add('hidden');

    if (document.getElementById('roleStudent').checked) {
        document.getElementById('imgStudent').classList.remove('hidden');
    } else if (document.getElementById('roleLecturer').checked) {
        document.getElementById('imgLecturer').classList.remove('hidden');
    }
}
function handleCheckbox(checkboxId, imgId) {
    const cb = document.getElementById(checkboxId);
    const img = document.getElementById(imgId);

    if (cb.checked) {
        img.classList.add('highlight');
    } else {
        img.classList.remove('highlight');
    }
}
function submitForm() {
    const nameVal = document.getElementById('fullName').value;
    const emailVal = document.getElementById('email').value;
    const msgVal = document.getElementById('message').value;

    let roleValue = "";
    if (document.getElementById('roleStudent').checked) {
        roleValue = document.getElementById('roleStudent').value;
    } else {
        roleValue = document.getElementById('roleLecturer').value;
    }

    let selectedTopics = [];

    const topicIds = ["topicBehaviorism", "topicSocial", "topicCognition", "topicConstructivism", "topicMotivation"];

    for (let i = 0; i < topicIds.length; i++) {
        const currentCheckbox = document.getElementById(topicIds[i]);
        if (currentCheckbox.checked) {
            let currentLen = selectedTopics.length;
            selectedTopics[currentLen] = currentCheckbox.value;
        }
    }

    let topicsSummary = "";
    if (selectedTopics.length === 0) {
        topicsSummary = "לא נבחרו תחומי עניין.";
    } else {
        for (let i = 0; i < selectedTopics.length; i++) {
            topicsSummary += selectedTopics[i];

            if (i !== selectedTopics.length - 1) {
                topicsSummary += ", ";
            }
        }
    }

    let summaryMessage = "שלום " + nameVal + ",\n\n";
    summaryMessage += "איזה כיף להיות " + roleValue + "\n";
    summaryMessage += "תחומי העניין שבחרת הם: " + topicsSummary + "\n\n";
    summaryMessage += "תוכן הפנייה: \"" + msgVal + "\"\n\n";
    summaryMessage += "תודה! נחזור אליך למייל: " + emailVal;
    
    alert(summaryMessage);
}