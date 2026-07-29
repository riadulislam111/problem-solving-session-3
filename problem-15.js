// Input: objects
// Output: obj - name or netSalary
// Returns: obj




function generateSalarySlip(employee){

if(typeof employee.basicSalary !== "number" || typeof employee.bonus !== "number" || typeof employee.tax !== "number"){
    return "Invalid"
}

let employeesName = employee.name;
let netSalary = (employee.basicSalary + employee.bonus) - employee.tax;


return {
    name: employeesName,
    netSalary: netSalary 
}
}

console.log(generateSalarySlip({ name:'Karim', basicSalary:30000, bonus:5000, tax:2000 }));