import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import Sdata from "../components/Adopt/Sdata"
import EmptyFile from "../common/Empty/EmptyFile"
import { useParams } from "react-router-dom"
import HeadTitle from "../common/HeadTitle/HeadTitle"
import "./singlepage.css"

const SinglePage = () => {
  const { id } = useParams()
  const [item, setItem] = useState(null)
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
  

  useEffect(() => {
    let item = Sdata.find((item) => item.id === parseInt(id))
    if (item) {
      setItem(item)
    }
  }, [id])

  return (
    <>
      <HeadTitle />

      {item ? (
        <section className='single-page top'>
          <div className='container'>
            <Link to='/adopt' className='primary-btn back'>
              <i className='fas fa-long-arrow-alt-left'></i> Go Back
            </Link>

            {/* --------- main-content--------- */}

            <article className='content flex'>
              <div className='main-content'>
                <img src={item.image} alt='' />
                <h1>About {item.title}</h1>
                <p>{item.desc}</p>
                
                <p>{item.sidepara}</p>

                
                
              </div>
              {/* --------- main-content--------- */}

              {/* --------- side-content--------- */}
              <div className='side-content'>
                <div className='box'>
                  <h2>Ready to Adopt?</h2>
                  <p>Click on the link below and fill up the form to declare your interest. Then pay us a visit on the selected date and get to know our lovely pets!</p>
                  <Link to='/contact'>
                  <button className='outline-btn'>
                    <i className='fa fa-phone-alt'></i> Adopt Now!
                  </button>
                  </Link>
                </div>

                
              </div>
              {/* --------- side-content--------- */}
            </article>
          </div>
        </section>
        
        
        
        
      ) : (
        <EmptyFile />
      )}
    </>
  )
}


export default SinglePage