import styles from "./Contact.module.css";

function Contact({ contact, onDelete }) {
  return (
    <div className={styles.contact}>
      <span className={styles.text}>
        {contact.name}: {contact.number}
      </span>
      <button
        className={styles.deleteBtn}
        onClick={() => onDelete(contact.id)}
        aria-label={`Delete ${contact.name}`}
      >
        Sil
      </button>
    </div>
  );
}

export default Contact;
