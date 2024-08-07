import style from './ContactStyles.module.css';

function Contact() {
  return (
    <section id='contact' className={style.container}>
        <h1 className={style.sectiontitle}>Contact</h1>
        <div className={style.cont}>
            <div className={style.image}>
                
            </div>
        <form action="https://formspree.io/f/mzzpgbzw" method="POST">
            <div className='formGroup'>
                <label htmlFor='name' hidden>Name</label>
                <input type='text' name='name' id='name' placeholder='Name' required/>
            </div>
            <div className='formGroup'>
                <label htmlFor='email' hidden>Email</label>
                <input type='text' name='email' id='email' placeholder='Email' required/>
            </div>
            <div className='formGroup'>
                <label htmlFor='message' hidden>Message</label>
                <textarea name='messahe' id='email' placeholder='Message' required/>
            </div>
            <input type='submit' className='hover btn' value="Submit"/>
        </form>
        </div>
    </section>
  )
}

export default Contact
