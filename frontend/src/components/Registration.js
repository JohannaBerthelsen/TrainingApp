import { useState } from 'react';

export default function EmailVerification(){
    const [email, setEmail] = useState('');

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    return (
        <div>
            <input
                value ={email}
                onChange={handleEmailChange}
                placeholder="Enter your email"
            />
        </div>
    )
}