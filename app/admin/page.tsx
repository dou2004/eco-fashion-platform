"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckCircle, XCircle, Star, Users, ShoppingBag, Recycle, Gift, RefreshCw } from "lucide-react"

export default function AdminPage() {
  const [searchTerm, setSearchTerm] = useState("")

  return (
    <div className="container py-10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Administration</h1>
          <p className="text-muted-foreground">Gérez les articles, les utilisateurs et les transactions.</p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Utilisateurs</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,234</div>
            <p className="text-xs text-muted-foreground">+21 ce mois-ci</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Articles</CardTitle>
            <ShoppingBag className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2,543</div>
            <p className="text-xs text-muted-foreground">+145 ce mois-ci</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Échanges</CardTitle>
            <RefreshCw className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">543</div>
            <p className="text-xs text-muted-foreground">+32 ce mois-ci</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Recyclage</CardTitle>
            <Recycle className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">128</div>
            <p className="text-xs text-muted-foreground">+12 ce mois-ci</p>
          </CardContent>
        </Card>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="w-full md:w-1/3">
          <Label htmlFor="search">Rechercher</Label>
          <Input
            id="search"
            placeholder="Rechercher par nom, ID..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="w-full md:w-1/3">
          <Label htmlFor="filter">Filtrer par</Label>
          <Select defaultValue="all">
            <SelectTrigger id="filter">
              <SelectValue placeholder="Tous" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Tous</SelectItem>
              <SelectItem value="pending">En attente</SelectItem>
              <SelectItem value="approved">Approuvés</SelectItem>
              <SelectItem value="rejected">Rejetés</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="w-full md:w-1/3">
          <Label htmlFor="sort">Trier par</Label>
          <Select defaultValue="newest">
            <SelectTrigger id="sort">
              <SelectValue placeholder="Plus récent" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="newest">Plus récent</SelectItem>
              <SelectItem value="oldest">Plus ancien</SelectItem>
              <SelectItem value="name-asc">Nom (A-Z)</SelectItem>
              <SelectItem value="name-desc">Nom (Z-A)</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <Tabs defaultValue="articles" className="space-y-4">
        <TabsList>
          <TabsTrigger value="articles">Articles</TabsTrigger>
          <TabsTrigger value="utilisateurs">Utilisateurs</TabsTrigger>
          <TabsTrigger value="avis">Avis</TabsTrigger>
          <TabsTrigger value="transactions">Transactions</TabsTrigger>
        </TabsList>
        <TabsContent value="articles" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Gestion des articles</CardTitle>
              <CardDescription>Validez ou supprimez les articles mis en ligne par les utilisateurs.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[1, 2, 3, 4, 5].map((item) => (
                  <div key={item} className="flex items-center gap-4 p-3 border rounded-lg">
                    <Avatar className="h-14 w-14 rounded-md">
                      <AvatarImage src={`/placeholder.svg?height=56&width=56`} />
                      <AvatarFallback>A{item}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h4 className="font-semibold">T-shirt {item}</h4>
                        <Badge
                          className={`${item % 3 === 0 ? "bg-purple-500" : item % 3 === 1 ? "bg-blue-500" : "bg-green-500"}`}
                        >
                          {item % 3 === 0 ? "Don" : item % 3 === 1 ? "Échange" : "Recyclage"}
                        </Badge>
                        <Badge variant="outline" className="ml-2">
                          ID: #ART{1000 + item}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Ajouté par Utilisateur {item} • {new Date().toLocaleDateString()}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="icon" className="h-8 w-8 text-green-500">
                        <CheckCircle className="h-4 w-4" />
                        <span className="sr-only">Approuver</span>
                      </Button>
                      <Button variant="outline" size="icon" className="h-8 w-8 text-red-500">
                        <XCircle className="h-4 w-4" />
                        <span className="sr-only">Rejeter</span>
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="utilisateurs" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Gestion des utilisateurs</CardTitle>
              <CardDescription>
                Gérez les comptes utilisateurs, les associations et les entreprises de recyclage.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[1, 2, 3, 4, 5].map((item) => (
                  <div key={item} className="flex items-center gap-4 p-3 border rounded-lg">
                    <Avatar>
                      <AvatarImage src={`/placeholder.svg?height=40&width=40`} />
                      <AvatarFallback>U{item}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h4 className="font-semibold">Utilisateur {item}</h4>
                        <Badge variant="outline">
                          {item % 3 === 0 ? "Association" : item % 3 === 1 ? "Client" : "Entreprise"}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        utilisateur{item}@example.com • Inscrit le {new Date().toLocaleDateString()}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-500 mr-1" />
                        <span className="text-sm">{item}</span>
                      </div>
                      <Button variant="outline" size="sm">
                        Détails
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="avis" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Gestion des avis</CardTitle>
              <CardDescription>Modérez les avis laissés par les utilisateurs.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[1, 2, 3, 4, 5].map((item) => (
                  <div key={item} className="flex items-center gap-4 p-3 border rounded-lg">
                    <Avatar>
                      <AvatarImage src={`/placeholder.svg?height=40&width=40`} />
                      <AvatarFallback>U{item}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h4 className="font-semibold">Avis de Utilisateur {item}</h4>
                        <div className="flex items-center">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${i < (6 - item) ? "text-yellow-500 fill-yellow-500" : "text-muted-foreground"}`}
                            />
                          ))}
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        "Très satisfait de l'échange, article conforme à la description."
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="icon" className="h-8 w-8 text-green-500">
                        <CheckCircle className="h-4 w-4" />
                        <span className="sr-only">Approuver</span>
                      </Button>
                      <Button variant="outline" size="icon" className="h-8 w-8 text-red-500">
                        <XCircle className="h-4 w-4" />
                        <span className="sr-only">Supprimer</span>
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="transactions" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Transactions</CardTitle>
              <CardDescription>Suivez les échanges, dons et recyclages effectués sur la plateforme.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[1, 2, 3, 4, 5].map((item) => (
                  <div key={item} className="flex items-center gap-4 p-3 border rounded-lg">
                    <div
                      className={`p-2 rounded-full ${
                        item % 3 === 0
                          ? "bg-purple-100 text-purple-500"
                          : item % 3 === 1
                            ? "bg-blue-100 text-blue-500"
                            : "bg-green-100 text-green-500"
                      }`}
                    >
                      {item % 3 === 0 ? (
                        <Gift className="h-5 w-5" />
                      ) : item % 3 === 1 ? (
                        <RefreshCw className="h-5 w-5" />
                      ) : (
                        <Recycle className="h-5 w-5" />
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h4 className="font-semibold">
                          {item % 3 === 0 ? "Don" : item % 3 === 1 ? "Échange" : "Recyclage"} #{1000 + item}
                        </h4>
                        <Badge className={`${item % 2 === 0 ? "bg-green-500" : "bg-amber-500"}`}>
                          {item % 2 === 0 ? "Complété" : "En cours"}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Utilisateur {item} →{" "}
                        {item % 3 === 0 ? "Association" : item % 3 === 1 ? "Utilisateur" : "Entreprise"} {item + 2}•{" "}
                        {new Date().toLocaleDateString()}
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="font-medium">
                        {item % 3 === 0 ? "+200 points" : item % 3 === 1 ? "+100 points" : "+500 points"}
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {item % 3 === 0 ? "Frais: 0 DT" : item % 3 === 1 ? "Frais: 5 DT" : "Frais: 3 DT"}
                      </p>
                    </div>
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
