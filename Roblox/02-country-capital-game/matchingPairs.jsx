/* Original: /Users/roger/Sites/tech-screen-solutions/oleria/matchingPairs.jsx | https://github.com/rogerprz/tech-screen-solutions/blob/main/oleria/matchingPairs.jsx */
import React, { useEffect, useState } from "react";
// We can click country or the capital
// highlighted blue, then if the other is correct then we remove it or wrong then both highlight red.

export default function CountryCapitalGame({ data }) {
  // Use console.log() for debugging
  const [countriesAndCities, setCountriesAndCities] = useState();
  const [cities, setCities] = useState();
  const [fullList, setFullList] = useState([]);
  const [selectedPair, setSelectedPair] = useState([]);
  useEffect(() => {
    // need to randomize
    const countryCityArr = Object.entries(data);
    const countriesAndCities = [];
    const fullList = {};
    countryCityArr.forEach((values, index) => {
      const [country, city] = values;
      fullList[city] = {
        pair: country,
        color: "grey",
        isVisible: true,
        isSelected: false,
      };
      fullList[country] = {
        pair: city,
        color: "grey",
        isVisible: true,
      };
      countriesAndCities.push(country, city);
    });
    setCities(cities);
    setCountriesAndCities(countriesAndCities);
    setFullList(fullList);
  }, []);

  console.log("D:", fullList);

  const handleOnClick = (value) => {
    const updateList = fullList;

    if (selectedPair.length === 0) {
      setSelectedPair([value]);
      updateList[value].color = "#0000ff";
      updateList[value].isSelected = true;
    } else if (selectedPair.length === 1) {
      // HERE: Azerbaijan Azerbaijan true
      if (updateList[value].pair === selectedPair[0]) {
        console.log(
          "HERE:",
          updateList[value].pair,
          selectedPair[0],
          updateList[value].pair === selectedPair[0],
        );
        updateList[value].isVisible = false;
        updateList[selectedPair[0]].isVisible = false;
      } else {
        updateList[value].color = "red";
        updateList[selectedPair[0]].color = "red";
        setSelectedPair((prevState) => [...prevState, value]);
      }
    } else if (selectedPair.length === 2) {
      updateList[selectedPair[0]].color = "grey";
      updateList[selectedPair[1]].color = "grey";
      updateList[selectedPair[0]].isVisible = true;
      updateList[selectedPair[1]].isVisible = true;
      setSelectedPair([value]);
      updateList[value].color = "#0000ff";
      updateList[value].isSelected = true;
    }
    setFullList((prevState) => {
      return { ...prevState, updateList };
    });
    console.log("here", value);
  };

  useEffect(() => {});
  console.log("FULL:", fullList);
  return (
    <div>
      {countriesAndCities &&
        countriesAndCities.map((value, index) => {
          console.log("F:", fullList[value].isVisible);
          return fullList[value].isVisible ? (
            <button
              onClick={() => handleOnClick(value)}
              style={{ backgroundColor: fullList[value].color }}
            >
              {value}
            </button>
          ) : null;
        })}
    </div>
  );
}
