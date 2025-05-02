"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { RefreshCw, Gift, Recycle, Plus, Star, ShoppingBag } from "lucide-react"
import Link from "next/link"

export default function TableauDeBord() {
  return (
    <div className="container py-10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Tableau de bord</h1>
          <p className="text-muted-foreground">Gérez vos articles, suivez vos points et consultez vos échanges.</p>
        </div>
        <Link href="/ajouter-article">
          <Button className="bg-green-600 hover:bg-green-700">
            <Plus className="mr-2 h-4 w-4" />
            Ajouter un article
          </Button>
        </Link>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Points totaux</CardTitle>
            <Star className="h-4 w-4 text-yellow-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,250</div>
            <p className="text-xs text-muted-foreground">Équivalent à 125 DT</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Articles échangés</CardTitle>
            <RefreshCw className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">+2 ce mois-ci</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Articles donnés</CardTitle>
            <Gift className="h-4 w-4 text-purple-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">7</div>
            <p className="text-xs text-muted-foreground">+1 ce mois-ci</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Articles recyclés</CardTitle>
            <Recycle className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5</div>
            <p className="text-xs text-muted-foreground">+0 ce mois-ci</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="mes-articles" className="space-y-4">
        <TabsList>
          <TabsTrigger value="mes-articles">Mes articles</TabsTrigger>
          <TabsTrigger value="echanges">Échanges</TabsTrigger>
          <TabsTrigger value="dons">Dons</TabsTrigger>
          <TabsTrigger value="recyclage">Recyclage</TabsTrigger>
        </TabsList>
        <TabsContent value="mes-articles" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <Card key={item} className="overflow-hidden">
                <div className="relative aspect-square">
                  <img
                    src="/placeholder.svg?height=400&width=400"
                    alt={`Article ${item}`}
                    className="object-cover w-full h-full"
                  />
                  <Badge
                    className={`absolute top-2 right-2 ${item % 3 === 0 ? "bg-purple-500" : item % 3 === 1 ? "bg-blue-500" : "bg-green-500"}`}
                  >
                    {item % 3 === 0 ? "Don" : item % 3 === 1 ? "Échange" : "Recyclage"}
                  </Badge>
                  <Badge className={`absolute top-2 left-2 ${item % 2 === 0 ? "bg-green-500" : "bg-red-500"}`}>
                    {item % 2 === 0 ? "Disponible" : "Indisponible"}
                  </Badge>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-lg mb-1">T-shirt {item}</h3>
                  <p className="text-sm text-muted-foreground mb-2">Taille M • Couleur Bleu</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-500 mr-1" />
                      <span className="text-sm">{(Math.random() * 5).toFixed(1)}</span>
                    </div>
                    <Button variant="outline" size="sm">
                      <ShoppingBag className="h-4 w-4 mr-1" />
                      Détails
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="echanges" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Mes échanges</CardTitle>
              <CardDescription>Historique de vos échanges avec d'autres utilisateurs.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="flex items-center gap-4 p-3 border rounded-lg">
                    <Avatar>
                      <AvatarImage src={`/placeholder.svg?height=40&width=40`} />
                      <AvatarFallback>U{item}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <h4 className="font-semibold">Échange avec Utilisateur {item}</h4>
                      <p className="text-sm text-muted-foreground">
                        T-shirt {item} contre Pantalon {item}
                      </p>
                    </div>
                    <Badge className={item % 2 === 0 ? "bg-green-500" : "bg-amber-500"}>
                      {item % 2 === 0 ? "Complété" : "En cours"}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="dons" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Mes dons</CardTitle>
              <CardDescription>Historique de vos dons aux associations.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[1, 2].map((item) => (
                  <div key={item} className="flex items-center gap-4 p-3 border rounded-lg">
                    <Avatar>
                      <AvatarImage src={`/placeholder.svg?height=40&width=40`} />
                      <AvatarFallback>A{item}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <h4 className="font-semibold">Don à Association {item}</h4>
                      <p className="text-sm text-muted-foreground">
                        {item === 1 ? "2 t-shirts, 1 pantalon" : "1 veste, 2 chemises"}
                      </p>
                    </div>
                    <Badge className="bg-green-500">Complété</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="recyclage" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Mes recyclages</CardTitle>
              <CardDescription>Historique de vos vêtements envoyés au recyclage.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[1].map((item) => (
                  <div key={item} className="flex items-center gap-4 p-3 border rounded-lg">
                    <Avatar>
                      <AvatarImage src={`/placeholder.svg?height=40&width=40`} />
                      <AvatarFallback>R{item}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <h4 className="font-semibold">Recyclage chez Entreprise {item}</h4>
                      <p className="text-sm text-muted-foreground">5 kg de vêtements • 500 points gagnés</p>
                    </div>
                    <Badge className="bg-green-500">Complété</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
