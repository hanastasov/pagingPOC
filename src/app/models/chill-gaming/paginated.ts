export interface Paginated {
  pageSize: number;
  totalRows: number;
  isFirstPage: boolean;
  isLastPage: boolean;
  page: number;
}
