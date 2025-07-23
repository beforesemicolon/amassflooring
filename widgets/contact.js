export default {
  cssSelector: "#contact",
  scripts: [
    {
      "src": "https://www.google.com/recaptcha/api.js",
      "async": true,
      "defer": true
    },
    "https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js",
    "emailjs.init({publicKey: 'E07H_Th96ZCDK5J77',});",
    "handle-form.js",
    "handleForm('contact-form', 'template_nl6iial', 'service_76sa4dn')"
  ],
  style: {
    "#contact": {},
    "#contact-form": {
      position: "relative",
      alignItems: "flex-start",
      justifyContent: "space-between",
      marginTop: "40px",
      gap: "40px",
      "@media (max-width: 600px)": {
        flexDirection: "column",
        gap: "15px",
        marginTop: "15px",
        ".phone-disclaimer": {
          display: "none"
        },
        textarea: {
          height: "100px",
        }
      },
      fieldset: {
        margin: 0,
        padding: 0,
        border: "none",
        flex: 1,
        alignSelf: "stretch",
        p: {
          margin: "-10px 0 0 0",
          lineHeight: "1.2",
          opacity: "0.8",
        }
      },
      ".send-btn": {
        position: "absolute",
        top: 0,
        right: 0,
        transform: "translateY(calc(-100% - 60px))",
        "@media (max-width: 600px)": {
          position: "relative",
          top: "auto",
          right: "auto",
          transform: "none",
        }
      },
      label: {
        gap: "10px",
        span: {
          opacity: "0.7",
        },
        "@media (max-width: 600px)": {
          fontSize: "0.9rem",
          gap: "5px",
        }
      },
      "input, select, textarea": {
        padding: "12px 15px",
        border: "1px solid var(--accent-color)",
        borderRadius: "4px",
        width: "100%",
        height: "50px",
        "@media (max-width: 600px)": {
          padding: "12px",
          height: "100%",
          borderRadius: "2px",
        }
      },
      select: {
        appearance: "none",
        "--webkit-appearance": "none",
        "--moz-appearance": "none",
        background: `url('data:image/svg+xml;utf8,<svg fill="black" height="20" width="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 8l5 5 5-5"/></svg>') no-repeat right 10px center/20px 20px`,
      },
      textarea: {
        height: "auto",
        resize: "none",
        lineHeight: "1.5",
      },
      ".g-recaptcha": {
        position: "absolute"
      },
      ".error-message": {
        display: "none",
        margin: "20px 0",
        background: "#900",
        color: "white",
        padding: "10px 15px",
        width: "50%",
        borderRadius: "3px"
      },
      ".sending, .success, .error": {
        display: "none",
        position: "absolute",
        top: 0,
        right: 0,
        height: "100%",
        width: "100%",
        padding: "20px",
        backgroundColor: "#f2f2f2",
      },
      "&.invalid-form": {
        ".error-message": {
          display: "flex",
        }
      },
      "&.sending-form": {
        ".sending": {
          display: "flex",
        }
      },
      "&.failed-request": {
        ".error": {
          display: "flex",
        }
      },
      "&.success-request": {
        ".success": {
          display: "flex",
        }
      },
    },
    ".spinner": {
      width: "50px",
      height: "50px",
      animation: "spin 1s linear infinite"
    },
    ".spinner-path": {
      stroke: "var(--accent-color, #222)"
    },
    "@keyframes spin": {
      "100%": {
          transform: "rotate(360deg)"
      }
    }
  },
  inputs: [
    { type: "text", name: "title", value: "Contact Us" },
    { type: "text", name: "nameLabel", label: "Name Label", value: "Name" },
    { type: "text", name: "emailLabel", label: "Email Label", value: "Email" },
    { type: "text", name: "phoneLabel", label: "Phone Label", value: "Phone" },
    { type: "text", name: "phoneDisclaimer", label: "Phone Label", value: "By providing my phone number I understand that I may be contacted via calls or texts (including through use of an automatic telephone dialing system) to provide information about or to help me enroll in my requested service. Message and data rates may apply." },
    { type: "text", name: "reasonLabel", label: "Reason Label", value: "Reason for contact" },
    { type: "text", name: "messageLabel", label: "Message Label", value: "Message" },
    { type: "text", name: "messagePlaceholder", label: "Message Placeholder", value: "Provide as much details as possible so we can better help you with your inquire." },
    { type: "text", name: "submitLabel", label: "Submit Button Label", value: "Send" }
  ],
  render({ title, nameLabel, emailLabel, phoneLabel, reasonLabel, phoneDisclaimer, messageLabel, messagePlaceholder, submitLabel }) {
    return `
      <section id="contact" class="center view-section">
        <div class="wrapper">
          <h2>${title}</h2>
          <form id="contact-form" class="row">
            <fieldset class="col">
              <div class="error-message">Please fix invalid fields before sending</div>
              <label aria-label="${nameLabel}" class="col">
                <span>${nameLabel} *</span>
                <input type="text" name="name" required/>
              </label>
              <label aria-label="${emailLabel}" class="col">
                <span>${emailLabel} *</span>
                <input type="email" name="email" required/>
              </label>
              <label aria-label="${phoneLabel}" class="col">
                <span>${phoneLabel}</span>
                <input type="tel" name="phone"/>
              </label>
              <p class="phone-disclaimer"><small>${phoneDisclaimer}</small></p>
            </fieldset>
            <fieldset class="col">
              <label aria-label="${reasonLabel}" class="col">
                <span>${reasonLabel}</span>
                <select name="reason">
                  <option value="flooring quote" selected>Flooring Service Quote</option>
                  <option value="kitchen remodeling quote">Kitchen Remodeling Quote</option>
                  <option value="bathroom renovation quote">Bathroom Renovations Quote</option>
                  <option value="general inquiry">General Inquiry</option>
                </select>
              </label>
              <label aria-label="${messageLabel}" class="col">
                <span>${messageLabel} *</span>
                <textarea placeholder="${messagePlaceholder}" rows="11" name="message" required></textarea>
              </label>
            </fieldset>
            <button type="submit" class="btn primary send-btn">${submitLabel}</button>
            <div class="sending center col">
              <svg class="spinner" viewBox="0 0 50 50">
                <circle
                  class="spinner-path"
                  cx="25"
                  cy="25"
                  r="20"
                  fill="none"
                  stroke="#222"
                  stroke-width="5"
                  stroke-linecap="round"
                  stroke-dasharray="90 150"
                  stroke-dashoffset="0"
                />
              </svg>
              <p>Sending...</p>
            </div>
            <div class="success center col">
              <svg class="checkmark" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" style="width: 100px; height: 100px;">
                <circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none" stroke="green"></circle>
                <path class="checkmark__check" fill="none" d="M16.1 26.2l7.1 7.1L36.9 20" stroke="green"></path>
              </svg>
              <p>Message sent successfully!</p>
              <button class="primary" type="button">ok</button>
            </div>
            <div class="error center col">
              <svg class="error-icon" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" style="width: 100px; height: 100px;">
                <circle class="error__circle" cx="26" cy="26" r="25" fill="none" stroke="red"></circle>
                <line class="error__line error__line--left" x1="16" y1="16" x2="36" y2="36" stroke="red"></line>
                <line class="error__line error__line--right" x1="36" y1="16" x2="16" y2="36" stroke="red"></line>
              </svg>
              <p>Failed to send message.</p>
              <button type="button">ok</button>
            </div>
            <div class="g-recaptcha"
              data-sitekey="6LenNGcrAAAAAJy4RHYhlN5oWhgh4yju90Iqp3p0"
              data-callback="SubmitForm"
              data-size="invisible"></div>
          </form>
        </div>
      </section>
    `;
  }
}
