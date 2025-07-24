//our-domain.com/news
import { Fragment } from "react";
import Link from "next/link";
function NewsPage() {
  return (
    <Fragment>
      <h1>The News Page</h1>
      <ul>
        <li>
          <Link href="/news/newsjs-is-a-great-framework">
            NextJs Is A Great FrameWork
          </Link>
        </li>
        <li>Something Else</li>
      </ul>
    </Fragment>
  );
}
export default NewsPage;
