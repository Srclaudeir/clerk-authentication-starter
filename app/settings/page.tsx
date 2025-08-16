import { UserDetails } from "../components/user-details";
import { auth } from "@clerk/nextjs/server";
import Link from "next/link";

export default async function SettingsPage() {
  await auth.protect();

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-4xl font-bold mb-8">Página de Configurações</h1>
      <div className="w-full max-w-lg">
        <UserDetails />
      </div>
      <Link
        href="/dashboard"
        className="mt-8 text-blue-500 hover:underline"
      >
        Voltar para o Dashboard
      </Link>
    </main>
  );
}
