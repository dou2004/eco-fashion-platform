import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, Recycle, TrendingUp, Truck, CreditCard, HelpCircle, ArrowRight } from "lucide-react"

export default function RecyclagePage() {
  return (
    <div className="container py-10">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-green-50 to-white dark:from-green-950 dark:to-background rounded-xl mb-12">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Donnez une seconde vie à vos vêtements usés
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Recyclez vos vêtements, gagnez des points et contribuez à un monde plus durable. Découvrez comment le
                  recyclage textile peut faire la différence.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/ajouter-article?type=recyclage">
                  <Button size="lg" className="bg-green-600 hover:bg-green-700">
                    Recycler mes vêtements
                    <Recycle className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="#comment-ca-marche">
                  <Button size="lg" variant="outline">
                    Comment ça marche
                  </Button>
                </Link>
              </div>
            </div>
            <img
              src="/placeholder.svg?height=500&width=700&text=Recyclage+textile"
              alt="Recyclage textile"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              width="700"
              height="500"
            />
          </div>
        </div>
      </section>

      {/* Pourquoi recycler */}
      <section className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Pourquoi recycler ses vêtements ?</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            L'industrie textile est l'une des plus polluantes au monde. Recycler vos vêtements aide à réduire les
            déchets et à préserver les ressources naturelles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="border-t-4 border-t-green-500">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Recycle className="h-5 w-5 mr-2 text-green-500" />
                Réduction des déchets
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Chaque année, des millions de tonnes de textiles finissent dans les décharges. Recycler permet de
                réduire ce volume considérablement.
              </p>
            </CardContent>
          </Card>
          <Card className="border-t-4 border-t-green-500">
            <CardHeader>
              <CardTitle className="flex items-center">
                <CheckCircle className="h-5 w-5 mr-2 text-green-500" />
                Impact environnemental
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Le recyclage textile permet d'économiser de l'eau, de réduire les émissions de CO2 et de limiter
                l'utilisation de produits chimiques.
              </p>
            </CardContent>
          </Card>
          <Card className="border-t-4 border-t-green-500">
            <CardHeader>
              <CardTitle className="flex items-center">
                <TrendingUp className="h-5 w-5 mr-2 text-green-500" />
                Économie circulaire
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Contribuez à une économie plus durable où les ressources sont réutilisées plutôt que jetées, créant
                ainsi un cycle vertueux.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Comment ça marche */}
      <section className="mb-16" id="comment-ca-marche">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Comment ça marche ?</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Notre processus de recyclage est simple et efficace. Suivez ces étapes pour donner une seconde vie à vos
            vêtements.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 -translate-x-1/2 border-l border-dashed border-green-300 h-full z-0 hidden md:block"></div>
          <div className="space-y-12 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-4 items-center">
              <div className="md:text-right order-2 md:order-1">
                <h3 className="text-xl font-semibold mb-2">1. Triez vos vêtements</h3>
                <p className="text-muted-foreground">
                  Rassemblez les vêtements que vous ne portez plus. Tous les textiles sont acceptés, quel que soit leur
                  état.
                </p>
              </div>
              <div className="flex justify-center order-1 md:order-2">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold border-4 border-white">
                  1
                </div>
              </div>
              <div className="order-3 hidden md:block">
                <img
                  src="/placeholder.svg?height=200&width=300&text=Tri+de+vêtements"
                  alt="Tri de vêtements pour recyclage"
                  className="rounded-lg"
                  width="300"
                  height="200"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-4 items-center">
              <div className="hidden md:block order-1">
                <img
                  src="/placeholder.svg?height=200&width=300&text=Pesée+de+vêtements"
                  alt="Pesée de vêtements pour recyclage"
                  className="rounded-lg"
                  width="300"
                  height="200"
                />
              </div>
              <div className="flex justify-center order-2">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold border-4 border-white">
                  2
                </div>
              </div>
              <div className="order-3">
                <h3 className="text-xl font-semibold mb-2">2. Enregistrez votre demande</h3>
                <p className="text-muted-foreground">
                  Créez une demande de recyclage sur notre plateforme en indiquant le poids approximatif et le type de
                  vêtements.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-4 items-center">
              <div className="md:text-right order-2 md:order-1">
                <h3 className="text-xl font-semibold mb-2">3. Collecte ou dépôt</h3>
                <p className="text-muted-foreground">
                  Choisissez entre la collecte à domicile ou le dépôt dans l'un de nos points de collecte partenaires.
                </p>
              </div>
              <div className="flex justify-center order-1 md:order-2">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold border-4 border-white">
                  3
                </div>
              </div>
              <div className="order-3 hidden md:block">
                <img
                  src="/placeholder.svg?height=200&width=300&text=Collecte+de+vêtements"
                  alt="Collecte de vêtements pour recyclage"
                  className="rounded-lg"
                  width="300"
                  height="200"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-4 items-center">
              <div className="hidden md:block order-1">
                <img
                  src="/placeholder.svg?height=200&width=300&text=Recyclage+en+cours"
                  alt="Recyclage en cours"
                  className="rounded-lg"
                  width="300"
                  height="200"
                />
              </div>
              <div className="flex justify-center order-2">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold border-4 border-white">
                  4
                </div>
              </div>
              <div className="order-3">
                <h3 className="text-xl font-semibold mb-2">4. Traitement et tri</h3>
                <p className="text-muted-foreground">
                  Nos partenaires de recyclage trient les vêtements selon leur état et leur composition pour un
                  traitement optimal.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-4 items-center">
              <div className="md:text-right order-2 md:order-1">
                <h3 className="text-xl font-semibold mb-2">5. Gagnez des points</h3>
                <p className="text-muted-foreground">
                  Recevez des points EcoFashion en fonction du poids de vos vêtements recyclés, convertissables en
                  réductions ou en argent.
                </p>
              </div>
              <div className="flex justify-center order-1 md:order-2">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold border-4 border-white">
                  5
                </div>
              </div>
              <div className="order-3 hidden md:block">
                <img
                  src="/placeholder.svg?height=200&width=300&text=Points+gagnés"
                  alt="Points gagnés"
                  className="rounded-lg"
                  width="300"
                  height="200"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tarifs */}
      <section className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Nos tarifs de recyclage</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Gagnez des points et de l'argent en recyclant vos vêtements. Voici nos tarifs actuels.
          </p>
        </div>

        <Tabs defaultValue="particuliers" className="w-full">
          <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto mb-8">
            <TabsTrigger value="particuliers">Particuliers</TabsTrigger>
            <TabsTrigger value="professionnels">Professionnels</TabsTrigger>
          </TabsList>
          <TabsContent value="particuliers">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Vêtements standards</CardTitle>
                  <CardDescription>T-shirts, pantalons, chemises, etc.</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-4xl font-bold text-green-600 mb-2">
                    2,50 DT<span className="text-base font-normal text-muted-foreground">/kg</span>
                  </p>
                  <p className="text-lg">+ 100 points/kg</p>
                </CardContent>
                <CardFooter>
                  <ul className="space-y-2 w-full">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-sm">Coton, polyester, laine, lin</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-sm">Tous états acceptés</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-sm">Collecte à domicile disponible</span>
                    </li>
                  </ul>
                </CardFooter>
              </Card>

              <Card className="border-green-500">
                <CardHeader className="bg-green-50 dark:bg-green-950 rounded-t-lg">
                  <div className="py-1 px-3 bg-green-600 text-white rounded-full text-xs w-fit mx-auto mb-2">
                    Le plus populaire
                  </div>
                  <CardTitle>Vêtements premium</CardTitle>
                  <CardDescription>Vestes, manteaux, costumes, robes, etc.</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-4xl font-bold text-green-600 mb-2">
                    3,50 DT<span className="text-base font-normal text-muted-foreground">/kg</span>
                  </p>
                  <p className="text-lg">+ 150 points/kg</p>
                </CardContent>
                <CardFooter>
                  <ul className="space-y-2 w-full">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-sm">Matériaux de qualité supérieure</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-sm">Marques reconnues</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-sm">Collecte gratuite à partir de 5kg</span>
                    </li>
                  </ul>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Articles spéciaux</CardTitle>
                  <CardDescription>Chaussures, sacs, accessoires, etc.</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-4xl font-bold text-green-600 mb-2">
                    4,00 DT<span className="text-base font-normal text-muted-foreground">/kg</span>
                  </p>
                  <p className="text-lg">+ 200 points/kg</p>
                </CardContent>
                <CardFooter>
                  <ul className="space-y-2 w-full">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-sm">Cuir, daim, matériaux complexes</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-sm">Évaluation individuelle</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-sm">Bonus pour les articles de luxe</span>
                    </li>
                  </ul>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="professionnels">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Volume standard</CardTitle>
                  <CardDescription>10-50 kg par mois</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-4xl font-bold text-green-600 mb-2">
                    3,00 DT<span className="text-base font-normal text-muted-foreground">/kg</span>
                  </p>
                  <p className="text-lg">+ Contrat mensuel</p>
                </CardContent>
                <CardFooter>
                  <ul className="space-y-2 w-full">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-sm">Collecte hebdomadaire</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-sm">Rapport mensuel de recyclage</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-sm">Service de conseil</span>
                    </li>
                  </ul>
                </CardFooter>
              </Card>

              <Card className="border-green-500">
                <CardHeader className="bg-green-50 dark:bg-green-950 rounded-t-lg">
                  <div className="py-1 px-3 bg-green-600 text-white rounded-full text-xs w-fit mx-auto mb-2">
                    Recommandé
                  </div>
                  <CardTitle>Volume moyen</CardTitle>
                  <CardDescription>51-200 kg par mois</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-4xl font-bold text-green-600 mb-2">
                    3,50 DT<span className="text-base font-normal text-muted-foreground">/kg</span>
                  </p>
                  <p className="text-lg">+ Contrat trimestriel</p>
                </CardContent>
                <CardFooter>
                  <ul className="space-y-2 w-full">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-sm">Collectes bi-hebdomadaires</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-sm">Certification environnementale</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-sm">Support dédié</span>
                    </li>
                  </ul>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Volume élevé</CardTitle>
                  <CardDescription>Plus de 200 kg par mois</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-4xl font-bold text-green-600 mb-2">
                    4,00 DT<span className="text-base font-normal text-muted-foreground">/kg</span>
                  </p>
                  <p className="text-lg">+ Contrat annuel</p>
                </CardContent>
                <CardFooter>
                  <ul className="space-y-2 w-full">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-sm">Collectes personnalisées</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-sm">Rapports d'impact environnemental</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-sm">Gestionnaire de compte dédié</span>
                    </li>
                  </ul>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        <div className="bg-muted rounded-lg p-4 mt-8 flex items-center justify-between">
          <p className="text-sm text-muted-foreground">
            Les tarifs sont sujets à modification. La valeur finale dépend de l'état et de la qualité des vêtements. Les
            frais de collecte sont déduits du montant total sauf mention contraire.
          </p>
          <Link href="/recyclage/tarifs">
            <Button variant="link" size="sm">
              Voir tous les tarifs
            </Button>
          </Link>
        </div>
      </section>

      {/* Nos partenaires */}
      <section className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Nos entreprises partenaires</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Nous collaborons avec les meilleurs acteurs du recyclage textile pour assurer un traitement optimal de vos
            vêtements.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((partner) => (
            <div key={partner} className="flex flex-col items-center">
              <div className="w-32 h-32 bg-muted rounded-full flex items-center justify-center mb-4">
                <img
                  src={`/placeholder.svg?height=80&width=80&text=Logo+${partner}`}
                  alt={`Partenaire ${partner}`}
                  width="80"
                  height="80"
                />
              </div>
              <h3 className="text-lg font-semibold">Entreprise {partner}</h3>
              <p className="text-sm text-muted-foreground text-center">Spécialiste du recyclage textile depuis 2010</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link href="/partenaires">
            <Button variant="outline">
              Voir tous nos partenaires
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Informations pratiques */}
      <section className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Informations pratiques</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Tout ce que vous devez savoir pour faciliter votre expérience de recyclage.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Truck className="h-5 w-5 mr-2 text-muted-foreground" />
                Collecte et livraison
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1" />
                  <span className="text-sm text-muted-foreground">
                    Collecte à domicile disponible dans les grandes villes de Tunisie
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1" />
                  <span className="text-sm text-muted-foreground">Points de dépôt partenaires dans tout le pays</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1" />
                  <span className="text-sm text-muted-foreground">
                    Frais de collecte à partir de 3 DT, gratuit à partir de 10kg
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <CreditCard className="h-5 w-5 mr-2 text-muted-foreground" />
                Paiement et points
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1" />
                  <span className="text-sm text-muted-foreground">
                    Paiement par virement bancaire ou crédit sur votre compte
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1" />
                  <span className="text-sm text-muted-foreground">
                    100 points = 10 millimes (utilisables sur la plateforme)
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1" />
                  <span className="text-sm text-muted-foreground">
                    Paiement effectué dans les 7 jours après la réception des vêtements
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <HelpCircle className="h-5 w-5 mr-2 text-muted-foreground" />
                Assistance
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1" />
                  <span className="text-sm text-muted-foreground">
                    Support client disponible du lundi au vendredi, 9h-18h
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1" />
                  <span className="text-sm text-muted-foreground">Assistance par chat, email et téléphone</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1" />
                  <span className="text-sm text-muted-foreground">
                    Guides et tutoriels disponibles en ligne pour vous aider
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Questions fréquentes</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Vous avez des questions sur le recyclage ? Consultez notre FAQ ci-dessous.
          </p>
        </div>

        <Accordion type="single" collapsible className="max-w-3xl mx-auto">
          <AccordionItem value="item-1">
            <AccordionTrigger>Quels types de vêtements puis-je recycler ?</AccordionTrigger>
            <AccordionContent>
              <p className="text-muted-foreground">
                Tous les types de vêtements, textiles et accessoires sont acceptés pour le recyclage, quel que soit leur
                état. Cela inclut les t-shirts, pantalons, robes, chemises, vestes, manteaux, sous-vêtements,
                chaussettes, etc. Nous acceptons également les chaussures, sacs, ceintures et autres accessoires en
                textile, cuir ou matériaux similaires.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Comment les vêtements sont-ils recyclés ?</AccordionTrigger>
            <AccordionContent>
              <p className="text-muted-foreground">
                Le processus de recyclage varie selon le type et l'état des vêtements. Les textiles en bon état peuvent
                être réutilisés ou transformés en nouveaux vêtements. Les textiles usés sont effilochés et transformés
                en fibres qui serviront à fabriquer des matériaux d'isolation, des rembourrages, des chiffons
                industriels ou d'autres produits textiles. Les fibres peuvent également être recyclées pour produire de
                nouveaux fils.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Comment sont calculés les points et les paiements ?</AccordionTrigger>
            <AccordionContent>
              <p className="text-muted-foreground">
                Le montant du paiement et les points attribués sont calculés en fonction du poids et de la qualité des
                vêtements recyclés. Après réception, nos partenaires pèsent vos vêtements et évaluent leur état. Vous
                recevez ensuite un paiement basé sur nos tarifs (2,50 à 4,00 DT par kg) ainsi que des points (100 à 200
                points par kg). Les frais de collecte sont déduits du montant total, le cas échéant.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>Les vêtements doivent-ils être propres ?</AccordionTrigger>
            <AccordionContent>
              <p className="text-muted-foreground">
                Idéalement, les vêtements devraient être propres et secs. Cependant, nous acceptons également les
                vêtements qui ne sont pas fraîchement lavés. Les vêtements très sales ou humides peuvent réduire la
                valeur de recyclage. Pour des raisons d'hygiène et pour faciliter le processus, nous recommandons de
                laver les vêtements avant de les envoyer au recyclage.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>Puis-je suivre le processus de recyclage de mes vêtements ?</AccordionTrigger>
            <AccordionContent>
              <p className="text-muted-foreground">
                Oui, vous pouvez suivre l'état de votre demande de recyclage via votre tableau de bord sur notre
                plateforme. Vous recevrez des notifications à chaque étape importante : confirmation de la collecte,
                réception par l'entreprise de recyclage, évaluation, paiement et attribution des points. Pour les
                utilisateurs professionnels, nous fournissons également des rapports détaillés d'impact environnemental.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger>Quels sont les avantages environnementaux du recyclage textile ?</AccordionTrigger>
            <AccordionContent>
              <p className="text-muted-foreground">
                Le recyclage textile présente de nombreux avantages environnementaux : réduction des déchets envoyés aux
                décharges, économie d'eau et d'énergie par rapport à la production de nouveaux textiles, diminution des
                émissions de gaz à effet de serre, réduction de la pollution liée à la teinture et au traitement des
                textiles, et préservation des ressources naturelles. Un kilogramme de vêtements recyclés permet
                d'économiser environ 25 kg de CO2.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <div className="text-center mt-8">
          <p className="text-muted-foreground mb-4">Vous n'avez pas trouvé la réponse à votre question ?</p>
          <Link href="/contact">
            <Button className="bg-green-600 hover:bg-green-700">Contactez-nous</Button>
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="rounded-xl bg-green-50 dark:bg-green-950 p-8 md:p-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Prêt à recycler vos vêtements ?</h2>
            <p className="text-muted-foreground mb-6">
              Commencez dès aujourd'hui à contribuer à un monde plus durable tout en gagnant des points et de l'argent.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/ajouter-article?type=recyclage">
                <Button size="lg" className="bg-green-600 hover:bg-green-700">
                  Recycler maintenant
                  <Recycle className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/inscription">
                <Button size="lg" variant="outline">
                  Créer un compte
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex justify-center">
            <img
              src="/placeholder.svg?height=300&width=400&text=Recyclage+Textile"
              alt="Recycler vos vêtements"
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
