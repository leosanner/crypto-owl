import LandingPage from "@/components/landing-page";
import { signOutAction } from "./actions/auth";
import { getSession } from "@/lib/auth-session";

export default async function Home() {
	const session = await getSession();

	return <LandingPage />;
}
