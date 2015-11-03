function validateForm() {
    var frstNm = document.forms["ss-form"]["entry.1206961149"].value;
    var eMail = document.forms["ss-form"]["entry.661977814"].value;
    var activity = document.forms["ss-form"]["entry.453150025"].value;
    var rules = $("#group_743651200_1").prop('checked');
    //For Email Validation
    var atpos = eMail.indexOf("@");
    var dotpos = eMail.lastIndexOf(".");

    //First Name
    if (frstNm == null || frstNm == "") {
        alertify.error("First name must be filled out!");
        return false;
    }
    //Email
    else if (atpos< 1 || dotpos<atpos+2 || dotpos+2>=eMail.length) {
        alertify.error("Please enter a valid email address.");
        return false;
    }
    //Bday
    else if ( activity.length == 0) {
        alertify.error("Please enter a an activity.");
        return false;
    } else if(!rules){
        alertify.error("You must agree to the rules.");
        return false;
    }
    else{
        submitted=true;
    }
}