const { auth } = require('../services/firebase')

async function registerNewUser(req, res) {
  console.log(req.body)
  const users = auth.collection('Users')
  const userExist = await users.where('email', '==', req.body.email).get()
  console.log(userExist.empty)
  if (userExist.empty) {
    const docs = await users.doc().set(req.body)

    if (!docs) {
      return res.status(300).send({
        message: 'Error manual',
      })
    } else {
      return res.status(200).send({
        message: 'User created',
      })
    }
  } else {
    return res.status(200).send({
      message: 'User already exist',
    })
  }
}

async function getFavorites(req, res) {
  const users = auth.collection('Users')
  const user = await users.where('email', '==', req.body.email).get()
  const favList = user.docs[0].get('favorites')
  return res.status(200).send({
    favList: favList,
  })
}

async function handleFavorite(req, res) {
  const petId = req.body.petId
  const users = auth.collection('Users')
  const user = await users.where('email', '==', req.body.email).get()
  var favList = user.docs[0].get('favorites')
  if (favList.includes(petId)) {
    favList = removeItemOnce(favList, petId)
  } else {
    favList.push(petId)
  }

  console.log('-----> ID: ' + user.docs[0].id)

  users.doc(user.docs[0].id).update({ favorites: favList })

  function removeItemOnce(arr, value) {
    var index = arr.indexOf(value)
    if (index > -1) {
      arr.splice(index, 1)
    }
    return arr
  }
}

module.exports = {
  registerNewUser: registerNewUser,
  getFavorites: getFavorites,
  handleFavorite: handleFavorite,
}
