package main

// JSONCamelCase converts a snake_case identifier to a camelCase identifier,
// according to the protobuf JSON specification.
func JSONCamelCase(s string) string {
	var b []byte
	var wasUnderscore bool
	for i := 0; i < len(s); i++ { // proto identifiers are always ASCII
		c := s[i]
		if c != '_' {
			if wasUnderscore && isASCIILower(c) {
				c -= 'a' - 'A' // convert to uppercase
			}
			b = append(b, c)
		}
		wasUnderscore = c == '_'
	}
	return string(b)
}

// JSONSnakeCase converts a camelCase identifier to a snake_case identifier,
// according to the protobuf JSON specification.
func JSONSnakeCase(s string) string {
	var b []byte
	for i := 0; i < len(s); i++ { // proto identifiers are always ASCII
		c := s[i]
		if isASCIIUpper(c) {
			b = append(b, '_')
			c += 'a' - 'A' // convert to lowercase
		}
		b = append(b, c)
	}
	return string(b)
}

func isASCIILower(c byte) bool {
	return 'a' <= c && c <= 'z'
}
func isASCIIUpper(c byte) bool {
	return 'A' <= c && c <= 'Z'
}

