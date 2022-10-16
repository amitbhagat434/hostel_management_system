import React from 'react';
import "./admission.css";
const Admission = () =>{
    return(
    <div>
    <div className="container">
        <h1>GOVERNMENT COLLEGE OF ENGINEERING</h1>
        <h1>KARAD</h1>
        <p id="a">(An Autonomous Institute of Maharashtra)</p>
    </div>
    <div>
        <h1 className="a">BASIC INFORMATION</h1>
        <h2>Please fill the given information</h2>
        <div id="b">
            <div className="box">
                First Name: <input type="text" name="myfirstname" id="A" />
            </div>
            <div className="box">
                Middle Name: <input type="text" name="mymiddlename" id="B" />
            </div>
            <div className="box">
                Last Name: <input type="text" name="myladtname" id="C" />
            </div>
        </div>
        <div id="c">
            <div className="box">
                Roll no: <input type="text" name="myroll_no" id="D" />
            </div>
            <div className="box">
                Select Course:<select name="mycourse" id="course">
                    <option value="information technology">INFORMATION TECHNOLOGY</option>
                    <option value="electrical">ELECTRICAL</option>
                    <option value="mechanical">MECHANICAL</option>
                    <option value="civil">CIVIL</option>
                    <option value="entc">ENTC</option>
                </select>
            </div>
            <div className="box">
                Year: <select name="myyear" id="year">
                    <option value="Ist">Ist</option>
                    <option value="2nd">2nd</option>
                    <option value="3rd">3rd</option>
                    <option value="4th">4th</option>
                </select>
            </div>
        </div>
        <div id="d">
            <div className="box">
                Semester:<select name="mysemester" id="semester">
                    <option value="I">I</option>
                    <option value="II">II</option>
                    <option value="III">III</option>
                    <option value="IV">IV</option>
                    <option value="V">V</option>
                    <option value="VI">VI</option>
                    <option value="VII">VII</option>
                    <option value="VIII">VIII</option>
                </select>
            </div>
            <div className="box">
                <a className="x"></a>CGPA/CET:<input type="text" name="mycgpa" id="cgpa" />
            </div>
            <div className="box">
                Category: <select name="mycategory" id="category">
                    <option value="General">GENERAL</option>
                    <option value="SC">SC</option>
                    <option value="ST">ST</option>
                    <option value="OBC">OBC</option>
                </select>
            </div>
        </div>
        <div id="e">
            <div className="box">
                Phn no:<input type="text" name="myphn_no" id="E" />
            </div>
            <div className="box">
                <a className="y">Parent's Phn no:<input type="text" name="myparent_phn_no" id="F" />,</a>
            </div>
            <div className="box">
                <a className="m">Date:<input type="date" name="mydate" id="G" /></a>
            </div>
        </div>
        <div id="z" className="nav">
            <h1 id="n">STUDENT ADDRESS</h1>
            <div id="f">
                <div className="box">
                    State: <select name="mystate" id="state">
                        <option value="Andhra Pradesh">Andhra Pradesh</option>
                        <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                        <option value="Assam">Assam</option>
                        <option value="Bihar">Bihar</option>
                        <option value="Chhattisgarh">Chhattisgarh</option>
                        <option value="Goa">Goa</option>
                        <option value="Gujarat">Gujarat</option>
                        <option value="Haryana">Haryana</option>
                        <option value="Himachal Pradesh">Himachal Pardesh</option>
                        <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                        <option value="Jharkhand">Jharkhand</option>
                        <option value="Karnataka">Karnataka</option>
                        <option value="Kerala">Kerala</option>
                        <option value="Madhya Pradesh">Madhya Pradesh</option>
                        <option value="Maharashtra">Maharashtra</option>
                        <option value="Manipur">Manipur</option>
                        <option value="Meghalaya">Meghalaya</option>
                        <option value="Mizoram">Mizoram</option>
                        <option value="Nagaland">Nagaland</option>
                        <option value="Odisha">Odisha</option>
                        <option value="Punjab">Punjab</option>
                        <option value="Rajasthan">Rajasthan</option>
                        <option value="Sikkim">Sikkim</option>
                        <option value="Tamil Nadu">Tamil Nadu</option>
                        <option value="Telangana">Telangana</option>
                        <option value="Tripura">Tripura</option>
                        <option value="Uttar Pradesh">Uttar Pradesh</option>
                        <option value="Uttarakhand">Uttarakhand</option>
                        <option value="West Bengal">West Bengal</option>
                    </select>
                </div>

              
                <div className="box">
                    village: <input type="text" name="myvillage" id="H" />
                </div>
            </div>
            <div id="g" className="box">
                Pin code: <input type="text" name="my_pin_code" id="I" />
            </div>
            <div id="o" className="box">
                <input type="checkbox" name="mycheckbox" />I agree with all of above information.
            </div>
            <div className="box">
                <input type="button" value="Submit" id="k" onClick="saveInfo()" />
            </div>
        </div>

     </div>
     </div>

    );
}
export default Admission;