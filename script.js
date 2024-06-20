let contentContainer = document.getElementById('content-container');
let exist = false
function loadBasic() {
    
    let basicInfo = `
     <form action="form-handler.php" method="post" onsubmit="return validation()">

        <div style="padding-bottom: 20px;">
            <label for="Assessment-Type"> Title of Assessment applied for:</label><br>
            <input type="text" id="title">
            <input type="radio" id="Full-Qual" name="Assessment-Type"> <label for="Assessment-Type"> Full Qualification</label> 
            <input type="radio" id="COC" name="Assessment-Type"> <label for="Assessment-Type"> COC </label>
        </div>

        <div style="padding-bottom: 20px;">
            <label for="CLient-Type"> Client Type:</label><br>
            <input type="radio" id="Graduating" name="Client-Type"> <label for="Client-Type"> TVET Graduating Student</label> 
            <input type="radio" id="Graduate" name="Client-Type"> <label for="Client-Type"> TVET Graduate </label>
            <input type="radio" id="Industry" name="Client-Type"> <label for="Client-Type"> Industry Worker</label> 
            <input type="radio" id="OFW-clt" name="Client-Type"> <label for="Client-Type"> OFW </label>
        </div>

        <div style="padding-bottom: 20px;">
            <fieldset style="border-radius:5px">
                <legend> Basic Information</legend>
                <div style="display: flex; padding-top: 20px;">

                    <div style="flex:1">
                        <label for="lname"> <b>Last Name</b></label><br>
                        <input type="text" id="lname">
                    </div>

                    <div style="flex:1">
                        <label for="fname"> <b> First Name </b></label><br>
                        <input type="text" id="fname">
                    </div>

                    <div style="flex:1">
                        <label for="mname"> <b>Middle Name</b></label><br>
                        <input type="text" id="mname">
                    </div>

                    <div style="flex:1">
                        <label for="exten"> <b> Extension</b></label><br>
                        <input type="text" id="exten">
                    </div>
                </div>

                <div style="display: flex; padding-top: 20px;">

                    <div style="flex:1">
                        <label for="bday"> <b>Birthday</b></label><br>
                        <input type="date" id="bday">
                    </div>

                    <div style="flex:1">
                        <label for="bplace"> <b>Birthplace</b></label><br>
                        <input type="text" id="bplace">
                    </div>

                    <div style="flex:1">
                    <label for="lname"> <b>Sex</b></label><br>
                    <input type="radio" id="male" name="sex"> <label for="male"> Male</label>
                    <input type="radio" id="female" name="sex"> <label for="female"> Female</label>
                    </div>


                    <div style="flex:1">
                    <label for="lname"> <b>Civil Status</b></label><br>
                    <input type="radio" id="single" name="civilStatus"> <label for="single"> Single </label>
                    <input type="radio" id="married" name="civilStatus"> <label for="married"> Married</label>
                    <input type="radio" id="widow" name="civilStatus"> <label for="widow"> Widow/er</label>
                    <input type="radio" id="separated" name="civilStatus"> <label for="separated"> Separated </label>
                    </div>
                </div>

                <div style="display: flex; padding-top: 20px; padding-bottom: 20px;">

                    <div style="flex:1">
                        <label for="lname"> <b>Email</b></label><br>
                        <input type="text" id="lname">
                    </div>

                    <div style="flex:1">
                        <label for="contact"> <b>Contact No.</b></label><br>
                        <input type="number" id="contact">
                    </div>

                    
                </div>
            </fieldset>
        </div>

        <div style="padding-bottom: 20px;">
            <fieldset>
                <legend>Employment Status</legend>

            <div>
                <div style="padding-top:20px;">
                <label for="lname"><b>Employment</b></label><br>
                <input type="radio" id="casual" name="employment_type"> <label for="casual"> Casual </label>
                <input type="radio" id="job-ord" name="employment_type"> <label for="job-ord"> Job Order </label>
                <input type="radio" id="proba" name="employment_type"> <label for="proba"> Probationary </label>
                <input type="radio" id="perma" name="employment_type"> <label for="perma"> Permanent </label>
                <input type="radio" id="self-emp" name="employment_type"> <label for="self-emp"> Self-Employed </label>
                <input type="radio" id="OFW-emp" name="employment_type"> <label for="OFW-emp"> OFW </label>
                </div>

                <div style="display: flex; padding-top: 20px; padding-bottom: 20px;">

                <div id="experience-container">
                <div class="experience-container">
                    <label for="work-exp" style="padding-right: 10px;"><b>Work Experience</b></label>
                    <button onclick="addExperience()">+</button><br>
                    <input type="text" class="company-input" placeholder="Company">
                    <input type="text" class="duration-input" placeholder="Duration">
                    <button onclick="removeExperience(this)">Remove</button>
                </div>
            </div>
            </fieldset>

            
        </div>

        <div style="padding-bottom: 20px;">
            <fieldset>
                <legend> Education</legend>
                <div>
                <div id="tertiary-container" style="padding-top: 20px;">
                    <label for="teriary"><b>Tertiary</b></label>
                    <button class="add-btn" onclick="addTeriary()">+</button><br>
                    <input type="text" class="terName" placeholder="Name">
                    <input type="text" class="terAddrs" placeholder="Address">
                    <button class="remove-btn"  onclick="removeTeriary(this)">Remove</button>
                </div>

                <div id="secondary-container" style="padding-top: 20px;">
                    <label for="secondary"><b>Secondary</b></label>
                    <button onclick="addSecondary()">+</button><br>
                    <input type="text" class="serName" placeholder="Name">
                    <input type="text" class="serAddrs" placeholder="Address">
                    <button class="remove-btn" onclick="removeSecondary()">Remove</button>
                </div>

                <div id="primary-container" style="padding-top: 20px; padding-bottom:20px;">
                    <label for="primary"><b>Primary</b></label>
                    <button onclick="addPrimary()">+</button><br>
                    <input type="text" class="priName" placeholder="Name">
                    <input type="text" class="priAddrs" placeholder="Address">
                    <button class="remove-btn">Remove</button>
                </div>
                </div>
            </fieldset>
        </div>
    </div>

        </form>   
    `;
    contentContainer.innerHTML = basicInfo;
}

