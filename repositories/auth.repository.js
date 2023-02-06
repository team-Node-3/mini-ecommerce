
class AuthRepository {
  constructor(Model) {
    // console.log('belowline')
    // console.log(Model)
    this.Model = Model;
  }

  findBynickName = async ( nickname ) => {
    // findAll이 undefined
    const user = await this.Model.findAll({ 
      where: { nickname },
    });
    return user;
  }

  createUser = async ( email, hashed, name, nickname, phone, address, admin) => {
    const userData = await this.Model.create({
      email,
      password: hashed,
      name,
      nickname,
      phone,
      address,
      admin
    })
    return userData;
  }
}

module.exports = AuthRepository;