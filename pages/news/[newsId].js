import { useRouter } from "next/router";

//our-domain.com/news/something-important

function DetailPage() {
  const router = useRouter();

  const newsId = router.query.newsId;

  //send a request to the backend to fetch the news item with this ID

  return <h1>The Detail Page</h1>;
}
export default DetailPage;
