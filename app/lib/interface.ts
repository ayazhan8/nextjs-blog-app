export interface simpleBlogCard {
  title: string;
  smallDescription: string;
  currentSlug: string;
  titleImage: any;
  date: string;
  category: {
    name: string;
  };
}

export interface fullBlog {
  currentSlug: string;
  title: string;
  content: any;
  titleImage: any;
}

export interface Category {
  name: string;
}
