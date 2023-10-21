let Drone = {
    color: prompt("color"),
    company: prompt("company"),
    theft: prompt("theft"),
    charge: alert("charge 100%"),
    functionobject: {
        fly: () => {
            console.log("___ metr");
        },
        camera: () =>{
            console.log("___ px x ___ px"); 
        }
    },
    propellers: {
        FrontdRightPropeller: () =>{
            alert("Good")
        },
        FrontdLeftPropeller: () =>{
            alert("Good")
        },
        RearRightPropeller: () => {
            alert("Good")
        },
        RearLeftPropeller: () => {
            alert("Good")
        }
    }
}