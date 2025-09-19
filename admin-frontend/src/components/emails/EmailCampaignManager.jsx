import React, { useState } from 'react';
import './EmailCampaignManager.css';

const emailTemplates = [
  {
    id: 'template1',
    name: 'Welcome Email',
    subject: 'Welcome to Our Service!',
    body: 'Hello {{name}},\n\nThank you for signing up with us. We are excited to have you on board!',
  },
  {
    id: 'template2',
    name: 'Reset Password',
    subject: 'Password Reset Request',
    body: 'Hello {{name}},\n\nWe received a request to reset your password. Click the link below to reset it.\n\n{{resetLink}}',
  },
];

const EmailCampaignManager = () => {
  const [selectedTemplate, setSelectedTemplate] = useState(emailTemplates[0]);
  const [emailContent, setEmailContent] = useState({
    subject: emailTemplates[0].subject,
    body: emailTemplates[0].body,
    recipient: '',
  });

  const handleTemplateChange = (e) => {
    const template = emailTemplates.find((t) => t.id === e.target.value);
    setSelectedTemplate(template);
    setEmailContent({
      subject: template.subject,
      body: template.body,
      recipient: '',
    });
  };

  const handleInputChange = (e) => {
    setEmailContent({
      ...emailContent,
      [e.target.name]: e.target.value,
    });
  };

  const previewEmail = () => {
    let body = emailContent.body;
    // Replace {{name}} and other placeholders with dynamic data
    body = body.replace('{{name}}', emailContent.recipient);
    body = body.replace('{{resetLink}}', 'http://reset-link.com');
    return body;
  };

  const handleSendEmail = () => {
    // Simulate sending email (you would replace this with an actual API call)
    alert(`Email sent to ${emailContent.recipient}!`);
    // Here you would call an API to actually send the email
  };

  return (
    <div className="send-email-container">
      <h2>📧 Send Email</h2>

      {/* Template Selector */}
      <div className="template-selector">
        <label htmlFor="template">Select Template:</label>
        <select
          id="template"
          value={selectedTemplate.id}
          onChange={handleTemplateChange}
        >
          {emailTemplates.map((template) => (
            <option key={template.id} value={template.id}>
              {template.name}
            </option>
          ))}
        </select>
      </div>

      {/* Recipient Input */}
      <div className="input-field">
        <label htmlFor="recipient">Recipient:</label>
        <input
          type="email"
          id="recipient"
          name="recipient"
          value={emailContent.recipient}
          onChange={handleInputChange}
          placeholder="Enter recipient's email"
        />
      </div>

      {/* Subject Input */}
      <div className="input-field">
        <label htmlFor="subject">Subject:</label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={emailContent.subject}
          onChange={handleInputChange}
          placeholder="Enter subject"
        />
      </div>

      {/* Email Body Input */}
      <div className="input-field">
        <label htmlFor="body">Body:</label>
        <textarea
          id="body"
          name="body"
          value={emailContent.body}
          onChange={handleInputChange}
          placeholder="Write your email"
        />
      </div>

      {/* Preview Section */}
      <div className="preview-section">
        <h3>Preview:</h3>
        <div className="email-preview">
          <p><strong>To:</strong> {emailContent.recipient}</p>
          <p><strong>Subject:</strong> {emailContent.subject}</p>
          <p><strong>Body:</strong></p>
          <pre>{previewEmail()}</pre>
        </div>
      </div>

      {/* Send Button */}
      <div className="send-button">
        <button onClick={handleSendEmail}>Send Email</button>
      </div>
    </div>
  );
};

export default EmailCampaignManager;
