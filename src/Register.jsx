import React, { useState } from "react";

export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');
    const [mobile, setMobile] = useState('');
    const [exam, setExam] = useState('JEE');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email, pass, name, mobile, exam);
    }

    return (
        <div className="auth-form-container">
            <h2>Register</h2>
            <form className="register-form" onSubmit={handleSubmit}>
                <label htmlFor="name">Full name</label>
                <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="Full Name" />
                <label htmlFor="email">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                <label htmlFor="password">Password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                <label htmlFor="mobile">Mobile Number</label>
                <input value={mobile} onChange={(e) => setMobile(e.target.value)} type="text" placeholder="Mobile Number (10 digits)" id="mobile" name="mobile" maxLength="10" />
                <label htmlFor="exam">Exam</label>
                <select id="exam" name="exam" value={exam} onChange={(e) => setExam(e.target.value)}>
                    <option value="JEE">JEE</option>
                    <option value="NEET">NEET</option>
                    <option value="UPSC">UPSC</option>
                    <option value="SSC">SSC</option>
                   
                </select>
                <div style={{ marginTop: '10px' }}>
                    <button type="submit">Register</button>
                </div>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
        </div>
    )
}
