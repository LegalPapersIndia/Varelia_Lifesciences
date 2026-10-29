import { ENQUIRY_EMAIL } from "../data/siteConfig";

const EMAIL_SUBJECT = "New enquiry from Varelia Lifesciences website";

// User ka default mail app khulta hai (To, Subject aur message pehle se bhara)
export const getMailtoUrl = (message = "") =>
  `mailto:${ENQUIRY_EMAIL}?subject=${encodeURIComponent(
    EMAIL_SUBJECT
  )}&body=${encodeURIComponent(message)}`;

// Gmail ka compose page (jab mail app set na ho)
export const getGmailUrl = (message = "") =>
  `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
    ENQUIRY_EMAIL
  )}&su=${encodeURIComponent(EMAIL_SUBJECT)}&body=${encodeURIComponent(
    message
  )}`;