"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { toast } from "@/components/ui/use-toast"
import { Loader2 } from "lucide-react"

export default function InscriptionPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [userType, setUserType] = useState("client")

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsLoading(true)

    // Simuler une requête d'inscription
    setTimeout(() => {
      setIsLoading(false)
      toast({
        title: "Inscription réussie",
        description: "Votre compte a été créé avec succès. Vous pouvez maintenant vous connecter.",
      })
    }, 2000)
  }

  return (
    <div className="container flex items-center justify-center py-10 md:py-12">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl">Créer un compte</CardTitle>
          <CardDescription>Rejoignez notre communauté pour échanger, donner ou recycler vos vêtements.</CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="user-type">Type de compte</Label>
              <RadioGroup
                id="user-type"
                value={userType}
                onValueChange={setUserType}
                className="flex flex-col space-y-1"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="client" id="client" />
                  <Label htmlFor="client">Client</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="association" id="association" />
                  <Label htmlFor="association">Administrateur d'association</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="recyclage" id="recyclage" />
                  <Label htmlFor="recyclage">Entreprise de recyclage</Label>
                </div>
              </RadioGroup>
            </div>

            <div className="space-y-2">
              <Label htmlFor="nom">Nom</Label>
              <Input id="nom" placeholder="Votre nom" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="prenom">Prénom</Label>
              <Input id="prenom" placeholder="Votre prénom" required />
            </div>

            {userType === "association" && (
              <div className="space-y-2">
                <Label htmlFor="nom-association">Nom de l'association</Label>
                <Input id="nom-association" placeholder="Nom de votre association" required />
              </div>
            )}

            {userType === "recyclage" && (
              <div className="space-y-2">
                <Label htmlFor="nom-entreprise">Nom de l'entreprise</Label>
                <Input id="nom-entreprise" placeholder="Nom de votre entreprise" required />
              </div>
            )}

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="votre@email.com" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="telephone">Téléphone</Label>
              <Input id="telephone" type="tel" placeholder="Votre numéro de téléphone" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Mot de passe</Label>
              <Input id="password" type="password" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="confirm-password">Confirmer le mot de passe</Label>
              <Input id="confirm-password" type="password" required />
            </div>
          </CardContent>
          <CardFooter className="flex flex-col space-y-2">
            <Button type="submit" className="w-full bg-green-600 hover:bg-green-700" disabled={isLoading}>
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Inscription en cours...
                </>
              ) : (
                "S'inscrire"
              )}
            </Button>
            <div className="text-center text-sm text-muted-foreground mt-2">
              Vous avez déjà un compte?{" "}
              <Link href="/connexion" className="text-green-600 hover:underline">
                Se connecter
              </Link>
            </div>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}
