import axios from "axios";

const DateFunction = () => {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = today.getFullYear();
  today = mm + "." + dd + "." + yyyy;
  return today;
};

const StarsFiltering = (a, b) => {
  return b.stargazers_count - a.stargazers_count;
};

const getLangColorsMap = (opacity = "0.5") => {
  const langColorsMap = {
    Python: `rgba(53,114,165, ${opacity})`,
    JavaScript: `rgba(241,224,90, ${opacity})`,
    Java: `rgba(176,114,25, ${opacity})`,
    Vue: `rgba(44,62,80, ${opacity})`,
    Shell: `rgba(137,224,81, ${opacity})`,
    C: `rgba(85,85,85, ${opacity})`,
    "C++": `rgba(243,75,125, ${opacity})`,
    CSS: `rgba(86,61,124, ${opacity})`,
    HTML: `rgba(227,76,38, ${opacity})`,
    Lua: `rgba(0,0,128, ${opacity})`,
    "C#": `rgba(23,134,0, ${opacity})`,
    CoffeeScript: `rgba(36,71,118, ${opacity})`,
    TypeScript: `rgba(43,116,137, ${opacity})`,
    Crystal: `rgba(0,1,0, ${opacity})`,
    Ruby: `rgba(112,21,22, ${opacity})`,
    Assembly: `rgba(110,76,19, ${opacity})`,
    Go: `rgba(0,173,216, ${opacity})`,
    Dart: `rgba(0,180,171, ${opacity})`,
    Kotlin: `rgba(241,142,51, ${opacity})`,
    PHP: `rgba(79,93,149, ${opacity})`,
  };

  return langColorsMap;
};

const CalculateLang = (Repository) => {
  let languages = Repository.reduce((total, item) => {
    const { language } = item;
    if (!language) return total;
    if (!total[language]) {
      total[language] = { label: language, value: 1 };
    } else {
      total[language] = {
        ...total[language],
        value: total[language].value + 1,
      };
    }
    return total;
  }, {});
  // eslint-disable-next-line no-unused-vars
  languages = Object.values(languages).sort((a, b) => {
    return b.value - a.value;
  });

  const LanguageLabel = [];
  const LanguageValue = [];
  const LanguageColor = [];

  // eslint-disable-next-line array-callback-return
  languages.map((datas) => {
    LanguageLabel.push(datas.label);
    LanguageValue.push(datas.value);
  });
  // eslint-disable-next-line array-callback-return
  LanguageLabel.map((datas) => {
    LanguageColor.push(getLangColorsMap(1)[datas]);
  });

  return { LanguageLabel, LanguageValue, LanguageColor };
};

const GetRepos = async (Username, setState) => {

  await axios
    .get(`https://api.github.com/users/${Username}/repos`)
    .then((res) => {
      setState(res.data);
    })
};

const GetOrgs = async (Username, setState) => {

  await axios
    .get(`https://api.github.com/users/${Username}/orgs`)
    .then((res) => {
      setState(res.data);
    })
};

const GetUser = async (Username, setState) => {

  await axios.get(`https://api.github.com/users/${Username}`).then((res) => {
    setState(res.data);
  }).catch(err => {console.error(err)})
};

const RandomRepository = (array) => {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * 5);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
};

export {
  DateFunction,
  StarsFiltering,
  getLangColorsMap,
  CalculateLang,
  GetRepos,
  GetOrgs,
  GetUser,
  RandomRepository,
};
