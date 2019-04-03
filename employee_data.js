const employees = [
	{id: 100, name: 'Alan', managerId: 150},
	{id: 220, name: 'Martin', managerId: 100},
	{id: 150, name: 'Jamie', managerId: null},
	{id: 275, name: 'Alex', managerId: 100},
	{id: 400, name: 'Steve', managerId: 150},
	{id: 190, name: 'David', managerId: 400}
]

const isEmpty = obj => {
	for(var key in obj) {
		if(obj.hasOwnProperty(key))
		return false
	}
	return true
}

// recursive iteration over the employees array
const treeStructure = (employees, manager) => {
	let treeNode = {}
	employees
		.filter(employee => employee.managerId === manager)
		.forEach(employee =>
			treeNode[employee.name] = treeStructure(employees, employee.id)
		)
	treeNode = isEmpty(treeNode) ? null : treeNode
	return treeNode
}

console.log(JSON.stringify(treeStructure(employees, null), null, 4))
