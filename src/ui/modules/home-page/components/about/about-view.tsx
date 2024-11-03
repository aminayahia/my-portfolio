import { Typography } from "@/ui/design-system/typography";
import Image from "next/image";
import { Container } from "../../../../components/container/container";
export const AboutView = () => {
  return (
    <>
      <Container className="block md:flex justify-between items-center py-10">
        <Image
          className=""
          src="/assets/svg/about.svg"
          alt="about"
          width={550}
          height={530}
        />
        <div className="w-full md:max-w-md">
          <Typography component="h4" variant="h4" weight="bold" className="mb-5">
            À propos de moi
          </Typography>
          <Typography
            component="h6"
            variant="h6"
            weight="bold"
            theme="orange-darker"
          >
            Je suis intégratrice web 
          </Typography>
          <Typography component="span" variant="body-base" >
            j&apos;ai plus de 9 ans d&apos;expérience, dans la création et l&apos;optimisation
            d&apos;interfaces web de qualité, en respectant les normes du web.<br /><br />
            J&apos;ai travaillé avec divers frameworks, notamment React,
            Next.js, Vue.js et Symfony, ainsi qu&apos;avec des outils modernes
            comme Bootstrap et Tailwind, en veillant à créer des interfaces
            utilisateur soignées et conformes aux standards. Habituée à
            travailler en équipe et en étroite collaboration avec les
            développeurs.
          </Typography>
        </div>
      </Container>
    </>
  );
};
