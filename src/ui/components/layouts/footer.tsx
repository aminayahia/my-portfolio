import { Typography } from "@/ui/design-system/typography";
import { Container } from "../container/container";
import { footerAppLinks, footersocialsLinks } from "../navigation/app-links";

export const Footer =()=>{
  const year = new Date().getFullYear();
  const footerNavList = footerAppLinks.map((element,key)=>{
    return <div key={key}>{element.label}</div>;
  })
  const footersocialsList = footersocialsLinks.map((element,key)=>{
    return <div key={key}>{element.label}</div>;
  })
  return (
    <>
    <div className="bg-white-300 py-5">
      <Container>
        <div className="flex items-center justify-center">Logo</div>
        <div className="flex items-center justify-between">
        <div className="flex items-center justify-center gap-7">
        <Typography component="span" variant="body-base" weight="bold" theme="orange-normal"> App: </Typography>
          {footerNavList}
        </div>
        <div className="flex items-center justify-center gap-7">
        <Typography component="span" variant="body-base" weight="bold" theme="orange-normal"> Réseaux socials: </Typography>
         {footersocialsList}
        </div>
        </div>
      </Container>
    </div>
        <div className="bg-white-800 py-4">
        <Container>
          <div className="flex items-center justify-center text-white-50 gap-2">© {year} <Typography component="span" variant="body-base" weight="bold" theme="orange-normal"> Amina </Typography></div>
   
        </Container>
      </div>
      </>
  )
}