function loadAddress(){

    let addrsInfo = `

    <form action="form-handler.php" method="post" onsubmit="return validation()" id="myForm">

    <div>
        <fieldset>
            <legend>Home Address</legend>
            <div style="padding-top: 20px; padding-bottom:20px; display:flex;">

                <div style="flex:1">
                    <label for="strNo"> <b>Street No.</b></label><br>
                    <input type="text" id="streetNo">
                </div>

                <div style="flex:1">
                    <label for="strName"> <b>Street Name</b></label><br>
                    <input type="text" id="streetName">
                </div>

                <div style="flex:1">
                    <label for="brgy"> <b>Brgy</b></label><br>
                    <input type="text" id="brgy">
                </div>

                <div style="flex:1">
                    <label for="city"> <b>City</b></label><br>
                    <input type="text" id="city">
                </div>
            </div>

            <div style="padding-top: 20px; padding-bottom:20px; display:flex;">

                <div style="flex:1">
                    <label for="country"> <b>Country</b></label><br>
                    <input type="text" id="country">
                </div>

                <div style="flex:1">
                    <label for="zip"> <b>Zip</b></label><br>
                    <input type="text" id="zip">
                </div>

            </div>
        </fieldset>
    </div>

    <div style="padding: 20px">
    <input type="checkbox" onclick="sameAddrs()"> <label for="checkbox"> Mail Address Same As Home Address</label>
    </div>

    <div>
        <fieldset>
            <legend>Mailing Address</legend>
            <div style="padding-top: 20px; padding-bottom:20px; display:flex;">

                <div style="flex:1">
                    <label for="strNo"> <b>Street No.</b></label><br>
                    <input type="text" id="streetNo">
                </div>

                <div style="flex:1">
                    <label for="strName"> <b>Street Name</b></label><br>
                    <input type="text" id="streetName">
                </div>

                <div style="flex:1">
                    <label for="brgy"> <b>Brgy</b></label><br>
                    <input type="text" id="brgy">
                </div>

                <div style="flex:1">
                    <label for="city"> <b>City</b></label><br>
                    <input type="text" id="city">
                </div>
            </div>

            <div style="padding-top: 20px; padding-bottom:20px; display:flex;">

                <div style="flex:1">
                    <label for="country"> <b>Country</b></label><br>
                    <input type="text" id="country">
                </div>

                <div style="flex:1">
                    <label for="zip"> <b>Zip</b></label><br>
                    <input type="text" id="zip">
                </div>

            </div>
        </fieldset>
    </div>
    </form>
    
    `
    contentContainer.innerHTML = addrsInfo;
    exist == true
}

