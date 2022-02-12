const getHash = bit => {
  let bitZero = "";

  for (let i = 0; i < bit; i++) bitZero += "0";

  return (bitZero + Math.floor(Math.random() * +`0x1${bitZero}`).toString(16)).slice(-bit);
};

export default getHash;
