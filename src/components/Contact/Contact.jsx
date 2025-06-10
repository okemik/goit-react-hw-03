import { FaTrashAlt } from "react-icons/fa";
import styles from "./Contact.module.css";

function stringToColor(str) {
  // İsme göre bir renk üret (avatar için)
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  const c = (hash & 0x00ffffff).toString(16).toUpperCase();
  return "#" + "00000".substring(0, 6 - c.length) + c;
}

function Contact({ contact, onDelete }) {
  const avatarColor = stringToColor(contact.name);
  const avatarLetter = contact.name.charAt(0).toUpperCase();

  return (
    <div className={styles.contact}>
      <div
        className={styles.avatar}
        style={{ backgroundColor: avatarColor }}
        aria-label={`Avatar for ${contact.name}`}
      >
        {avatarLetter}
      </div>

      <span className={styles.text}>
        {contact.name}: {contact.number}
      </span>

      <button
        className={styles.deleteBtn}
        onClick={() => onDelete(contact.id)}
        aria-label={`Delete ${contact.name}`}
      >
        <FaTrashAlt />
      </button>
    </div>
  );
}

export default Contact;
