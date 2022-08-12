interface IReg {
  email: RegExp;
  password: RegExp;
}

const reg: IReg = {
  email:
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/,
  password: /^(?=.*[A-Za-z])[A-Za-z\d$@$!%*#?&]{8,}$/,
};

export default reg;
