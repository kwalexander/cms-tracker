const inquirer = require('inquirer')
const consoleTable = require('console.table')


// SETUP kickoff prompt asking user what they want to do
// 
// view all departments -- dept names, dept ids
// view all roles -- job title, role id, dept belongs to, salary
// view all employees -- employee id, first name, last name, job title, dept, salary, manager
// add a department -- name
// add a role -- name, salary, dept
// add an employee -- first name, last name, role, manager
// update an employee role - select employee, new role

const startPrompt = () => {
    inquirer.prompt({
        type: 'list',
        name: 'startPrompt',
        message: 'What would you like to do?',
        choices: [
            'View all departments',
            'View all roles',
            'View all employees',
            'Add a department',
            'Add a role',
            'Add an employee',
            'Update an employee role',
            'Exit'
        ]
    })
        .then((answer) => {
            switch (answer.startPrompt) {
                case 'View all departments':
                    viewAllDepartments();
                    break;
                case 'View all roles':
                    viewAllRoles();
                    break;
                case 'View all employees':
                    viewAllEmployees();
                    break;
                case 'Add a department':
                    addDepartment();
                    break;
                case 'Add a role':
                    addRole();
                    break;
                case 'Add an employee':
                    addEmployee();
                    break;
                case 'Update an employee role':
                    updateEmployeeRole();
                    break;
                case 'Exit':
                    connection.end();
                    break;
            }
        })
};

// "view all departments"
// function to get departments info
const viewAllDepartments = () => {
    // SQL query to get all departments
}

// "view all roles"
// function to get roles info
const viewAllRoles = () => {
    // SQL query to get all roles
}

// "view all employees"
// function to get employee info
const viewAllEmployees = () => {
    // SQL query to get all employees
}

// "add a department"
// function to add a new dept
const addDepartment = () => {
    inquirer.prompt({
        type: 'input',
        name: 'addDepartment',
        message: 'What department would you like to add?',
        validate: deptInput => {
            if (deptInput) {
                return true;
            } else {
                console.log('You must enter a department name.');
                return false;
            }
        }
    })
        .then((answer) => {
            // SQL query to add new department
        })
}

// "add a role"
// function to add a new role
const addRole = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'addRole',
            message: 'What role would you like to add?',
            validate: roleInput => {
                if (roleInput) {
                    return true;
                } else {
                    console.log('You must enter a role.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'addSalary',
            message: 'What is the salary for this role?',
            validate: salaryInput => {
                if (salaryInput) {
                    return true;
                } else {
                    console.log('You must enter a salary.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'addDept',
            message: 'What department does this role belong to?',
            validate: deptInput => {
                if (deptInput) {
                    return true;
                } else {
                    console.log('You must enter a department.');
                    return false;
                }
            }
        }
    ])
        .then((answer) => {
            // SQL query to add new role
        })
}

// "add an employee"
// function to add a new employee
const addEmployee = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'addFirstName',
            message: 'What is the first name of the employee you would like to add?',
            validate: firstNameInput => {
                if (firstNameInput) {
                    return true;
                } else {
                    console.log('You must enter a first name.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'addLastName',
            message: 'What is the last name of the employee you would like to add?',
            validate: lastNameInput => {
                if (lastNameInput) {
                    return true;
                } else {
                    console.log('You must enter a last name.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'addRole',
            message: 'What is the role of the employee you would like to add?',
            validate: roleInput => {
                if (roleInput) {
                    return true;
                } else {
                    console.log('You must enter a role.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'addManager',
            message: 'Who is the manager of the employee you would like to add?',
            validate: managerInput => {
                if (managerInput) {
                    return true;
                } else {
                    console.log('You must enter a manager.');
                    return false;
                }
            }
        }
    ])
        .then((answer) => {
            // SQL query to add new employee
        })
}

// "update an employee role"
// function to add a new role

const updateEmployeeRole = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'updateEmployee',
            message: 'Which employee would you like to update?',
            validate: employeeInput => {
                if (employeeInput) {
                    return true;
                } else {
                    console.log('You must enter an employee.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'updateRole',
            message: 'What is the new role for this employee?',
            validate: roleInput => {
                if (roleInput) {
                    return true;
                } else {
                    console.log('You must enter a role.');
                    return false;
                }
            }
        }
    ])
        .then((answer) => {
            // SQL query to update employee role
        })
}

startPrompt();