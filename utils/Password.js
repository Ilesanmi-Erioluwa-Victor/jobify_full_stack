import bcrypt from "bcryptjs" 

export const hashedPassword = async(password) => {
    const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);
}
