export default {
  cssSelector: "#contact",
  style: {
    "#contact": {},
    "#contact-form": {
      position: "relative",
      alignItems: "flex-start",
      marginTop: "40px",
      gap: "40px",
      fieldset: {
        margin: 0,
        padding: 0,
        border: "none",
        flex: 1,
        p: {
          margin: "-10px 0 0 0",
          lineHeight: "1.2",
          opacity: "0.8",
        }
      },
      button: {
        position: "absolute",
        top: 0,
        right: 0,
        transform: "translateY(calc(-100% - 60px))",
      },
      label: {
        gap: "10px",
        span: {
          opacity: "0.7",
        }
      },
      "input, select, textarea": {
        padding: "12px 15px",
        border: "1px solid var(--accent-color)",
        borderRadius: "4px",
        width: "100%",
        height: "50px",
      },
      select: {
        appearance: "none",
        "--webkit-appearance": "none",
      },
      textarea: {
        height: "auto",
        resize: "none",
        lineHeight: "1.5",
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
              <label aria-label="${nameLabel}" class="col">
                <span>${nameLabel} *</span>
                <input type="text" name="name"/>
              </label>
              <label aria-label="${emailLabel}" class="col">
                <span>${emailLabel} *</span>
                <input type="email" name="email"/>
              </label>
              <label aria-label="${phoneLabel}" class="col">
                <span>${phoneLabel}</span>
                <input type="tel" name="phone"/>
              </label>
              <p><small>${phoneDisclaimer}</small></p>
            </fieldset>
            <fieldset class="col">
              <label aria-label="${reasonLabel}" class="col">
                <span>${reasonLabel}</span>
                <select name="reason">
                  <option value="flooring quote" selected>Flooring Service Quote</option>
                  <option value="kitchen remodeling">Kitchen Remodeling</option>
                  <option value="bathroom renovation">Bathroom Renovations</option>
                  <option value="general inquiry">General Inquiry</option>
                </select>
              </label>
              <label aria-label="${messageLabel}" class="col">
                <span>${messageLabel} *</span>
                <textarea placeholder="${messagePlaceholder}" rows="11" name="message"></textarea>
              </label>
            </fieldset>
            <button type="submit" class="btn primary">${submitLabel}</button>
          </form>
        </div>
      </section>
    `;
  }
}
