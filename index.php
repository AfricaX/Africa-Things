<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Minor B (na finals talaga)</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div style=" width:70%; margin:auto;" >
        <h1>Registration Form (For Assessment)</h1>
        <div id="button-container" style="padding-bottom: 20px; display:flex;">
            <button class="btn" id="basic" onclick="loadBasic(); preventDefault()" style="flex:1"> Basic Information </button>
            <button class="btn" id="adds" onclick="loadAddress(); preventDefault()" style="flex:1"> Address </button>
            <button class="btn" id="rev" onclick=" return validation()" style="flex:1"> Review </button>
        </div>

    <div id="content-container">

        <form action="form-handler.php" method="post" onsubmit="return validation()" id="myForm">
        <div style="padding-bottom: 20px;">
            <label for="Assessment-Type"> Title of Assessment applied for:</label><br>
            <input type="text" id="title">
            <input type="radio" id="Full-Qual" name="Assessment-Type" value="Full Qualification">  <label for="Assessment-Type"> Full Qualification</label> 
            <input type="radio" id="COC" name="Assessment-Type" value="COC"> <label for="Assessment-Type"> COC </label>
        </div>

        <div style="padding-bottom: 20px;">
            <label for="CLient-Type"> Client Type:</label><br>
            <input type="radio" id="Graduating" name="Client-Type" value="Graduating" > <label for="Client-Type"> TVET Graduating Student</label> 
            <input type="radio" id="Graduate" name="Client-Type" value="TVET Graduate"> <label for="Client-Type"> TVET Graduate </label>
            <input type="radio" id="Industry" name="Client-Type" value="Industry Worker"> <label for="Client-Type"> Industry Worker</label> 
            <input type="radio" id="OFW-clt" name="Client-Type" value="OFW"> <label for="Client-Type"> OFW </label>
        </div>

        <div style="padding-bottom: 20px;">
            <fieldset style="border-radius:5px">
                <legend> Basic Information</legend>
                <div style="display: flex; padding-top: 20px;">

                    <div style="flex:1">
                        <label for="lname"> <b>Last Name</b></label><br>
                        <input type="text" id="lname" name="lname">
                    </div>

                    <div style="flex:1">
                        <label for="fname"> <b> First Name </b></label><br>
                        <input type="text" id="fname" name="fname">
                    </div>

                    <div style="flex:1">
                        <label for="mname"> <b>Middle Name</b></label><br>
                        <input type="text" id="mname" name="mname">
                    </div>

                    <div style="flex:1">
                        <label for="exten"> <b> Extension</b></label><br>
                        <input type="text" id="exten" name="exten">
                    </div>
                </div>

                <div style="display: flex; padding-top: 20px;">

                    <div style="flex:1">
                        <label for="bday"> <b>Birthday</b></label><br>
                        <input type="date" id="bday" name="bday">
                    </div>

                    <div style="flex:1">
                        <label for="bplace"> <b>Birthplace</b></label><br>
                        <input type="text" id="bplace" name="birthplace">
                    </div>

                    <div style="flex:1">
                    <label for="lname"> <b>Sex</b></label><br>
                    <input type="radio" id="male" name="sex" value="male"> <label for="male"> Male</label>
                    <input type="radio" id="female" name="sex" value="female"> <label for="female"> Female</label>
                    </div>


                    <div style="flex:1">
                    <label for="lname"> <b>Civil Status</b></label><br>
                    <input type="radio" id="single" name="civilStatus" value="Single"> <label for="single"> Single </label>
                    <input type="radio" id="married" name="civilStatus" value="Married"> <label for="married"> Married</label>
                    <input type="radio" id="widow" name="civilStatus" value="Widow"> <label for="widow"> Widow/er</label>
                    <input type="radio" id="separated" name="civilStatus" value="Separated"> <label for="separated"> Separated </label>
                    </div>
                </div>

                <div style="display: flex; padding-top: 20px; padding-bottom: 20px;">

                    <div style="flex:1">
                        <label for="email"> <b>Email</b></label><br>
                        <input type="text" id="email" name="email">
                    </div>

                    <div style="flex:1">
                        <label for="contact"> <b>Contact No.</b></label><br>
                        <input type="number" id="contact" name="contact">
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
                <input type="radio" id="casual" name="employment_type" value="Casual"> <label for="casual"> Casual </label>
                <input type="radio" id="job-ord" name="employment_type" value=" Order"> <label for="job-ord"> Job Order </label>
                <input type="radio" id="proba" name="employment_type" value=" Probationary"> <label for="proba"> Probationary </label>
                <input type="radio" id="perma" name="employment_type" value="Permanent"> <label for="perma"> Permanent </label>
                <input type="radio" id="self-emp" name="employment_type" value="Self-Employed"> <label for="self-emp"> Self-Employed </label>
                <input type="radio" id="OFW-emp" name="employment_type" value=" OFW"> <label for="OFW-emp"> OFW </label>
                </div>

                <div style="display: flex; padding-top: 20px; padding-bottom: 20px;">

                <div id="experience-container">
                <div class="experience-container">
                    <label for="work-exp" style="padding-right: 10px;"><b>Work Experience</b></label>
                    <div style="display:inline; border: 1px solid black; width: 50px; height: 50px; background-color:lightgrey;" onclick="addExperience()">+</div><br>
                    <input type="text"id="company" placeholder="Company" name="company">
                    <input type="text" id="duration" placeholder="Duration" name="duration">
                    <div style="display:inline; border: 1px solid black; width: 50px; height: 50px; background-color:lightgrey;" onclick="removeExperience(this)">Remove</div>
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
                    <div style="display:inline; border: 1px solid black; width: 50px; height: 50px; background-color:lightgrey;" class="add-btn" onclick="addTeriary()">+</div><br>
                    <input type="text" id="terName" placeholder="Name" name="terName">
                    <input type="text" id="terAddrs" placeholder="Address" name="terAddrs">
                    <div style="display:inline; border: 1px solid black; width: 50px; height: 50px; background-color:lightgrey;"  class="remove-btn"  onclick="removeTeriary(this)">Remove</div>
                </div>

                <div id="secondary-container" style="padding-top: 20px;">
                    <label for="secondary"><b>Secondary</b></label>
                    <div style="display:inline; border: 1px solid black; width: 50px; height: 50px; background-color:lightgrey;"  onclick="addSecondary()">+</div><br>
                    <input type="text" id="serName" placeholder="Name" name="serName">
                    <input type="text" id="serAddrs" placeholder="Address" name="serAddrs">
                    <div style="display:inline; border: 1px solid black; width: 50px; height: 50px; background-color:lightgrey;"  class="remove-btn" onclick="removeSecondary()">Remove</div>
                </div>

                <div id="primary-container" style="padding-top: 20px; padding-bottom:20px;">
                    <label for="primary"><b>Primary</b></label>
                    <div style="display:inline; border: 1px solid black; width: 50px; height: 50px; background-color:lightgrey;"  onclick="addPrimary()">+</div><br>
                    <input type="text" id="priName" placeholder="Name" name="priName">
                    <input type="text" id="priAddrs" placeholder="Address" name="priAddrs">
                    <div style="display:inline; border: 1px solid black; width: 50px; height: 50px; background-color:lightgrey;"  class="remove-btn">Remove</div>
                </div>
                </div>
            </fieldset>
        </div>
    </div>
</form>
</div>
</div>

<script src="script.js"></script>
</body>
</html>