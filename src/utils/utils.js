const DateFunction = () => {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = today.getFullYear();
  today = dd + "." + mm + "." + yyyy;
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
export { DateFunction, StarsFiltering, getLangColorsMap };
