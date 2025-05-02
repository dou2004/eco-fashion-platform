"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"
import { Loader2, Upload, RefreshCw, Gift, Recycle } from "lucide-react"

export default function AjouterArticlePage() {
  const [isLoading, setIsLoading] = useState(false)
  const [dispositionType, setDispositionType] = useState("echange")
  const router = useRouter()

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsLoading(true)

    // Simuler une requête d'ajout d'article
    setTimeout(() => {
      setIsLoading(false)
      toast({
        title: "Article ajouté",
        description: "Votre article a été ajouté avec succès.",
      })
      router.push("/tableau-de-bord")
    }, 2000)
  }

  return (
    <div className="container py-10">
      <div className="flex flex-col items-start mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Ajouter un article</h1>
        <p className="text-muted-foreground">Ajoutez un nouvel article à échanger, donner ou recycler.</p>
      </div>

      <Card className="max-w-2xl mx-auto">
        <form onSubmit={handleSubmit}>
          <CardHeader>
            <CardTitle>Informations sur l'article</CardTitle>
            <CardDescription>
              Veuillez fournir les détails de votre article et choisir le mode de disposition.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="disposition-type">Mode de disposition</Label>
              <RadioGroup
                id="disposition-type"
                value={dispositionType}
                onValueChange={setDispositionType}
                className="grid grid-cols-1 md:grid-cols-3 gap-4"
              >
                <div className="flex flex-col items-center space-y-2 border rounded-lg p-4 cursor-pointer hover:border-green-500 hover:bg-green-50 dark:hover:bg-green-950 [&:has(:checked)]:border-green-500 [&:has(:checked)]:bg-green-50 dark:hover:bg-green-950 dark:[&:has(:checked)]:bg-green-950">
                  <RefreshCw className="h-6 w-6 text-blue-500" />
                  <RadioGroupItem value="echange" id="echange" className="sr-only" />
                  <Label htmlFor="echange" className="font-medium cursor-pointer">
                    Échange
                  </Label>
                  <p className="text-xs text-center text-muted-foreground">Échangez avec d'autres utilisateurs</p>
                </div>
                <div className="flex flex-col items-center space-y-2 border rounded-lg p-4 cursor-pointer hover:border-green-500 hover:bg-green-50 dark:hover:bg-green-950 [&:has(:checked)]:border-green-500 [&:has(:checked)]:bg-green-50 dark:hover:bg-green-950 dark:[&:has(:checked)]:bg-green-950">
                  <Gift className="h-6 w-6 text-purple-500" />
                  <RadioGroupItem value="don" id="don" className="sr-only" />
                  <Label htmlFor="don" className="font-medium cursor-pointer">
                    Don
                  </Label>
                  <p className="text-xs text-center text-muted-foreground">Donnez à une association</p>
                </div>
                <div className="flex flex-col items-center space-y-2 border rounded-lg p-4 cursor-pointer hover:border-green-500 hover:bg-green-50 dark:hover:bg-green-950 [&:has(:checked)]:border-green-500 [&:has(:checked)]:bg-green-50 dark:hover:bg-green-950 dark:[&:has(:checked)]:bg-green-950">
                  <Recycle className="h-6 w-6 text-green-500" />
                  <RadioGroupItem value="recyclage" id="recyclage" className="sr-only" />
                  <Label htmlFor="recyclage" className="font-medium cursor-pointer">
                    Recyclage
                  </Label>
                  <p className="text-xs text-center text-muted-foreground">Vendez à une entreprise de recyclage</p>
                </div>
              </RadioGroup>
            </div>

            <div className="space-y-2">
              <Label htmlFor="titre">Titre</Label>
              <Input id="titre" placeholder="Ex: T-shirt bleu taille M" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                placeholder="Décrivez votre article (état, marque, etc.)"
                className="min-h-[100px]"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="categorie">Catégorie</Label>
                <Select required>
                  <SelectTrigger id="categorie">
                    <SelectValue placeholder="Sélectionner une catégorie" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="t-shirt">T-shirt</SelectItem>
                    <SelectItem value="pantalon">Pantalon</SelectItem>
                    <SelectItem value="robe">Robe</SelectItem>
                    <SelectItem value="veste">Veste</SelectItem>
                    <SelectItem value="chaussures">Chaussures</SelectItem>
                    <SelectItem value="accessoire">Accessoire</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="taille">Taille</Label>
                <Select required>
                  <SelectTrigger id="taille">
                    <SelectValue placeholder="Sélectionner une taille" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="xs">XS</SelectItem>
                    <SelectItem value="s">S</SelectItem>
                    <SelectItem value="m">M</SelectItem>
                    <SelectItem value="l">L</SelectItem>
                    <SelectItem value="xl">XL</SelectItem>
                    <SelectItem value="xxl">XXL</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="couleur">Couleur</Label>
                <Select required>
                  <SelectTrigger id="couleur">
                    <SelectValue placeholder="Sélectionner une couleur" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="noir">Noir</SelectItem>
                    <SelectItem value="blanc">Blanc</SelectItem>
                    <SelectItem value="bleu">Bleu</SelectItem>
                    <SelectItem value="rouge">Rouge</SelectItem>
                    <SelectItem value="vert">Vert</SelectItem>
                    <SelectItem value="jaune">Jaune</SelectItem>
                    <SelectItem value="autre">Autre</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="etat">État</Label>
                <Select required>
                  <SelectTrigger id="etat">
                    <SelectValue placeholder="Sélectionner un état" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="neuf">Neuf avec étiquettes</SelectItem>
                    <SelectItem value="tres-bon">Très bon état</SelectItem>
                    <SelectItem value="bon">Bon état</SelectItem>
                    <SelectItem value="usage">État d'usage</SelectItem>
                    <SelectItem value="a-recycler">À recycler</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {dispositionType === "don" && (
              <div className="space-y-2">
                <Label htmlFor="association">Association</Label>
                <Select required>
                  <SelectTrigger id="association">
                    <SelectValue placeholder="Sélectionner une association" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="asso1">Association 1</SelectItem>
                    <SelectItem value="asso2">Association 2</SelectItem>
                    <SelectItem value="asso3">Association 3</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            )}

            {dispositionType === "recyclage" && (
              <div className="space-y-2">
                <Label htmlFor="entreprise">Entreprise de recyclage</Label>
                <Select required>
                  <SelectTrigger id="entreprise">
                    <SelectValue placeholder="Sélectionner une entreprise" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="entreprise1">Entreprise 1</SelectItem>
                    <SelectItem value="entreprise2">Entreprise 2</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            )}

            <div className="space-y-2">
              <Label htmlFor="photos">Photos</Label>
              <div className="border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center">
                <Upload className="h-8 w-8 text-muted-foreground mb-2" />
                <p className="text-sm text-muted-foreground mb-1">Glissez-déposez des photos ou</p>
                <Button type="button" variant="outline" size="sm">
                  Parcourir
                </Button>
                <Input id="photos" type="file" multiple accept="image/*" className="hidden" />
                <p className="text-xs text-muted-foreground mt-2">JPG, PNG ou GIF. Max 5 MB.</p>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button type="submit" className="w-full bg-green-600 hover:bg-green-700" disabled={isLoading}>
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Ajout en cours...
                </>
              ) : (
                "Ajouter l'article"
              )}
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}
