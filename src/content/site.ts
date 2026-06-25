export type NavigationItem = {
	label: string;
	to: string;
};

export const navigationItems: NavigationItem[] = [
	{ label: "Home", to: "/" },
	{ label: "Produtos", to: "/produtos" },
	{ label: "Sobre Nós", to: "/sobre-nos" },
	{ label: "Licenças e Certificados", to: "/licencas-e-certificados" },
	{ label: "Contato", to: "/contato" }
];

export const certificateItems = [
	"Licença Ambiental",
	"FISPQ Atualizada",
	"Controle de Transporte",
	"Laudo de Qualidade",
	"Rastreabilidade de Lote",
	"Treinamento NR Aplicado"
];

export const contactInfo = {
	title: "Race Química",
	slogan: "Química de alta performance",
	about: "Profissionais com mais de 25 anos de experiência.",
	address:
		"Laura Vieira da Silva Bonbonati N 284 e 274, Sertãozinho, São Paulo, Brasil, 14.161-000",
	phone: "(16) 98197-2773",
	whatsapp: "https://wa.me/5516981972773",
	instagram: "https://www.instagram.com/racequimica.ind.br/",
	linkedin: "https://www.linkedin.com/",
	mapEmbedUrl:
		"https://www.google.com/maps?q=Laura%20Vieira%20da%20Silva%20Bonbonati%20284%20Sertaozinho%20SP&output=embed"
};
