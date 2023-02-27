import React, { useState } from "react"
import "./Contact.css"

const ContactFrom = () => {
  const [fname, setFname] = useState("")
  const [lname, setLname] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("")
  const [company, setCompany] = useState("")
  const [message, setMessage] = useState("")

  const [allValue, setAllValue] = useState([])
  const formSubmit = (e) => {
    e.preventDefault()

    const newValue = { fname, lname, phone, email, subject, company, message }
    setAllValue([...allValue, newValue])

    setFname("")
    setLname("")
    setPhone("")
    setEmail("")
    setSubject("")
    setCompany("")
    setMessage("")
  }
  return (
    <>
      <section className='contact mtop'>
        <div className='container flex'>
          <div className='main-content'>
            <h2>Adopt Form</h2>
            <p>Fill out the form below and head down at the selected date and time.</p>

            <form onSubmit={formSubmit}>
              <div className='grid1'>
                <div className='input'>
                  <span>
                    Your Name <label>*</label>
                  </span>
                  <input type='text' name='fname' value={fname} onChange={(e) => setFname(e.target.value)} required />
                </div>
                <div className='input'>
                  <span>
                    Pet Chosen <label>*</label>
                  </span>
                  <select type='text' name='lname' value={lname} onChange={(e) => setLname(e.target.value)} required>
                  <option value=""></option>
                  <option value="Mikey - Golden Retriever">Mikey - Golden Retriever</option>
                  <option value="Sock - Scottish Fold">Sock - Scottish Fold</option>
                  <option value="Paint - British Shorthair">Paint - British Shorthair</option>
                  <option value="Milo - Poodle">Milo - Poodle</option>
                  <option value="Ham - French Bulldog">Ham - French Bulldog</option>
                    <option value="Fluffy - Ragdoll">Fluffy - Ragdoll</option>
                  </select>
                </div>
                <div className='input'>
                  <span>
                    Phone Number <label>*</label>
                  </span>
                  <input type='number' name='phone' value={phone} onChange={(e) => setPhone(e.target.value)} />
                </div>
                <div className='input'>
                  <span>
                    Email <label>*</label>
                  </span>
                  <input type='email' name='email' value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div className='input'>
                  <span>Visiting Date</span>
                  <input type='date' name='subject' value={subject} onChange={(e) => setSubject(e.target.value)} />
                </div>
                <div className='input'>
                  <span>Visiting Time</span>
                  <input type='time' name='company' value={company} onChange={(e) => setCompany(e.target.value)} />
                </div>
              </div>
              <div className='input inputlast'>
                <span>
                  Tell Us What You Love About Him/Her? <label>*</label>
                </span>
                <textarea cols='30' rows='10' name='message' value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
              </div>
              <button className='primary-btn'>Submit Now</button>
            </form>
          </div>

          <div className='side-content'>
          <h3>Our location</h3>
            <p>302 Lavender St., Singapore 338811</p>
            <br />

            <h3>Message us</h3>
            <span>petheaven@gmail.com</span>
            <br />
            <span>+65 9785 6478</span>
            <br />

            <div className='icon'>
              <h3>Follow Us</h3>

              <div className='flex_space'>
                <i className='fab fa-facebook-f'></i>
                <i className='fab fa-twitter'></i>
                <i className='fab fa-linkedin'></i>
                <i className='fab fa-instagram'></i>
                <i className='fab fa-pinterest'></i>
                <i className='fab fa-youtube'></i>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='show-data'>
        {allValue.map((cureentValue) => {
          const { fname, lname, phone, email, subject, company, message } = cureentValue
          return (
            <>
              <div className='sign-box'>
                <h1>Send Successfully</h1>
                <h3>
                  Your Name : <p>{fname}</p>
                </h3>
                <h3>
                  Pet Chosen : <p>{lname}</p>
                </h3>
                <h3>
                  Contact Number : <p>{phone}</p>
                </h3>
                <h3>
                  Email : <p>{email}</p>
                </h3>
                <h3>
                  Visiting Date : <p>{subject}</p>
                </h3>
                <h3>
                  Visiting Time: <p>{company}</p>
                </h3>
                <h3>
                  Your Message : <p>{message}</p>
                </h3>
              </div>
            </>
          )
        })}
      </section>
    </>
  )
}

export default ContactFrom