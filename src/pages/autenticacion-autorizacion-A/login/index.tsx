import Image from "next/image";
import LoginForm from "@/components/molecules/autenticacion-autorizacion-A/login-form";

export default function Index() {
  return (
    <div className="w-10/12 mx-auto my-auto lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px] place-content-center">
      <div className="hidden bg-muted lg:block">
        <Image
          src="/plane.jpeg"
          alt="Image"
          width="1920"
          height="1080"
          className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
      <LoginForm />
    </div>
  );
}
