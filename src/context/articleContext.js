import React, { createContext, useReducer } from "react";
import { reducer } from "./reducer";
export const ArticleContext = createContext();

const ArticleProvider = ({ children }) => {
  const [articles, dispatch] = useReducer(reducer, [
    { id: 1, title: "Project 1", body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum magni nemo, saepe, quae fugit, cum earum praesentium nisi assumenda ad eligendi exercitationem ducimus vel! Adipisci ut architecto nobis ipsa culpa." },
    { id: 2, title: "Project 2", body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum magni nemo, saepe, quae fugit, cum earum praesentium nisi assumenda ad eligendi exercitationem ducimus vel! Adipisci ut architecto nobis ipsa culpa." }
  ]);

  return (
    <ArticleContext.Provider value={{ articles, dispatch }}>
      {children}
    </ArticleContext.Provider>
  );
};

export default ArticleProvider;
