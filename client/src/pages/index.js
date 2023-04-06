import { Layout } from "@/components/layout/Layout";
import { Cards } from "@/components/home/Cards";

export default function Home() {
  return (
    <>
      <Layout title={"Home "}>
        <div className="pt-[50px] sm:px-4 md:px-6 lg:px-10 xl:px-[50px]">
          <Cards
            type="MOBA"
            link="http://localhost:8000/api/v1/category/type"
            title="MOBA"
          />
          <Cards
            type="shooters"
            link="http://localhost:8000/api/v1/category/type"
            title="FPS shooter"
          />
          <Cards
            type="AA"
            link="http://localhost:8000/api/v1/category/type"
            title="Action and Adventure"
          />
          <Cards
            type="sandBox"
            link="http://localhost:8000/api/v1/category/type"
            title="SandBox"
          />
          <Cards
            type="sports"
            link="http://localhost:8000/api/v1/category/type"
            title="Sports"
          />
          <Cards
            type="puzzle"
            link="http://localhost:8000/api/v1/category/type"
            title="Puzzle"
          />
        </div>
      </Layout>
    </>
  );
}
