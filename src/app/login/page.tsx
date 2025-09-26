import LoginForm from "@/components/sections/LoginForm/LoginForm";
import Link from "next/link";

export default function Login() {

    return(
        <>

            <p>Essa é tela de login!</p>

            <Link href={"/"}>Voltar para Landing Page</Link>

            <LoginForm/>
        
        
        </>
    )
}