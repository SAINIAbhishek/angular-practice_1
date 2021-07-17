export interface Question {
  heading: string;
  info: Array<{
    title: string;
    list: Array<string>;
    button: {
      link: string;
      name: string;
    };
  }>;
}
