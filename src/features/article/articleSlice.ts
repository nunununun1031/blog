import { createSlice } from "@reduxjs/toolkit";
// import { RootState } from "../../app/store";
// import { articles } from "../../data/articles";
import { Article } from "../../types/article";
// import { fetchCount } from './counterAPI';
import { nanoid } from "nanoid";

export interface ArticleState {
  items: Array<Article>;
  selectedItem: Article;
  isModalOpen: boolean;
  isAdmin: boolean;
  isEdit: boolean;
}

const initialState: ArticleState = {
  items: [
    {
      id: nanoid(),
      img: "",
      title: "初めまして！",
      text: "初めましてこんにちは！ぬぬぬぬんです。",
      createdAt: "",
      updateTime: "",
      good: 0,
    },
    {
      id: nanoid(),
      img: "",
      title: "React入門",
      text: "こんにちは！今日はReactでTodoアプリをつくります！",
      createdAt: "",
      updateTime: "",
      good: 0,
    },
    {
      id: nanoid(),
      img: "",
      title: "Redux入門",
      text: "こんにちは！今日はReduxを使ってみましょう！",
      createdAt: "",
      updateTime: "",
      good: 0,
    },
  ],
  selectedItem:{
    id: "",
    img: "",
    title: "",
    text: "",
    createdAt: "",
    updateTime: "",
    good: 0,
  },
  isModalOpen: false,
  isAdmin: false,
  isEdit: false,
};

export const articleSlice = createSlice({
  name: "article",
  initialState,
  reducers: {
    addArticle: (state, action) => {
      const newArticle = {
        id: nanoid(),
        img: action.payload.img,
        title: action.payload.title,
        text: action.payload.text,
        createdAt: "",
        updateTime: "",
        good: 0,
      };
      state.items = [...state.items, newArticle];
    },
    deleteArticle: (state, action) => {
      console.log(action.payload)
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    updateArticle: (state, action) => {
      console.log(action.payload)
      const item = state.items.find((item) => item.id === action.payload.id);
      if(item) {
        item.title = action.payload.title;
        item.text = action.payload.text;
        item.img = action.payload.img;
      }
    },
    selectArticle: (state, action) => {
      state.selectedItem = {...action.payload}
    },
    countUp: (state, action) => {
      const countItem = state.items.find((item) => item.id === action.payload);
      if (countItem) {
        countItem.good++;
      }
    },
    handleModalOpen: (state, action) => {
      state.isModalOpen = action.payload;
    },
    handleIsAdmin: (state, action) => {
      state.isAdmin = action.payload;
    },
    handleEdit: (state, action) => {
      state.isEdit = action.payload;
    },
  },
});

export const {
  addArticle,
  deleteArticle,
  updateArticle,
  selectArticle,
  countUp,
  handleModalOpen,
  handleIsAdmin,
  handleEdit,
} = articleSlice.actions;

export const selectItems = (state: any) => state.article.items;
export const selectSelectedItems = (state: any) => state.article.selectedItem;
export const selectEdit = (state: any) => state.article.isEdit;

export default articleSlice.reducer;
