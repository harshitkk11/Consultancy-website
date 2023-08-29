import { useState } from "react"

function ContactusForm() {

    const[name, setName] = useState("")
    const[company_name, setCompany_name] = useState("")
    const[email, setEmail] = useState("")
    const[phone, setPhone] = useState("")
    const[msg, setMsg] = useState("")
    const[error, setError] = useState(null)
    const[click, setClick] = useState(false)
    const[send, setSend] = useState("Send")

    const handleSubmit = async (e) => {
        e.preventDefault()
        setSend("Please Wait..")
        setClick(true)

        const details = {name, company_name, email, phone, msg}

        const response = await fetch('https://consultancy-website-backend.onrender.com/contactus', {
            method: 'POST',
            body: JSON.stringify(details),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json()

        if (!response.ok) {
            setError(json.error)
            console.log(error)
        }

        if (response.ok){
            setName("")
            setCompany_name("")
            setEmail("")
            setPhone("")
            setMsg("")
            setError(null)
            setClick(false)
            setSend("Send")
            console.log("details added")
        }
    }

    return (
        <div className="form">
            <form className="contact-form" onSubmit={handleSubmit}>
                <h1>Send Your Request</h1>
                <div className="name">
                    <label htmlFor="name">Name</label>
                    <input 
                    type="text"
                    id="name"
                    required
                    autoComplete="name"
                    disabled={click}
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    />
                </div>

                <div className="company_name">
                    <label htmlFor="company_name">Company Name</label>
                    <input 
                    type="text"
                    id="company_name"
                    required
                    autoComplete="organization"
                    disabled={click}
                    onChange={(e) => setCompany_name(e.target.value)}
                    value={company_name}
                    />
                </div>

                <div className="email">                
                    <label htmlFor="email">Email</label>
                    <input 
                    type="email"
                    id="email"
                    required
                    autoComplete="email"
                    disabled={click}
                    onChange={(e) =>setEmail(e.target.value)}
                    value={email}
                    />
                </div>

                <div className="phone">                
                    <label htmlFor="phone">Phone Number</label>
                    <input 
                    type="tel"
                    id="phone"
                    required
                    autoComplete="tel"
                    disabled={click}
                    onChange={(e) => setPhone(e.target.value)}
                    value={phone}
                    />
                </div>

                <div className="msg">                
                    <label htmlFor="msg">Your Message</label>
                    <input 
                    type="text"
                    id="msg"
                    required
                    autoComplete="off"
                    disabled={click}
                    onChange={(e) => setMsg(e.target.value)}
                    value={msg}
                    />
                </div>

                <div className="send">
                    <input type="submit" value={send} id="submit" disabled={click}/>
                </div>
            </form>
        </div>
    )
}
export default ContactusForm