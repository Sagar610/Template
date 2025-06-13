// Initialize templates from localStorage or use defaults
let templates = JSON.parse(localStorage.getItem('emailTemplates')) || {
    'software-engineer': `Hi {personName},

I hope you're doing well. I recently came across {companyName} and was impressed by your engineering culture and focus on innovation.

I'm a Software Engineer with 6+ years of experience in building scalable web applications and internal tools across both frontend and backend systems. My recent work at Meta (via HCL) involved engineering automation solutions, CI/CD tooling, and production-grade full-stack applications.

Key strengths include:
• Full-stack development (React.js, Node.js, Python, Django, Flask)
• Building REST APIs, automation tools, and internal platforms
• CI/CD pipelines (GitLab, Docker), AWS/Firebase deployments
• Strong focus on clean code, reliability, and performance

I'd love the chance to connect and learn more about your team. Would you be open to a brief conversation about potential {jobRole} opportunities at {companyName}?

Best regards,
Sagar Gondaliya
sagargondaliya50@gmail.com
07587 860133`,

    'senior-software-engineer': `Hi {personName},

I hope you're doing well. I've been following {companyName}'s growth and am genuinely impressed by your recent technical innovations and product direction.

I'm a Senior Software Engineer with over 6 years of experience in designing scalable systems, leading end-to-end development efforts, and mentoring engineers. My recent work at Meta (via HCL) involved architecting internal platforms, building automation solutions, and contributing to high-impact production systems.

What I bring to the table:
• Proven success delivering complex, full-stack projects (React.js, Node.js, Python)
• Experience leading small teams, improving engineering workflows, and driving code quality
• Strong background in CI/CD, cloud deployments (AWS/Firebase), and system reliability
• Hands-on mentoring and cross-functional collaboration with business and product teams

I'd welcome the opportunity to speak and learn more about your team's priorities. Please let me know if you'd be open to a quick conversation about the {jobRole} position at {companyName}.

Best regards,
Sagar Gondaliya
sagargondaliya50@gmail.com
07587 860133`,

    'senior-tech-support': `Hi {personName},

I'm Sagar Gondaliya, a London-based Senior Technical Support Engineer with over 7 years of experience, including 3+ years supporting business-critical systems at Meta via HCL.

I'm reaching out to express interest in the {jobRole} role at {companyName}. My background includes a strong track record in high-uptime environments and cross-functional incident management.

Summary of my expertise:
• Support Operations: L2/L3 technical support, incident response, SLA-driven resolutions
• Root Cause Analysis: Deep log analysis, debugging, and service monitoring
• DevOps & Automation: CI/CD (GitLab, Jenkins), Python/Bash scripting
• Tooling & Dashboards: Created internal tools to reduce manual triage and improve visibility

I've attached my resume for your review. I'd welcome the opportunity to connect and discuss how I can contribute to your team.

Kind regards,
Sagar Gondaliya
Email: sagargondaliya50@gmail.com
Phone: 07587 860133`,

    'production-support': `Hi {personName},

I'm Sagar Gondaliya, a London-based Production Support Engineer with over 7 years of experience, including 3+ years supporting critical systems at Meta via HCL.

I'm reaching out to express interest in the {jobRole} role at {companyName}. My experience and skills align well with the needs of high-availability environments.

Here's a quick overview of my background:
• Current Role: Senior Production Support Engineer – Meta (via HCL)
• Incident Management: L2/L3 support, UBN handling, SLA-driven issue resolution
• Analysis & Monitoring: Root cause analysis, log inspection, pipeline/service monitoring
• Automation & CI/CD: Python and Bash scripting, GitLab/Jenkins workflows
• Tools & Reporting: Internal dashboard creation, error tracking, RCA documentation

I've attached my resume for your review and would appreciate the opportunity to discuss how I can contribute to your team.

Kind regards,
Sagar Gondaliya
Email: sagargondaliya50@gmail.com
Phone: 07587 860133`,

    'senior-fullstack': `Hi {personName},

I hope you're doing well. I came across the {jobRole} role at {companyName} and wanted to reach out directly to express my interest.

I'm a Senior Full Stack Developer with over 6 years of experience, currently supporting enterprise platforms at Meta via HCL. I specialize in building scalable web applications, automation tools, and backend systems.

Quick overview of my background:
• Current Role: Full Stack Developer – Meta (via HCL)
• Frontend: React.js, Next.js, Tailwind CSS
• Backend: Python (Django, Flask), Node.js, Express.js
• Database/Infra: MongoDB, PostgreSQL, MySQL, Firebase, AWS, Docker
• Strengths: Automation, internal tools, CI/CD pipelines, production support
• Projects: Deployed real-world finance tools, bill splitters, and monitoring dashboards (GitHub & Vercel live demos)

I've attached my resume for your review. I'd love the opportunity to connect and explore how I can add value to your team.

Looking forward to hearing from you.
Sagar Gondaliya
sagargondaliya50@gmail.com
+44 7587 860133`,

    'python-developer': `Hi {personName},

I hope you're doing well. I came across the {jobRole} position at {companyName} and wanted to reach out directly.

I'm a Python Developer with 6+ years of experience, currently at Meta (via HCL) building automation tools and backend systems. My expertise includes Django, Flask, FastAPI, and data processing pipelines.

Key skills:
• Backend: Django, Flask, FastAPI, REST APIs
• Data: PostgreSQL, MongoDB, Pandas, NumPy
• DevOps: Docker, AWS, GitLab CI/CD
• Projects: Built internal tools reducing manual work by 60%, APIs serving 1M+ requests daily

I'd welcome the opportunity to discuss how my Python expertise could benefit your team.

Best regards,
Sagar Gondaliya
sagargondaliya50@gmail.com
07587 860133`,

    'react-developer': `Hi {personName},

I hope you're doing well. I came across the {jobRole} opportunity at {companyName} and wanted to reach out directly.

I'm a React Developer with 6+ years of experience, currently at Meta (via HCL) building responsive web applications and internal tools. My expertise includes React.js, Next.js, and modern frontend development.

Key skills:
• Frontend: React.js, Next.js, TypeScript, Tailwind CSS
• State Management: Redux, Context API
• Testing: Jest, React Testing Library
• Projects: Built dashboards improving team productivity by 40%, apps serving 100K+ users

I'd welcome the opportunity to discuss how my React expertise could contribute to your team.

Best regards,
Sagar Gondaliya
sagargondaliya50@gmail.com
07587 860133`,

    'work-visa': `Hi {personName},

Thank you for reaching out. I truly appreciate the opportunity.

I'm very interested in learning more about the {jobRole} role. Could you also kindly confirm whether the company provides Skilled Worker visa sponsorship? I currently hold a Skilled Worker visa and would require sponsorship to continue working in the UK.

I'm available to join immediately.

Thank you again,
Sagar Gondaliya
sagargondaliya50@gmail.com
07587 860133`
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
const jobRoleInput = document.getElementById('job-role');
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
        
        // Set default role when template is selected
        jobRoleInput.value = getDefaultRole(button.dataset.template);
        
        updateMessage();
    });
});

