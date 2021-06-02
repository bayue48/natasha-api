convertInt = (num) => {
  let int = num % 3600;
  let jam = num / 3600;
  let menit = int / 60;
  let detik = int % 60;
  return console.log(
    Math.floor(jam) +
      " jam " +
      Math.floor(menit) +
      " menit " +
      Math.floor(detik) +
      " detik "
  );
};

convertInt(20000);
