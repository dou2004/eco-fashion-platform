import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container flex flex-col gap-6 py-8 md:flex-row md:gap-8 md:py-12">
        <div className="flex flex-col gap-3 md:w-1/3">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <span className="text-green-600">Eco</span>Fashion
          </Link>
          <p className="text-sm text-muted-foreground">
            Plateforme pour l'échange, le don et le recyclage de vêtements. Contribuez à un monde plus durable.
          </p>
          <div className="flex gap-4 mt-2">
            <Link href="#" className="text-muted-foreground hover:text-green-600">
              <Facebook className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-green-600">
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-green-600">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:flex-1">
          <div className="flex flex-col gap-2">
            <h3 className="text-sm font-medium">Plateforme</h3>
            <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
              <li>
                <Link href="/articles" className="hover:text-green-600">
                  Articles
                </Link>
              </li>
              <li>
                <Link href="/comment-ca-marche" className="hover:text-green-600">
                  Comment ça marche
                </Link>
              </li>
              <li>
                <Link href="/associations" className="hover:text-green-600">
                  Associations
                </Link>
              </li>
              <li>
                <Link href="/recyclage" className="hover:text-green-600">
                  Recyclage
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-sm font-medium">Compte</h3>
            <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
              <li>
                <Link href="/connexion" className="hover:text-green-600">
                  Connexion
                </Link>
              </li>
              <li>
                <Link href="/inscription" className="hover:text-green-600">
                  Inscription
                </Link>
              </li>
              <li>
                <Link href="/profil" className="hover:text-green-600">
                  Mon profil
                </Link>
              </li>
              <li>
                <Link href="/mes-articles" className="hover:text-green-600">
                  Mes articles
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-sm font-medium">Légal</h3>
            <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
              <li>
                <Link href="/conditions" className="hover:text-green-600">
                  Conditions d'utilisation
                </Link>
              </li>
              <li>
                <Link href="/confidentialite" className="hover:text-green-600">
                  Politique de confidentialité
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="hover:text-green-600">
                  Cookies
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-green-600">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t py-6">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-center text-sm text-muted-foreground md:text-left">
            © {new Date().getFullYear()} EcoFashion. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  )
}
