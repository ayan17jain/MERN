const firstNameChange = (e) => {
    // console.log(e);
    //console.log(e.target.value);

    const val = e.target.value;
    if (val.length > 3) {
        console.log("correct");
    }
}

// event delegation in javascript HOMEWORK


function submitForm(e) {
    e.preventDefault();
    const t = e.target
    const res = {
        hobbies: [],
    };
    for (let i = 0; i < t.length; i++) {
        // console.log(t[i].type  ,t[i].value);
        const ty = t[i].type;

        //console.log(nm,ty, vy);
        //res[nm]=vy;
        //    if(ty=='checkbox'){
        //    console.log(t[i].checked)
        //    }

        if (ty != 'submit') {
            const vy = t[i].value;
            const nm = t[i].name;

            if (ty == 'checkbox' && t[i].checked) {
                res.hobbies.push(vy);
            }
            if (ty != 'checkbox') {
                res[nm] = vy;
            }

        }

    }
    console.log(res);
}

