import React, {useEffect, useState} from 'react';
import axios from 'axios';

const ItemForm = ({item, onSuccess}) => {
    const [firstname, setFirstName] = useState('');
    const [middlename, setMiddleName] = useState('');
    const [lastname, setLastName] = useState('');
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [birthday, setBirthday] = useState('');
    const [placeofbirth, setPlaceofbirth] = useState('');
    const [sex, setSex] = useState(''); 
    const [civilstatus, setCivilstatus] = useState('');
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [bloodtype, setBloodtype] = useState('');
    const [gsisid, setGsisid] = useState('');
    const [pagibig, setPagibigid] = useState('');
    const [philhealth, setPhilhealth] = useState('');
    const [sss, setSss] = useState('');
    const [tin, setTin] = useState('');
    const [agencyemp, setAgencyemp] = useState('');
    const [citizenship, setCitizenship] = useState('');
    const [zipcode, setZipcode] = useState('');
    const [permanentaddress, setPermanentaddress] = useState('');
    const [permzipcode, setPermzipcode] = useState('');
    const [telephone, setTelephone] = useState('');
    const [spousefirstname, setSpousefirstname] = useState('');
    const [spousemidddlename, setSpousemiddlename] = useState('');
    const [spouselastname, setSpouselastname] = useState('');
    const [spouseextension, setSpouseextension] = useState('');
    const [occupation, setOccupation] = useState('');
    const [empbusinessname, setEmpbusinessname] = useState('');
    const [businessaddress, setBusinessaddress] = useState('');
    const [businesstelephone, setBusinessTelephone] = useState('');
    const [fatherfirstname, setFatherfirstname] = useState('');
    const [fathermiddlename, setFathermiddlename] = useState('');
    const [fatherlastname, setFatherlastname] = useState('');
    const [fatherextensions, setFatherextenions] = useState('');
    const [motherfirstname, setMotherfirstname] = useState('');
    const [mothermiddlename, setMothermiddlename] = useState('');
    const [motherlastname, setMotherlastname] = useState('');
    const [motherextensions, setMotherextensions] = useState('');
    const [children1, setChildren1] = useState('');
    const [children1dob, setChildren1dob] = useState('');
    const [children2, setChildren2] = useState('');
    const [children2dob, setChildren2dob] = useState('');
    const [children3, setChildren3] = useState('');
    const [children3dob, setChildren3dob] = useState('');
    const [children4, setChildren4] = useState('');
    const [children4dob, setChildren4dob] = useState('');
    

    

    useEffect(() => {
        if (item) {
            setFirstName(item.firstname);
            setMiddleName(item.middlename);
            setLastName(item.lastname);
            setPermanentaddress(item.permanentaddress);
            setEmail(item.email);
            setBirthday(item.birthday);
            setPlaceofbirth(item.placeofbirth);
            setSex(item.sex);
            setCivilstatus(item.civilstatus);
            setHeight(item.height);
            setWeight(item.weight);
            setBloodtype(item.bloodtype);
            setGsisid(item.gsisid);
            setPagibigid(item.pagibigid);
            setPhilhealth(item.philhealth);
            setSss(item.sss);
            setTin(item.tin);
            setAgencyemp(item.agencyemp);
            setCitizenship(item.citizenship);
            setAddress(item.address);
            setZipcode(item.zipcode);
            setPermzipcode(item.permzipcode);
            setTelephone(item.telephone);
            setMobile(item.mobile);
            setSpousefirstname(item.spousefirstname);
            setSpousemiddlename(item.spousemiddlename);
            setSpouselastname(item.spouselastname);
            setSpouseextension(item.spouseextension);
            setOccupation(item.occupation);
            setEmpbusinessname(item.empbusinessname);
            setBusinessaddress(item.businessaddress);
            setBusinessTelephone(item.businesstelephone);
            setFatherfirstname(item.fatherfirstname);
            setFathermiddlename(item.fathermiddlename);
            setFatherlastname(item.fatherlastname);
            setFatherextenions(item.fatherextensions);
            setMotherfirstname(item.motherfirstname);
            setMothermiddlename(item.mothermiddlename);
            setMotherlastname(item.motherlastname);
            setMotherextensions(item.motherextensions);
            setChildren1(item.children1);
            setChildren1dob(item.children1dob);
            setChildren2(item.children2);
            setChildren2dob(item.children2dob);
            setChildren3(item.children3);
            setChildren3dob(item.children3dob);
            setChildren4(item.children4);
            setChildren4dob(item.children4dob);

        }   
    }, [item]);

    const handleSubmit = async(event) => {
        event.preventDefault();
        const data = {firstname, middlename, lastname, address, email,  mobile, birthday, placeofbirth, sex, civilstatus, height, weight, bloodtype, gsisid, pagibig, philhealth, sss, tin, agencyemp, citizenship, zipcode, permanentaddress, permzipcode, telephone,
             spousefirstname, spousemidddlename, spouselastname, spouseextension, occupation, empbusinessname, businessaddress, businesstelephone, fatherfirstname, fathermiddlename, fatherlastname, fatherextensions, motherfirstname, mothermiddlename, motherlastname, motherextensions, children1, children1dob, children2, children2dob, children3, children3dob, children4, children4dob };
        try {
            if(item){
                await
                axios.put(`http://localhost:8000/api/items/${item.id}/`, data);
            } else {
                axios.post('http://localhost:8000/api/items/', data);
            }
            onSuccess();
        } catch (error) {
            console.error('Error submitting the form!', error);
        }
    };

    return(
        <center>
            <label ><h1>Create Item</h1></label>
        <form onSubmit={handleSubmit}>
            <div>
                <label >First Name: </label><br></br>
                <input type='text' value={firstname} onChange={(e) => setFirstName(e.target.value)} />
            </div>
            <div>
                <label >Middle Name: </label><br></br>
                <input type='text' value={middlename} onChange={(e) => setMiddleName(e.target.value)}/>
            </div>
            <div>
                <label >Last Name: </label><br></br>
                <input type='text' value={lastname} onChange={(e) => setLastName(e.target.value)}/>
            </div>
            <div>
                <label >Permanent Address: </label><br></br>
                <input type='text' value={permanentaddress} onChange={(e) => setPermanentaddress(e.target.value)}/>
            </div>
            <div>
                <label >Email: </label><br></br>
                <input type='text' value={email} onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div>
                <label >Birthday: </label><br></br>
                <input type='date' value={birthday} onChange={(e) => setBirthday(e.target.value)}/>
            </div>
            <div>
                <label >Place of Birth: </label><br></br>
                <input type='text' value={placeofbirth} onChange={(e) => setPlaceofbirth(e.target.value)}/>
            </div>
            <div>
                <label >Sex: </label><br></br>
                <input type='text' value={sex} onChange={(e) => setSex(e.target.value)}/>
            </div>
            <div>
                <label >Civil Status: </label><br></br>
                <input type='text' value={civilstatus} onChange={(e) => setCivilstatus(e.target.value)}/>
            </div>
            <div>
                <label >Height: </label><br></br>
                <input type='text' value={height} onChange={(e) => setHeight(e.target.value)}/>
            </div>
            <div>
                <label >Weight: </label><br></br>
                <input type='text' value={weight} onChange={(e) => setWeight(e.target.value)}/>
            </div>
            <div>
                <label >Blood Type: </label><br></br>
                <input type='text' value={bloodtype} onChange={(e) => setBloodtype(e.target.value)}/>
            </div>
            <div>
                <label >Gsis id: </label><br></br>
                <input type='text' value={gsisid} onChange={(e) => setGsisid(e.target.value)}/>
            </div>
            <div>
                <label >Pagibig id: </label><br></br>
                <input type='text' value={pagibig} onChange={(e) => setPagibigid(e.target.value)}/>
            </div>
            <div>
                <label >Phil health: </label><br></br>
                <input type='text' value={philhealth} onChange={(e) => setPhilhealth(e.target.value)}/>
            </div>
            <div>
                <label >Sss: </label><br></br>
                <input type='text' value={sss} onChange={(e) => setSss(e.target.value)}/>
            </div>
            <div>
                <label >Tin: </label><br></br>
                <input type='text' value={tin} onChange={(e) => setTin(e.target.value)}/>
            </div>
            <div>
                <label >Agency Emp: </label><br></br>
                <input type='text' value={agencyemp} onChange={(e) => setAgencyemp(e.target.value)}/>
            </div>
            <div>
                <label >Citizenship: </label><br></br>
                <input type='text' value={citizenship} onChange={(e) => setCitizenship(e.target.value)}/>
            </div>
            <div>
                <label >Address: </label><br></br>
                <input type='text' value={address} onChange={(e) => setAddress(e.target.value)}/>
            </div>
            <div>
                <label >Zip code: </label><br></br>
                <input type='text' value={zipcode} onChange={(e) => setZipcode(e.target.value)}/>
            </div>
            <div>
                <label >Perm zip code: </label><br></br>
                <input type='text' value={permzipcode} onChange={(e) => setPermzipcode(e.target.value)}/>
            </div>
            <div>
                <label >Telephone: </label><br></br>
                <input type='text' value={telephone} onChange={(e) => setTelephone(e.target.value)}/>
            </div>
            <div>
                <label >Mobile: </label><br></br>
                <input type='text' value={mobile} onChange={(e) => setMobile(e.target.value)}/>
            </div>
            <div>
                <label >Spouse Firstname: </label><br></br>
                <input type='text' value={spousefirstname} onChange={(e) => setSpousefirstname(e.target.value)}/>
            </div>
            <div>
                <label >Spouse Midddlename: </label><br></br>
                <input type='text' value={spousemidddlename} onChange={(e) => setSpousemiddlename(e.target.value)}/>
            </div>
            <div>
                <label >Spouse Lastname: </label><br></br>
                <input type='text' value={spouselastname} onChange={(e) => setSpouselastname(e.target.value)}/>
            </div>
            <div>
                <label >Spouse Extensions: </label><br></br>
                <input type='text' value={spouseextension} onChange={(e) => setSpouseextension(e.target.value)}/>
            </div>
            <div>
                <label >Occupation: </label><br></br>
                <input type='text' value={occupation} onChange={(e) => setOccupation(e.target.value)}/>
            </div>
            <div>
                <label >Emp Businessname: </label><br></br>
                <input type='text' value={empbusinessname} onChange={(e) => setEmpbusinessname(e.target.value)}/>
            </div>
            <div>
                <label >Business Address: </label><br></br>
                <input type='text' value={businessaddress} onChange={(e) => setBusinessaddress(e.target.value)}/>
            </div> 
            <div>
                <label >Business Telephone: </label><br></br>
                <input type='text' value={businesstelephone} onChange={(e) => setBusinessTelephone(e.target.value)}/>
            </div>
            <div>
                <label >Father Firstname: </label><br></br>
                <input type='text' value={fatherfirstname} onChange={(e) => setFatherfirstname(e.target.value)}/>
            </div>
            <div>
                <label >Father Middlename: </label><br></br>
                <input type='text' value={fathermiddlename} onChange={(e) => setFathermiddlename(e.target.value)}/>
            </div>
            <div>
                <label >Fatherlastname: </label><br></br>
                <input type='text' value={fatherlastname} onChange={(e) => setFatherlastname(e.target.value)}/>
            </div>
            <div>
                <label >Father Extensions: </label><br></br>
                <input type='text' value={fatherextensions} onChange={(e) => setFatherextenions(e.target.value)}/>
            </div>
            <div>
                <label >Mother Firstname: </label><br></br>
                <input type='text' value={motherfirstname} onChange={(e) => setMotherfirstname(e.target.value)}/>
            </div>
            <div>
                <label >Mother Middlename: </label><br></br>
                <input type='text' value={mothermiddlename} onChange={(e) => setMothermiddlename(e.target.value)}/>
            </div>
            <div>
                <label >Mother Lastname: </label><br></br>
                <input type='text' value={motherlastname} onChange={(e) => setMotherlastname(e.target.value)}/>
            </div>
            <div>
                <label >Mother Extensions: </label><br></br>
                <input type='text' value={motherextensions} onChange={(e) => setMotherextensions(e.target.value)}/>
            </div>
            <div>
                <label >Children 1: </label><br></br>
                <input type='text' value={children1} onChange={(e) => setChildren1(e.target.value)}/>
            </div>
            <div>
                <label >Children 1 dob: </label><br></br>
                <input type='date' value={children1dob} onChange={(e) => setChildren1dob(e.target.value)}/>
            </div>
            <div>
                <label >Children 2: </label><br></br>
                <input type='text' value={children2} onChange={(e) => setChildren2(e.target.value)}/>
            </div>
            <div>
                <label >Children 2 dob: </label><br></br>
                <input type='date' value={children2dob} onChange={(e) => setChildren2dob(e.target.value)}/>
            </div>
            <div>
                <label >Children 3: </label><br></br>
                <input type='text' value={children3} onChange={(e) => setChildren3(e.target.value)}/>
            </div>
            <div>
                <label >Children 3 dob: </label><br></br>
                <input type='date' value={children3dob} onChange={(e) => setChildren3dob(e.target.value)}/>
            </div>
            <div>
                <label >Children 4: </label><br></br>
                <input type='text' value={children4} onChange={(e) => setChildren4(e.target.value)}/>
            </div>
            <div>
                <label >Children 4 dob: </label><br></br>
                <input type='date' value={children4dob} onChange={(e) => setChildren4dob(e.target.value)}/>
            </div>
            <br></br>
            <button type='submit'>Submit</button>
        </form>
        </center>
    );
}

export default ItemForm;