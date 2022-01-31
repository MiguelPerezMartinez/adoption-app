const { auth } = require('../services/firebase')
const url = require('url')

async function getAll(req, res) {
  const pets = auth.collection('Pets')
  const docs = await pets.get()
  if (!docs) {
    console.log('No such documents')
  } else {
    let parsedResult = []

    docs.forEach((doc) => {
      parsedResult.push(doc.data())
    })

    return res.status(200).send({
      message: 'Pets find',
      data: {
        pets: parsedResult,
      },
    })
  }
}

async function getPet(req, res) {
  const pets = auth.collection('Pets')
  const pet = await pets.where('id', '==', req.body.id).get()
  const petData = {
    id: pet.docs[0].get('id'),
    name: pet.docs[0].get('name'),
    description: pet.docs[0].get('description'),
    photo: pet.docs[0].get('photo'),
    age: pet.docs[0].get('age'),
    adopted: pet.docs[0].get('adopted'),
  }
  return res.status(200).send({
    message: 'Pet find',
    data: {
      pet: petData,
    },
  })
}

async function getPetByName(req, res) {
  const { name } = req.body
  const capitalisedName = parseFirstCapitalLetter(name)
  const pets = auth.collection('Pets')
  const petsMatch = await pets
    .where('name', '>=', capitalisedName)
    .where('name', '<=', capitalisedName + '\uf8ff')
    .get()
  let petsList = []

  petsMatch.docs.forEach((doc) => {
    petsList.push(doc.data())
  })

  return res.status(200).send({
    message: 'Pet find',
    data: {
      petsList: petsList,
    },
  })

  function parseFirstCapitalLetter(name) {
    const arr = name.split(' ')
    for (var i = 0; i < arr.length; i++) {
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1)
    }
    const capitalisedName = arr.join(' ')
    return capitalisedName
  }
}

module.exports = {
  getAll: getAll,
  getPet: getPet,
  getPetByName: getPetByName,
}
