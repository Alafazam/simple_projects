import cStringIO, tokenize
import sys

def main(source):
    src = cStringIO.StringIO(source).readline
    src = tokenize.generate_tokens(src)
    return parse_it(src.next, src.next())

def parse_it(next, token):
    if token[1] == "(":
        out = []
        token = next()
        while token[1] != ")":
            out.append(parse_it(next, token))
            token = next()
            if token[1] == ",":
                token = next()
        return tuple(out)
    elif token[0] is tokenize.STRING:
        return token[1][1:-1].decode("string-escape")
    elif token[0] is tokenize.NUMBER:
        try:
            return int(token[1], 0)
        except ValueError:
            return float(token[1])
    raise SyntaxError("invalid expression (%s)" % token[1])


if __name__ == '__main__':
    main(sys.argv[1])


# Alaf azam khan
# 552/12
# 7th sem. IT

# use it as
# python Rparser.py hellostring 
# python Rparser.py (asdasd)) 
# python Rparser.py a)sd(a) 