// Initialize templates from localStorage or use defaults
let templates = JSON.parse(localStorage.getItem('emailTemplates')) || {
    'software-engineer': `Hi {personName},

I hope this message finds you well. I came across {companyName} and was particularly impressed by your innovative approach to software development.

As a Software Engineer with extensive experience in full-stack development, I'm excited about the possibility of contributing to {companyName}'s success. I've worked on various projects involving modern technologies and have a strong track record of delivering high-quality solutions.

Would you be open to a brief conversation about potential opportunities at {companyName}? I'd love to learn more about your team and discuss how my skills could align with your needs.

Best regards,
Sagar Gondaliya
sagargondaliya50@gmail.com
07587860133`,

    'senior-software-engineer': `Hi {personName},

I hope this message finds you well. I've been following {companyName}'s growth and am particularly impressed by your technical innovations.

As a Senior Software Engineer with extensive experience in leading development teams and architecting scalable solutions, I'm excited about the possibility of contributing to {companyName}'s continued success. I've successfully delivered complex projects and mentored junior developers throughout my career.

Would you be open to a brief conversation about potential opportunities at {companyName}? I'd love to learn more about your team's challenges and discuss how my expertise could add value.

Best regards,
Sagar Gondaliya
sagargondaliya50@gmail.com
07587860133`,

    'senior-tech-support': `Hi {personName},

I hope this message finds you well. I've been impressed by {companyName}'s commitment to technical excellence and customer satisfaction.

As a Senior Technical Support professional with extensive experience in troubleshooting complex systems and leading support teams, I'm excited about the possibility of contributing to {companyName}'s success. I've consistently delivered high-quality technical support and implemented efficient support processes.

Would you be open to a brief conversation about potential opportunities at {companyName}? I'd love to learn more about your technical support needs and discuss how my experience could benefit your team.

Best regards,
Sagar Gondaliya
sagargondaliya50@gmail.com
07587860133`,

    'production-support': `Hi {personName},

I hope this message finds you well. I've been following {companyName}'s operations and am particularly impressed by your commitment to maintaining high-quality production systems.

As a Production Support specialist with extensive experience in ensuring system reliability and performance, I'm excited about the possibility of contributing to {companyName}'s success. I've successfully managed critical production environments and implemented robust monitoring solutions.

Would you be open to a brief conversation about potential opportunities at {companyName}? I'd love to learn more about your production environment and discuss how my expertise could help maintain your systems' stability.

Best regards,
Sagar Gondaliya
sagargondaliya50@gmail.com
07587860133`,

    'senior-fullstack': `Hi {personName},

I hope this message finds you well. I've been following {companyName}'s technological innovations and am particularly impressed by your approach to full-stack development.

As a Senior Full Stack Developer with extensive experience in both frontend and backend technologies, I'm excited about the possibility of contributing to {companyName}'s success. I've successfully delivered complex web applications and have a strong track record of implementing scalable solutions.

Would you be open to a brief conversation about potential opportunities at {companyName}? I'd love to learn more about your technical stack and discuss how my full-stack expertise could benefit your team.

Best regards,
Sagar Gondaliya
sagargondaliya50@gmail.com
07587860133`,

    'work-visa': `Hi {personName},

Thank you for reaching out. I truly appreciate the opportunity.

I'm very interested in learning more about the role. Could you also kindly confirm whether the company provides Skilled Worker visa sponsorship? I currently hold a Skilled Worker visa and would require sponsorship to continue working in the UK.

I'm available to join immediately.

Thank you again,
Sagar Gondaliya
sagargondaliya50@gmail.com
07587860133`
};

// Initialize personal info from localStorage or use defaults
let personalInfo = JSON.parse(localStorage.getItem('personalInfo')) || {
    name: 'Sagar Gondaliya',
    email: 'sagargondaliya50@gmail.com',
    phone: '07587860133',
    linkedin: 'https://www.linkedin.com/in/sagar-gondaliya/',
    github: 'https://github.com/Sagar610'
};

