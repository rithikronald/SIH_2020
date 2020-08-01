import React, { useState, createContext, useEffect } from "react";
// import Axios from "axios";
const url = require("../assets/constants").url;
const axios = require("axios");
export const GlobalContext = createContext();

export const GlobalState = (props) => {
  const [finalReport, setFinalReport] = useState([]);
  const [finalReview, setFinalReview] = useState([]);
  const [schoolData, SetSchoolData] = useState([]);
  const [allquestionsList, setallquestionsList] = useState([]);

  function postreport(visitId) {
    axios
      .post(url + "postreport/" + visitId, {
        reportData: finalReport,
        remarks: finalReview,
      })
      .then((d) => {
        console.log(d);
        setFinalReport([]);
        setFinalReview([]);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  const categoryFilled = finalReport.map(({ categoryName }) => categoryName);

  const [categories, setCategories] = useState([]);

  const [allFilled, setAllFilled] = useState(false);

  useEffect(() => {
    setAllFilled(categoryFilled.length === categories.length);
  }, [categoryFilled]);

  const isCategoryFilled = (category) => {
    return categoryFilled.includes(category);
  };
  return (
    <GlobalContext.Provider
      value={{
        finalReport,
        setFinalReport,
        finalReview,
        setFinalReview,
        isCategoryFilled,
        categories,
        setCategories,
        allFilled,
        postreport,
        allquestionsList,
        setallquestionsList,
        schoolData,
        SetSchoolData,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
