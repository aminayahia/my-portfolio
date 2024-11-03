import { Typography } from "@/ui/design-system/typography";
import Image from "next/image";
import { Container } from "../../../../components/container/container";
export const HeroTopView = () => {
  return (
    <>
      <Container className="block md:flex justify-between items-center py-10">
        <div className="w-full md:max-w-md">
          <Typography>Salut, je suis </Typography>
          <Typography
            component="h6"
            variant="h6"
            weight="bold"
            theme="orange-normal"
          >
            Amina{" "}
          </Typography>
          <Typography component="h2" variant="h2" weight="bold">
            Intégratrice Web{" "}
          </Typography>
          <Typography
            className="ml-0 md:ml-64 mb-5"
            component="h2"
            variant="h2"
            weight="bold"
          >
            Senior{" "}
          </Typography>
          <Typography component="span" variant="body-base">
            Intégratrice web expérimentée avec plus de 9 ans d&apos;expérience,
            spécialisée dans la création et l&apos;optimisation d&apos;interfaces web de
            qualité, en respectant les normes du web.{" "}
          </Typography>
        </div>
        <Image className="m-auto" src="/assets/svg/hero.svg" alt="hero" width={650} height={400} />
      </Container>
    </>
  );
};
