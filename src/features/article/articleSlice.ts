import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { Article } from "../../types/article";
import { nanoid } from "nanoid";
import axios from "axios";

export interface ArticleState {
  items: Array<Article>;
  selectedItem: Article;
  isModalOpen: boolean;
  isEdit: boolean;
}
type AddProps = {
  markdown: string;
  title: string;
  img: string;
}
type deleteProps = {
  id: string;
}

const initialState: ArticleState = {
  items: [],
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
  isEdit: false,
};
// json-serverからデータを取得
export const getArticle = createAsyncThunk(
  'article/getArticle',
  async () => {
    const response = await axios.get<Article[]>("http://localhost:3001/items");
    // return {responseItems: response};
    return response.data;
  }
);
// json-serverにデータを追加
export const postArticle = createAsyncThunk(
  'article/postArticle',
  async (value:AddProps) => {
    const {img, markdown, title} = value
    const newArticle = {
      id: nanoid(),
      img: img,
      title: title,
      text: markdown,
      createdAt: "",
      updateTime: "",
      good: 0,
    }
    const response = await axios.post("http://localhost:3001/items", newArticle)
    .catch((error) => {
      throw error;
    });
    return response.data;
  }
);
// json-server上のデータを削除
export const deletePost = createAsyncThunk(
  "article/deleteArticle",
  async(id:deleteProps) => {
    const response = await axios.delete(`http://localhost:3001/items/${id}`)
    return response.data;
  }
)
// json-serverのデータをアップデート
export const updatePost = createAsyncThunk("article/updateArticle", async(art:Article) => {
  const response = await axios.put(`http://localhost:3001/items/${art.id}`, art)
  return response.data;
})

// いいね数の管理
export const goodCountUp = createAsyncThunk("article/goodCount", async(art: Article) => {
  const response = await axios.patch(`http://localhost:3001/items/${art.id}`, {good: art.good + 1})
  return response.data;
})

export const articleSlice = createSlice({
  name: "article",
  initialState,
  reducers: {
    selectArticle: (state, action) => {
      state.selectedItem = {...action.payload}
    },
    handleModalOpen: (state, action) => {
      state.isModalOpen = action.payload;
    },
    handleEdit: (state, action) => {
      state.isEdit = action.payload;
    },
  },
  extraReducers:(builder) => {
    builder
    .addCase(getArticle.fulfilled, (state, action) => {
      state.items = action.payload
    })
    .addCase(postArticle.fulfilled, (state, action) => {
      return {
        ...state,
        items: [action.payload, ...state.items],
      }

    })
    .addCase(deletePost.fulfilled, (state, action) => {
      return {
        ...state,
        items: state.items.filter((t) => t.id !== action.payload.id),
        selectedItem: {
          id: "",
          img: "",
          title: "",
          text: "",
          createdAt: "",
          updateTime: "",
          good: 0,
        },
      }
    })
    .addCase(updatePost.fulfilled, (state, action) => {
      return {
        ...state,
        items: state.items.map((a) => 
          a.id === action.payload.id ? action.payload : a
        ),
        selectedItem: action.payload,
      }
    })
    .addCase(goodCountUp.fulfilled, (state, action) => {
      return {
        ...state,
        items: state.items.map((a) => 
          a.id === action.payload.id ? action.payload : a
        )
      }
    })
  },
});

export const {
  selectArticle,
  handleModalOpen,
  handleEdit,
} = articleSlice.actions;

export const selectItems = (state: any) => state.article.items;
export const selectSelectedItems = (state: any) => state.article.selectedItem;
export const selectEdit = (state: any) => state.article.isEdit;

export default articleSlice.reducer;