// DOM Elements
const templateButtons = document.querySelectorAll('.template-btn');
const companyNameInput = document.getElementById('company-name');
const personNameInput = document.getElementById('person-name');
const generatedMessage = document.getElementById('generated-message');
const copyMessageBtn = document.getElementById('copy-message');
const copyButtons = document.querySelectorAll('.copy-btn');
const editTemplatesBtn = document.getElementById('edit-templates');
const editPersonalInfoBtn = document.getElementById('edit-personal-info');
const templateEdits = document.querySelectorAll('.template-edit');
const templateContents = document.querySelectorAll('.template-content');
const saveTemplateBtns = document.querySelectorAll('.save-template-btn');
const editInfoBtns = document.querySelectorAll('.edit-info-btn');
const editInputs = document.querySelectorAll('.edit-input');
const editableTexts = document.querySelectorAll('.editable-text');

// Initialize template content textareas
templateContents.forEach((textarea, index) => {
    const templateKey = templateButtons[index].dataset.template;
    textarea.value = templates[templateKey];
    
    // Add copy button to template edit section
    const templateEdit = textarea.closest('.template-edit');
    const copyTemplateBtn = document.createElement('button');
    copyTemplateBtn.className = 'copy-template-btn';
    copyTemplateBtn.innerHTML = '<i class="fas fa-copy"></i> Copy Template';
    copyTemplateBtn.style.marginLeft = '8px';
    
    copyTemplateBtn.addEventListener('click', () => {
        copyToClipboard(textarea.value);
        showCopyFeedback(copyTemplateBtn);
    });
    
    // Insert copy button after save button
    const saveBtn = templateEdit.querySelector('.save-template-btn');
    saveBtn.parentNode.insertBefore(copyTemplateBtn, saveBtn.nextSibling);
});

// Initialize personal info
function updatePersonalInfoDisplay() {
    document.querySelector('[data-copy="' + personalInfo.name + '"] .editable-text').textContent = personalInfo.name;
    document.querySelector('[data-copy="' + personalInfo.email + '"] .editable-text').textContent = personalInfo.email;
    document.querySelector('[data-copy="' + personalInfo.phone + '"] .editable-text').textContent = personalInfo.phone;
    document.querySelector('[data-copy="' + personalInfo.linkedin + '"] .editable-text').textContent = '@sagar-gondaliya';
    document.querySelector('[data-copy="' + personalInfo.github + '"] .editable-text').textContent = '@Sagar610';
}

updatePersonalInfoDisplay();

// Event Listeners
templateButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        templateButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');
        updateMessage();
    });
});

companyNameInput.addEventListener('input', updateMessage);
personNameInput.addEventListener('input', updateMessage);

copyMessageBtn.addEventListener('click', () => {
    // Get the text content from the contenteditable div
    const messageText = generatedMessage.innerText;
    copyToClipboard(messageText);
    showCopyFeedback(copyMessageBtn);
});

// Update copy functionality for personal info items
document.querySelectorAll('.info-item').forEach(item => {
    item.addEventListener('click', (e) => {
        // Don't copy if clicking edit button or if in edit mode
        if (e.target.closest('.edit-info-btn') || e.target.closest('.edit-input')) {
            return;
        }
        
        const textToCopy = item.dataset.copy;
        copyToClipboard(textToCopy);
        showCopyFeedback(item.querySelector('.copy-btn'));
    });
});

// Remove the old copy button click handlers since we're handling clicks on the whole item
copyButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent the click from bubbling up to the info-item
    });
});

// Edit Templates functionality
editTemplatesBtn.addEventListener('click', () => {
    const isEditing = editTemplatesBtn.classList.toggle('active');
    templateEdits.forEach(edit => {
        edit.style.display = isEditing ? 'flex' : 'none';
    });
    editTemplatesBtn.innerHTML = isEditing ? 
        '<i class="fas fa-times"></i> Cancel' : 
        '<i class="fas fa-edit"></i> Edit Templates';
});

saveTemplateBtns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        const templateKey = templateButtons[index].dataset.template;
        templates[templateKey] = templateContents[index].value;
        localStorage.setItem('emailTemplates', JSON.stringify(templates));
        updateMessage();
        showSaveFeedback(btn);
    });
});

// Edit Personal Info functionality
editPersonalInfoBtn.addEventListener('click', () => {
    const isEditing = editPersonalInfoBtn.classList.toggle('active');
    editInfoBtns.forEach(btn => {
        btn.style.display = isEditing ? 'inline-block' : 'none';
    });
    editPersonalInfoBtn.innerHTML = isEditing ? 
        '<i class="fas fa-times"></i> Cancel' : 
        '<i class="fas fa-edit"></i> Edit Info';
});

