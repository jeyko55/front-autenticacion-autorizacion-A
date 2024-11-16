import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { registerUser } from "@/utils/userService"; // Asegúrate de que la ruta sea correcta
import Link from "next/link";

export default function SignupForm() {
  const [names, setNames] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validación básica de contraseña
    if (password !== confirmPassword) {
      setError("Las contraseñas no coinciden");
      return;
    }

    try {
      const response = await registerUser(names, email, password);
      if (response?.token) {
        setSuccessMessage("Registro exitoso!");
        setError(null);
        // Opcional: limpia los campos del formulario
        setNames("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
      } else {
        setError("Hubo un problema al registrarse. Inténtalo de nuevo.");
      }
    } catch (error) {
      setError("Hubo un problema al registrarse. Inténtalo de nuevo.");
      console.error("Error en registro:", error);
    }
  };

  return (
    <div className="flex items-center justify-center py-12">
      <div className="mx-auto grid w-[350px] gap-6">
        <div className="grid gap-2 text-center">
          <h1 className="text-3xl font-bold">Regístrate</h1>
        </div>
        <form onSubmit={handleSubmit} className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="names">Nombres</Label>
            <Input
              id="names"
              type="text"
              placeholder="John"
              value={names}
              onChange={(e) => setNames(e.target.value)}
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Correo</Label>
            <Input
              id="email"
              type="email"
              placeholder="mi@correo.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Contraseña</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="confirmPassword">Confirmar contraseña</Label>
            <Input
              id="confirmPassword"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>

          {error && <p className="text-red-500 text-center">{error}</p>}
          {successMessage && (
            <div className="text-center">
              <p className="text-green-500">{successMessage}</p>
              <Link href="./login" className="text-blue-500 underline">
                Ir a iniciar sesión
              </Link>
            </div>
          )}

          <Button type="submit" className="w-full">
            Registrarse
          </Button>
          <Button variant="outline" className="w-full">
            Registrarse con Google
          </Button>
        </form>
      </div>
    </div>
  );
}
