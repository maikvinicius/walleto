class Configs {
  get Env () {
    return process.env.NODE_ENV || 'DEV'
  }

  get Port () {
    return process.env.PORT || '3000'
  }

  get DatabaseUrl () {
    return process.env.DB_URL || 'mongodb+srv://deploy:walletodb@cluster0-9a9zw.mongodb.net/test?retryWrites=true&w=majority'
  }

  get DatabaseName () {
    return process.env.DB_NAME || 'walleto'
  }

  get UserCollection () {
    return process.env.DB_GAME_COLLECTION || 'users'
  }

  get BillsCollection () {
    return process.env.DB_GAME_COLLECTION || 'bills'
  }

  get PaymentsCollection () {
    return process.env.DB_GAME_COLLECTION || 'payments'
  }
}
export default new Configs()
