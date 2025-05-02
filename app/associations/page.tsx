import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Gift,
  Search,
  MapPin,
  Calendar,
  Users,
  Heart,
  TrendingUp,
  CircleCheck,
  ArrowRight,
  Mail,
  Phone,
  Globe,
  Filter,
} from "lucide-react"

export default function AssociationsPage() {
  return (
    <div className="container py-10">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-16 lg:py-20 bg-gradient-to-b from-purple-50 to-white dark:from-purple-950 dark:to-background rounded-xl mb-12">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4 max-w-3xl mx-auto">
            <div className="p-3 rounded-full bg-purple-100 dark:bg-purple-900">
              <Gift className="h-8 w-8 text-purple-600 dark:text-purple-400" />
            </div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Nos associations partenaires
            </h1>
            <p className="text-muted-foreground md:text-xl max-w-[700px]">
              Découvrez les associations avec lesquelles nous collaborons pour donner une seconde vie à vos vêtements et
              aider ceux qui en ont besoin.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <Link href="/ajouter-article?type=don">
                <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                  Faire un don maintenant
                </Button>
              </Link>
              <Link href="#devenir-partenaire">
                <Button size="lg" variant="outline">
                  Devenir partenaire
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Impact des dons */}
      <section className="mb-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4">L'impact de vos dons</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Chaque vêtement donné contribue à un impact social et environnemental positif. Voici comment vos dons font
            la différence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="flex flex-col items-center text-center p-6 h-full">
            <div className="w-16 h-16 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center mb-4">
              <Users className="h-8 w-8 text-purple-600 dark:text-purple-400" />
            </div>
            <CardTitle className="mb-2">Aide aux personnes vulnérables</CardTitle>
            <CardDescription className="flex-grow">
              Vos vêtements sont distribués à des personnes en situation de précarité, des réfugiés, des sans-abris et
              des familles à faible revenu, leur offrant dignité et confort.
            </CardDescription>
          </Card>

          <Card className="flex flex-col items-center text-center p-6 h-full">
            <div className="w-16 h-16 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center mb-4">
              <Heart className="h-8 w-8 text-purple-600 dark:text-purple-400" />
            </div>
            <CardTitle className="mb-2">Soutien aux causes sociales</CardTitle>
            <CardDescription className="flex-grow">
              Les revenus générés par la vente de certains vêtements dans les boutiques solidaires financent des
              programmes d'insertion, d'éducation et d'aide sociale.
            </CardDescription>
          </Card>

          <Card className="flex flex-col items-center text-center p-6 h-full">
            <div className="w-16 h-16 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center mb-4">
              <TrendingUp className="h-8 w-8 text-purple-600 dark:text-purple-400" />
            </div>
            <CardTitle className="mb-2">Impact environnemental</CardTitle>
            <CardDescription className="flex-grow">
              En donnant vos vêtements, vous contribuez à réduire les déchets textiles et l'empreinte carbone liée à la
              production de nouveaux vêtements, favorisant ainsi l'économie circulaire.
            </CardDescription>
          </Card>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
          <div className="bg-purple-50 dark:bg-purple-950 p-6 rounded-lg">
            <p className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">15+</p>
            <p className="text-muted-foreground">Associations partenaires</p>
          </div>
          <div className="bg-purple-50 dark:bg-purple-950 p-6 rounded-lg">
            <p className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">5 000+</p>
            <p className="text-muted-foreground">Vêtements donnés</p>
          </div>
          <div className="bg-purple-50 dark:bg-purple-950 p-6 rounded-lg">
            <p className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">2 500+</p>
            <p className="text-muted-foreground">Bénéficiaires aidés</p>
          </div>
          <div className="bg-purple-50 dark:bg-purple-950 p-6 rounded-lg">
            <p className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">10 tonnes</p>
            <p className="text-muted-foreground">Déchets textiles évités</p>
          </div>
        </div>
      </section>

      {/* Recherche et filtres */}
      <section className="mb-8">
        <div className="flex flex-col md:flex-row gap-4 items-end">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Rechercher une association..." className="pl-8" />
            </div>
          </div>
          <div className="w-full md:w-48">
            <Select>
              <SelectTrigger>
                <Filter className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Région" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Toutes les régions</SelectItem>
                <SelectItem value="tunis">Tunis</SelectItem>
                <SelectItem value="sfax">Sfax</SelectItem>
                <SelectItem value="sousse">Sousse</SelectItem>
                <SelectItem value="other">Autres régions</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="w-full md:w-48">
            <Select>
              <SelectTrigger>
                <Filter className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Cause" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Toutes les causes</SelectItem>
                <SelectItem value="poverty">Lutte contre la pauvreté</SelectItem>
                <SelectItem value="education">Éducation</SelectItem>
                <SelectItem value="environment">Environnement</SelectItem>
                <SelectItem value="health">Santé</SelectItem>
                <SelectItem value="other">Autres causes</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      {/* Liste des associations */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Nos associations partenaires</h2>

        <Tabs defaultValue="all" className="w-full mb-6">
          <TabsList>
            <TabsTrigger value="all">Toutes</TabsTrigger>
            <TabsTrigger value="featured">En vedette</TabsTrigger>
            <TabsTrigger value="recent">Récentes</TabsTrigger>
            <TabsTrigger value="popular">Populaires</TabsTrigger>
          </TabsList>
        </Tabs>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((association) => (
            <Card key={association} className="overflow-hidden">
              <div className="relative h-48">
                <img
                  src={`/placeholder.svg?height=200&width=400&text=Association+${association}`}
                  alt={`Association ${association}`}
                  className="w-full h-full object-cover"
                />
                {association % 3 === 0 && <Badge className="absolute top-2 right-2 bg-purple-500">En vedette</Badge>}
              </div>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle>Association {association}</CardTitle>
                  <Badge variant="outline">{association % 2 === 0 ? "Nationale" : "Locale"}</Badge>
                </div>
                <CardDescription className="flex items-center">
                  <MapPin className="h-3.5 w-3.5 mr-1 text-muted-foreground" />
                  {association % 3 === 0 ? "Tunis" : association % 3 === 1 ? "Sfax" : "Sousse"}, Tunisie
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge
                    variant="secondary"
                    className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300"
                  >
                    {association % 4 === 0
                      ? "Éducation"
                      : association % 4 === 1
                        ? "Santé"
                        : association % 4 === 2
                          ? "Environnement"
                          : "Lutte contre la pauvreté"}
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300"
                  >
                    {association % 3 === 0 ? "Femmes" : association % 3 === 1 ? "Enfants" : "Familles"}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  {association % 2 === 0
                    ? "Association dédiée à l'aide aux personnes vulnérables à travers la distribution de vêtements et l'insertion sociale."
                    : "Organisation qui œuvre pour l'amélioration des conditions de vie des familles défavorisées et la protection de l'environnement."}
                </p>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Calendar className="h-3.5 w-3.5 mr-1" />
                  <span>Partenaire depuis {2020 + (association % 3)} • </span>
                  <Users className="h-3.5 w-3.5 mx-1" />
                  <span>{100 * association}+ bénéficiaires</span>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm">
                  <Mail className="h-4 w-4 mr-1" />
                  Contacter
                </Button>
                <Link href={`/associations/${association}`}>
                  <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                    Voir détails
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <Button variant="outline">
            Voir plus d'associations
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      {/* Processus de don */}
      <section className="mb-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4">Comment faire un don ?</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Faire un don de vêtements est simple et gratifiant. Suivez ces étapes pour contribuer à une bonne cause.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 -translate-x-1/2 border-l border-dashed border-purple-300 h-full z-0 hidden md:block"></div>
          <div className="space-y-12 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-4 items-center">
              <div className="md:text-right order-2 md:order-1">
                <h3 className="text-xl font-semibold mb-2">1. Triez vos vêtements</h3>
                <p className="text-muted-foreground">
                  Sélectionnez les vêtements en bon état que vous souhaitez donner. Assurez-vous qu'ils soient propres
                  et portables.
                </p>
              </div>
              <div className="flex justify-center order-1 md:order-2">
                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-bold border-4 border-white dark:border-background">
                  1
                </div>
              </div>
              <div className="order-3 hidden md:block">
                <img
                  src="/placeholder.svg?height=180&width=280&text=Tri+de+vêtements"
                  alt="Tri de vêtements"
                  className="rounded-lg"
                  width="280"
                  height="180"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-4 items-center">
              <div className="hidden md:block order-1">
                <img
                  src="/placeholder.svg?height=180&width=280&text=Choix+d'association"
                  alt="Choix d'association"
                  className="rounded-lg"
                  width="280"
                  height="180"
                />
              </div>
              <div className="flex justify-center order-2">
                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-bold border-4 border-white dark:border-background">
                  2
                </div>
              </div>
              <div className="order-3">
                <h3 className="text-xl font-semibold mb-2">2. Choisissez une association</h3>
                <p className="text-muted-foreground">
                  Parcourez notre liste d'associations partenaires et choisissez celle qui correspond à vos valeurs et à
                  votre localisation.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-4 items-center">
              <div className="md:text-right order-2 md:order-1">
                <h3 className="text-xl font-semibold mb-2">3. Créez votre annonce de don</h3>
                <p className="text-muted-foreground">
                  Sur notre plateforme, créez une annonce en précisant les vêtements que vous souhaitez donner, avec
                  photos et descriptions.
                </p>
              </div>
              <div className="flex justify-center order-1 md:order-2">
                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-bold border-4 border-white dark:border-background">
                  3
                </div>
              </div>
              <div className="order-3 hidden md:block">
                <img
                  src="/placeholder.svg?height=180&width=280&text=Création+d'annonce"
                  alt="Création d'annonce"
                  className="rounded-lg"
                  width="280"
                  height="180"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-4 items-center">
              <div className="hidden md:block order-1">
                <img
                  src="/placeholder.svg?height=180&width=280&text=Livraison+ou+collecte"
                  alt="Livraison ou collecte"
                  className="rounded-lg"
                  width="280"
                  height="180"
                />
              </div>
              <div className="flex justify-center order-2">
                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-bold border-4 border-white dark:border-background">
                  4
                </div>
              </div>
              <div className="order-3">
                <h3 className="text-xl font-semibold mb-2">4. Livrez ou faites collecter vos dons</h3>
                <p className="text-muted-foreground">
                  Déposez vos vêtements directement à l'association ou utilisez notre service de collecte à domicile
                  pour les dons volumineux.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-4 items-center">
              <div className="md:text-right order-2 md:order-1">
                <h3 className="text-xl font-semibold mb-2">5. Recevez votre attestation et vos points</h3>
                <p className="text-muted-foreground">
                  Après confirmation de votre don, recevez une attestation fiscale et des points de générosité sur notre
                  plateforme.
                </p>
              </div>
              <div className="flex justify-center order-1 md:order-2">
                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-bold border-4 border-white dark:border-background">
                  5
                </div>
              </div>
              <div className="order-3 hidden md:block">
                <img
                  src="/placeholder.svg?height=180&width=280&text=Attestation+et+points"
                  alt="Attestation et points"
                  className="rounded-lg"
                  width="280"
                  height="180"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-10">
          <Link href="/ajouter-article?type=don">
            <Button className="bg-purple-600 hover:bg-purple-700">
              Faire un don maintenant
              <Gift className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Témoignages */}
      <section className="mb-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4">Témoignages</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Découvrez ce que nos associations partenaires et les bénéficiaires ont à dire sur l'impact de vos dons.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-purple-50 dark:bg-purple-950">
            <CardContent className="pt-6">
              <blockquote className="border-l-4 border-purple-500 pl-4 italic text-muted-foreground mb-6">
                "Grâce aux dons de vêtements reçus via EcoFashion, notre association a pu habiller plus de 200 familles
                cet hiver. La qualité des vêtements et la simplicité du processus ont fait toute la différence pour
                notre organisation."
              </blockquote>
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center mr-3">
                  <Users className="h-5 w-5 text-purple-600" />
                </div>
                <div>
                  <p className="font-medium">Sarah Ben Ali</p>
                  <p className="text-xs text-muted-foreground">Directrice, Association 1</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-purple-50 dark:bg-purple-950">
            <CardContent className="pt-6">
              <blockquote className="border-l-4 border-purple-500 pl-4 italic text-muted-foreground mb-6">
                "En tant que bénéficiaire, je tiens à remercier tous les donateurs. Recevoir des vêtements de qualité
                m'a redonné confiance pour mes entretiens d'embauche. Aujourd'hui, j'ai retrouvé un emploi et je
                commence à faire des dons à mon tour."
              </blockquote>
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center mr-3">
                  <Users className="h-5 w-5 text-purple-600" />
                </div>
                <div>
                  <p className="font-medium">Karim Mansour</p>
                  <p className="text-xs text-muted-foreground">Bénéficiaire devenu donateur</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Devenir partenaire */}
      <section className="mb-16" id="devenir-partenaire">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4">Devenir une association partenaire</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Vous représentez une association et souhaitez rejoindre notre réseau ? Découvrez les avantages et le
            processus pour devenir partenaire.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-purple-600 dark:text-purple-400">
              Les avantages du partenariat
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CircleCheck className="h-5 w-5 text-purple-500 mr-2 mt-0.5" />
                <span>Accès à un flux régulier de dons de vêtements de qualité</span>
              </li>
              <li className="flex items-start">
                <CircleCheck className="h-5 w-5 text-purple-500 mr-2 mt-0.5" />
                <span>Visibilité sur notre plateforme et nos réseaux sociaux</span>
              </li>
              <li className="flex items-start">
                <CircleCheck className="h-5 w-5 text-purple-500 mr-2 mt-0.5" />
                <span>Outils de gestion des dons et de suivi des stocks</span>
              </li>
              <li className="flex items-start">
                <CircleCheck className="h-5 w-5 text-purple-500 mr-2 mt-0.5" />
                <span>Participation à nos événements communautaires</span>
              </li>
              <li className="flex items-start">
                <CircleCheck className="h-5 w-5 text-purple-500 mr-2 mt-0.5" />
                <span>Soutien logistique pour la collecte et le tri des vêtements</span>
              </li>
            </ul>

            <h3 className="text-xl font-bold mt-8 mb-4">Critères d'éligibilité</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CircleCheck className="h-5 w-5 text-purple-500 mr-2 mt-0.5" />
                <span>Être une association légalement enregistrée en Tunisie</span>
              </li>
              <li className="flex items-start">
                <CircleCheck className="h-5 w-5 text-purple-500 mr-2 mt-0.5" />
                <span>Avoir une mission sociale ou environnementale claire</span>
              </li>
              <li className="flex items-start">
                <CircleCheck className="h-5 w-5 text-purple-500 mr-2 mt-0.5" />
                <span>Disposer d'une structure pour la réception et la distribution des dons</span>
              </li>
              <li className="flex items-start">
                <CircleCheck className="h-5 w-5 text-purple-500 mr-2 mt-0.5" />
                <span>S'engager à fournir des rapports d'impact réguliers</span>
              </li>
            </ul>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Contactez-nous pour devenir partenaire</CardTitle>
              <CardDescription>
                Remplissez ce formulaire et notre équipe vous contactera dans les plus brefs délais.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="association-name" className="text-sm font-medium">
                  Nom de l'association
                </label>
                <Input id="association-name" placeholder="Entrez le nom de votre association" />
              </div>
              <div className="space-y-2">
                <label htmlFor="contact-name" className="text-sm font-medium">
                  Nom du contact
                </label>
                <Input id="contact-name" placeholder="Entrez votre nom complet" />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <Input id="email" type="email" placeholder="votre@email.com" />
              </div>
              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium">
                  Téléphone
                </label>
                <Input id="phone" type="tel" placeholder="Votre numéro de téléphone" />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  className="min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="Décrivez votre association et comment vous souhaitez collaborer avec nous"
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-purple-600 hover:bg-purple-700">Envoyer la demande</Button>
            </CardFooter>
          </Card>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4">Questions fréquentes</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Vous avez des questions sur les dons aux associations ? Consultez notre FAQ.
          </p>
        </div>

        <Accordion type="single" collapsible className="max-w-3xl mx-auto">
          <AccordionItem value="item-1">
            <AccordionTrigger>Quels types de vêtements puis-je donner ?</AccordionTrigger>
            <AccordionContent>
              <p className="text-muted-foreground">
                Vous pouvez donner tous types de vêtements en bon état : t-shirts, pantalons, robes, chemises, vestes,
                manteaux, sous-vêtements neufs, chaussettes, etc. Les vêtements doivent être propres, sans trous ni
                taches importantes. Pour les vêtements très usés, nous vous recommandons plutôt l'option de recyclage
                textile.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Comment puis-je obtenir une attestation fiscale pour mes dons ?</AccordionTrigger>
            <AccordionContent>
              <p className="text-muted-foreground">
                Une fois votre don confirmé par l'association, vous recevrez automatiquement une attestation fiscale par
                email. Cette attestation détaille la nature et la valeur estimée de votre don, conformément à la
                législation tunisienne. Vous pourrez également retrouver toutes vos attestations dans votre espace
                personnel sur notre plateforme.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Comment sont sélectionnées les associations partenaires ?</AccordionTrigger>
            <AccordionContent>
              <p className="text-muted-foreground">
                Nos associations partenaires sont sélectionnées selon des critères stricts : légalité de leur statut,
                transparence financière, impact social ou environnemental mesurable, capacité logistique à gérer les
                dons, et engagement éthique. Nous effectuons des visites sur place et demandons des rapports réguliers
                pour assurer que les dons sont utilisés conformément à leur mission.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>Puis-je choisir qui bénéficiera de mes dons ?</AccordionTrigger>
            <AccordionContent>
              <p className="text-muted-foreground">
                Oui, vous pouvez choisir l'association à laquelle vous souhaitez faire don de vos vêtements. Chaque
                association sur notre plateforme précise sa mission et les populations qu'elle aide. Vous pouvez ainsi
                orienter vos dons vers des causes qui vous tiennent à cœur : aide aux enfants, aux femmes en difficulté,
                aux réfugiés, aux sans-abris, etc.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>Comment fonctionne le service de collecte à domicile ?</AccordionTrigger>
            <AccordionContent>
              <p className="text-muted-foreground">
                Notre service de collecte à domicile est disponible pour les dons volumineux (minimum 5kg de vêtements).
                Lors de la création de votre annonce de don, sélectionnez l'option "Collecte à domicile" et choisissez
                une date et un créneau horaire qui vous conviennent. Un membre de notre équipe ou de l'association
                partenaire viendra récupérer vos vêtements à l'adresse indiquée. Ce service est gratuit, mais un
                pourboire pour le collecteur est toujours apprécié.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger>Combien de points puis-je gagner en faisant un don ?</AccordionTrigger>
            <AccordionContent>
              <p className="text-muted-foreground">
                Pour chaque kilogramme de vêtements donnés, vous recevez 200 points sur notre plateforme. Ces points
                peuvent être convertis en réductions, en services premium ou même en dons supplémentaires. Le nombre
                exact de points est calculé après réception et pesée de vos vêtements par l'association. Vous recevez
                une notification dès que les points sont crédités sur votre compte.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <div className="text-center mt-8">
          <p className="text-muted-foreground mb-4">Vous avez d'autres questions ?</p>
          <Link href="/contact">
            <Button className="bg-purple-600 hover:bg-purple-700">Contactez-nous</Button>
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="rounded-xl bg-purple-50 dark:bg-purple-950 p-8 md:p-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Prêt à faire la différence ?</h2>
            <p className="text-muted-foreground mb-6">
              Vos vêtements inutilisés peuvent transformer des vies. Faites un don dès aujourd'hui et contribuez à un
              monde plus solidaire et durable.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/ajouter-article?type=don">
                <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                  Faire un don
                  <Gift className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/articles?type=don">
                <Button size="lg" variant="outline">
                  Voir les besoins actuels
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex justify-center">
            <img
              src="/placeholder.svg?height=300&width=400&text=Faire+un+don"
              alt="Faire un don de vêtements"
              className="rounded-lg"
              width="400"
              height="300"
            />
          </div>
        </div>
      </section>

      {/* Coordonnées */}
      <section className="mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-center">
            <Mail className="h-5 w-5 mr-3 text-purple-600" />
            <div>
              <p className="font-medium">Email</p>
              <p className="text-sm text-muted-foreground">associations@ecofashion.tn</p>
            </div>
          </div>
          <div className="flex items-center">
            <Phone className="h-5 w-5 mr-3 text-purple-600" />
            <div>
              <p className="font-medium">Téléphone</p>
              <p className="text-sm text-muted-foreground">+216 71 234 567</p>
            </div>
          </div>
          <div className="flex items-center">
            <Globe className="h-5 w-5 mr-3 text-purple-600" />
            <div>
              <p className="font-medium">Réseaux sociaux</p>
              <p className="text-sm text-muted-foreground">@EcoFashionTunisie</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
