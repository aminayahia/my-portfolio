import { Button } from "@/ui/design-system/button"
import { Typography } from "@/ui/design-system/typography"
import { Container } from "../container/container"


interface Props{

}

export const Navigation =({}:Props)=>{
  return (<>
  <div className="">
    <Container className="flex items-center justify-between" >
      <div>
        <img src="./public/logo.png" />
      </div>
      <div className="flex items-center justify-center py-4 gap-4">
        <Typography >À propos</Typography>
        <Typography >Services</Typography>
        <Button variant="accent" size="small">Télécharger le CV</Button>
      </div>
    </Container>
  </div>
  
  </>)
}