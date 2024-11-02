import { Container } from "@/ui/components/container/container";
import { Navigation } from "@/ui/components/navigation/navigation";
import { Seo } from "@/ui/components/seo/seo";
import { Button } from "@/ui/design-system/button";
import { Typography } from "@/ui/design-system/typography";

import { FaFacebook } from "react-icons/fa6";
export default function Home() {
  return (
    <>
     <Seo title="portfolio" description="my portfolio" />
     <Navigation />
<Container>
 
   
    <Typography component="h1" variant="h1" theme="primary">Poppins</Typography>
    <Typography  component="h2" variant="h2">Poppins</Typography>
    <Typography  component="h3" variant="h3">Poppins</Typography>
    <Typography  component="h4" variant="h4">Poppins</Typography>
    <Typography  component="h5" variant="h5" weight="black">Poppins</Typography>
    <Typography  component="h6" variant="h6" weight="bold" theme="orange-normal">Poppins</Typography>
    <div className="flex gap-6 mt-8">
    <Button size="small" variant="accent">accent</Button>
    <Button size="small" variant="outline">outline</Button>

    <Button size="small" variant="disabled">disabled</Button>
    <Button  variant="icon" icon={FaFacebook} size="large"></Button>
    <Button  variant="icon" icon={FaFacebook} size="medium"></Button>
    <Button  variant="icon" icon={FaFacebook} size="small" iconTheme="secondray"></Button>
    </div>
    </Container>
    </>
  );
}
