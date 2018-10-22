import * as bcrypt from "bcryptjs";
const salt: string = bcrypt.genSaltSync(10);

export const encryptPassword = (plainPassword: string) => {
  return bcrypt.hashSync(plainPassword, salt);
};

export const comparePassword = (plainPassword: string, passwordDigest: string) => {
  return bcrypt.compareSync(plainPassword, passwordDigest);
};
