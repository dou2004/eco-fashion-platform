import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  RefreshCw,
  Gift,
  Recycle,
  User,
  CircleCheck,
  BadgePercent,
  Star,
  ArrowRight,
  Truck,
  CreditCard,
  MapPin,
} from "lucide-react"

export default function CommentCaMarchePage() {
  return (
    <div className="container py-10">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-16 lg:py-20 bg-gradient-to-b from-green-50 to-white dark:from-green-950 dark:to-background rounded-xl mb-12">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4 max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Comment fonctionne EcoFashion ?
            </h1>
            <p className="text-muted-foreground md:text-xl max-w-[700px]">
              Découvrez comment notre plateforme vous permet d'échanger, donner ou recycler vos vêtements tout en
              contribuant à un monde plus durable.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <Link href="/inscription">
                <Button size="lg" className="bg-green-600 hover:bg-green-700">
                  S'inscrire maintenant
                </Button>
              </Link>
              <Link href="/articles">
                <Button size="lg" variant="outline">
                  Voir les articles
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Principe général */}
      <section className="mb-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4">Notre principe</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            EcoFashion est une plateforme qui réinvente la façon dont nous consommons la mode. Nous vous offrons trois
            façons de donner une seconde vie à vos vêtements, tout en vous récompensant pour votre contribution à une
            mode plus durable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="flex flex-col items-center text-center p-6 h-full">
            <div className="w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mb-4">
              <RefreshCw className="h-8 w-8 text-blue-600 dark:text-blue-400" />
            </div>
            <CardTitle className="mb-2">Échangez</CardTitle>
            <CardDescription className="flex-grow">
              Échangez vos vêtements avec d'autres utilisateurs et renouvelez votre garde-robe sans dépenser. Un moyen
              économique et écologique de changer de style.
            </CardDescription>
          </Card>

          <Card className="flex flex-col items-center text-center p-6 h-full">
            <div className="w-16 h-16 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center mb-4">
              <Gift className="h-8 w-8 text-purple-600 dark:text-purple-400" />
            </div>
            <CardTitle className="mb-2">Donnez</CardTitle>
            <CardDescription className="flex-grow">
              Donnez les vêtements que vous ne portez plus à des associations caritatives et aidez ceux qui en ont
              besoin, tout en gagnant des points de générosité.
            </CardDescription>
          </Card>

          <Card className="flex flex-col items-center text-center p-6 h-full">
            <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center mb-4">
              <Recycle className="h-8 w-8 text-green-600 dark:text-green-400" />
            </div>
            <CardTitle className="mb-2">Recyclez</CardTitle>
            <CardDescription className="flex-grow">
              Recyclez vos vêtements usés en les vendant à des entreprises de recyclage partenaires et gagnez des points
              ou de l'argent en contribuant à réduire les déchets textiles.
            </CardDescription>
          </Card>
        </div>
      </section>

      {/* Options détaillées */}
      <section className="mb-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4">Nos options en détail</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Chaque option offre des avantages différents. Choisissez celle qui vous convient le mieux ou combinez-les
            selon vos besoins.
          </p>
        </div>

        <Tabs defaultValue="echange" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger
              value="echange"
              className="data-[state=active]:bg-blue-50 data-[state=active]:text-blue-700 dark:data-[state=active]:bg-blue-950"
            >
              <RefreshCw className="h-4 w-4 mr-2" />
              Échange
            </TabsTrigger>
            <TabsTrigger
              value="don"
              className="data-[state=active]:bg-purple-50 data-[state=active]:text-purple-700 dark:data-[state=active]:bg-purple-950"
            >
              <Gift className="h-4 w-4 mr-2" />
              Don
            </TabsTrigger>
            <TabsTrigger
              value="recyclage"
              className="data-[state=active]:bg-green-50 data-[state=active]:text-green-700 dark:data-[state=active]:bg-green-950"
            >
              <Recycle className="h-4 w-4 mr-2" />
              Recyclage
            </TabsTrigger>
          </TabsList>

          <TabsContent value="echange" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-blue-600 dark:text-blue-400">Échanger vos vêtements</h3>
                <p className="text-muted-foreground mb-4">
                  L'échange de vêtements est un moyen fantastique de renouveler votre garde-robe sans dépenser d'argent
                  et en réduisant votre impact environnemental.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CircleCheck className="h-5 w-5 text-blue-500 mr-2 mt-0.5" />
                    <span>Publiez les vêtements que vous souhaitez échanger</span>
                  </li>
                  <li className="flex items-start">
                    <CircleCheck className="h-5 w-5 text-blue-500 mr-2 mt-0.5" />
                    <span>Parcourez les articles disponibles des autres utilisateurs</span>
                  </li>
                  <li className="flex items-start">
                    <CircleCheck className="h-5 w-5 text-blue-500 mr-2 mt-0.5" />
                    <span>Proposez un échange qui vous semble équitable</span>
                  </li>
                  <li className="flex items-start">
                    <CircleCheck className="h-5 w-5 text-blue-500 mr-2 mt-0.5" />
                    <span>Convenez d'un lieu de rencontre ou d'un envoi postal</span>
                  </li>
                  <li className="flex items-start">
                    <CircleCheck className="h-5 w-5 text-blue-500 mr-2 mt-0.5" />
                    <span>Gagnez 100 points par échange réussi</span>
                  </li>
                </ul>
                <div className="mt-8">
                  <Link href="/articles?type=echange">
                    <Button className="bg-blue-600 hover:bg-blue-700">
                      Voir les articles à échanger
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex justify-center">
                <img
                  src="/placeholder.svg?height=400&width=500&text=Échange+de+vêtements"
                  alt="Échange de vêtements entre utilisateurs"
                  className="rounded-lg"
                  height="400"
                  width="500"
                />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="don" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-purple-600 dark:text-purple-400">Donner vos vêtements</h3>
                <p className="text-muted-foreground mb-4">
                  Faites une bonne action en donnant les vêtements que vous ne portez plus à ceux qui en ont besoin,
                  tout en gagnant des points de générosité sur notre plateforme.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CircleCheck className="h-5 w-5 text-purple-500 mr-2 mt-0.5" />
                    <span>Sélectionnez les vêtements que vous souhaitez donner</span>
                  </li>
                  <li className="flex items-start">
                    <CircleCheck className="h-5 w-5 text-purple-500 mr-2 mt-0.5" />
                    <span>Choisissez une association partenaire qui vous tient à cœur</span>
                  </li>
                  <li className="flex items-start">
                    <CircleCheck className="h-5 w-5 text-purple-500 mr-2 mt-0.5" />
                    <span>Déposez vos vêtements ou programmez une collecte</span>
                  </li>
                  <li className="flex items-start">
                    <CircleCheck className="h-5 w-5 text-purple-500 mr-2 mt-0.5" />
                    <span>Recevez une attestation de don pour vos impôts</span>
                  </li>
                  <li className="flex items-start">
                    <CircleCheck className="h-5 w-5 text-purple-500 mr-2 mt-0.5" />
                    <span>Gagnez 200 points par kilogramme de vêtements donnés</span>
                  </li>
                </ul>
                <div className="mt-8">
                  <Link href="/associations">
                    <Button className="bg-purple-600 hover:bg-purple-700">
                      Découvrir nos associations partenaires
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex justify-center">
                <img
                  src="/placeholder.svg?height=400&width=500&text=Don+de+vêtements"
                  alt="Don de vêtements à des associations"
                  className="rounded-lg"
                  height="400"
                  width="500"
                />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="recyclage" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-green-600 dark:text-green-400">Recycler vos vêtements</h3>
                <p className="text-muted-foreground mb-4">
                  Les vêtements trop usés pour être donnés ou échangés peuvent être recyclés. Nos entreprises
                  partenaires les transforment en nouvelles matières premières.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CircleCheck className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Triez les vêtements qui ne sont plus portables</span>
                  </li>
                  <li className="flex items-start">
                    <CircleCheck className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Remplissez le formulaire de recyclage sur notre plateforme</span>
                  </li>
                  <li className="flex items-start">
                    <CircleCheck className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Déposez vos textiles ou demandez une collecte à domicile</span>
                  </li>
                  <li className="flex items-start">
                    <CircleCheck className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Recevez un paiement basé sur le poids et la qualité</span>
                  </li>
                  <li className="flex items-start">
                    <CircleCheck className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Gagnez 100 points par kilogramme de textile recyclé</span>
                  </li>
                </ul>
                <div className="mt-8">
                  <Link href="/recyclage">
                    <Button className="bg-green-600 hover:bg-green-700">
                      En savoir plus sur le recyclage
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex justify-center">
                <img
                  src="/placeholder.svg?height=400&width=500&text=Recyclage+textile"
                  alt="Recyclage de vêtements usés"
                  className="rounded-lg"
                  height="400"
                  width="500"
                />
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </section>

      {/* Système de points */}
      <section className="mb-16 bg-green-50 dark:bg-green-950 p-8 rounded-xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4">Notre système de points et récompenses</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Chez EcoFashion, nous valorisons vos gestes éco-responsables en vous récompensant avec notre système de
            points. Voici comment ça fonctionne.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-white dark:bg-background h-full">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Star className="h-5 w-5 mr-2 text-yellow-500" />
                Gagner des points
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CircleCheck className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-sm text-muted-foreground">
                    <strong>Échanger:</strong> 100 points par échange réussi
                  </span>
                </li>
                <li className="flex items-start">
                  <CircleCheck className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-sm text-muted-foreground">
                    <strong>Donner:</strong> 200 points par kg de vêtements donnés
                  </span>
                </li>
                <li className="flex items-start">
                  <CircleCheck className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-sm text-muted-foreground">
                    <strong>Recycler:</strong> 100 points par kg de textile recyclé
                  </span>
                </li>
                <li className="flex items-start">
                  <CircleCheck className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-sm text-muted-foreground">
                    <strong>Parrainage:</strong> 300 points par nouvel utilisateur parrainé
                  </span>
                </li>
                <li className="flex items-start">
                  <CircleCheck className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-sm text-muted-foreground">
                    <strong>Évaluations:</strong> 20 points par avis laissé
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-white dark:bg-background h-full">
            <CardHeader>
              <CardTitle className="flex items-center">
                <BadgePercent className="h-5 w-5 mr-2 text-green-500" />
                Utiliser vos points
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CircleCheck className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-sm text-muted-foreground">
                    <strong>Convertir en argent:</strong> 100 points = 10 millimes
                  </span>
                </li>
                <li className="flex items-start">
                  <CircleCheck className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-sm text-muted-foreground">
                    <strong>Remises partenaires:</strong> Jusqu'à 30% chez nos partenaires
                  </span>
                </li>
                <li className="flex items-start">
                  <CircleCheck className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-sm text-muted-foreground">
                    <strong>Services premium:</strong> Accès à des fonctionnalités exclusives
                  </span>
                </li>
                <li className="flex items-start">
                  <CircleCheck className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-sm text-muted-foreground">
                    <strong>Frais de livraison:</strong> Livraison gratuite à partir de 1000 points
                  </span>
                </li>
                <li className="flex items-start">
                  <CircleCheck className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-sm text-muted-foreground">
                    <strong>Dons caritatifs:</strong> Convertir vos points en dons
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-white dark:bg-background h-full">
            <CardHeader>
              <CardTitle className="flex items-center">
                <User className="h-5 w-5 mr-2 text-blue-500" />
                Niveaux d'utilisateurs
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                <li className="border-l-2 border-gray-300 pl-3 py-1">
                  <span className="font-semibold block">Débutant (0-999 points)</span>
                  <span className="text-sm text-muted-foreground">Fonctionnalités de base de la plateforme</span>
                </li>
                <li className="border-l-2 border-green-300 pl-3 py-1">
                  <span className="font-semibold block">Éco-contributeur (1000-2999 points)</span>
                  <span className="text-sm text-muted-foreground">
                    Frais de service réduits, priorité sur les échanges
                  </span>
                </li>
                <li className="border-l-2 border-blue-300 pl-3 py-1">
                  <span className="font-semibold block">Éco-expert (3000-5999 points)</span>
                  <span className="text-sm text-muted-foreground">Frais de service minimes, livraison gratuite</span>
                </li>
                <li className="border-l-2 border-purple-300 pl-3 py-1">
                  <span className="font-semibold block">Éco-champion (6000+ points)</span>
                  <span className="text-sm text-muted-foreground">
                    Aucun frais, service VIP, invitations exclusives
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Processus étape par étape */}
      <section className="mb-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4">Comment utiliser EcoFashion ?</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Que vous souhaitiez échanger, donner ou recycler vos vêtements, le processus est simple. Voici comment
            commencer.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 -translate-x-1/2 border-l border-dashed border-green-300 h-full z-0 hidden md:block"></div>
          <div className="space-y-12 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-4 items-center">
              <div className="md:text-right order-2 md:order-1">
                <h3 className="text-xl font-semibold mb-2">1. Créez votre compte</h3>
                <p className="text-muted-foreground">
                  Inscrivez-vous gratuitement sur notre plateforme. Remplissez votre profil avec vos informations
                  personnelles et vos préférences.
                </p>
              </div>
              <div className="flex justify-center order-1 md:order-2">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold border-4 border-white dark:border-background">
                  1
                </div>
              </div>
              <div className="order-3 hidden md:block">
                <img
                  src="/placeholder.svg?height=180&width=280&text=Création+de+compte"
                  alt="Création de compte"
                  className="rounded-lg"
                  width="280"
                  height="180"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-4 items-center">
              <div className="hidden md:block order-1">
                <img
                  src="/placeholder.svg?height=180&width=280&text=Ajout+d'articles"
                  alt="Ajout d'articles"
                  className="rounded-lg"
                  width="280"
                  height="180"
                />
              </div>
              <div className="flex justify-center order-2">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold border-4 border-white dark:border-background">
                  2
                </div>
              </div>
              <div className="order-3">
                <h3 className="text-xl font-semibold mb-2">2. Ajoutez vos articles</h3>
                <p className="text-muted-foreground">
                  Prenez des photos de vos vêtements et ajoutez-les sur la plateforme avec une description détaillée
                  (taille, marque, état, etc.).
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-4 items-center">
              <div className="md:text-right order-2 md:order-1">
                <h3 className="text-xl font-semibold mb-2">3. Choisissez votre option</h3>
                <p className="text-muted-foreground">
                  Décidez si vous souhaitez échanger, donner ou recycler chaque article en fonction de son état et de
                  vos préférences.
                </p>
              </div>
              <div className="flex justify-center order-1 md:order-2">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold border-4 border-white dark:border-background">
                  3
                </div>
              </div>
              <div className="order-3 hidden md:block">
                <img
                  src="/placeholder.svg?height=180&width=280&text=Choix+des+options"
                  alt="Choix des options"
                  className="rounded-lg"
                  width="280"
                  height="180"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-4 items-center">
              <div className="hidden md:block order-1">
                <img
                  src="/placeholder.svg?height=180&width=280&text=Finalisation"
                  alt="Finalisation"
                  className="rounded-lg"
                  width="280"
                  height="180"
                />
              </div>
              <div className="flex justify-center order-2">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold border-4 border-white dark:border-background">
                  4
                </div>
              </div>
              <div className="order-3">
                <h3 className="text-xl font-semibold mb-2">4. Effectuez la transaction</h3>
                <p className="text-muted-foreground">
                  Selon l'option choisie, procédez à un échange, faites un don ou envoyez vos vêtements au recyclage
                  selon les instructions fournies.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-4 items-center">
              <div className="md:text-right order-2 md:order-1">
                <h3 className="text-xl font-semibold mb-2">5. Recevez vos récompenses</h3>
                <p className="text-muted-foreground">
                  Une fois la transaction terminée, recevez vos points, récompenses ou paiements selon l'option choisie.
                  Suivez vos gains dans votre tableau de bord.
                </p>
              </div>
              <div className="flex justify-center order-1 md:order-2">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold border-4 border-white dark:border-background">
                  5
                </div>
              </div>
              <div className="order-3 hidden md:block">
                <img
                  src="/placeholder.svg?height=180&width=280&text=Récompenses"
                  alt="Récompenses"
                  className="rounded-lg"
                  width="280"
                  height="180"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Informations pratiques */}
      <section className="mb-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4">Informations pratiques</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Quelques informations supplémentaires pour faciliter votre expérience sur EcoFashion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Truck className="h-5 w-5 mr-2 text-muted-foreground" />
                Livraison et collecte
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CircleCheck className="h-4 w-4 text-green-500 mr-2 mt-1" />
                  <span className="text-sm text-muted-foreground">
                    Options d'envoi postal pour les échanges (frais partagés)
                  </span>
                </li>
                <li className="flex items-start">
                  <CircleCheck className="h-4 w-4 text-green-500 mr-2 mt-1" />
                  <span className="text-sm text-muted-foreground">
                    Service de collecte à domicile pour les dons volumineux
                  </span>
                </li>
                <li className="flex items-start">
                  <CircleCheck className="h-4 w-4 text-green-500 mr-2 mt-1" />
                  <span className="text-sm text-muted-foreground">
                    Points de dépôt partenaires dans toute la Tunisie
                  </span>
                </li>
                <li className="flex items-start">
                  <CircleCheck className="h-4 w-4 text-green-500 mr-2 mt-1" />
                  <span className="text-sm text-muted-foreground">Suivi de livraison en temps réel</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <CreditCard className="h-5 w-5 mr-2 text-muted-foreground" />
                Paiements et frais
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CircleCheck className="h-4 w-4 text-green-500 mr-2 mt-1" />
                  <span className="text-sm text-muted-foreground">
                    Frais de service de 5% sur les ventes et échanges
                  </span>
                </li>
                <li className="flex items-start">
                  <CircleCheck className="h-4 w-4 text-green-500 mr-2 mt-1" />
                  <span className="text-sm text-muted-foreground">
                    Paiements sécurisés par carte bancaire et mobile
                  </span>
                </li>
                <li className="flex items-start">
                  <CircleCheck className="h-4 w-4 text-green-500 mr-2 mt-1" />
                  <span className="text-sm text-muted-foreground">Système de cagnotte pour gérer vos gains</span>
                </li>
                <li className="flex items-start">
                  <CircleCheck className="h-4 w-4 text-green-500 mr-2 mt-1" />
                  <span className="text-sm text-muted-foreground">Frais réduits selon votre niveau d'utilisateur</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-muted-foreground" />
                Communauté et événements
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CircleCheck className="h-4 w-4 text-green-500 mr-2 mt-1" />
                  <span className="text-sm text-muted-foreground">Vide-dressing communautaires mensuels</span>
                </li>
                <li className="flex items-start">
                  <CircleCheck className="h-4 w-4 text-green-500 mr-2 mt-1" />
                  <span className="text-sm text-muted-foreground">Ateliers de réparation et personnalisation</span>
                </li>
                <li className="flex items-start">
                  <CircleCheck className="h-4 w-4 text-green-500 mr-2 mt-1" />
                  <span className="text-sm text-muted-foreground">Formations sur la mode durable</span>
                </li>
                <li className="flex items-start">
                  <CircleCheck className="h-4 w-4 text-green-500 mr-2 mt-1" />
                  <span className="text-sm text-muted-foreground">Groupes locaux pour faciliter les échanges</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Témoignages */}
      <section className="mb-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4">Ce que disent nos utilisateurs</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Découvrez les expériences de notre communauté d'utilisateurs qui ont déjà adopté EcoFashion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((testimonial) => (
            <Card key={testimonial} className="bg-green-50 dark:bg-green-950">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="flex space-x-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                <blockquote className="border-l-4 border-green-500 pl-4 italic text-muted-foreground mb-6">
                  {testimonial === 1
                    ? "J'ai complètement renouvelé ma garde-robe sans dépenser un centime grâce aux échanges. Le système est vraiment bien pensé et la communauté très sympathique !"
                    : testimonial === 2
                      ? "Le recyclage m'a permis de me débarrasser de mes vieux vêtements tout en gagnant des points et de l'argent. J'apprécie vraiment l'impact positif sur l'environnement."
                      : "Les dons aux associations sont super simples à faire, et c'est gratifiant de savoir que mes vêtements servent à quelque chose plutôt que de prendre la poussière dans mon placard."}
                </blockquote>
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center mr-3">
                    <User className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <p className="font-medium">{`Utilisateur ${testimonial + 10}`}</p>
                    <p className="text-xs text-muted-foreground">
                      {testimonial === 1
                        ? "Éco-expert • 54 échanges"
                        : testimonial === 2
                          ? "Éco-champion • 35 kg recyclés"
                          : "Éco-contributeur • 12 dons"}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link href="/temoignages">
            <Button variant="outline">
              Voir plus de témoignages
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4">Questions fréquentes</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Vous avez des questions ? Consultez notre FAQ. Si vous ne trouvez pas votre réponse, n'hésitez pas à nous
            contacter.
          </p>
        </div>

        <Accordion type="single" collapsible className="max-w-3xl mx-auto">
          <AccordionItem value="item-1">
            <AccordionTrigger>Comment s'assurer que les échanges sont équitables ?</AccordionTrigger>
            <AccordionContent>
              <p className="text-muted-foreground">
                Notre plateforme encourage des échanges équitables grâce à un système de valeur indicative pour chaque
                article, basé sur la marque, la qualité, l'état et l'âge du vêtement. Vous pouvez proposer un échange
                d'un ou plusieurs articles pour atteindre une valeur équivalente. De plus, notre système de réputation
                aide à identifier les utilisateurs fiables, et notre service de médiation peut intervenir en cas de
                litige.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Est-ce que je dois payer pour utiliser EcoFashion ?</AccordionTrigger>
            <AccordionContent>
              <p className="text-muted-foreground">
                L'inscription et l'utilisation de base d'EcoFashion sont entièrement gratuites. Nous prélevons de petits
                frais de service (5%) uniquement sur les transactions monétaires. Les dons sont exempts de frais, tandis
                que les échanges et le recyclage comportent des frais minimes pour maintenir la plateforme. Plus vous
                êtes actif et montez en niveau, plus ces frais diminuent, jusqu'à être complètement supprimés pour les
                Éco-champions.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              Comment puis-je être sûr que mes vêtements donnés vont à de bonnes associations ?
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-muted-foreground">
                Toutes les associations partenaires sur notre plateforme sont soigneusement vérifiées et doivent
                répondre à des critères stricts de transparence et d'éthique. Nous suivons le parcours de vos dons et
                vous fournissons un certificat attestant de votre contribution. Vous pouvez également consulter les
                rapports d'impact que nous publions régulièrement, montrant comment vos dons ont été utilisés et qui en
                a bénéficié.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>Que se passe-t-il si je ne suis pas satisfait d'un échange ?</AccordionTrigger>
            <AccordionContent>
              <p className="text-muted-foreground">
                Nous prenons très au sérieux la satisfaction de nos utilisateurs. Si vous n'êtes pas satisfait d'un
                échange (par exemple, si l'état de l'article ne correspond pas à la description), vous disposez de 48
                heures après réception pour signaler un problème. Notre équipe examinera votre réclamation et pourra
                faciliter un retour ou proposer une compensation. C'est pourquoi nous encourageons toujours une
                communication claire et des photos détaillées lors de la mise en ligne des articles.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>Comment fonctionne le recyclage des vêtements trop usés ?</AccordionTrigger>
            <AccordionContent>
              <p className="text-muted-foreground">
                Les vêtements trop usés pour être portés suivent un processus de recyclage spécifique. Nos entreprises
                partenaires séparent les différentes matières (coton, polyester, etc.) qui sont ensuite transformées
                pour créer de nouveaux textiles ou d'autres produits comme l'isolation pour les bâtiments, les
                rembourrages, ou même des matériaux de construction. Ce processus permet d'éviter que ces textiles
                finissent dans des décharges, réduisant ainsi l'impact environnemental de l'industrie de la mode.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger>Les points EcoFashion expirent-ils ?</AccordionTrigger>
            <AccordionContent>
              <p className="text-muted-foreground">
                Les points EcoFashion n'expirent pas tant que votre compte reste actif. Toutefois, si votre compte reste
                inactif pendant plus de 12 mois consécutifs, vos points pourraient être convertis en contribution
                environnementale pour nos projets de reforestation et de lutte contre la pollution textile. Nous vous
                enverrons plusieurs notifications avant qu'une telle conversion n'ait lieu, vous donnant amplement le
                temps de réactiver votre compte en effectuant une simple action sur la plateforme.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <div className="text-center mt-8">
          <p className="text-muted-foreground mb-4">Vous avez d'autres questions ?</p>
          <Link href="/contact">
            <Button className="bg-green-600 hover:bg-green-700">Contactez-nous</Button>
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="rounded-xl bg-green-50 dark:bg-green-950 p-8 md:p-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Prêt à rejoindre la communauté EcoFashion ?</h2>
            <p className="text-muted-foreground mb-6">
              Inscrivez-vous dès aujourd'hui et commencez à échanger, donner ou recycler vos vêtements. Contribuez à une
              mode plus durable tout en renouvelant votre garde-robe !
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/inscription">
                <Button size="lg" className="bg-green-600 hover:bg-green-700">
                  Créer un compte
                </Button>
              </Link>
              <Link href="/articles">
                <Button size="lg" variant="outline">
                  Explorer les articles
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex justify-center">
            <img
              src="/placeholder.svg?height=300&width=400&text=Rejoignez+EcoFashion"
              alt="Rejoignez la communauté EcoFashion"
              className="rounded-lg"
              width="400"
              height="300"
            />
          </div>
        </div>
      </section>
    </div>
  )
}
