import { configureStore, createAction, createReducer } from "@reduxjs/toolkit"
import reduxThunk from "redux-thunk"
import App from "./App"
import Layout from "./components/Layout"

export const ChangeLanguage = createAction("changeLanguage", (lang: string) => ({
    payload: lang
}))

const initialState: string = "En"// (location.pathname.split("/")[0] || location.pathname.split("/")[1]).toLowerCase() ///"En"

const languageReducer = createReducer(initialState, (builder) => {
    builder.addCase(ChangeLanguage, (state, action) => state = action.payload)
        .addDefaultCase((state) => state)
})

const allReducer = {
    lang: languageReducer
}

const middlewares = [reduxThunk]

export const Store = configureStore({
    reducer: allReducer,
    middleware: middlewares
})

export type RootState = ReturnType<typeof Store.getState>
export type AppDispatch = typeof Store.dispatch

//Store.subscribe(() => Layout())