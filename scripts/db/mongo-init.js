db = db.getSiblingDB('projects')

db.log.insertOne({message: 'new db created'})

db.createUser(
  {
    user: 'machineapi_user',
    pwd: '1980',
    roles: [
      {role: 'readWrite', db: 'projects'}
    ]
  })
