import { createBrowserRouter } from "react-router-dom";
import { SiteLayout } from "./components/SiteLayout";
import { ContatoPage } from "./pages/ContatoPage";
import { HomePage } from "./pages/HomePage";
import { ProdutosPage } from "./pages/ProdutosPage";
import { LicencasPage } from "./pages/LicencasPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { SetorPage } from "./pages/SetorPage";
import { SobreNosPage } from "./pages/SobreNosPage";
import { SubLinhaPage } from "./pages/SubLinhaPage";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <SiteLayout />,
		children: [
			{ index: true, element: <HomePage /> },
			{ path: "produtos", element: <ProdutosPage /> },
			{ path: "sobre-nos", element: <SobreNosPage /> },
			{ path: "licencas-e-certificados", element: <LicencasPage /> },
			{ path: "contato", element: <ContatoPage /> },
			{ path: "setor/:key", element: <SetorPage /> },
			{ path: "setor/:key/:subkey", element: <SubLinhaPage /> },
			{ path: "*", element: <NotFoundPage /> }
		]
	}
]);
