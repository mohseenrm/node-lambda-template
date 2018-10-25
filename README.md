# Node Lambda Template

1. store credentials under `~/.aws/credentials`

Sample:
```
[default]
aws_access_key_id = ACCESS_KEY
aws_secret_access_key = SECRET_KEY

[profile-name]
aws_access_key_id = ACCESS_KEY
aws_secret_access_key = SECRET_KEY
```

2. export profile name for deployment
   
```
export AWS_PROFILE=profile-name
```
