export default function Form() {
    return (
        <>
        
         <div>
      <h3 align="center"><u>STUDENT REGISTRATION FORM</u></h3>

      <form>
        <table align="center">
          <tr>
            <td><label>First Name</label></td>
            <td><input type="text" />(max 30 characters a-z and A-Z)</td>
          </tr>
          <tr>
            <td><label>LAST NAME</label></td>
          <td><input type="text" /> (max 30 characters a-z and A-Z)</td>
          </tr>
          <tr>
             <td>DATE OF BIRTH</td>
          <td>
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
               
               <select>Month
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
          </td>
          </tr>
          <tr>
            <td>
               <label>EMAIL ID</label>
          </td>
          <td><input type="EMAIL ID"/></td>
          </tr>
          <tr>
            <td><label>MOBILE NUMBER</label></td>
          <td><input type="text"/>(10 digit number)</td>
          </tr>
          <tr>
             <td><label>GENDER</label></td>
          <td>Male<input type="radio"name="GENDER"/>
          Female<input type="radio"name="GENDER"/></td>
          </tr>
          <tr>
                      <td><label>ADDRESS</label></td>
          <td><textarea id="address" name="address" rows="4" cols="30"></textarea></td>
          </tr>
          <tr>
             <td><label>CITY</label></td>
          <td><input type="text"/>(max 30 characters a-z and A-Z)</td>
          </tr>
          <tr>
            <td><label>PIN CODE</label></td>
          <td><input type="text"/>(6 digit number)</td>
          </tr>
          <tr>
             <td><label>STATE</label></td>
          <td><input type="text"/>(max 30 characters a-z and A-Z)</td>
          </tr>
          <tr>
          <td><label>COUNTRY</label></td>
          <td><input type="text"/></td>
     </tr>
     <tr>
          <td><label>HOBBIES</label></td>
          <td>
          Drawing<input type="checkbox"/>
          Singing<input type="checkbox"/>
          Dancing<input type="checkbox"/>
          Sketching<input type="checkbox"/></td>
        
     </tr>
     <tr>
          <td></td>
           <td><n>Others<input type="checkbox"/><input type="text"/></n></td>
     </tr>
     <tr>
      <td><label>QUALIFICATION</label></td>
     <td>
          <table border="1">
         
        
         
          <tr>
               
               <th>SI.NO.</th>
               <th>Examination</th>
               <th>Board</th>
               <th>Percentage</th>
               <th>Year of Passing</th>
               </tr>
          
          
          <tr>
               <td>1</td>
               <td>Class X</td>
               <td><input type=""/></td>
               <td><input type=""/></td>
               <td><input type=""/></td>
               
          </tr>
          <tr>
               <td>2</td>
               <td>Class XII</td>
               <td><input type=""/></td>
               <td><input type=""/></td>
               <td><input type=""/></td>
               
          </tr>
          <tr>
               <td>3</td>
               <td>Graduation</td>
               <td><input type=""/></td>
               <td><input type=""/></td>
               <td><input type=""/></td>
               
          </tr>
          <tr>
               <td>4</td>
               <td>Masters</td>
               <td><input type=""/></td>
               <td><input type=""/></td>
               <td><input type=""/></td>
               
          </tr>
          <tr>
               <td></td>
               <td></td>
               <td>(10 char max)</td>
               <td>(upto 2 decimal)</td>
               <td></td>
               <td></td>
          </tr>
     </table>
     </td>
     </tr>
     <tr>
      <td><label>COURSES</label></td>
        <td>
          BCA<input type="radio"name="COURSES"/>
          B.COM<input type="radio"name="COURSES"/>
          B.SC<input type="radio"name="COURSES"/>
          B.A<input type="radio"name="COURSES"/>
        </td>
     </tr>
     <tr><td><label>APPLIED FOR</label></td></tr>
        </table>
        <center>
    <input type="submit" value="Submit"/>
    <input type="reset" value="Reset"/>
  </center>
      </form>
   </div>
        
        </>
    )
}