import { createBrowserRouter } from "react-router-dom";
import { SiteLayout } from "./components/SiteLayout";
import { ContatoPage } from "./pages/ContatoPage";
import { HomePage } from "./pages/HomePage";
import { LicencasPage } from "./pages/LicencasPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { SobreNosPage } from "./pages/SobreNosPage";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <SiteLayout />,
		children: [
			{ index: true, element: <HomePage /> },
			{ path: "sobre-nos", element: <SobreNosPage /> },
			{ path: "licencas-e-certificados", element: <LicencasPage /> },
			{ path: "contato", element: <ContatoPage /> },
			{ path: "*", element: <NotFoundPage /> }
		]
	}
]);