let titleInput = document.getElementById('title');
let fullQualRadio = document.getElementById('Full-Qual');
let cocRadio = document.getElementById('COC');

fullQualRadio.addEventListener('change', function() {
    if (fullQualRadio.checked) {
        titleInput.value = 'Full Qualification';
    }
});

cocRadio.addEventListener('change', function() {
    if (cocRadio.checked) {
        titleInput.value = 'COC';
    }
});

function addExperience() {
    let container = document.createElement('div');
    container.style.paddingTop = '10px';
    container.classList.add('experience-container');

    let companyInput = document.createElement('input');
    companyInput.type = 'text';
    companyInput.classList.add('company-input');
    companyInput.placeholder = 'Company';
    container.appendChild(companyInput);

    let durationInput = document.createElement('input');
    durationInput.type = 'text';
    durationInput.classList.add('duration-input');
    durationInput.placeholder = 'Duration';
    container.appendChild(durationInput);

    let removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.onclick = function() {
        container.remove();
    };
    container.appendChild(removeButton);

  
    let existingContainer = document.getElementById("experience-container")
    existingContainer.appendChild(container);
}


function removeExperience() {
    const removeButtons = document.querySelectorAll('.remove-button');
    if (removeButtons.length === 1) {
        removeButtons[0].disabled = true;
    } else {
        removeButtons.forEach(button => {
            button.disabled = false;
        });
    }
}

function addTeriary() {
    let container = document.createElement('div');
    container.style.paddingTop = '10px';
    container.classList.add('section-container');

    let nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.classList.add('terName');
    nameInput.placeholder = 'Name';
    container.appendChild(nameInput);

    let addrInput = document.createElement('input');
    addrInput.type = 'text';
    addrInput.classList.add('terAddrs');
    addrInput.placeholder = 'Address';
    container.appendChild(addrInput);

    let removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.classList.add('remove-btn');
    removeButton.addEventListener('click', function() {
        container.remove();
        removeTeriary(); 
    });
    container.appendChild(removeButton);

    let terContainer = document.getElementById("tertiary-container")
    terContainer.appendChild(container);

    removeTeriary(); 
}


function removeTeriary() {
    let removeButtons = document.querySelectorAll('.remove-button');
    if (removeButtons.length === 1) {
        removeButtons[0].disabled = true;
    } else {
        removeButtons.forEach(button => {
            button.disabled = false;
        });
    }
}

