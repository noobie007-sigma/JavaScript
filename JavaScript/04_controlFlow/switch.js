const month = 3
switch(month){
    case 1: console.log("Jan");
    break;
    case 2: console.log("Feb");
    break;
    case 3: console.log("Mar");
    break;
    case 4: console.log("Apr");
    break;
    case 5: console.log("May");
    break;
    case 6: console.log("Jun");
    break;
    case 7: console.log("Jul");
    break;
    case 8: console.log("Aug");
    break;
    case 9: console.log("Sept");
    break;
    case 10: console.log("Oct");
    break;
    case 11: console.log("Nov");
    break;
    case 12: console.log("Dec");
    break;
    
    
    
    default: console.log("Invalid month number");
}

//If there were no break, then let's say after mth case match, all rest of the cases would get executed, except the default case. Hence putting break statement is necessary after each case.