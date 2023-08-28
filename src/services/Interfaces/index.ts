export interface NewsItem {
  _id: string;
  headline: { main: string };
  snippet: string;
  multimedia: { url: string }[];
  pub_date: string;
  web_url: string;
  section_name: string;
  byline: {
    person: {
      firstname: string;
      lastname: string;
    }[];
  };
}

export interface PropsNewsItem {
  news: NewsItem;
}

export interface PropsPagination {
  currentPage: number;
  totalPages: number;
  onPageChange: (value: number) => void;
}

export interface NewsCategory {
  newsCategory: string;
  newsData: NewsItem[];
  currentPage: number;
  setCurrentPage: (currentPage: number) => void;
  updateNewsCategory: (category: string) => void;
  updateNewsData: (news: any) => void;
}
