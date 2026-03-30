export default function Register() {
    return (
        <>
        
           <div>
       <h1>Register</h1>
    <li>
       First Name: <input type="text" placeholder="john"/>Last Name: <input type="text" placeholder="Smith"/>
    </li>
    <li>
        <input type="radio" name="gender"/>Male
        <input type="radio" name="gender"/>Female
        <input type="radio" name="gender"/>Other
    </li>
     <li>
       Email: <input type="email" placeholder="your email" required/>Password: <input type="password" placeholder="your password"/>
    </li>
    <li>
        Birthday: <select>Month
                    <option value="">Month</option>
                    <option value="">January</option>
                    <option value="">February</option>
                    <option value="">March</option>
                    <option value="">April</option>
                    <option value="">May</option>
                    <option value="">June</option>
                    <option value="">July</option>
                    <option value="">Augest</option>
                    <option value="">September</option>
                    <option value="">October</option>
                    <option value="">November</option>
                    <option value="">December</option>
        </select>
        <select>Day
                    <option value="">Day</option>
                    <option value="">Monday</option>
                    <option value="">Tuesday</option>
                    <option value="">Wednesday</option>
                    <option value="">Thursday</option>
                    <option value="">Friday</option>
                    <option value="">Saturday</option>
                    <option value="">Sunday</option>
        </select>
        <select>Year
                    <option value="">Year</option>
                    <option value="">2000</option>
                    <option value="">2001</option>
                    <option value="">2002</option>
                    <option value="">2003</option>
                    <option value="">2004</option>
                    <option value="">2005</option>
                    <option value="">2006</option>
        </select>
    </li>
    <li>I agree to the terms and conditions<input type="checkbox"/></li>
<li>
    <button type="submit">Submit</button> 
</li>
    </div>
        
        </>
    )
}