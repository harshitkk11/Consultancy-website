import { useState } from "react"

function ContactusForm() {

    const[name, setName] = useState("")
    const[company_name, setCompany_name] = useState("")
    const[email, setEmail] = useState("")
    const[phone, setPhone] = useState("")
    const[msg, setMsg] = useState("")
    const[error, setError] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()

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
            console.log("details added")
        }
    }

    return (
        <div className="form">
            <form className="contact-form" onSubmit={handleSubmit}>
                <h1>CONTACT US</h1>
                <div className="name">
                    <label>Name</label>
                    <input 
                    type="text"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    />
                </div>

                <div className="company_name">
                    <label>Company Name</label>
                    <input 
                    type="text"
                    onChange={(e) => setCompany_name(e.target.value)}
                    value={company_name}
                    />
                </div>

                <div className="email">                
                    <label>Email</label>
                    <input 
                    type="email"
                    onChange={(e) =>setEmail(e.target.value)}
                    value={email}
                    />
                </div>

                <div className="phone">                
                    <label>Phone Number</label>
                    <input 
                    type="number"
                    onChange={(e) => setPhone(e.target.value)}
                    value={phone}
                    />
                </div>

                <div className="msg">                
                    <label>Your Message</label>
                    <input 
                    type="text"
                    onChange={(e) => setMsg(e.target.value)}
                    value={msg}
                    />
                </div>

                <div className="send">
                    <input type="submit" value="Send" className="submit"/>
                </div>
            </form>
        </div>
    )
}
export default ContactusForm