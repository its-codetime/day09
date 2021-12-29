const getAllCountries = async () => {
  // fetches all countries from the API
  try {
    const response = await fetch("https://restcountries.com/v3.1/all");
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

const getCountriesFromAsia = (countries) => {
  const asiaCountries = countries.filter(
    (country) => country.region === "Asia"
  );
  console.log(`asian countries :`);
  console.log(asiaCountries);
  return asiaCountries;
};

const popLessThan2L = (countries) => {
  const lessThan2L = countries.filter((country) => country.population < 200000);
  console.log(`countries with population less than 2L :`);
  console.log(lessThan2L);
  return lessThan2L;
};

const printCustomDetails = (countries) => {
  // name, capital, flag
  const countryDetails = [];
  countries.forEach((country) => {
    countryDetails.push({
      name: country.name,
      capital: country.capital || "capital not found",
      flag: country.flag || "flag not found",
    });
  });
  console.log(`country details(name, capital and flag):`);
  console.log(countryDetails);
  return countryDetails;
};

const getTotalPop = (countries) => {
  const totalPop = countries.reduce((acc, el) => {
    return acc + el.population;
  }, 0);
  console.log(`total population of all countries : ${totalPop}`);
  return totalPop;
};

const getCountriesUSD = (countries) => {
  const countriesUSD = countries.filter((country) => {
    return country.currencies?.hasOwnProperty(`USD`);
  });
  console.log(`countries with USD currency :`);
  console.log(countriesUSD);
  return countriesUSD;
};

const processData = (countries) => {
  // the values are also returned from these functions just in case we would need them here.
  // we can assign them to a variables and use them as the functions return those values.
  getCountriesFromAsia(countries);
  popLessThan2L(countries);
  printCustomDetails(countries);
  getTotalPop(countries);
  getCountriesUSD(countries);
};

getAllCountries()
  .then(processData)
  .catch((error) => {
    console.log(error);
  });
