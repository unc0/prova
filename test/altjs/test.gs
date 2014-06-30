let test = require './'

test 'assert object', #(t)
  t.plan 4
  t.equal 3.14, 3.14
  t.ok true
  t.not-ok false
  t.deep-equal [3, 1, 4], [3, 1, 4]
