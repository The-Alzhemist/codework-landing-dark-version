export interface PostPageProps {
    params: {
      post: string;
    };
  }

  export interface FetchDataParams {
    post: string;
  }
  
  export interface PathItem {
    post: string;
  }
  
  export interface MetaArrayItem {
    _uid: string;
    component: string;
    metaImage: {
      id: number;
      alt: string;
      name: string;
      focus: string;
      title: string;
      source: string;
      filename: string;
      copyright: string;
      fieldtype: string;
      meta_data: Record<string, any>;
      is_external_url: boolean;
    };
    metaTitle: string;
    metaDescription: string;
    _editable: string;
    // Add other properties if needed
  }