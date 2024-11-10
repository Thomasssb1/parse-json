# JSON Parser

Parses json using a regular expression approach, where each item in the JSON is returned as a `structure`, `key`, or `value` type within the JsonType class.
For example,
```
{
  "name": "John Doe",
  "age": 30
}
```
would return
```js
[
  JsonType { value: '{', type: 'structure' },
  JsonType { value: '"', type: 'structure' },
  JsonType { value: 'name', type: 'key' },
  JsonType { value: '"', type: 'structure' },
  JsonType { value: ':', type: 'structure' },
  JsonType { value: '"', type: 'structure' },
  JsonType { value: 'John Doe', type: 'value' },
  JsonType { value: '"', type: 'structure' },
  JsonType { value: '', type: 'value' },
  JsonType { value: ',', type: 'structure' },
  JsonType { value: '"', type: 'structure' },
  JsonType { value: 'age', type: 'key' },
  JsonType { value: '"', type: 'structure' },
  JsonType { value: ':', type: 'structure' },
  JsonType { value: '30', type: 'value' },
  JsonType { value: '}', type: 'structure' }
]
```
