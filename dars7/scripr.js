
for (let i = 1; i <= 4; i++){
    switch (i) {
        case 1:
            let quetion = +prompt("1+1=?")
            switch (quetion) {
                case 2:
                    alert("true")
                    break;
                default: alert("false");
                    i--;
                    break;
            }
            break;
}
switch (i) {
    case 2:
        let quetion2 = +prompt("1+3=?")
        switch (quetion2) {
            case 4:
                alert("true")
                break;
            default: alert("false");
                i--;
                break;
        }
        break;
}
switch (i) {
    case 3:
        let quetion3 = +prompt("225/25=?")
        switch (quetion3) {
            case 9:
                alert("true")
                break;
            default: alert("false");
                i--;
                break;
        }
        break;
}
switch (i) {
    case 4:
        let quetion4 = +prompt("999999*999999=?")
        switch (quetion4) {
            case 999998000001:
                alert("true")
                break;
            default: alert("false");
                i--;
                break;
        }
        break;
}
}
