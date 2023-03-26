
## how to use ?

#### env.sh
```text
BITBUCKET_USERNAME="abcdefg"
BITBUCKET_APP_PASSWORD="abcdefg1234567"
```

#### usage
```javascript
let {BITBUCKET_USERNAME, BITBUCKET_APP_PASSWORD} 
    = require('@vacantthinker/read_env_file').readEnvFile('env.sh');
```

#### output
```text
{
  BITBUCKET_USERNAME: 'abcdefg',
  BITBUCKET_APP_PASSWORD: 'abcdefg1234567'
}
```

---


## works

#### readEnvFile()
```javascript
/**
 * read env file , eg: env.sh xxx.env
 * 
 * @param filename path env file
 * @param logObj default: false
 * @returns {{}}
 */
function readEnvFile(filename, logObj = false) {}
```

## how to install ?
```shell
npm install @vacantthinker/read_env_file -D
```


