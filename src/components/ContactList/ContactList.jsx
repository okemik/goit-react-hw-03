import Contact from "../Contact/Contact";
import styles from "./ContactList.module.css";

function ContactList({ contacts, onDelete }) {
  return (
    <ul className={styles.list}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={styles.item}>
          <Contact contact={{ id, name, number }} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  );
}

export default ContactList;
