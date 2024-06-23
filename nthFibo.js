function nthFibo(n) {
	if (n <= 0) {
		throw new Error('n должно быть больше или равно 1')
	}
	if (n === 1) {
		return 0
	}
	if (n === 2 || n === 3) {
		return 1
	}
	return nthFibo(n - 1) + nthFibo(n - 2)
}

console.log(nthFibo(4)) // 2
console.log(nthFibo(1)) // 0
console.log(nthFibo(2)) // 1
console.log(nthFibo(10)) // 34
console.log(nthFibo(0)) // error
