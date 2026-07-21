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

export type CertificateItem = {
	title: string;
	label: string;
	description: string;
	file: string;
	icon: string;
};

export const certificateItems: CertificateItem[] = [
	{
		title: "Certificação Kosher",
		label: "Kosher",
		description:
			"Documento de certificação para atendimento a requisitos específicos de produção, fornecimento e controle.",
		file: "/assets/2026071803koshercertification.pdf",
		icon: "/assets/kosher-icon.png"
	},
	{
		title: "Certificação Halal",
		label: "Halal",
		description:
			"Certificado voltado a processos e produtos que seguem os critérios aplicáveis de conformidade Halal.",
		file: "/assets/2026071804halal.pdf",
		icon: "/assets/halal-icon.png"
	}
];

export const contactInfo = {
	title: "Race Química",
	slogan: "Química de alta performance",
	about: "Profissionais com mais de 25 anos de experiência no setor sucroenergético.",
	address:
		"Laura Vieira da Silva Bonbonati N 284 e 274, Sertãozinho, São Paulo, Brasil, 14.161-000",
	phone: "(16) 98197-2773",
	whatsapp: "https://wa.me/5516981972773",
	instagram: "https://www.instagram.com/racequimica.ind.br/",
	linkedin: "https://www.linkedin.com/",
	mapEmbedUrl:
		"https://www.google.com/maps?q=Laura%20Vieira%20da%20Silva%20Bonbonati%20284%20Sertaozinho%20SP&output=embed"
};
