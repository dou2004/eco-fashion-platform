"use client"

import { useParams, useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Gift, MapPin, Heart, ChevronLeft, Mail, Phone, Globe, Clock, FileText, CircleCheck } from "lucide-react"

export default function AssociationDetailPage() {
  const params = useParams()
  const router = useRouter()
  const id = params.id

  // Données fictives pour la démonstration
  const association = {
    id,
    name: `Association ${id}`,
    description:
      "Association dédiée à l'aide aux personnes vulnérables à travers la distribution de vêtements et l'insertion sociale. Notre mission est de redonner dignité et confiance aux personnes en situation de précarité.",
    longDescription:
      "Fondée en 2015, notre association s'engage à améliorer les conditions de vie des personnes vulnérables en Tunisie. Nous croyons fermement que l'accès à des vêtements décents est un droit fondamental qui contribue à la dignité et à l'inclusion sociale. Au-delà de la simple distribution de vêtements, nous proposons des programmes d'accompagnement pour aider les bénéficiaires à retrouver confiance en eux et à se réinsérer dans la société. Notre équipe de bénévoles dévoués travaille sans relâche pour trier, nettoyer et distribuer les dons, tout en offrant un soutien moral et pratique à ceux qui en ont besoin.",
    location: Number(id) % 3 === 0 ? "Tunis" : Number(id) % 3 === 1 ? "Sfax" : "Sousse",
    address: `123 Rue de l'Espoir, ${Number(id) % 3 === 0 ? "Tunis" : Number(id) % 3 === 1 ? "Sfax" : "Sousse"}, Tunisie`,
    email: `contact@association${id}.tn`,
    phone: "+216 71 234 567",
    website: `www.association${id}.tn`,
    socialMedia: "@Association" + id,
    foundedYear: 2015 + (Number(id) % 5),
    beneficiaries: 100 * Number(id),
    partnerSince: 2020 + (Number(id) % 3),
    causes: [
      Number(id) % 4 === 0
        ? "Éducation"
        : Number(id) % 4 === 1
          ? "Santé"
          : Number(id) % 4 === 2
            ? "Environnement"
            : "Lutte contre la pauvreté",
      Number(id) % 3 === 0 ? "Femmes" : Number(id) % 3 === 1 ? "Enfants" : "Familles",
    ],
    scope: Number(id) % 2 === 0 ? "Nationale" : "Locale",
    needsUrgent: [
      "Vêtements chauds pour l'hiver",
      "Vêtements pour enfants",
      "Chaussures en bon état",
      "Vêtements professionnels pour entretiens d'embauche",
    ],
    team: [
      {
        name: "Mohamed Ben Salah",
        role: "Président",
        image: `/placeholder.svg?height=100&width=100&text=MB`,
      },
      {
        name: "Leila Trabelsi",
        role: "Responsable des dons",
        image: `/placeholder.svg?height=100&width=100&text=LT`,
      },
      {
        name: "Ahmed Khelifi",
        role: "Coordinateur des bénévoles",
        image: `/placeholder.svg?height=100&width=100&text=AK`,
      },
    ],
    images: [
      `/placeholder.svg?height=400&width=600&text=Association+${id}+Image+1`,
      `/placeholder.svg?height=400&width=600&text=Association+${id}+Image+2`,
      `/placeholder.svg?height=400&width=600&text=Association+${id}+Image+3`,
      `/placeholder.svg?height=400&width=600&text=Association+${id}+Image+4`,
    ],
    testimonials: [
      {
        quote:
          "Grâce aux dons reçus via cette association, j'ai pu me présenter dignement à des entretiens d'embauche et j'ai finalement trouvé un emploi. Merci du fond du cœur !",
        author: "Sonia, 34 ans",
      },
      {
        quote:
          "Les vêtements chauds reçus cet hiver ont fait toute la différence pour ma famille. Les enfants étaient ravis de leurs nouveaux habits.",
        author: "Karim, père de 3 enfants",
      },
    ],
    impactStats: {
      clothingDistributed: 1500 * Number(id),
      familiesHelped: 300 * Number(id),
      volunteersActive: 20 + Number(id),
      eventsOrganized: 12 + (Number(id) % 10),
    },
  }

  return (
    <div className="container py-10">
      <Button variant="ghost" className="mb-6" onClick={() => router.back()}>
        <ChevronLeft className="mr-2 h-4 w-4" />
        Retour aux associations
      </Button>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden mb-6">
            <img
              src={association.images[0] || "/placeholder.svg"}
              alt={association.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
              <Badge className="mb-2 bg-purple-500">{association.scope}</Badge>
              <h1 className="text-3xl font-bold text-white">{association.name}</h1>
              <div className="flex items-center text-white/80 mt-2">
                <MapPin className="h-4 w-4 mr-1" />
                <span>{association.location}, Tunisie</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {association.images.slice(1).map((image, index) => (
              <div key={index} className="aspect-square rounded-lg overflow-hidden">
                <img
                  src={image || "/placeholder.svg"}
                  alt={`${association.name} - Image ${index + 2}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          <Tabs defaultValue="about" className="mb-8">
            <TabsList className="w-full justify-start">
              <TabsTrigger value="about">À propos</TabsTrigger>
              <TabsTrigger value="needs">Besoins actuels</TabsTrigger>
              <TabsTrigger value="impact">Impact</TabsTrigger>
              <TabsTrigger value="team">Équipe</TabsTrigger>
            </TabsList>
            <TabsContent value="about" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>À propos de {association.name}</CardTitle>
                  <CardDescription>
                    Fondée en {association.foundedYear} • Partenaire depuis {association.partnerSince}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{association.longDescription}</p>

                  <h3 className="text-lg font-semibold mt-6">Notre mission</h3>
                  <p className="text-muted-foreground">
                    Notre mission est de fournir des vêtements de qualité aux personnes dans le besoin, tout en
                    promouvant la dignité, l'inclusion sociale et le développement durable.
                  </p>

                  <h3 className="text-lg font-semibold mt-6">Nos valeurs</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    <li className="flex items-start">
                      <CircleCheck className="h-5 w-5 text-purple-500 mr-2 mt-0.5" />
                      <span>Dignité et respect</span>
                    </li>
                    <li className="flex items-start">
                      <CircleCheck className="h-5 w-5 text-purple-500 mr-2 mt-0.5" />
                      <span>Solidarité</span>
                    </li>
                    <li className="flex items-start">
                      <CircleCheck className="h-5 w-5 text-purple-500 mr-2 mt-0.5" />
                      <span>Transparence</span>
                    </li>
                    <li className="flex items-start">
                      <CircleCheck className="h-5 w-5 text-purple-500 mr-2 mt-0.5" />
                      <span>Durabilité</span>
                    </li>
                    <li className="flex items-start">
                      <CircleCheck className="h-5 w-5 text-purple-500 mr-2 mt-0.5" />
                      <span>Inclusion</span>
                    </li>
                    <li className="flex items-start">
                      <CircleCheck className="h-5 w-5 text-purple-500 mr-2 mt-0.5" />
                      <span>Engagement</span>
                    </li>
                  </ul>

                  <h3 className="text-lg font-semibold mt-6">Nos causes</h3>
                  <div className="flex flex-wrap gap-2">
                    {association.causes.map((cause, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300"
                      >
                        {cause}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="needs" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Besoins actuels</CardTitle>
                  <CardDescription>
                    Voici les types de vêtements dont {association.name} a besoin actuellement
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold">Besoins urgents</h3>
                      <ul className="space-y-2">
                        {association.needsUrgent.map((need, index) => (
                          <li key={index} className="flex items-start">
                            <Heart className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                            <span>{need}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold">Autres besoins</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <CircleCheck className="h-5 w-5 text-purple-500 mr-2 mt-0.5" />
                          <span>Vêtements pour adultes (toutes tailles)</span>
                        </li>
                        <li className="flex items-start">
                          <CircleCheck className="h-5 w-5 text-purple-500 mr-2 mt-0.5" />
                          <span>Accessoires (écharpes, gants, bonnets)</span>
                        </li>
                        <li className="flex items-start">
                          <CircleCheck className="h-5 w-5 text-purple-500 mr-2 mt-0.5" />
                          <span>Linge de maison (draps, serviettes)</span>
                        </li>
                        <li className="flex items-start">
                          <CircleCheck className="h-5 w-5 text-purple-500 mr-2 mt-0.5" />
                          <span>Sacs et cartables pour écoliers</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <Separator className="my-6" />

                  <div className="text-center">
                    <p className="text-muted-foreground mb-4">
                      Vous avez des vêtements correspondant à ces besoins ? Faites un don dès maintenant !
                    </p>
                    <Link href="/ajouter-article?type=don&association=${id}">
                      <Button className="bg-purple-600 hover:bg-purple-700">
                        Faire un don à cette association
                        <Gift className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="impact" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Notre impact</CardTitle>
                  <CardDescription>Découvrez l'impact concret de {association.name} grâce à vos dons</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                    <div className="bg-purple-50 dark:bg-purple-950 p-4 rounded-lg text-center">
                      <p className="text-3xl font-bold text-purple-600 dark:text-purple-400">
                        {association.impactStats.clothingDistributed.toLocaleString()}
                      </p>
                      <p className="text-sm text-muted-foreground">Vêtements distribués</p>
                    </div>
                    <div className="bg-purple-50 dark:bg-purple-950 p-4 rounded-lg text-center">
                      <p className="text-3xl font-bold text-purple-600 dark:text-purple-400">
                        {association.impactStats.familiesHelped.toLocaleString()}
                      </p>
                      <p className="text-sm text-muted-foreground">Familles aidées</p>
                    </div>
                    <div className="bg-purple-50 dark:bg-purple-950 p-4 rounded-lg text-center">
                      <p className="text-3xl font-bold text-purple-600 dark:text-purple-400">
                        {association.impactStats.volunteersActive}
                      </p>
                      <p className="text-sm text-muted-foreground">Bénévoles actifs</p>
                    </div>
                    <div className="bg-purple-50 dark:bg-purple-950 p-4 rounded-lg text-center">
                      <p className="text-3xl font-bold text-purple-600 dark:text-purple-400">
                        {association.impactStats.eventsOrganized}
                      </p>
                      <p className="text-sm text-muted-foreground">Événements organisés</p>
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold mb-4">Témoignages de bénéficiaires</h3>
                  <div className="space-y-4">
                    {association.testimonials.map((testimonial, index) => (
                      <Card key={index} className="bg-purple-50 dark:bg-purple-950">
                        <CardContent className="pt-6">
                          <blockquote className="border-l-4 border-purple-500 pl-4 italic text-muted-foreground mb-4">
                            "{testimonial.quote}"
                          </blockquote>
                          <p className="text-right font-medium">— {testimonial.author}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  <h3 className="text-lg font-semibold mt-8 mb-4">Rapports d'impact</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Button variant="outline" className="justify-start">
                      <FileText className="mr-2 h-4 w-4" />
                      Rapport annuel {new Date().getFullYear() - 1}
                    </Button>
                    <Button variant="outline" className="justify-start">
                      <FileText className="mr-2 h-4 w-4" />
                      Rapport d'impact trimestriel
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="team" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Notre équipe</CardTitle>
                  <CardDescription>
                    Découvrez les personnes qui font vivre {association.name} au quotidien
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {association.team.map((member, index) => (
                      <div key={index} className="flex flex-col items-center text-center">
                        <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
                          <img
                            src={member.image || "/placeholder.svg"}
                            alt={member.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <h3 className="font-semibold">{member.name}</h3>
                        <p className="text-sm text-muted-foreground">{member.role}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 text-center">
                    <h3 className="text-lg font-semibold mb-4">Rejoignez notre équipe de bénévoles</h3>
                    <p className="text-muted-foreground mb-4">
                      Vous souhaitez contribuer à notre mission ? Nous recherchons constamment des bénévoles motivés
                      pour nous aider dans nos activités.
                    </p>
                    <Button className="bg-purple-600 hover:bg-purple-700">Devenir bénévole</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Faire un don</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Vos vêtements peuvent faire une réelle différence pour les bénéficiaires de {association.name}.
              </p>
              <Link href={`/ajouter-article?type=don&association=${id}`}>
                <Button className="w-full bg-purple-600 hover:bg-purple-700">
                  <Gift className="mr-2 h-4 w-4" />
                  Faire un don maintenant
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Informations de contact</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-muted-foreground mt-0.5" />
                <div>
                  <p className="font-medium">Adresse</p>
                  <p className="text-sm text-muted-foreground">{association.address}</p>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="h-5 w-5 mr-3 text-muted-foreground mt-0.5" />
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-sm text-muted-foreground">{association.email}</p>
                </div>
              </div>
              <div className="flex items-start">
                <Phone className="h-5 w-5 mr-3 text-muted-foreground mt-0.5" />
                <div>
                  <p className="font-medium">Téléphone</p>
                  <p className="text-sm text-muted-foreground">{association.phone}</p>
                </div>
              </div>
              <div className="flex items-start">
                <Globe className="h-5 w-5 mr-3 text-muted-foreground mt-0.5" />
                <div>
                  <p className="font-medium">Site web</p>
                  <p className="text-sm text-muted-foreground">{association.website}</p>
                </div>
              </div>
              <div className="flex items-start">
                <Clock className="h-5 w-5 mr-3 text-muted-foreground mt-0.5" />
                <div>
                  <p className="font-medium">Horaires</p>
                  <p className="text-sm text-muted-foreground">Lun-Ven: 9h-17h • Sam: 10h-14h</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Causes soutenues</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {association.causes.map((cause, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300"
                  >
                    {cause}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Galerie photos</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 gap-2">
                {association.images.map((image, index) => (
                  <div key={index} className="aspect-square rounded-md overflow-hidden">
                    <img
                      src={image || "/placeholder.svg"}
                      alt={`${association.name} - Image ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <Button variant="outline" className="w-full mt-4">
                <Image className="mr-2 h-4 w-4" />
                Voir toutes les photos
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Partager</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex gap-2">
                <Button variant="outline" size="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                  <span className="sr-only">Facebook</span>
                </Button>
                <Button variant="outline" size="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                  <span className="sr-only">Instagram</span>
                </Button>
                <Button variant="outline" size="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                  <span className="sr-only">Twitter</span>
                </Button>
                <Button variant="outline" size="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                  <span className="sr-only">LinkedIn</span>
                </Button>
                <Button variant="outline" className="flex-1">
                  Copier le lien
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <section className="mt-16 mb-8">
        <h2 className="text-2xl font-bold mb-6">Autres associations qui pourraient vous intéresser</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((relatedId) => {
            const relatedAssociationId = ((Number(id) + relatedId) % 6) + 1
            return (
              <Card key={relatedId} className="overflow-hidden">
                <div className="relative h-40">
                  <img
                    src={`/placeholder.svg?height=200&width=400&text=Association+${relatedAssociationId}`}
                    alt={`Association ${relatedAssociationId}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle>Association {relatedAssociationId}</CardTitle>
                  <CardDescription className="flex items-center">
                    <MapPin className="h-3.5 w-3.5 mr-1 text-muted-foreground" />
                    {relatedAssociationId % 3 === 0 ? "Tunis" : relatedAssociationId % 3 === 1 ? "Sfax" : "Sousse"},
                    Tunisie
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge
                      variant="secondary"
                      className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300"
                    >
                      {relatedAssociationId % 4 === 0
                        ? "Éducation"
                        : relatedAssociationId % 4 === 1
                          ? "Santé"
                          : relatedAssociationId % 4 === 2
                            ? "Environnement"
                            : "Lutte contre la pauvreté"}
                    </Badge>
                  </div>
                  <Link href={`/associations/${relatedAssociationId}`}>
                    <Button size="sm" className="w-full bg-purple-600 hover:bg-purple-700">
                      Voir détails
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </section>
    </div>
  )
}
