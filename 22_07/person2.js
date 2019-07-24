function clicked() {
    alert('clicked!!');
}

function createPerson(byClass = true) {
    let name = document.getElementById("nameTxt").value,
        age = document.getElementById("age").value,
        password = document.getElementById("pass").value;

    let vehicle;
    if (document.getElementsByName("bike")[0].checked) {
        vehicle = document.getElementsByName("bike")[0].value;
    } else {
        vehicle = document.getElementsByName("car")[0].selectedOptions[0].innerHTML;
    }

    let gender;
    document.getElementsByName("gender").forEach(rb => {
        if (rb.checked == true)
            gender = rb.value;
    });

    let p;
    if (byClass) {
        p = new cPerson(name, age, password, gender, vehicle);
    } else {
        p = new fPerson(name, age, password, gender, vehicle);
    }
    console.log(p.toString());
    return p;
}