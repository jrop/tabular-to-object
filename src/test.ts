import assert = require('assert')
import {toObjects, toRows} from './index'

//
// toObjects
//
assert.deepEqual(toObjects([], []), [])
assert.deepEqual(toObjects(['x', 'y'], []), {})
assert.deepEqual(toObjects(['x', 'y'], [
	[1, 2],
	[3, 4],
]), [
	{x: 1, y: 2},
	{x: 3, y: 4},
])
assert.deepEqual(toObjects([
	['x', 'y'],
	[1, 2],
	[3, 4],
]), [
	{x: 1, y: 2},
	{x: 3, y: 4},
])

//
// toRows
//
assert.deepEqual(toRows([
	{x: 1, y: 2},
	{x: 3, y: 4},
]), [
	['x', 'y'],
	[1, 2],
	[3, 4],
])
console.log('All tests passed')
