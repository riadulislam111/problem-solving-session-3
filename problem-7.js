// Input: a objects
// Output: objects in name, total , average, grade
// Returns: result


 function generateReportCard(student){


    if(typeof student !== "object" || typeof student.bangla !== "number" || typeof student.english !== "number" || typeof student.math !== "number"){
        return "Invalid"
    }

        let total = student.bangla + student.english + student.math;
        let average = total / 3;
        
    

    let grade = "";
if(average > 90){
     grade="A+";
}else if(average > 80){
     grade="A";
}else if(average > 70){
     grade="B";
}else{
     grade="F";
}

return {
    name:student.name, total, average, grade
};
 }

 console.log(generateReportCard({ name:'Ayan', bangla:78, english:85, math:92 }));