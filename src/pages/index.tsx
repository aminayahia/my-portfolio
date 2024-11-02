import { Seo } from "@/ui/components/seo";
import { Button } from "@/ui/design-system/button";
import { Typography } from "@/ui/design-system/typography";


export default function Home() {
  return (
    <>
    <Seo title="portfolio" description="my portfolio" />
    <Typography component="h1" variant="h1" theme="primary">Poppins</Typography>
    <Typography  component="h2" variant="h2">Poppins</Typography>
    <Typography  component="h3" variant="h3">Poppins</Typography>
    <Typography  component="h4" variant="h4">Poppins</Typography>
    <Typography  component="h5" variant="h5" weight="black">Poppins</Typography>
    <Typography  component="h6" variant="h6" weight="bold" theme="orange-normal">Poppins</Typography>
    <Button size="small" variant="accent">Button</Button>
    <Button size="medium" variant="outline">Button</Button>
    <Button size="large" variant="icon">Button</Button>
    <Button size="large" variant="disabled">Button</Button>
    </>
  );
}
