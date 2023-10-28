export function getAcronyme(fullname: string)
{
	const [first, second] = fullname.split(' ')
	let acronyme = '';
	if (first) {
		acronyme += first[0].toLocaleUpperCase()
	}

	if (second) {
		acronyme += second[0].toLocaleUpperCase()
	}

	return acronyme
}

export function substring(string: string, length: number)
{
  return string.length < length ? string : string.substring(0, length) + '...'
}
