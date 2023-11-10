import React, { useState } from 'react';
import axios from 'axios';

const SignupForm = () => {

    const [formData, setFormData] = useState({
        Email: 'khaled.mohameed1998@gmail.com',
        Fname: 'khaled.mohameed1998@gmail.com',
        Lname: 'khaled.mohameed1998@gmail.com',
        AccountType: '',
        Phone: '01000000000',
        Gender: 'fmail',
        Password: 'khaled.mohameed1998@gmail.com',
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        const newValue = type === 'checkbox' ? checked : value;
        setFormData({ ...formData, [name]: newValue });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('hello');
        try {
            const response = await axios.post('https://bend.egysnakes.com/api/v2/users/signup', formData);
            console.log('البيانات المُرسلة:', response.data);
        } catch (error) {
            console.error('حدث خطأ أثناء الإرسال:', error);
        }
    };

    return (
        <div>
            <div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Email:</label>
                        <input type="email" name="Email" value={formData.Email} onChange={handleChange} />
                    </div>
                    <div>
                        <label>First Name:</label>
                        <input type="text" name="Fname" value={formData.Fname} onChange={handleChange} />
                    </div>
                    <div>
                        <label>Last Name:</label>
                        <input type="text" name="Lname" value={formData.Lname} onChange={handleChange} />
                    </div>
                    <div>
                        <label>Account Type:</label>
                        <input type="text" name="AccountType" value={formData.AccountType} onChange={handleChange} />
                    </div>
                    <div>
                        <label>Phone:</label>
                        <input type="tel" name="Phone" value={formData.Phone} onChange={handleChange} />
                    </div>
                    <div>
                        <label>Gender:</label>
                        <input type="radio" name="Gender" value="male" onChange={handleChange} checked={formData.Gender === 'male'} /> Male
                        <input type="radio" name="Gender" value="female" onChange={handleChange} checked={formData.Gender === 'female'} /> Female
                    </div>
                    <div>
                        <label>Password:</label>
                        <input type="password" name="Password" value={formData.Password} onChange={handleChange} />
                    </div>
                    <button type="submit">إرسال</button>
                </form>
            </div>

        </div>
    )
}

export default SignupForm
