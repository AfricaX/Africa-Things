<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Form Handler</title>
</head>
<body>
<h1> Form Handler </h1>
    <hr>
    
    <fieldset style="width:75%; margin:auto;">
        <legend> Data Sent: </legend>
        <?php
        
            $assess = $_POST["Assessment-Type"];
            $client = $_POST["Client-Type"];

            $fname = $_POST["fname"];
            $lname = $_POST["lname"];
            $mname = $_POST["mname"];

            $exten = $_POST["exten"];
            $bday = $_POST["bday"];
            $birthplace = $_POST["birthplace"];

            $sex = $_POST["sex"];
            $civilStatus = $_POST["civilStatus"];
            $email = $_POST["email"];

            $contact = $_POST["contact"];
            $Employment = $_POST["employment_type"];
            $company = $_POST["company"];

            $duration = $_POST["duration"];
            $terName = $_POST["terName"];
            $terAddrs = $_POST["terAddrs"];

            $serName = $_POST["serName"];
            $serAddrs = $_POST["serAddrs"];
            $priAddrs = $_POST["priAddrs"];
            $priName = $_POST["priName"];

            echo"
             <div style='margin: auto; '>
                <div >
                    <h1> Assessment Type: $assess</h1>
                    <h1> Client Type: $client</h1>
                </div>

                <div  style='display:flex'>

                    <h1 style='flex:1'> First Name: $fname</h1>

                    <h1 style='flex:1'> Last Name: $lname</h1>

                    <h1 style='flex:1'> Middle Name: $mname</h1>
                    
                    <h1 style='flex:1'> Extension: $exten</h1>
                </div>

                <div  style='display:flex'>
                    <h1 style='flex:1'> Birthday: $bday</h1>
                    <h1 style='flex:1'> Birthplace: $birthplace</h1>
                    <h1 style='flex:1'> Sex: $sex</h1>
                    <h1 style='flex:1'> Civil Status: $civilStatus</h1>
                </div>

                <div  style='display:flex'>
                    <h1 style='flex:1'> Email: $email</h1>
                    <h1 style='flex:1'> Contact No.: $contact</h1>
                   
                </div>

                <div style='display:flex'>
                    <h1 style='flex:1'> Employment Status: $Employment</h1>
                    <h1 style='flex:1'> Company: $company</h1>
                    <h1 style='flex:1'> Work Duration: $duration</h1>
                </div>

                <div  style='display:flex'>
                    <h1 style='flex:1'> Teriary School Name: $terName</h1>
                    <h1 style='flex:1'> Teriary School Address: $terAddrs</h1>
                    <h1 style='flex:1'> Secondary School Name: $serName</h1>
                    <h1 style='flex:1'> Secondary School Address: $serAddrs</h1>
                    <h1 style='flex:1'> Primary School Name: $priName</h1>
                    <h1 style='flex:1'> Primary School Address: $priAddrs</h1>
                </div>
            </div>
            ";
        ?>
    </fieldset>
    <a href="index.php"> Go Back to Home Page</a>
   
</body>
</html>