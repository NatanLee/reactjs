class Human {
	constructor(name, age, dateOfBirth){
		this.name = name;
		this.age = age;
		this.dateOfBirth = dateOfBirth;
	}
	
	displayInfo() {
		return `Имя: ${this.name}, возвраст: ${this.age}`;
	} 
}

class Employee extends Human {
	//constructor(human){
	//const{name, age, dateOfBirth, salary, department} = human;
	constructor(name, age, dateOfBirth, salary, department){
		super(name, age, dateOfBirth);
		this.salary = salary;
		this.department = department;
	}
	
	displayInfo(){
		return `${super.displayInfo()}, зарплата: ${this.salary}, отдел: ${this.department}`;
	}
}

class Manager extends Employee{
	constructor(name, age, dateOfBirth, salary, department){
		super(name, age, dateOfBirth, salary, department);
		this.developers = [];
	}
	
	addDeveloper(developer){
		this.developers.push(developer);
	}
	
	removeDeveloper(developer){
		const x = this.developers.indexOf(developer);
		if (x !== -1) {
			this.developers.splice(x, 1);
		};
	}
	
	displayDevelopers(){
		const listDevelopers = this.developers.map(element => element.name);
		return `У менеджера ${this.name} команда из разработчиков: ${listDevelopers}`;
	}
}

class Developer extends Employee {
	constructor(name, age, dateOfBirth, salary, department, manager){
		super(name, age, dateOfBirth, salary, department);
		this.manager = manager;
	}
}















//let a = new Human('Vasil', 12, '12 now 2011');
//console.log(a);