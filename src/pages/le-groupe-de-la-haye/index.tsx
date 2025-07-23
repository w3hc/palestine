import React from 'react'
import { Text, VStack, Box, Heading, Container, Badge, Flex, UnorderedList, ListItem } from '@chakra-ui/react'
import { LinkComponent } from '../../components/layout/LinkComponent'

export default function LeGroupeDeLaHaye() {
  return (
    <>
      <main>
        <Container maxW="container.lg" p={0}>
          <VStack spacing={6} align="stretch">
            <Heading as="h1" size="xl" textAlign="center" mt={8} mb={8}>
              Le Groupe de La Haye : une alliance historique
            </Heading>

            <Box textAlign="center" mb={6}>
              <Badge colorScheme="green" fontSize="md" px={3} py={1}>
                19 juillet 2025
              </Badge>
            </Box>

            <Text fontSize="lg" fontWeight="medium" mb={4}>
              Le 31 janvier 2025 à La Haye, aux Pays-Bas, nous avons assisté à un moment historique : la naissance du Groupe de La Haye, une alliance
              sans précédent de nations déterminées à tenir Israël responsable de ses violations du droit international.
            </Text>

            <Text fontSize="md" mb={4}>
              Le Groupe de La Haye est une coalition internationale créée pour coordonner des mesures juridiques, diplomatiques et économiques contre
              les violations du droit international commises par Israël en Palestine. Cette initiative représente la première tentative coordonnée de
              cette ampleur depuis la Nakba.
            </Text>

            <Text fontSize="md" mb={4}>
              Varsha Gandikota-Nellutla, présidente du groupe et coordinatrice générale de Progressive International, explique clairement la mission :
              « Ce groupe n&apos;est pas destiné à être simplement un forum de discussion où les États <em>disent</em> qu&apos;ils soutiennent la
              Palestine. » Il s&apos;agit d&apos;un engagement concret à mettre en œuvre des politiques et des législations pour défendre le droit
              international.
            </Text>

            <Heading as="h2" size="lg" mt={8} mb={4}>
              Les membres fondateurs
            </Heading>

            <Text fontSize="md" mb={4}>
              Les membres fondateurs du Groupe de La Haye sont les suivants : le Belize, la Bolivie, la Colombie, Cuba, le Honduras, la Malaisie, la
              Namibie, le Sénégal et l&apos;Afrique du Sud.
            </Text>

            <Text fontSize="md" mb={4}>
              Ces pays ont déjà pris un certain nombre de mesures courageuses. L&apos;Afrique du Sud a intenté une action historique contre Israël
              devant la Cour internationale de Justice pour violations de la Convention sur le génocide. La Namibie et la Malaisie ont bloqué
              l&apos;accès à leurs ports aux navires transportant des armes vers Israël. La Colombie a suspendu ses exportations de charbon vers
              Israël et rompu ses relations diplomatiques. La Bolivie et la Colombie ont rappelé leurs ambassadeurs d&apos;Israël.
            </Text>

            <Heading as="h2" size="lg" mt={8} mb={4}>
              La Conférence de Bogotá
            </Heading>

            <Text fontSize="md" mb={4}>
              Les 15 et 16 juillet 2025, la Conférence d&apos;urgence sur la Palestine a eu lieu à Bogotà, en Colombie. Cette réunion a marqué «
              l&apos;action multilatérale la plus ambitieuse depuis le début du génocide à Gaza il y a 21 mois » et ce, pendant que le Conseil des
              affaires étrangères de l&apos;Union européenne décidait une fois de plus de ne rien faire face aux violations flagrantes du droit
              international.
            </Text>

            <Text fontSize="md" mb={4}>
              Trente pays de tous les continents dont l&apos;Algérie, le Brésil, le Chili, l&apos;Espagne, l&apos;Irlande, l&apos;Indonésie, la
              Turquie et la Chine étaient notamment présents à Bogotá, déterminés à agir. Douze pays se sont déjà engagés à mettre en œuvre six
              mesures coordonnées :
            </Text>

            <Box bg="gray.50" _dark={{ bg: 'gray.800' }} p={6} borderRadius="md" mb={6}>
              <UnorderedList spacing={3}>
                <ListItem>
                  <strong>L&apos;embargo sur les armes</strong> empêche tout transfert d&apos;armes, de munitions et d&apos;équipements militaires
                  vers Israël.
                </ListItem>
                <ListItem>
                  <strong>Le blocage des navires</strong> interdit l&apos;accès aux ports pour les navires transportant du matériel militaire vers
                  Israël.
                </ListItem>
                <ListItem>
                  <strong>La révision de tous les contrats publics</strong> en lien avec l&apos;occupation illégale.
                </ListItem>
                <ListItem>
                  <strong>Le soutien aux mandats de juridiction universelle</strong> pour poursuivre les crimes internationaux.
                </ListItem>
                <ListItem>
                  <strong>La garantie de la bonne marche des investigations impartiales</strong> sur les crimes les plus graves.
                </ListItem>
                <ListItem>
                  <strong>Et l&apos;engagement de justice</strong> pour toutes les victimes.
                </ListItem>
              </UnorderedList>
            </Box>

            <Text fontSize="md" mb={4}>
              Francesca Albanese, Rapporteuse spéciale de l&apos;ONU pour les territoires palestiniens occupés, a salué ces avancées. Elle a appellé
              tous les états à rejoindre le Groupe sans délai.
            </Text>

            <Heading as="h2" size="lg" mt={8} mb={4}>
              L&apos;échéance du 20 septembre 2025
            </Heading>

            <Text fontSize="md" mb={4}>
              La date du 20 septembre 2025 a été fixée. Elle coïncide avec la 80<sup>e</sup> Assemblée générale des Nations Unies. Un délai de 12 mois
              avait été établi par la résolution de l&apos;ONU, adoptée le 18 septembre 2024. Elle appelait tous les États à prendre des mesures
              efficaces contre les violations du droit international par Israël. Gustavo Petro, le président colombien, a déclaré : « Nous sommes
              venus à Bogotá pour faire l&apos;histoire — et nous l&apos;avons fait. Ensemble, nous avons commencé le travail pour mettre fin à
              l&apos;ère de l&apos;impunité. »
            </Text>

            <Heading as="h2" size="lg" mt={8} mb={4}>
              Comment soutenir le Groupe de La Haye
            </Heading>

            <Text fontSize="md" mb={4}>
              Le succès du Groupe de La Haye dépend maintenant de notre soutien collectif. Nous pouvons contacter nos représentants politiques pour
              qu&apos;ils poussent nos pays à rejoindre le Groupe avant le 20 septembre, soutenir la mise en œuvre des mandats d&apos;arrêt de la CPI
              contre Benjamin Netanyahu et Yoav Gallant, et plaider pour des embargos sur les armes et des sanctions économiques.
            </Text>

            <Text fontSize="md" mb={4}>
              Nous pouvons participer au BDS, parler à notre entourage des violations du droit international, et soutenir les organisations qui
              documentent les crimes de guerre.
            </Text>

            <Text fontSize="md" mb={4}>
              Et nous pouvons aussi amplifier les voix du Groupe de La Haye sur les réseaux, soutenir les efforts de documentation et de recherche sur
              les violations, et participer aux manifestations et événements de solidarité.
            </Text>

            <Box bg="green.50" _dark={{ bg: 'green.900' }} p={6} borderRadius="md" borderLeft="4px" borderColor="green.500" mb={6}>
              <Text fontSize="md" fontStyle="italic">
                « Aucun pays n&apos;est au-dessus des lois, et aucun crime ne restera impuni. »
              </Text>
              <Text fontSize="sm" mt={2} textAlign="right">
                — Ronald Lamola, ministre sud-africain des Relations internationales
              </Text>
            </Box>

            <Text fontSize="md" mb={4}>
              Le Groupe de La Haye représente plus qu&apos;une alliance diplomatique : il porte l&apos;espoir de la fin de l&apos;impunité totale
              d&apos;Israël. Les pays qui ont rejoint l&apos;initiative nous montrent qu&apos;il est possible de choisir le droit plutôt que la force,
              la justice plutôt que les intérêts géopolitiques.
            </Text>

            <Text fontSize="lg" fontWeight="medium" mb={8}>
              Le compte à rebours a commencé. Avant le 20 septembre 2025, nous avons tous un rôle à jouer pour soutenir cette initiative historique et
              transformer les paroles en actions concrètes. L&apos;avenir du droit international — et la vie de millions de Palestiniens — en
              dépendent.
            </Text>

            <Heading as="h2" size="lg" mt={8} mb={4}>
              Ressources
            </Heading>

            <Box bg="gray.50" _dark={{ bg: 'gray.800' }} p={6} borderRadius="md" mb={6}>
              <UnorderedList spacing={3}>
                <ListItem>
                  <LinkComponent href="https://petitions.assemblee-nationale.fr/initiatives/i-3061">
                    La pétition sur le site de l&apos;Assemblée nationale
                  </LinkComponent>
                </ListItem>
                <ListItem>
                  <LinkComponent href="https://thehaguegroup.org/home-fr/">Le site du groupe de La Haye</LinkComponent>
                </ListItem>
                <ListItem>
                  <LinkComponent href="https://www.youtube.com/watch?v=EW6BGf9nr_o">
                    Conclusion de la conférence d&apos;urgence du Groupe de La Haye à Bogotá (vidéo)
                  </LinkComponent>
                </ListItem>
                <ListItem>
                  <LinkComponent href="https://docs.un.org/fr/A/RES/ES-10/24">Résolution de l&apos;ONU</LinkComponent>
                </ListItem>
              </UnorderedList>
            </Box>

            <br />
            <br />
          </VStack>
        </Container>
      </main>
    </>
  )
}
