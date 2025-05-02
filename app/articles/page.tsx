"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Star, Search, RefreshCw, Gift, Recycle, SlidersHorizontal } from "lucide-react"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Link from "next/link"

// Articles fictifs pour la démonstration
const ARTICLES = Array.from({ length: 24 }).map((_, i) => ({
  id: i + 1,
  title: `Article ${i + 1}`,
  category: ["T-shirt", "Pantalon", "Robe", "Veste", "Chaussures", "Accessoire"][i % 6],
  size: ["XS", "S", "M", "L", "XL", "XXL"][i % 6],
  color: ["Noir", "Blanc", "Bleu", "Rouge", "Vert", "Jaune"][i % 6],
  condition: ["Neuf", "Très bon état", "Bon état", "État d'usage", "À recycler"][i % 5],
  type: ["echange", "don", "recyclage"][i % 3],
  available: i % 4 !== 0,
  rating: (3 + (i % 3)) / 1,
  owner: `Utilisateur ${(i % 10) + 1}`,
  date: new Date(Date.now() - i * 24 * 60 * 60 * 1000).toLocaleDateString(),
}))

export default function ArticlesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [articles, setArticles] = useState(ARTICLES)
  const [filters, setFilters] = useState({
    category: "",
    size: "",
    color: "",
    condition: "",
    type: "",
    available: true,
    priceRange: [0, 100],
  })

  // Filtrer les articles en fonction des critères
  const filteredArticles = articles.filter((article) => {
    // Recherche par titre
    if (
      searchTerm &&
      !article.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      !article.category.toLowerCase().includes(searchTerm.toLowerCase())
    ) {
      return false
    }

    // Filtres par catégorie
    if (filters.category && article.category !== filters.category) {
      return false
    }

    // Filtres par taille
    if (filters.size && article.size !== filters.size) {
      return false
    }

    // Filtres par couleur
    if (filters.color && article.color !== filters.color) {
      return false
    }

    // Filtres par état
    if (filters.condition && article.condition !== filters.condition) {
      return false
    }

    // Filtres par type
    if (filters.type && article.type !== filters.type) {
      return false
    }

    // Filtres par disponibilité
    if (filters.available && !article.available) {
      return false
    }

    return true
  })

  // Réinitialiser les filtres
  const resetFilters = () => {
    setFilters({
      category: "",
      size: "",
      color: "",
      condition: "",
      type: "",
      available: true,
      priceRange: [0, 100],
    })
    setSearchTerm("")
  }

  // Fonction pour obtenir l'icône en fonction du type d'article
  const getTypeIcon = (type: string) => {
    switch (type) {
      case "echange":
        return <RefreshCw className="h-4 w-4 text-blue-500" />
      case "don":
        return <Gift className="h-4 w-4 text-purple-500" />
      case "recyclage":
        return <Recycle className="h-4 w-4 text-green-500" />
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

  return (
    <div className="container py-10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Articles</h1>
          <p className="text-muted-foreground">
            Découvrez les articles disponibles pour l'échange, le don ou le recyclage.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="sm" className="h-9">
                <SlidersHorizontal className="mr-2 h-4 w-4" />
                Filtres
              </Button>
            </SheetTrigger>
            <SheetContent className="sm:max-w-md">
              <SheetHeader>
                <SheetTitle>Filtres</SheetTitle>
                <SheetDescription>Affinez votre recherche d'articles</SheetDescription>
              </SheetHeader>
              <div className="grid gap-4 py-4">
                <div className="space-y-2">
                  <Label htmlFor="category">Catégorie</Label>
                  <Select
                    value={filters.category}
                    onValueChange={(value) => setFilters({ ...filters, category: value })}
                  >
                    <SelectTrigger id="category">
                      <SelectValue placeholder="Toutes les catégories" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Toutes les catégories</SelectItem>
                      <SelectItem value="T-shirt">T-shirt</SelectItem>
                      <SelectItem value="Pantalon">Pantalon</SelectItem>
                      <SelectItem value="Robe">Robe</SelectItem>
                      <SelectItem value="Veste">Veste</SelectItem>
                      <SelectItem value="Chaussures">Chaussures</SelectItem>
                      <SelectItem value="Accessoire">Accessoire</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="size">Taille</Label>
                  <Select value={filters.size} onValueChange={(value) => setFilters({ ...filters, size: value })}>
                    <SelectTrigger id="size">
                      <SelectValue placeholder="Toutes les tailles" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Toutes les tailles</SelectItem>
                      <SelectItem value="XS">XS</SelectItem>
                      <SelectItem value="S">S</SelectItem>
                      <SelectItem value="M">M</SelectItem>
                      <SelectItem value="L">L</SelectItem>
                      <SelectItem value="XL">XL</SelectItem>
                      <SelectItem value="XXL">XXL</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="color">Couleur</Label>
                  <Select value={filters.color} onValueChange={(value) => setFilters({ ...filters, color: value })}>
                    <SelectTrigger id="color">
                      <SelectValue placeholder="Toutes les couleurs" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Toutes les couleurs</SelectItem>
                      <SelectItem value="Noir">Noir</SelectItem>
                      <SelectItem value="Blanc">Blanc</SelectItem>
                      <SelectItem value="Bleu">Bleu</SelectItem>
                      <SelectItem value="Rouge">Rouge</SelectItem>
                      <SelectItem value="Vert">Vert</SelectItem>
                      <SelectItem value="Jaune">Jaune</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="condition">État</Label>
                  <Select
                    value={filters.condition}
                    onValueChange={(value) => setFilters({ ...filters, condition: value })}
                  >
                    <SelectTrigger id="condition">
                      <SelectValue placeholder="Tous les états" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Tous les états</SelectItem>
                      <SelectItem value="Neuf">Neuf avec étiquettes</SelectItem>
                      <SelectItem value="Très bon état">Très bon état</SelectItem>
                      <SelectItem value="Bon état">Bon état</SelectItem>
                      <SelectItem value="État d'usage">État d'usage</SelectItem>
                      <SelectItem value="À recycler">À recycler</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="type">Type</Label>
                  <Select value={filters.type} onValueChange={(value) => setFilters({ ...filters, type: value })}>
                    <SelectTrigger id="type">
                      <SelectValue placeholder="Tous les types" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Tous les types</SelectItem>
                      <SelectItem value="echange">Échange</SelectItem>
                      <SelectItem value="don">Don</SelectItem>
                      <SelectItem value="recyclage">Recyclage</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="available"
                    checked={filters.available}
                    onCheckedChange={(checked) => setFilters({ ...filters, available: checked as boolean })}
                  />
                  <Label htmlFor="available">Afficher uniquement les articles disponibles</Label>
                </div>
              </div>
              <SheetFooter>
                <SheetClose asChild>
                  <Button variant="outline" onClick={resetFilters}>
                    Réinitialiser
                  </Button>
                </SheetClose>
                <SheetClose asChild>
                  <Button className="bg-green-600 hover:bg-green-700">Appliquer</Button>
                </SheetClose>
              </SheetFooter>
            </SheetContent>
          </Sheet>
          <div className="relative w-full md:w-auto">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Rechercher..."
              className="w-full md:w-[200px] pl-8"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        {filters.category && (
          <Badge variant="outline" className="flex items-center gap-1">
            Catégorie: {filters.category}
            <button
              className="ml-1 rounded-full hover:bg-muted"
              onClick={() => setFilters({ ...filters, category: "" })}
            >
              ×
            </button>
          </Badge>
        )}
        {filters.size && (
          <Badge variant="outline" className="flex items-center gap-1">
            Taille: {filters.size}
            <button className="ml-1 rounded-full hover:bg-muted" onClick={() => setFilters({ ...filters, size: "" })}>
              ×
            </button>
          </Badge>
        )}
        {filters.color && (
          <Badge variant="outline" className="flex items-center gap-1">
            Couleur: {filters.color}
            <button className="ml-1 rounded-full hover:bg-muted" onClick={() => setFilters({ ...filters, color: "" })}>
              ×
            </button>
          </Badge>
        )}
        {filters.condition && (
          <Badge variant="outline" className="flex items-center gap-1">
            État: {filters.condition}
            <button
              className="ml-1 rounded-full hover:bg-muted"
              onClick={() => setFilters({ ...filters, condition: "" })}
            >
              ×
            </button>
          </Badge>
        )}
        {filters.type && (
          <Badge variant="outline" className="flex items-center gap-1">
            Type: {getTypeText(filters.type)}
            <button className="ml-1 rounded-full hover:bg-muted" onClick={() => setFilters({ ...filters, type: "" })}>
              ×
            </button>
          </Badge>
        )}
        {(filters.category || filters.size || filters.color || filters.condition || filters.type) && (
          <Button variant="ghost" size="sm" onClick={resetFilters} className="h-7 px-2 text-xs">
            Effacer tous les filtres
          </Button>
        )}
      </div>

      {filteredArticles.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <div className="rounded-full bg-muted p-3 mb-4">
            <Search className="h-6 w-6 text-muted-foreground" />
          </div>
          <h3 className="text-lg font-semibold mb-2">Aucun article trouvé</h3>
          <p className="text-muted-foreground max-w-md">
            Nous n'avons trouvé aucun article correspondant à vos critères. Essayez de modifier vos filtres ou votre
            recherche.
          </p>
          <Button variant="outline" onClick={resetFilters} className="mt-4">
            Réinitialiser les filtres
          </Button>
        </div>
      ) : (
        <>
          <p className="text-sm text-muted-foreground mb-4">
            {filteredArticles.length} article{filteredArticles.length > 1 ? "s" : ""} trouvé
            {filteredArticles.length > 1 ? "s" : ""}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredArticles.map((article) => (
              <Link href={`/articles/${article.id}`} key={article.id} className="group">
                <Card className="overflow-hidden h-full transition-all hover:shadow-md">
                  <div className="relative aspect-square">
                    <img
                      src={`/placeholder.svg?height=400&width=400&text=${article.title}`}
                      alt={article.title}
                      className="object-cover w-full h-full"
                    />
                    <Badge className={`absolute top-2 right-2 ${getTypeColor(article.type)}`}>
                      {getTypeText(article.type)}
                    </Badge>
                    <Badge className={`absolute top-2 left-2 ${article.available ? "bg-green-500" : "bg-red-500"}`}>
                      {article.available ? "Disponible" : "Indisponible"}
                    </Badge>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-lg mb-1 group-hover:text-green-600 transition-colors">
                      {article.title}
                    </h3>
                    <div className="flex flex-wrap gap-1 mb-2">
                      <Badge variant="outline" className="text-xs">
                        {article.category}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        {article.size}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        {article.color}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">{article.condition}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-500 mr-1" />
                        <span className="text-sm">{article.rating.toFixed(1)}</span>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        Par {article.owner} • {article.date}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          {filteredArticles.length > 12 && (
            <div className="flex justify-center mt-8">
              <Button variant="outline">Charger plus d'articles</Button>
            </div>
          )}
        </>
      )}
    </div>
  )
}
