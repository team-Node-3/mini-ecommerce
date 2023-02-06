
class AuthRepository {
  constructor(Model) {
    // console.log('belowline')
    // console.log(Model)
    this.Model = Model;
  }

  findById = async ( id) => {
    const user = await this.Model.findAll({ 
      where: { id },
    });
    return user;
  }

  findBynickName = async ( nickName ) => {
    // findAll이 undefined
    const user = await this.Model.findAll({ 
      where: { nickName },
    });
    return user;
  }

  createUser = async ( email, hashed, nickName, PhoneNumber, address, admin) => {
    const userData = await this.Model.create({
      email,
      pw: hashed,
      nickName,
      PhoneNumber,
      address,
      admin
    })
    return userData;
  }
}

module.exports = AuthRepository;