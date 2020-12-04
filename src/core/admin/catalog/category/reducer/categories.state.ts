import { Map, Record } from 'immutable';

export interface CategoriesState extends Map<string, any> {
  categoryListnCount: any;
  categoryList: any;
  categoryListFilter: any;
  categoryDoDelete: any;
  addCatagoryStatus: any;
  addCatagoryData: any;
  updateCatagory: any;
  categoryCountData: any;
  updateCategoryBadresponse: any;

  deleteCategoriesResponse: any;
  deleteCategoriesRequestLoading: any;
  deleteCategoriesRequestLoaded: any;
  deleteCategoriesRequestFailed: any;

  categoriesCountResponse: any;
  categoriesCountRequestLoading: any;
  categoriesCountRequestLoaded: any;
  categoriesCountRequestFailed: any;

  categoriesListResponse: any;
  categoriesListRequestLoading: any;
  categoriesListRequestLoaded: any;
  categoriesListRequestFailed: any;

  updateCategoriesResponse: any;
  updateCategoriesRequestLoading: any;
  updateCategoriesRequestLoaded: any;
  updateCategoriesRequestFailed: any;

  productRemoveResponse: any;
  productRemoveRequestLoading: any;
  productRemoveRequestLoaded: any;
  productRemoveRequestFailed: any;

  productAddResponse: any;
  productAddRequestLoading: any;
  productAddRequestLoaded: any;
  productAddRequestFailed: any;

  addCategoriesResponse: any;
  addCategoriesRequestLoading: any;
  addCategoriesRequestLoaded: any;
  addCategoriesRequestFailed: any;
}

export const CategoriesStateRecord = Record({
  categoryListnCount: {},
  categoryList: [],
  categoryListFilter: {},
  categoryDoDelete: {},
  addCatagory: {},
  addCatagoryData: {},
  updateCatagory: {},
  categoryCountData: {},
  updateCategoryBadresponse: {},
  addCatagoryStatus: {},

  deleteCategoriesResponse: {},
  deleteCategoriesRequestLoading: {},
  deleteCategoriesRequestLoaded: {},
  deleteCategoriesRequestFailed: {},

  categoriesCountResponse: {},
  categoriesCountRequestLoading: {},
  categoriesCountRequestLoaded: {},
  categoriesCountRequestFailed: {},

  categoriesListResponse: {},
  categoriesListRequestLoading: {},
  categoriesListRequestLoaded: {},
  categoriesListRequestFailed: {},

  updateCategoriesResponse: {},
  updateCategoriesRequestLoading: {},
  updateCategoriesRequestLoaded: {},
  updateCategoriesRequestFailed: {},

  productRemoveResponse: {},
  productRemoveRequestLoading: {},
  productRemoveRequestLoaded: {},
  productRemoveRequestFailed: {},

  productAddResponse: {},
  productAddRequestLoading: {},
  productAddRequestLoaded: {},
  productAddRequestFailed: {},

  addCategoriesResponse: {},
  addCategoriesRequestLoading: {},
  addCcategoriesRequestLoaded: {},
  addCategoriesRequestFailed: {},
});