function addSecondary() {
    let container = document.createElement('div');
    container.style.paddingTop = '10px';
    container.classList.add('section-container');


    let nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.classList.add('serName');
    nameInput.placeholder = 'Name';
    container.appendChild(nameInput);

    let addrInput = document.createElement('input');
    addrInput.type = 'text';
    addrInput.classList.add('serAddrs');
    addrInput.placeholder = 'Address';
    container.appendChild(addrInput);

    let removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.classList.add('remove-btn');
    removeButton.addEventListener('click', function() {
        container.remove();
        removeSecondary();
    });
    container.appendChild(removeButton);

    let secondaryContainer = document.getElementById("secondary-container");
    secondaryContainer.appendChild(container);

    removeSecondary();
}

function removeSecondary() {
    let removeButtons = document.querySelectorAll('.remove-btn');
    if (removeButtons.length === 1) {
        removeButtons[0].disabled = true;
    } else {
        removeButtons.forEach(button => {
            button.disabled = false;
        });
    }
}

function addPrimary() {
    let container = document.createElement('div');
    container.style.paddingTop = '10px';
    container.classList.add('section-container');

    let nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.classList.add('priName');
    nameInput.placeholder = 'Name';
    container.appendChild(nameInput);

    let addrInput = document.createElement('input');
    addrInput.type = 'text';
    addrInput.classList.add('priAddrs');
    addrInput.placeholder = 'Address';
    container.appendChild(addrInput);

    let removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.classList.add('remove-btn');
    removeButton.addEventListener('click', function() {
        container.remove();
        removePrimary();
    });
    container.appendChild(removeButton);

    let primaryContainer = document.getElementById("primary-container");
    primaryContainer.appendChild(container);

    removePrimary();
}

function removePrimary() {
    let removeButtons = document.querySelectorAll('.remove-btn');
    if (removeButtons.length === 1) {
        removeButtons[0].disabled = true;
    } else {
        removeButtons.forEach(button => {
            button.disabled = false;
        });
    }
}

let AssessType = document.getElementById("title");

let clientType ;

function CltValue() {
    let cltType = document.getElementsByName('Client-Type');

    for (i = 0; i < cltType.length; i++) {
        if (cltType[i].checked)
            clientType = cltType[i].value;
    }
}

let lname = document.getElementById("lname");
let fname = document.getElementById("fname");
let mname =  document.getElementById("mname");
let exten = document.getElementById("exten");
let bday = document.getElementById("bday");
let birthplace = document.getElementById("bplace");
let sex ;

function SexValue() {
    let sex = document.getElementsByName('sex');

    for (i = 0; i < sex.length; i++) {
        if (sex[i].checked)
                sex = sex[i].value;
    }
}

let civilStatus;

function CivilValue() {
    let cvl = document.getElementsByName('civilStatus');
civilStatus
    for (i = 0; i < cvl.length; i++) {
        if (cvl[i].checked)
            civilStatus = cvl[i].value;
    }
}

let email = document.getElementById("email");
let contact = document.getElementById("contact");


let Employment;

function CivilValue() {
    let epm = document.getElementsByName('employment_type');

    for (i = 0; i < epm.length; i++) {
        if (epm[i].checked)
            Employment = epm[i].value;
    }
}

let company = document.getElementById("company");
let duration = document.getElementById("duration");

let terName = document.getElementById("terName");
let terAddrs =  document.getElementById("terAddrs");

let serName =  document.getElementById("serName");
let serAddrs =  document.getElementById("serAddrs");

let priName = document.getElementById("priName");
let priAddrs = document.getElementById("priAddrs");



fname.addEventListener("keyup", (e)=>{
    localStorage.setItem("fname", e.target.value);

})

lname.addEventListener("keyup", (e)=>{
    localStorage.setItem("lname", e.target.value);
})

mname.addEventListener("keyup", (e)=>{
    localStorage.setItem("mname", e.target.value);
})

exten.addEventListener("keyup", (e)=>{
    localStorage.setItem("exten", e.target.value);

})

bday.addEventListener("keyup", (e)=>{
    localStorage.setItem("bday", e.target.value);
})

birthplace.addEventListener("keyup", (e)=>{
    localStorage.setItem("bplace", e.target.value);
})

