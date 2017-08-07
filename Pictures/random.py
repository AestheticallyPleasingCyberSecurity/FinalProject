from hashlib import *
pw = raw_input.sha256('Hello')
hex_dig = pw.hexdigest()
print(hex_dig)
