// src/features/templates/store/index.ts

// 1. Export your default reducer slice and individual regular actions
export { default as templatesReducer, clearTemplateErrors, setCurrentTemplate } from "./slice";

// 2. Export ALL async thunks (this will now catch deleteTemplateThunk automatically!)
export * from "./thunk";