email.addEventListener("keyup", (e)=>{
    localStorage.setItem("email", e.target.value);
})

contact.addEventListener("keyup", (e)=>{
    localStorage.setItem("contact", e.target.value);
})


company.addEventListener("keyup", (e)=>{
    localStorage.setItem("company", e.target.value);
})

duration.addEventListener("keyup", (e)=>{
    localStorage.setItem("duration", e.target.value);
})

terName.addEventListener("keyup", (e)=>{
    localStorage.setItem("terName", e.target.value);
})

terAddrs.addEventListener("keyup", (e)=>{
    localStorage.setItem("terAddrs", e.target.value);
})

serName.addEventListener("keyup", (e)=>{
    localStorage.setItem("serName", e.target.value);
})

serAddrs.addEventListener("keyup", (e)=>{
    localStorage.setItem("serAddrs", e.target.value);
})

priName.addEventListener("keyup", (e)=>{
    localStorage.setItem("priName", e.target.value);
})

priAddrs.addEventListener("keyup", (e)=>{
    localStorage.setItem("priAddrs", e.target.value);
})

let user = 
{
    fname: localStorage.getItem("fname"),
    lname: localStorage.getItem("lname"), 
    mname: localStorage.getItem("mname"),

    exten: localStorage.getItem("exten"),
    bday: localStorage.getItem("bday"), 
    birthplace: localStorage.getItem("bplace"),

    sex: localStorage.getItem("sex"),
    civilStatus: localStorage.getItem("civilStatus"), 
    email: localStorage.getItem("email"),

    contact: localStorage.getItem("contact"),
    Employment: localStorage.getItem("Employment"), 
    company: localStorage.getItem("company"),

    duration: localStorage.getItem("duration"),
    terName: localStorage.getItem("terName"), 
    terAddrs: localStorage.getItem("terAddrs"),

    serName: localStorage.getItem("serName"),
    serAddrs: localStorage.getItem("serAddrs"), 
    priName: localStorage.getItem("priName"), 
    priAddrs: localStorage.getItem("priAddrs"),
}

window.onload = function(){
    
    fname.value = user.fname
    lname.value = user.lname
    mname.value = user.mname

    exten.value = user.exten
    bday.value = user.bday
    birthplace.value = user.birthplace

    
    email.value = user.email

    contact.value = user.contact

    company.value = user.company

    duration.value = user.duration
    terName.value = user.terName
    terAddrs.value = user.terAddrs

    serName.value = user.serName
    serAddrs.value = user.serAddrs
    priAddrs.value = user.priAddrs
    priName.value = user.priName

}