editInfoBtns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        const infoItem = btn.closest('.info-item');
        const input = infoItem.querySelector('.edit-input');
        const text = infoItem.querySelector('.editable-text');
        
        input.style.display = 'block';
        text.style.display = 'none';
        btn.style.display = 'none';
        
        input.focus();
        
        input.addEventListener('blur', function onBlur() {
            const newValue = input.value.trim();
            if (newValue) {
                const key = Object.keys(personalInfo)[index];
                personalInfo[key] = newValue;
                localStorage.setItem('personalInfo', JSON.stringify(personalInfo));
                
                infoItem.dataset.copy = newValue;
                text.textContent = newValue;
                
                input.style.display = 'none';
                text.style.display = 'inline';
                if (editPersonalInfoBtn.classList.contains('active')) {
                    btn.style.display = 'inline-block';
                }
            }
            input.removeEventListener('blur', onBlur);
        });
        
        input.addEventListener('keypress', function onKeyPress(e) {
            if (e.key === 'Enter') {
                input.blur();
                input.removeEventListener('keypress', onKeyPress);
            }
        });
    });
});

// Functions
function updateMessage() {
    const activeTemplate = document.querySelector('.template-btn.active');
    if (!activeTemplate) return;

    const template = templates[activeTemplate.dataset.template];
    const companyName = companyNameInput.value || '{companyName}';
    const personName = personNameInput.value || '{personName}';

    // Replace variables with values
    let message = template
        .replace(/{companyName}/g, companyName)
        .replace(/{personName}/g, personName)
        .replace(/Sagar Gondaliya/g, personalInfo.name)
        .replace(/sagargondaliya50@gmail.com/g, personalInfo.email)
        .replace(/07587860133/g, personalInfo.phone);

    // Highlight variables that haven't been replaced
    message = message.replace(/{([^}]+)}/g, '<span class="variable">{$1}</span>');

    // Preserve line breaks and spacing
    message = message.replace(/\n/g, '<br>');

    // Update the message display
    generatedMessage.innerHTML = message;
}

function copyToClipboard(text) {
    // Remove HTML tags and convert <br> to newlines when copying
    const plainText = text
        .replace(/<[^>]*>/g, '')
        .replace(/<br>/g, '\n');
    
    // Try using the modern Clipboard API first
    if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(plainText).then(() => {
            console.log('Text copied to clipboard');
        }).catch(err => {
            console.error('Failed to copy text: ', err);
            fallbackCopyToClipboard(plainText);
        });
    } else {
        // Fallback for browsers that don't support the Clipboard API
        fallbackCopyToClipboard(plainText);
    }
}

function fallbackCopyToClipboard(text) {
    // Create a temporary textarea element
    const textArea = document.createElement('textarea');
    textArea.value = text;
    
    // Make the textarea out of viewport
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    textArea.style.top = '-999999px';
    document.body.appendChild(textArea);
    
    // Select and copy the text
    textArea.focus();
    textArea.select();
    
    try {
        const successful = document.execCommand('copy');
        if (successful) {
            console.log('Text copied to clipboard using fallback method');
        } else {
            console.error('Failed to copy text using fallback method');
        }
    } catch (err) {
        console.error('Failed to copy text: ', err);
    }
    
    // Clean up
    document.body.removeChild(textArea);
}

function showCopyFeedback(button) {
    const originalHTML = button.innerHTML;
    button.innerHTML = '<i class="fas fa-check"></i> Copied!';
    button.style.color = '#28a745';
    
    setTimeout(() => {
        button.innerHTML = originalHTML;
        button.style.color = '';
    }, 2000);
}

function showSaveFeedback(button) {
    const originalHTML = button.innerHTML;
    button.innerHTML = '<i class="fas fa-check"></i> Saved!';
    
    setTimeout(() => {
        button.innerHTML = originalHTML;
    }, 2000);
}

// Add event listener for template content changes
templateContents.forEach((textarea, index) => {
    textarea.addEventListener('input', () => {
        const templateKey = templateButtons[index].dataset.template;
        templates[templateKey] = textarea.value;
        updateMessage();
    });
});

// Initialize with the first template
templateButtons[0].click(); 