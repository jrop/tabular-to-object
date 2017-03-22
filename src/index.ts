function toObjects(columnNames, rows?) {
	if (typeof rows === 'undefined') {
		rows = columnNames.slice(1)
		columnNames = columnNames[0]
	}
	return rows.map(row =>
		Object.assign({}, ...row.map((column, i) =>
			({[columnNames[i]]: column}))))
}
function toRows(objects: any[]): any[] {
	const columnNames = Object.keys(objects[0])
	return [columnNames, ...objects.map(object =>
		columnNames.map(colName => object[colName]))]
}
export {toObjects, toRows}
