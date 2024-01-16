import { Page, PageController } from './page';
import Blog from '../app/pages/Blog';
import { BlogData } from 'interfaces/BlogData';

@PageController('blog')
export class BlogController {
  constructor() {}

  @Page('/posts', Blog)
  async getBlog(): Promise<BlogData> {
    return {
      posts: [
        'Hey welcome to my blog',
        "if you don't know who Good Charlotte is get out!",
      ],
    };
  }
}