// Add event listeners for input changes
companyNameInput.addEventListener('input', updateMessage);
personNameInput.addEventListener('input', updateMessage);
jobRoleInput.addEventListener('input', updateMessage);

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
    const jobRole = jobRoleInput.value || getDefaultRole(activeTemplate.dataset.template);

    // Replace variables with values
    let message = template
        .replace(/{companyName}/g, companyName)
        .replace(/{personName}/g, personName)
        .replace(/{jobRole}/g, jobRole)
        .replace(/Sagar Gondaliya/g, personalInfo.name)
        .replace(/sagargondaliya50@gmail.com/g, personalInfo.email)
        .replace(/07587 860133/g, personalInfo.phone);

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

// Add function to get default role based on template
function getDefaultRole(templateKey) {
    const defaultRoles = {
        'software-engineer': 'Software Engineer',
        'senior-software-engineer': 'Senior Software Engineer',
        'senior-tech-support': 'Senior Technical Support',
        'production-support': 'Production Support',
        'senior-fullstack': 'Senior Full Stack Developer',
        'python-developer': 'Python Developer',
        'react-developer': 'React Developer',
        'work-visa': 'Software Engineer'
    };
    return defaultRoles[templateKey] || 'Software Engineer';
}

// Initialize message on page load
document.addEventListener('DOMContentLoaded', () => {
    // Set default template
    const defaultTemplate = document.querySelector('.template-btn');
    if (defaultTemplate) {
        defaultTemplate.classList.add('active');
        jobRoleInput.value = getDefaultRole(defaultTemplate.dataset.template);
        updateMessage();
    }
}); 