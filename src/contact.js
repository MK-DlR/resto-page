// contact tab module

// function to create contact tab contents
export function createContact() {
  const content = document.querySelector("#content");

  const contactHeader = document.createElement("h1");
  contactHeader.classList.add("locationHeader");
  contactHeader.textContent = "Contact";

  const addressContent = document.createElement("div");
  addressContent.classList.add("addressContent");
  addressContent.setAttribute("style", "white-space: pre; font-size: 18px;");
  addressContent.textContent = "XXX, Nakamichi Street\r\n";
  addressContent.textContent += "Kamurocho, Tokyo\r\n";
  addressContent.textContent += "Japan, XXX XXX";

  const emailPhoneContent = document.createElement("div");
  emailPhoneContent.classList.add("emailPhoneContent");
  emailPhoneContent.setAttribute("style", "white-space: pre; font-size: 18px;");
  emailPhoneContent.textContent = "veryrealemail@smileburger.com\r\n";
  emailPhoneContent.textContent += "Tel: resto +X XXX XXX XXXX\r\n";
  emailPhoneContent.textContent += "Tel: admin +X XXX XXX XXXX";

  const contactFormTitle = document.createElement("h2");
  contactFormTitle.classList.add("contactFormTitle");
  contactFormTitle.textContent = "Contact Form";

  // container where form will be added
  const formContainer = document.createElement("form");
  formContainer.classList.add("contactForm");
  formContainer.setAttribute("id", "formContainer");

  // create form element
  const form = document.createElement("form");
  form.setAttribute("id", "contactForm");

  // function to create form groups
  function createFormGroup(labelText, inputType, inputId) {
    const formGroup = document.createElement("div");
    formGroup.classList.add("form-group");

    const label = document.createElement("label");
    label.setAttribute("for", inputId);
    label.textContent = labelText;
    formGroup.appendChild(label);

    let input;
    if (inputType === "textarea") {
      input = document.createElement("textarea");
      input.setAttribute("rows", "5");
    } else {
      input = document.createElement("input");
      input.setAttribute("type", inputType);
    }
    input.setAttribute("id", inputId);
    input.setAttribute("name", inputId);
    input.classList.add("input-field"); // add class for styling
    formGroup.appendChild(input);

    return formGroup;
  }

  // append the CSS styles to the document head
  const style = document.createElement("style");
  style.textContent = `
    .contactForm {
      max-width: 600px;
      margin: 0 auto; /* center the form horizontally */
      padding: 20px;
      background-color: #f4c6a5; /* background color */
      border-radius: 8px; /* rounded corners */
    }

    label {
    font-size: 18px;
    }

    .form-group {
      margin-bottom: 15px; /* space between form groups */
    }

    .input-field {
      width: 100%; /* make inputs and textareas take up the full width */
      padding: 10px;
      font-size: 16px;
      border: 1px solid #ccc;
      border-radius: 4px;
      box-sizing: border-box; /* include padding and border in the element's total width */
    }

    textarea {
      resize: vertical; /* allow vertical resizing of textareas */
    }

    input[type="submit"] {
      width: 100%; /* make the submit button the same width as inputs */
      padding: 10px;
      font-size: 16px;
      background-color: #F28322;
      color: #f7f4e7; 
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }

    input[type="submit"]:hover {
      background-color: #c94542; 
    }
  `;
  document.head.appendChild(style);

  content.appendChild(contactHeader);
  content.appendChild(document.createElement("br"));
  content.appendChild(addressContent);
  content.appendChild(document.createElement("br"));
  content.appendChild(emailPhoneContent);
  content.appendChild(document.createElement("br"));
  content.appendChild(contactFormTitle);
  content.appendChild(document.createElement("hr"));
  content.appendChild(formContainer);
  form.appendChild(createFormGroup("Name:", "text", "name"));
  form.appendChild(createFormGroup("Email:", "text", "email"));
  form.appendChild(createFormGroup("Message:", "textarea", "message"));
  const submitButtonGroup = document.createElement("div");
  submitButtonGroup.classList.add("form-group");
  const submitButton = document.createElement("input");
  submitButton.setAttribute("type", "submit");
  submitButton.setAttribute("value", "Submit");
  submitButtonGroup.appendChild(submitButton);
  form.appendChild(submitButtonGroup);
  formContainer.appendChild(form);
  content.appendChild(document.createElement("br"));
  content.appendChild(document.createElement("br"));
}
