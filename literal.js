var tag = function(strings, ...values){
    //console.log(values);
    if(values[0] > 14){
        values[1] = "awake";
    }
    else{
        values[1] = "asleep";
    }

    return `${strings[0]}${values[0]}${strings[1]}${values[1]}`;
};

var string = tag`Its ${new Date().getHours()} I am ${""}`;
console.log(string);
