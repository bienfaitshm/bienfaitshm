import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function copyText(texte: string) {
  if (navigator.clipboard) {
    navigator.clipboard
      .writeText(texte)
      .then(() => {
        console.log("Texte copié dans le presse-papier !");
        // Optionnel : Afficher un message à l'utilisateur
        // alert("Texte copié !");
      })
      .catch((err) => {
        console.error("Erreur lors de la copie : ", err);
        // Gérer les erreurs, par exemple si l'utilisateur n'a pas autorisé l'accès au presse-papier
        // alert("Une erreur est survenue lors de la copie.");
      });
  } else {
    // Gérer les navigateurs qui ne supportent pas l'API Clipboard (voir la méthode avec execCommand ci-dessous)
    // copierTexteAncienneMethode(texte);
  }
}
