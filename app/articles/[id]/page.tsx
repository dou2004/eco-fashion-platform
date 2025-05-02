"use client"

import { useState } from "react"
import { useParams, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { toast } from "@/components/ui/use-toast"
import {
  Star,
  RefreshCw,
  Gift,
  Recycle,
  Heart,
  MessageCircle,
  Share2,
  ChevronLeft,
  MapPin,
  Truck,
  CreditCard,
  Calendar,
} from "lucide-react"
import Link from "next/link"

export default function ArticleDetailPage() {
  const params = useParams()
  const router = useRouter()
  const id = params.id
  const [selectedImage, setSelectedImage] = useState(0)
  const [isLiked, setIsLiked] = useState(false)

  // Données fictives pour la démonstration
  const article = {
    id,
    title: `Article ${id}`,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.",
    category: "T-shirt",
    size: "M",
    color: "Bleu",
    condition: "Très bon état",
    type: ["echange", "don", "recyclage"][Number(id) % 3],
    available: true,
    rating: 4.5,
    reviews: 12,
    owner: {
      id: 1,
      name: `Utilisateur ${(Number(id) % 10) + 1}`,
      rating: 4.8,
      reviews: 24,
      location: "Tunis, Tunisie",
      joinDate: "Janvier 2023",
    },
    images: [
      `/placeholder.svg?height=600&width=600&text=Image+1`,
      `/placeholder.svg?height=600&width=600&text=Image+2`,
      `/placeholder.svg?height=600&width=600&text=Image+3`,
      `/placeholder.svg?height=600&width=600&text=Image+4`,
    ],
    date: new Date().toLocaleDateString(),
  }

  // Fonction pour obtenir l'icône en fonction du type d'article
  const getTypeIcon = (type: string) => {
    switch (type) {
      case "echange":
        return <RefreshCw className="h-5 w-5 text-blue-500" />
      case "don":
        return <Gift className="h-5 w-5 text-purple-500" />
      case "recyclage":
        return <Recycle className="h-5 w-5 text-green-500" />
      default:
        return null
    }
  }

  // Fonction pour obtenir le texte en fonction du type d'article
  const getTypeText = (type: string) => {
    switch (type) {
      case "echange":
        return "Échange"
      case "don":
        return "Don"
      case "recyclage":
        return "Recyclage"
      default:
        return type
    }
  }

  // Fonction pour obtenir la couleur en fonction du type d'article
  const getTypeColor = (type: string) => {
    switch (type) {
      case "echange":
        return "bg-blue-500"
      case "don":
        return "bg-purple-500"
      case "recyclage":
        return "bg-green-500"
      default:
        return "bg-gray-500"
    }
  }

  // Fonction pour obtenir le texte du bouton d'action en fonction du type d'article
  const getActionText = (type: string) => {
    switch (type) {
      case "echange":
        return "Proposer un échange"
      case "don":
        return "Réserver cet article"
      case "recyclage":
        return "Acheter pour recyclage"
      default:
        return "Contacter"
    }
  }

  const handleAction = () => {
    toast({
      title: "Action effectuée",
      description: `Vous avez choisi de ${
        article.type === "echange"
          ? "proposer un échange"
          : article.type === "don"
            ? "réserver cet article"
            : "acheter cet article pour recyclage"
      }.`,
    })
  }

  const handleLike = () => {
    setIsLiked(!isLiked)
    toast({
      title: isLiked ? "Retiré des favoris" : "Ajouté aux favoris",
      description: isLiked ? "Cet article a été retiré de vos favoris." : "Cet article a été ajouté à vos favoris.",
    })
  }

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href)
    toast({
      title: "Lien copié",
      description: "Le lien de cet article a été copié dans le presse-papier.",
    })
  }

  return (
    <div className="container py-10">
      <Button variant="ghost" className="mb-6" onClick={() => router.back()}>
        <ChevronLeft className="mr-2 h-4 w-4" />
        Retour aux articles
      </Button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Galerie d'images */}
        <div className="space-y-4">
          <div className="aspect-square overflow-hidden rounded-lg border">
            <img
              src={article.images[selectedImage] || "/placeholder.svg"}
              alt={article.title}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex gap-2 overflow-auto pb-2">
            {article.images.map((image, index) => (
              <button
                key={index}
                className={`relative aspect-square w-20 overflow-hidden rounded-md border ${
                  selectedImage === index ? "ring-2 ring-green-600" : ""
                }`}
                onClick={() => setSelectedImage(index)}
              >
                <img
                  src={image || "/placeholder.svg"}
                  alt={`${article.title} - Image ${index + 1}`}
                  className="h-full w-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Informations sur l'article */}
        <div className="space-y-6">
          <div>
            <div className="flex items-center justify-between mb-2">
              <Badge className={`${getTypeColor(article.type)}`}>{getTypeText(article.type)}</Badge>
              <Badge className={article.available ? "bg-green-500" : "bg-red-500"}>
                {article.available ? "Disponible" : "Indisponible"}
              </Badge>
            </div>
            <h1 className="text-3xl font-bold">{article.title}</h1>
            <div className="flex items-center gap-2 mt-2">
              <div className="flex items-center">
                <Star className="h-4 w-4 text-yellow-500 mr-1" />
                <span className="text-sm">{article.rating.toFixed(1)}</span>
              </div>
              <span className="text-sm text-muted-foreground">({article.reviews} avis)</span>
              <span className="text-sm text-muted-foreground">•</span>
              <span className="text-sm text-muted-foreground">Ajouté le {article.date}</span>
            </div>
          </div>

          <Separator />

          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Catégorie</p>
              <p>{article.category}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">Taille</p>
              <p>{article.size}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">Couleur</p>
              <p>{article.color}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">État</p>
              <p>{article.condition}</p>
            </div>
          </div>

          <Separator />

          <div>
            <h2 className="text-lg font-semibold mb-2">Description</h2>
            <p className="text-muted-foreground">{article.description}</p>
          </div>

          <Separator />

          <div className="flex items-center gap-4">
            <Avatar className="h-12 w-12">
              <AvatarImage src={`/placeholder.svg?height=48&width=48&text=${article.owner.name}`} />
              <AvatarFallback>{article.owner.name.substring(0, 2)}</AvatarFallback>
            </Avatar>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-semibold">{article.owner.name}</h3>
                <div className="flex items-center">
                  <Star className="h-3 w-3 text-yellow-500 mr-0.5" />
                  <span className="text-xs">{article.owner.rating.toFixed(1)}</span>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-3 w-3" />
                <span>{article.owner.location}</span>
                <span>•</span>
                <span>Membre depuis {article.owner.joinDate}</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <Button className="bg-green-600 hover:bg-green-700" onClick={handleAction}>
              {getTypeIcon(article.type)}
              <span className="ml-2">{getActionText(article.type)}</span>
            </Button>
            <div className="flex gap-2">
              <Button variant="outline" className="flex-1" onClick={handleLike}>
                <Heart className={`mr-2 h-4 w-4 ${isLiked ? "fill-red-500 text-red-500" : ""}`} />
                {isLiked ? "Ajouté aux favoris" : "Ajouter aux favoris"}
              </Button>
              <Button
                variant="outline"
                className="flex-1"
                onClick={() => router.push(`/messages?user=${article.owner.id}`)}
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                Contacter
              </Button>
              <Button variant="outline" size="icon" onClick={handleShare}>
                <Share2 className="h-4 w-4" />
                <span className="sr-only">Partager</span>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <Tabs defaultValue="details">
          <TabsList className="w-full justify-start">
            <TabsTrigger value="details">Détails supplémentaires</TabsTrigger>
            <TabsTrigger value="delivery">Livraison et paiement</TabsTrigger>
            <TabsTrigger value="reviews">Avis ({article.reviews})</TabsTrigger>
          </TabsList>
          <TabsContent value="details" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Détails supplémentaires</CardTitle>
                <CardDescription>Informations complémentaires sur cet article</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-semibold mb-2">Matériaux</h3>
                    <p className="text-muted-foreground">Coton 100%</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Marque</h3>
                    <p className="text-muted-foreground">Marque Exemple</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Entretien</h3>
                    <p className="text-muted-foreground">Lavage en machine à 30°C</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Dimensions</h3>
                    <p className="text-muted-foreground">Longueur: 70cm, Largeur: 50cm</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="delivery" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Livraison et paiement</CardTitle>
                <CardDescription>Options de livraison et modes de paiement</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-2 flex items-center">
                    <Truck className="mr-2 h-5 w-5 text-muted-foreground" />
                    Options de livraison
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center">
                      <span className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-2">
                        1
                      </span>
                      <span>Livraison à domicile (5 DT)</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-2">
                        2
                      </span>
                      <span>Point de collecte (3 DT)</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-2">
                        3
                      </span>
                      <span>Remise en main propre (Gratuit)</span>
                    </li>
                  </ul>
                </div>
                <Separator />
                <div>
                  <h3 className="font-semibold mb-2 flex items-center">
                    <CreditCard className="mr-2 h-5 w-5 text-muted-foreground" />
                    Modes de paiement
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center">
                      <span className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-2">
                        1
                      </span>
                      <span>Carte bancaire</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-2">
                        2
                      </span>
                      <span>Paiement à la livraison</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-2">
                        3
                      </span>
                      <span>Points EcoFashion</span>
                    </li>
                  </ul>
                </div>
                <Separator />
                <div>
                  <h3 className="font-semibold mb-2 flex items-center">
                    <Calendar className="mr-2 h-5 w-5 text-muted-foreground" />
                    Délais
                  </h3>
                  <p className="text-muted-foreground">
                    Livraison estimée entre 2 et 5 jours ouvrables selon le mode de livraison choisi.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="reviews" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Avis des utilisateurs</CardTitle>
                <CardDescription>Ce que les autres utilisateurs pensent de cet article</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {[1, 2, 3].map((review) => (
                  <div key={review} className="pb-6 border-b last:border-0 last:pb-0">
                    <div className="flex items-center gap-4 mb-2">
                      <Avatar>
                        <AvatarImage src={`/placeholder.svg?height=40&width=40&text=U${review}`} />
                        <AvatarFallback>U{review}</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="font-semibold">Utilisateur {review + 10}</h4>
                          <div className="flex">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <Star
                                key={i}
                                className={`h-4 w-4 ${
                                  i < (6 - review) ? "text-yellow-500 fill-yellow-500" : "text-muted-foreground"
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                        <p className="text-xs text-muted-foreground">
                          {new Date(Date.now() - review * 7 * 24 * 60 * 60 * 1000).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                    <p className="text-muted-foreground">
                      {review === 1
                        ? "Très satisfait de cet article. La qualité est excellente et la livraison a été rapide."
                        : review === 2
                          ? "Bon article, conforme à la description. Je recommande ce vendeur."
                          : "Article correct mais la couleur est légèrement différente de celle sur les photos."}
                    </p>
                  </div>
                ))}
                <Button variant="outline" className="w-full">
                  Voir tous les avis
                </Button>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  Laisser un avis
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6">Articles similaires</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((item) => (
            <Link href={`/articles/${Number(id) + item}`} key={item} className="group">
              <Card className="overflow-hidden h-full transition-all hover:shadow-md">
                <div className="relative aspect-square">
                  <img
                    src={`/placeholder.svg?height=400&width=400&text=Article+${Number(id) + item}`}
                    alt={`Article ${Number(id) + item}`}
                    className="object-cover w-full h-full"
                  />
                  <Badge
                    className={`absolute top-2 right-2 ${getTypeColor(
                      ["echange", "don", "recyclage"][(Number(id) + item) % 3],
                    )}`}
                  >
                    {getTypeText(["echange", "don", "recyclage"][(Number(id) + item) % 3])}
                  </Badge>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-lg mb-1 group-hover:text-green-600 transition-colors">
                    Article {Number(id) + item}
                  </h3>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-500 mr-1" />
                      <span className="text-sm">{(4 + (item % 2) / 2).toFixed(1)}</span>
                    </div>
                    <p className="text-xs text-muted-foreground">Par Utilisateur {((Number(id) + item) % 10) + 1}</p>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
