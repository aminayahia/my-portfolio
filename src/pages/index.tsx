import { Layout } from "@/ui/components/layouts/layout";
import { Seo } from "@/ui/components/seo/seo";
import { HomePageContainer } from './../ui/modules/home-page/home-page.container';

export default function Home() {
  return (
    <>
      <Seo title="portfolio" description="my portfolio" />
      <Layout>
    
        <HomePageContainer />
        
      
      </Layout>
    </>
  );
}
