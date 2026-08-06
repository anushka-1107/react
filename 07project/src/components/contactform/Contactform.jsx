import Button from '../button/Button'
import styles from '../contactform/contactform.module.css'
import { MdOutlineMessage, MdCall } from "react-icons/md"
import { AiOutlineMail } from "react-icons/ai";
import { useState } from 'react';

const Contactform = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const [submittedData, setSubmittedData] = useState(null);

  const onSubmit = (e) => {
    e.preventDefault();
    setSubmittedData({
      name: name || e.target.elements.name.value,
      email: email || e.target.elements.email.value,
      text: text || e.target.elements.text.value,
    });
  };

  return (
    <section className={styles.container}>
      <div className={styles.contactform}>
        <div className={styles.top_btn}>
          <Button text="VIA SUPPORT CHAT" icon={<MdOutlineMessage fontSize="20px" />} />
          <Button text="VIA CALL" icon={<MdCall fontSize="20px" />} />
        </div>
        
        <div className={styles.next_btn}>
          <Button isOutline={true} text="VIA EMAIL FORM" icon={<AiOutlineMail fontSize="20px" />} />
        </div>

        <form onSubmit={onSubmit}>
          <div className={styles.form_part}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className={styles.form_part}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className={styles.form_part}>
            <label htmlFor="text">Text</label>
            <textarea
              name="text"
              id="text"
              rows={6}
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </div>
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button text="SUBMIT" />
          </div>

          {submittedData && (
            <div style={{ marginTop: '16px', fontWeight: 'bold' }}>
              Submissions: {submittedData.name} | {submittedData.email} | {submittedData.text}
            </div>
          )}
        </form>
      </div>
      <div className={styles.contact_image}>
        <img src="/images/contact.png" alt="contact illustration" />
      </div>
    </section>
  );
};

export default Contactform;