function validation(){
    let submit 
    
    if(fname.value != "" && lname.value != "" && mname.value != "" && exten.value != "" && bday.value != "" && birthplace.value != "" &&  email.value != "" && contact.value != ""  && company.value != "" && duration.value != "" && terName.value != "" && terAddrs.value != "" && serName.value != "" && serAddrs.value != "" && priAddrs.value != "" && priName.value != ""){
        submit = true;
    }else{

        if(fname.value == ""){
            fname.style.border = " 2px solid red"
            fname.style.transform = "scale(1.1)"
        }else{
             fname.style.border = " 1px solid black"
             fname.style.transform = "scale(1)"
        }

        if(lname.value == ""){
            lname.style.border = " 2px solid red"
            lname.style.border = " 2px solid red"
        }else{
             lname.style.border = " 1px solid black"
             lname.style.transform = "scale(1)"
        }

        if(mname.value == ""){
            mname.style.border = " 2px solid red"
            mname.style.transform = "scale(1.1)"
        }else{
             mname.style.border = " 1px solid black"
             mname.style.transform = "scale(1)"
        }

        if(exten.value == ""){
            exten.style.border = " 2px solid red"
            exten.style.transform = "scale(1.1)"
        }else{
             exten.style.border = " 1px solid black"
             exten.style.transform = "scale(1)"
        }

        if(bday.value == ""){
            bday.style.border = " 2px solid red"
            bday.style.transform = "scale(1.1)"
        }else{
             bday.style.border = " 1px solid black"
             bday.style.transform = "scale(1)"
        }

        if(birthplace.value == ""){
            birthplace.style.border = " 2px solid red"
            birthplace.style.transform = "scale(1.1)"
        }else{
            birthplace.style.border = " 1px solid black"
            birthplace.style.transform = "scale(1)"
        }

        if(email.value == ""){
            email.style.border = " 2px solid red"
            email.style.transform = "scale(1.1)"
        }else{
            email.style.border = " 1px solid black"
            email.style.transform = "scale(1)"
        }

        if(contact.value == ""){
            contact.style.border = " 2px solid red"
            contact.style.transform = "scale(1.1)"
        }else{
            contact.style.border = " 1px solid black"
            contact.style.transform = "scale(1)"
        }

        if(company.value == ""){
            company.style.border = " 2px solid red"
            company.style.transform = "scale(1.1)"
        }else{
            company.style.border = " 1px solid black"
            company.style.transform = "scale(1)"
        }

        if(duration.value == ""){
            duration.style.border = " 2px solid red"
            duration.style.transform = "scale(1.1)"
        }else{
            duration.style.border = " 1px solid black"
            duration.style.transform = "scale(1)"
        }
        
        if(terName.value == ""){
            terName.style.border = " 2px solid red"
            terName.style.transform = "scale(1.1)"
        }else{
            terName.style.border = " 1px solid black"
            terName.style.transform = "scale(1)"
        }

        if(terAddrs.value == ""){
            terAddrs.style.border = " 2px solid red"
            terAddrs.style.transform = "scale(1.1)"
        }else{
            terAddrs.style.border = " 1px solid black"
            terAddrs.style.transform = "scale(1)"
        }

        if(serName.value == ""){
            serName.style.border = " 2px solid red"
            serName.style.transform = "scale(1.1)"
        }else{
            serName.style.border = " 1px solid black"
            serName.style.transform = "scale(1)"
        }

        if(serAddrs.value == ""){
            serAddrs.style.border = " 2px solid red"
            serAddrs.style.transform = "scale(1.1)"
        }else{
            serAddrs.style.border = " 1px solid black"
            serAddrs.style.transform = "scale(1)"
        }

        if(priName.value == ""){
            priName.style.border = " 2px solid red"
            priName.style.transform = "scale(1.1)"
        }else{
            priName.style.border = " 1px solid black"
            priName.style.transform = "scale(1)"
        }

        if(priAddrs.value == ""){
            priAddrs.style.border = " 2px solid red"
            priAddrs.style.transform = "scale(1.1)"
        }else{
            priAddrs.style.border = " 1px solid black"
            priAddrs.style.transform = "scale(1)"
        }
    }

    return submit;
}

document.getElementById("rev").addEventListener("click", function(event){
    event.preventDefault();
    if (validation()) {
        document.getElementById("myForm").submit();
    }
});

if(exist == true){
let streetNo = document.getElementById("streetNo").value;
let streetName = document.getElementById("streetName").value;
let brgy = document.getElementById("brgy").value;
let city = document.getElementById("city").value;
let country = document.getElementById("country").value;
let zip = document.getElementById("zip").value;

document.getElementById("rev").addEventListener("click", function(event){
    event.preventDefault();
    if (validation()) {
        document.getElementById("myForm").submit();
    }
});

function sameAddrs(){
    document.getElementById("mstreetNo").value = streetNo;
    document.getElementById("mstreetName").value = streetName;
    document.getElementById("mbrgy").value = brgy;
    document.getElementById("mcity").value = city;
    document.getElementById("mcountry").value = country;
    document.getElementById("mzip").value = zip;
}
}